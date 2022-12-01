import url from 'url';
import axios from 'axios';
import fs from 'fs/promises';
import path from 'path';

function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? '-' : '');
  }
  return propertyName.replace(/[^0-9a-zA-Z_ ]/g, upperToHyphenLower);
}

export default (pageUrl, dirName) => {
  const { URL } = url;
  const myUrl = new URL(pageUrl);
  const { protocol } = myUrl;
  const pathWithoutProtocol = myUrl.href.slice(protocol.length + 2);
  const formattedFilePath = path.join(dirName, `${styleHyphenFormat(pathWithoutProtocol)}.html`);
  axios.get(pageUrl)
    .then((response) => fs.writeFile(formattedFilePath, response.data))
    .catch((error) => console.error(error))
    .then(() => console.log(formattedFilePath));
};
