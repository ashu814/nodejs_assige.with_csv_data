var fs = require('fs');
fs.readFile('ipl.json', 'utf8',function(err,data){
if(err){
  throw err;
}
    var obj = JSON.parse(data);
//var re=obj.filter(word => word.city=="Bangalore" );
var arr=obj.filter(element => element.winner=="Chenai Super Kings");
var arr1=obj.filter(element => element.city=="Abu Dhabi");
console.log("Abu Dhabi");
arr1.forEach(function(elem) {
  if(elem[i]==elem){
  }
  else
   console.log(elem.winner);
 });
  });
