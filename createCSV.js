
var fs = require('fs');

function(jsonArray, filename){
  let keys = Object.keys(jsonArray[0]);

  fs.writeFile(`${filename}.csv`, keys, function (err) {
    if (err) {
        console.log('Some error occured - file either not saved or corrupted file saved.',JSON.stringify(err));
    } else{
        console.log('It\'s saved!');
    }
  });

  for(let i=0; i<jsonArray.length; i++)
  {       
      if(i===0)
        console.log("jsonArray[i]",Object.values(jsonArray[i]))

        fs.appendFile(`${filename}.csv`, "\n" + Object.values(jsonArray[i]), 'utf8', function (err) {
          if (err) {
              console.log('Some error occured - file either not saved or corrupted file saved.',JSON.stringify(err));
          } else{
              console.log('It\'s saved!');
          }
      }); 
  }
}
