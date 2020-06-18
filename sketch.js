//name spacing = renaming the objects for our ease
//const = cannot be changed in the program
const Engine = Matter.Engine;//creates physics engine
const World= Matter.World;//creates physical world to add objects
const Bodies = Matter.Bodies;//creates physical objects in the world

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    //creates a physics engine and a new worls to be stored
    engine = Engine.create();
    world = engine.world;
    //to make the ground static
    var ground_options ={
        isStatic: true
    }
    //create a rectangle body 
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    //add it to the world
    World.add(world,ground);
    //to make the ball bounce(restitution = bounciness)
    var ball_options = {
        restitution:1.0
    }

    //create a circular body
    ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);
    console.log(ground);
}

function draw(){
    background(0);
    //to update the physics engine regularly - shows gravity
    Engine.update(engine);
    //tells the computer to take x,y cordinates to be the center in the rectangle
    rectMode(CENTER);
    //display the rectangle
    rect(ground.position.x,ground.position.y,400,20);
    //change the ellipse mode to radius to draw the circle
    ellipseMode(RADIUS);
    //to display the radius
    ellipse(ball.position.x,ball.position.y,20,20);
}