var rl = require("readline");
var i = rl.createInterface(process.stdin, process.stdout, null);
i.question('write your query -> : ', function(input) {
  var output = input.split(" ");

  var result = output.filter(
      function (value) {

        if(value=="and"||value=="or")
          {
          return (value);

          }
      }
  );
  console.log(result);
});
