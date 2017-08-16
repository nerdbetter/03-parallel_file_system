const fs = require('fs');

function tellJoke(filename, cb){
  fs.readFile(`./assets/${filename}`, (err, buff) => {
    if (err) {
      cb(err);
    }
    if(cb) { cb(null, buff.toString('hex').slice(0,9)); }
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
    if (err) { cb(err); }
    if (cb) datSmash += data1;

    tellJoke(file2, (err, data2) => {
      if (err) { cb(err); }

      if (cb) datSmash += data2;

      tellJoke(file3, (err, data3) => {
        if (err) { cb(err); }
        datSmash += data3;
        if (cb) cb(err, datSmash);
      });
      console.log(datSmash);
    });
  });
};
exports.readJoke('one.txt', 'two.txt', 'three.txt');
exports.tellJoke = tellJoke;
