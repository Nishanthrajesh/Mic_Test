
var mictest;

function setup()
{
  createCanvas(600,500)
  mictest = new p5.AudioIn();
  mictest.start();
}

function draw()
{
  background("black");
  var vol = mictest.getLevel();
  console.log(vol);
  ellipse(300,250,vol*1000,vol*950)
}