// Random background color generator
let Colors =["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Pink", "Cyan", "Magenta", "Lime"];

function colorGenerator(){
    let randamColor = Colors[Math.floor(Math.random()* Colors.length)];
    document.body.style.backgroundColor = randamColor;
    document.getElementById("colorDisplay").innerText = randamColor;    
}