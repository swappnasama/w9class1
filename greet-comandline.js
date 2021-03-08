
const arguments= process.argv.slice(2);
const name = arguments[0];
const lang=arguments[1];

function greet(name, lang) {

  if (lang === 'en') {
    console.log(`Hello, ${name}!`);
  } else if (lang === "es") {
    console.log(`Hola, ${name}!`);
  } else if (lang === "fr") {
    console.log(`Bonjour, ${name}!`);
  } else if (lang === "ch") {
    console.log(`Nihao, ${name}!`);
  } else {
    console.log('language not defined.');
  }
}

greet(name,lang);

const fs = require("fs");

const path = "./files/greet-log.txt";
let content=arguments.join(',');
fs.access(path, fs.F_OK, function(err) {
  if (err) {
    fs.writeFile(path, content, function(err,data){
      if (err) {
        console.error(err)
        return
      }
      console.log('Log file writen sucessfully');
      //file written successfully
    })
  } else {
    
      fs.appendFile(path, content, function(err) {
        if (err) {
          console.error(err)
          return
        }
        else{
          console.log("Log file updated successfuly");
        }
      })
  }
})