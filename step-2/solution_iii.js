var rl = require("readline");
var i = rl.createInterface(process.stdin, process.stdout, null);
 i.question('', function(input) {
 var str = input;
 var str1 = str.split("where")[1];
  console.log(str1);
   i.close();
   process.stdin.destroy();
 });
