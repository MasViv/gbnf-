video="";

function preload()
{
    video=createCapture('video.mp4');
    video.hide();
}

function setup()
{
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture();
    video.hide();
    video.size(480,380);
}

function draw()
{
    image(video,0,0,480,380);
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Loading...Loading..SKIBIDI SKIBIDI";
    options_value=document.getElementById("options").value
}

function modelLoaded()
{
    console.log("Nope");
    status=true;
}