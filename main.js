
RightWristX = 0;
RightWristY = 0;
LeftWristX = 0;
LeftWristY = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500)
    
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Pose Net Is Initialized!!');
}

function draw()
{

}

function preload()
{

}

function gotPoses(results)
{
   if(results.length > 0)
   {
       console.log(results);
       LeftWristX = results[0].poseNet.leftWrist.x;
       RightWristX = results[0].poseNet.rightWrist.x;
       LeftWristY = results[0].poseNet.leftWrist.y;
       RightWristY = results[0].poseNet.rightWrist.y;
       
       difference = floor(LeftWristX - RightWristX)

    
   }
}