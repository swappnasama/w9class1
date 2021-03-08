const fs = require('fs')

fs.readFile('./files/text2.txt', 'utf8' ,function(err, data){
  if (err) {
    console.error(err);
    return
  }
  console.log(data);
})
const content = 'changed content'

fs.writeFile('./files/text1.txt', content, function(err,data){
  if (err) {
    console.error(err)
    return
  }
  console.log('file writen sucessfully');
  //file written successfully
})