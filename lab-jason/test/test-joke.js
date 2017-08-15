const assert = require('assert');

const sut = require('../lib/joke');

describe('joke', function(){
  describe('#readJoke()', function(){
    it(`should load txt files in following order : <one.txt>, <two.txt>, <three.txt>`, function(done){
      sut.readJoke('one', 'two', 'three', (err, data) =>{
        assert.ifError(err);
        assert.equal(data, 'one'+'two'+'three');
        done();
      });
      console.log('loads in order');
    });
    it ('should call callback with err given bad file 1', function (done) {
      sut.readJoke('two', 'two', 'three', (err, res) => {
        assert.notStrictEqual(err, null);
        assert.strictEqual(res, undefined);

        done();
      });
    });
    it ('should call callback with err given bad file 2', function (done) {
      sut.readJoke('one', 'one', 'three', (err, res) => {
        assert.notStrictEqual(err, null);
        assert.strictEqual(res, undefined);

        done();
      });
    });
    it ('should call callback with err given bad file 3', function (done) {
      sut.readJoke('one', 'two', 'two', (err, res) => {
        assert.notStrictEqual(err, null);
        assert.strictEqual(res, undefined);

        done();
      });
    });
  });
});
