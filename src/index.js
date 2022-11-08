import url from 'url';

export default (pathname) => {
  const { URL } = url;
  const myUrl = new URL(pathname);
  const protocol = myUrl.protocol;
  const pathWithoutProtocol = myUrl.href.slice(protocol.length);
  const changeSymbols = pathWithoutProtocol
    .split('')
    .map((symbol) => (/^A-Za-z0-9_/.includes(symbol)) ? symbol = '-' : symbol)
    .join('')
    .concat('.', 'html');
  return changeSymbols;
}
