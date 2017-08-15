const assert = require('assert');

const sut = require('../lib/joke');

describe('joke', function(){
  describe('#tellJoke()', function(){
    it(`should load txt files in following order : <one.txt>, <two.txt>, <three.txt>`, function(done){
      sut.tellJoke('one.txt', 'two.txt', 'three.txt', (err, data) =>{
        assert.ifError(err);
        assert.equal(data, 'one.txt'+'two.txt'+'three.txt');
        done();
      });
    });
    it ('should call callback with err given bad file 1', function (done) {
      sut.tellJoke('zero.txt', 'two.txt', 'three.txt', (err, res) => {
        assert.notStrictEqual(err, null);
        assert.strictEqual(res, undefined);
        done();
      });
    });
    it ('should call callback with err given bad file 2', function (done) {
      sut.tellJoke('one.txt', 'zero.txt', 'three.txt', (err, res) => {
        assert.notStrictEqual(err, null);
        assert.strictEqual(res, undefined);
        done();
      });
    });
    it ('should call callback with err given bad file 3', function (done) {
      sut.tellJoke('one.txt', 'two.txt', 'zero.txt', (err, res) => {
        assert.notStrictEqual(err, null);
        assert.strictEqual(res, undefined);
        done();
      });
    });
  });
});
