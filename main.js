var mario_jump, mario_coin, mario_gameover, mario_die, mario_kick;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav")
	mario_coin = loadSound("coin.wav")
	mario_gameover = loadSound("gameover.wav")
	mario_die = loadSound("mariodie.wav")
	mario_kick = loadSound("kick.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);

	video = createCapture(VIDEO)
	video.size(800, 400)
	video.parent("game_console")

	poseNet = ml5.poseNet(video, modelLoaded)
	poseNet.on('pose', gotResult)
}

function draw() {
	game()
}

function modelLoaded(){
	console.log("Model is Loaded")
}

function gotResult(results){
if(results.length>0){
noseX = results[0].pose.nose.x
noseY = results[0].pose.nose.y

}
}
