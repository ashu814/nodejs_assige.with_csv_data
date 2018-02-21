var fs = require('fs');
fs.readFile('ipl.json', 'utf8',function(err,data){
if(err){
  throw err;
}
    var obj = JSON.parse(data);
//var re=obj.filter(word => word.city=="Bangalore" );
var arr=obj.filter(element => element.winner=="Chennai Super Kings");
var arr1=arr.filter(element1 => element1.city=="Abu Dhabi");
console.log(arr1[0].city);
arr1.forEach(function(elem){
  console.log(elem.winner);
});
});
