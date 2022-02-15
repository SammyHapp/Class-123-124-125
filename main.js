noseX= 0;
noseY= 0;
rightwristX= 0;
leftwristX= 0;
difference= 0;
function setup(){
    video= createCapture(VIDEO);
    video.size(550, 400);

    canvas= createCanvas(550, 350);
    canvas.position(560, 150);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded(){
console.log("Pose Net Is Initialized");
}


function draw(){
    background('#18EB87');
    document.getElementById("square_side").innerHTML= "Width and Height of the square will be- " + difference + "px";
    fill('#F29612');
    stroke('#3DCCC7');
    square(noseX, noseY, difference);
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("NoseX= "+noseX + "NoseY= " + noseY);
        leftwristX= results[0].pose.leftWrist.x;
        rightwristX= results[0].pose.rightWrist.x;
        difference= floor(leftwristX - rightwristX);
        console.log("LeftWristX= " + leftwristX + "RightWristX= " + rightwristX + "Difference= " + difference);

    }
}