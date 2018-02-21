var rl = require("readline");
var i = rl.createInterface(process.stdin, process.stdout, null);
 i.question('', function(input) {
 var str = input;
 var str1 = str.split("from")[1];
 var arr = str1.split(" ");
  console.log(arr[1]);
   i.close();
   process.stdin.destroy();
 });
