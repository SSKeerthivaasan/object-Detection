Status=""
img=""
object=[];
function preload(){
img=loadImage('dog_cat.jpg');
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoded);
document.getElementById("status").innerHTML="status:detecting Object";
}
function draw(){
image(img,0,0,640,420);
if(Status !=""){
    for(i=0;i<object.length;i++){
        document.getElementById("status").innerHTML="status:objectdetected";
        fill("#fc1238");
        percent=floor(object[i].confidence*100);
        text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
        noFill();
        stroke("#fc1238");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
}
}
function modelLoded(){
    console.log("model loded");
    Status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
object=results;
}