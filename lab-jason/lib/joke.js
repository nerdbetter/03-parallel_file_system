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
    () => tellJoke('three.txt', (err, tellJoke) => {
      if (err) throw err;
      console.log(tellJoke.toString('hex', 0, 7));
    })
  )
);
exports.tellJoke = tellJoke;
