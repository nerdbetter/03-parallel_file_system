![DV](https://www.deltavcodeschool.com/wp-content/uploads/DeltaV.png) 04: Parallel File Processing
===

## Submission Instructions
  * fork this repository & create a new branch for your work
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Learning Objectives  
  * students will be able to create asynchronous programs using the node.js callback pattern
  * students will be able to read, write, and encode binary data using the Buffer class
  * students will be able to utilize the built-in `fs` module for basic file system I/O operations
  * students will be able to use `done` (provided by mocha.js) for creating asynchronous tests

## Resources  
  * [fs module docs](https://nodejs.org/api/fs.html)

## Requirements  

#### Configuration  
<!-- list of files, configurations, tools, etc that are required -->
* include the following:
  * **README.md** - contains documentation about your lab
  * **.gitignore** - contains a robust `.gitignore` file
  * **.eslintrc** - contains the provided `.eslintrc` file
  * **.eslintignore** - contains the provided `.eslintignore` file
  * **lib/** - contains your modules
  * **test/** - contains your unit tests
  * **assets/** - contains the text files used by the program
  * **index.js** - contains main program file

#### Feature Tasks  
  * for this assignment you will need to read three files and `console.log` the first 8 bytes ***(in hex)*** of each file
  * regardless of file size, all three files should be read and logged in the order `'one.txt'`, `'two.txt'`, `'three.txt'`

#### Testing  
  * create a test that guarantees that the files are logged in the proper order
  * create a test that checks for improper file paths

####  Documentation
  * create a simple description of your project
  * create a simple layer of documentation that describes how to use `done` in mocha callbacks
