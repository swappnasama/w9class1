
const arguments= process.argv.slice(2);
let result= 0;
for(i=0;i<arguments.length;i++)
{
  result+=Number(arguments[i]);

}
console.log(result);