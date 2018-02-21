var rl = require("readline");
var i = rl.createInterface(process.stdin, process.stdout, null);
 i.question('', function(input) {
 var str = input;
 var str1 = str.replace(/,/g," ");
 var str2 = str1.split("from")[0];
 var arr = str2.split(" ");
 arr.shift();
 arr.forEach(function(elem) {
    console.log(elem);
  });
   i.close();
   process.stdin.destroy();
 });
