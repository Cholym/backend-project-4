import nock from 'nock';
import { fileURLToPath } from 'url';
import path from 'path';
import os, { tmpdir } from 'os';
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
const tempFilePath = path.join(os.tmpdir());
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

let tempDirName;
let data;

nock.disableNetConnect();

beforeAll(async () => {
  data = await fsp.readFile(getFixturePath);
})

beforeEach(async () => {
  tempDirName = await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'));
  console.log(tempDirName, 'TEMPDIRNAME')
})

const testUrl = 'https://ru.hexlet.io/courses';
const newFileName = 'ru-hexlet-io-courses.html';

test('loadPage', async () => {
  nock(/ru\.hexlet\.io/)
    .get(/\/courses/)
    .reply(200, data);

  await pageLoader(testUrl, tempFilePath);
  //const expectedData = await fsp.readFile(path.join(tempFilePath, newFileName), 'utf-8');
  //expect(expectedData).toEqual('/var/tmp/ru-hexlet-io-courses.html');
})