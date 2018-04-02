var sear = document.getElementById("sear");
var dis = document.getElementsByClassName("input-bar");
//console.log(dis[0]);
sear.addEventListener("click",sear_for);
function sear_for() {
   //console.log(sear);
   var st = getComputedStyle(dis[0], null);
   console.log(st);
   var tye = st.getPropertyValue("display");
   //console.log(tye);
   if (tye == "none"){
        //st.getPropertyValue("display")="block";
   }else{
        //st.getPropertyValue("display")="none";
   }
}
   