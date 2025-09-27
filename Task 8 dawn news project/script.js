function readMore(btn){
    let extraContent = btn.parentElement.querySelector(".extraContent");

    if(extraContent.style.display === "none" || extraContent.style.display === ""){
        extraContent.style.display = "block";
        btn.innerText = "Read Less";
    } else {
        extraContent.style.display = "none";
        btn.innerText = "Read More";
    }
}


function readPara(){
    let para = document.getElementById("para");
    let parabtn = document.getElementById("parabtn");

    if(para.style.display === "none"){
        para.style.display = "block";
        parabtn.innerText = "Read Less";}
    else{
        para.style.display = "none";
        parabtn.innerText = "Read More";}
}

