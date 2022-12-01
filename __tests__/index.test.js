import nock from 'nock';
import { fileURLToPath } from 'url';
import path from 'path';
import os from 'os';
import fs from 'fs';
import pageLoad from '../src/index.js';

/*
Создать временную директорию в текущей папке, 
извлечь её путь
передать путь директории в функцию
проверить, есть ли в этой директории файл с названием
*/

const pageLoader = pageLoad();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (fpath) => path.join(__dirname, '..', '__fixtures__', fpath);

beforeAll(async () => {

})

beforeEach(async () => {
  await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'));
})

const { URL } = url;
console.log(URL)
const testUrl = new URL('https://ru.hexlet.io/courses');

nock.disableNetConnect();

test('loadPage', async () => {
  nock(/ru\.hexlet\.io/)
    .get(/\/courses/)
    .reply(200, content)
  
  expect(pageLoader(testUrl.href)).toEqual('/var/tmp/ru-hexlet-io-courses.html');
})