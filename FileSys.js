let fs = require("fs");

//***READING A FILE

//callback function for file raed
// const fileRead = (error, file) => {
//     console.log('Error : '+ error)
//     console.log('Data : '+ file)
//     console.log('Read file func called');
// }

//to read a file, we use readFile, take 3 params first is file name, second is encoding or type or format of file, third param is 
//callback function, that is what happens when the file is read
// fs.readFile('Module.js', 'utf8', function(error, file){
//     fileRead(error, file)
// })


//***WRITING A FILE
//to write a file, we use writeFile, take 3 params first is file name, second is content or code of file, third param is 
//callback function, that is what happens when the file is read
//using a code to write another code
//this will repalce the entire content if the file is already existing
// fs.writeFile('Writeenfile.js', "console.log('replaced the content of file')", function(error){
//     //callback function
//     console.log('Data created or replaced');
// })

// to append the data on existing file we use fs.appendFile
// fs.appendFile('Writeenfile.js', "\nconsole.log('appended')", function(error){
//     //callback function
//     console.log('Data appended');
// })

//to delete a file we use file.unlink
// fs.unlink('Writeenfile.js', function(error){
//     console.log('Deleted file!')
// })