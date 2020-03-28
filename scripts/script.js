
// getting random for first player
var rand1 = getRandomNumber();
var image1Path = getImagePath("images", rand1);

// setting random image to player 1
setImagePath(0, image1Path);

//getting random for second player 2
var rand2 = getRandomNumber();

var image2Path = getImagePath("images", rand2);

// setting random image to player 2
setImagePath(1, image2Path);


// creating a random number between 1-6
function getRandomNumber(){
    return Math.floor(Math.random()*6)+1;
}

// getting full path for image folder
function getImagePath(relativePath, randNumber){
    return relativePath+"/dice"+randNumber+".png";
}

// setting image path into the document
function setImagePath(whichPlayer, imgPath){
    document.querySelectorAll('img')[whichPlayer].setAttribute("src", imgPath);
}

// setting result
function setResult(){
    var result = "";
    if(rand1 > rand2){
        result = "🚩 Player 1 wins !";
    }
    else if(rand1 < rand2){
        result = "Player 2 wins ! 🚩";
    }else{
        result = "Draw!";
    }
    document.querySelector('h1').innerHTML = result;
}