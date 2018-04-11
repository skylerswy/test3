var sear = document.getElementById("sear");
var find = document.getElementById("sousuo");
//console.log(find);
//var dis = document.getElementsByClassName("input-bar");
//console.log(dis[0]);
sear.addEventListener("click",sear_for);
function sear_for() {
    //console.log(sear);
    var st = getComputedStyle(find, null);
    console.log(st);
    var tye = st.getPropertyValue("display");
    //console.log(tye);
    if (tye == "none"){
        find.style.display='block';
        //st.getPropertyValue("display")="block";
    }else{
        find.style.display='none';
        //st.getPropertyValue("display")="none";
    }
}
   
// var light1 = document.getElementById("light1");
// var light2 = document.getElementById("light2");
// var light3 = document.getElementById("light3");
// var light4 = document.getElementById("light4");
// var div1 = document.getElementById("f1").offsetTop;
// var div2 = document.getElementById("f2").offsetTop;
// var div3 = document.getElementById("f3").offsetTop;
// var div4 = document.getElementById("f4").offsetTop;
// window.onscroll = function(){ 
//     var t =document.documentElement.scrollTop||document.body.scrollTop;
//     var distance1 = div1-t;
//     var distance2 = div2-t;
//     var distance3 = div3-t;
//     var distance4 = div4-t;
//     if(distance1 < 50){
//         light1.style.color='#FFFFFF';
//         light2.style.color='#6b7386';
//         light3.style.color='#6b7386';
//         light4.style.color='#6b7386';
//     }
//     if(distance2 < 50){
//         light1.style.color='#6b7386';
//         light2.style.color='#FFFFFF';
//         light3.style.color='#6b7386';
//         light4.style.color='#6b7386';
//     }
//     if(distance3 < 50){
//         light1.style.color='#6b7386';
//         light3.style.color='#FFFFFF';
//         light2.style.color='#6b7386';
//         light4.style.color='#6b7386';
//     }
//     if(distance4 < 50){
//         light1.style.color='#6b7386';
//         light4.style.color='#FFFFFF';
//         light2.style.color='#6b7386';
//         light3.style.color='#6b7386';
//     }
// }


// function gitid(id){
//     return document.getElementById(id);
// }

var change = document.getElementsByClassName("light");

window.onscroll = function(){ 
    var t =document.documentElement.scrollTop||document.body.scrollTop;
    for (i=0;i<8;i++){
        var num = document.getElementsByClassName("nav-1")[i].offsetTop;
        var distance = num - t;
        if (distance<20){
            change[i].style.color='#FFFFFF';
            change[i].not(this).style.color='#6b7386';
        }
        //var num = div[i].offsetTop;
        // 
        //var distance = num - t;
        //if (distance < 20){
        //    div[i].style.color = '#FFFFFF';
        //}
    }
    

}