var rl = require("readline");
var i = rl.createInterface(process.stdin, process.stdout, null);
i.question('write your query -> : ', function(input) {
  var position = input.indexOf("where");
   var output = input.substring(0, position);
    console.log(output);
  i.close();
  process.stdin.destroy();
});
