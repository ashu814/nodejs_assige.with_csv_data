var fs = require('fs');
fs.readFile('ipl.json', 'utf8',function(err,data){
if(err){
  throw err;
}
    var obj = JSON.parse(data);
var arr=obj[0];
for(var key in arr){
  console.log(key +"    "+ typeof(arr[key]));
}
});
