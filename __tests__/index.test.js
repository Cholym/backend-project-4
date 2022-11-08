import pageLoad from '../src/index.js';

const pageLoader = pageLoad();
const testUrl = 'https://ru.hexlet.io/courses';

test('func', () => {
  expect(pageLoader(testUrl)).toEqual('ru-hexlet-io-courses.html');
})