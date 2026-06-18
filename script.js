var btn = document.getElementById("open");
var content = document.querySelector(".content");
var cover = document.querySelector(".cover");
var music = document.getElementById("music");
btn.onclick=function(){
    cover.style.display="none";
    content.style.display="block";
    music.play();
}

var target=
new Date("July 11, 2026 01:00:00")
.getTime();
setInterval(function(){
var now=new Date().getTime();
var distance=target-now;
var days=Math.floor(distance/
(1000*60*60*24));
var hours=Math.floor(
(distance%(1000*60*60*24))
/
(1000*60*60)
);
var minutes=Math.floor(
(distance%(1000*60*60))
/
(1000*60)
);
document.getElementById("timer")
.innerHTML=
days+" ថ្ងៃ "
// +hours+" Hours "
// +minutes+" Minutes";
},1000);