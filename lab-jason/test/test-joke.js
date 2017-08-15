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
  });
});
