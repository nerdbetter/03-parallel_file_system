const assert = require('assert');

const sut = require('../lib/joke');

describe('joke', function(){
  describe('#readJoke()', function(){
    it(`should load txt files in following order : <one.txt>, <two.txt>, <three.txt>`, function(done){
      sut.readJoke('one.txt', 'two.txt', 'three.txt', (err, data) =>{
        assert.ifError(err);
        assert.strictEqual(data, '486572652069732061486f77206d616e79204f6e652c2074686579');
        done();
      });
    });
    it ('should call callback with err given bad file 1', function (done) {
      sut.readJoke('zero.txt', 'two.txt', 'three.txt', (err, res) => {
        assert.notStrictEqual(err, null);
        assert.strictEqual(res, undefined);
        done();
      });
    });
    it ('should call callback with err given bad file 2', function (done) {
      sut.readJoke('one.txt', 'zero.txt', 'three.txt', (err, res) => {
        assert.notStrictEqual(err, null);
        assert.strictEqual(res, undefined);
        done();
      });
    });
    it ('should call callback with err given bad file 3', function (done) {
      sut.readJoke('one.txt', 'two.txt', 'zero.txt', (err, res) => {
        assert.notStrictEqual(err, null);
        assert.strictEqual(res, undefined);
        done();
      });
    });
  });
});
