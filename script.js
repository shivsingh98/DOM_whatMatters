//var a = document.querySelector("h1");
//console.log(a);
//a.innerHTML = "<h3> Byeee !!! </h3>"
//a.textContent = "Heeeeee!!";

//a.style.color = "yellow";
//a.style.backgroundColor = "#000";

//var b = document.querySelectorAll("h1");

//console.log(b);

//b.forEach(function(e){
  //  console.log(e);
//});

var bulb = document.getElementById("bulb");
var button = document.getElementById("button");
var flag = 1;
button.addEventListener("click", function(){
    if(flag === 1){
        bulb.style.backgroundColor = "yellow";
        button.innerText = "OFF"
        //console.log("clicked");
        flag = 0;
    }else{
         bulb.style.backgroundColor = "transparent";
         button.innerText = "ON"
        //console.log("again clicked");
        flag = 1;
    }

})