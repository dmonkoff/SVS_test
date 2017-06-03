var http = require('http');
var Vector3 = require('./node_modules/vector-3/vector3.js');
var fs = require("fs");
var args = process.argv.slice(2);
if (args.length == 0)
{
	console.log("No file selected");
	process.exit();
}
fs.readFile(args[0], function (err, data) {
   vectorsArr = [];	
   totalArea = 0;
   if (err) {
      return console.error(err);
   }
   rawDataArr = data.toString().split('\n')
   for (var i=0;i<rawDataArr.length;i++)
   {
	if (rawDataArr[i][0] == 'v')
	{
		tmpArr = rawDataArr[i].split(' ');
		tmpVec = Vector3(parseFloat(tmpArr[2]),parseFloat(tmpArr[3]),parseFloat(tmpArr[4]));
		vectorsArr.push(tmpVec);  
	}
	else if (rawDataArr[i][0] == 'f')
	{
		tmpArr = rawDataArr[i].split(' ');
		vertexVector1 = new Vector3(vectorsArr[parseInt(tmpArr[1])-1]);
		vertexVector2 = new Vector3(vectorsArr[parseInt(tmpArr[2])-1]);
		vertexVector3 = new Vector3(vectorsArr[parseInt(tmpArr[3])-1]);
		vertexVector2.substract(vertexVector1);//edge vectors of polygon are stored in vertexVector2 and vertexVector3 to save up time and memory
		vertexVector3.substract(vertexVector1);
		vertexVector2.cross(vertexVector3);//the area of a triangular polygon is equal to the half length of cross product between it's edge vectors
		totalArea += vertexVector2.length()/2;
		
	}
   }
   console.log(totalArea.toFixed(3));   
});