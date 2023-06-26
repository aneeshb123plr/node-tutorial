const path = require('path');
console.log(path.sep);

const pathname = path.join('/foo', '/content', 'subfolder', 'gg', 'test.txt');
console.log(pathname);

const base = path.basename(pathname);
console.log(base);

const absoultePath = path.resolve(
  '/foo',
  '../content',
  'subfolder',
  'test.txt'
);
console.log(absoultePath);
