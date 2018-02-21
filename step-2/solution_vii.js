var rl = require("readline");
var i = rl.createInterface(process.stdin, process.stdout, null);
i.question('', function(input) {
var str = input;
var string = str.split(" ");

var value=string.indexOf("by");

var x=value+1;
console.log(string[x]);  
i.close();
  process.stdin.destroy();
});



