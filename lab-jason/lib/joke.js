const fs = require('fs');

function tellJoke(filename, cb){
  fs.readFile(`./assets/${filename}`, (err, buff) => {
    if (err) {
      return cb(err);
    }
    cb && cb(null, buff);
  });
}

tellJoke('one.txt',
  () => tellJoke('two.txt',
    () => tellJoke('three.txt', (err) => {
      if (err) throw err;
    })
  )
);
exports.readJoke = function(file1, file2, file3, cb) {
  var datSmash = '';
  tellJoke(file1, (err, data1) => {
    if (err) { return cb(err); }
    datSmash += data1;

    tellJoke(file2, (err, data2) => {
      if (err) { return cb(err); }

      datSmash += data2;

      tellJoke(file1, (err, data1) => {
        if (err) { return cb(err); }
        datSmash += data1;

        cb(err, datSmash.toString('hex', 0, 7));
        console.log(datSmash);
      });
    });
  });
};

exports.tellJoke = tellJoke;
