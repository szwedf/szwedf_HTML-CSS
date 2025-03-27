const images_src = ["images/スターズオンアース3.jpg","images/グランアレグリア1.jpg" ,"images/リバティアイランド1.jpg","images/specialweek210518.jpg","images/アーモンドアイ.webp","images/エフフォーリア1.webp","images/キタサンブラック.jpg"];
let num = -1;
 
 
function slideshow_timer(){
 
  num = Math.floor(Math.random()*images_src.length);
 
  document.getElementById("myimages").src = images_src[num];
 
}
 
setInterval(slideshow_timer,1500); 