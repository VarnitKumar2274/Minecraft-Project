// Create the reference variable of the canvas using fabric.Canvas()
var canvas = new fabric.Canvas('myCanvas');



// Define the starting width and height of the block images
 block_image_width = 30
 block_image_height = 30



// Define the starting x and y coordinates for the player
player_x = 10
player_y = 10


// Define a variable named player_object to store object of the player image
var player_object = "";
var block_image_object ="";


// Add a function named player_update() to add the player image
function player_update(){
    fabric.Image.fromURL("player2.png",function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });

}







// Add a function named new_image() to add the different images as per the specific keys pressed
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });

}


window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode
    console.log(keyPressed)
    if(e.shiftKey && keyPressed == '80'){
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        console.log("current height = " + block_image_height);
        console.log("current width = " + block_image_width);
        document.getElementById("width_span").innerHTML = block_image_width;
        document.getElementById("height_span").innerHTML = block_image_height;
        }
    if(e.shiftKey && keyPressed == '77'){
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        console.log("current height = " + block_image_height);
        console.log("current width = " + block_image_width);
        document.getElementById("width_span").innerHTML = block_image_width;
        document.getElementById("height_span").innerHTML = block_image_height;
            }



if(keyPressed =='37'){
    left()
    console.log("left")

};

if(keyPressed =='38'){
    up()
    console.log("up")

};

if(keyPressed =='39'){
    right()
    console.log("right")

};

if(keyPressed =='40'){
    down()
    console.log("down")

};



if(keyPressed =='66'){
    new_image('brick.jpg');
    console.log("b");

};

if(keyPressed =='83'){
    new_image('stone.jpg');
    console.log("s")

};

if(keyPressed =='68'){
    new_image('dark_green.png');
    console.log("d")

};

if(keyPressed =='76'){
    new_image('light_green.png');
    console.log("l")

};

if(keyPressed =='71'){
    new_image('grass_block.png');
    console.log("g")

};

if(keyPressed =='78'){
    new_image('netherrack.jpg');
    console.log("n")

};

if(keyPressed =='79'){
    new_image('oak_log.jpg');
    console.log("o")

};

if(keyPressed =='85'){
    new_image('glowstone.png');
    console.log("u")

};

if(keyPressed =='89'){
    new_image('yellow_brick_wall.png');
    console.log("y")

};
};

function up(){
    if(player_y >=0){
       player_y = player_y - block_image_height;
       console.log("when up arrow key is pressed then x = " + player_x + " and y = " + player_y);
       canvas.remove(player_object);
       player_update()
    }
};

function down(){
    if(player_y <=600 - 140){
       player_y = player_y + block_image_height;
       console.log("when down arrow key is pressed then x = " + player_x  + " and y = " + player_y);
       canvas.remove(player_object);
       player_update()
    }
}

function left(){
    if(player_x >=0){
       player_x = player_x - block_image_height;
       console.log("when left arrow key is pressed then x = " + player_x + " and y = " + player_y);
       canvas.remove(player_object);
       player_update()
    }
}

function right(){
    if(player_x <= 1000 - 150){
       player_x = player_x + block_image_height;
       console.log("when right arrow key is pressed then x = " + player_x +" and y = " + player_y);
       canvas.remove(player_object);
       player_update()
    }
}



