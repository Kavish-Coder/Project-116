noseX=0;
noseY=0;
function preload() {

}

function setup() {
    canvas=createCanvas(300, 300);

    canvas.center();

    video=createCapture(VIDEO);

    video.size(400, 400);

    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);

    tint_color = "";
}

function modelLoaded() {
    console.log("posenet is inixalised");
}

function draw() {
image(video, 0, 0, 300, 300);
image(video, 0, 0, 640, 480);
image(video, 0, 0, 300, 300);
fill(255, 0, 0);
stroke(255, 0, 0);
circle(noseX, noseY, 20);
tint(tint_color);
}

function take_snapshot() {
    save('filter.png');
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        console.log("Nose X= " + results[0].pose.nose.x);
        
        console.log("Nose Y= " + results[0].pose.nose.y);

        
    }
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;  
  }