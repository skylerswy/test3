$("body").scrollspy({ target: '#myScrollspy' });
//通过 JavaScript 调用滚动监听，选取要监听的元素，然后调用 .scrollspy() 函数

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


//---------------混动js方法---------------------------
// var change = document.getElementsByClassName("light");


// // 文档加载渲染完毕后 scrollTop 就确定不变了
// var navs = document.querySelectorAll('.nav-1');
// // 保存起来，这样只用计算一遍，从小到大排序好的
// var navScrollTops = [];
// for(var i = 0; i < navs.length; i++) {
//     navScrollTops.push(navs[i].offsetTop);
// }

// window.onscroll = function(){
//     // 不断变化的 scrollTop
//     var currentScrollTop = document.documentElement.scrollTop||document.body.scrollTop;
//     // 在 navScrollTops 查找比 currentScrollTop 大的第一个数

//     // 比第一个小说明在最上面，还没有到第一个，更改第一个即可
//     if (currentScrollTop < navScrollTops[0]) {
//         change[0].style.color = '#6b7386';
//         // 直接返回
//         return;
//     }

//     // 比最后一个大说明是最下面的
//     if (currentScrollTop > navScrollTops[navScrollTops.length - 1]) {
//         change[change.length - 2].style.color = '#6b7386';
//         change[change.length - 1].style.color = '#FFFFFF';
//         // 直接返回
//         return;
//     }

//     var index = 0;
//     for(var i = 0; i < navScrollTops.length; i++) {
//         if(navScrollTops[i] > currentScrollTop) {
//             // 当前要滚动到分类就是 i - 1
//             index = i - 1;
//             // 找到后立即跳出 for 循环
//             break;
//         }
//     }
//         // 改变第 index 个分类 change
//     for(var i = 0; i < change.length; i++) {
//         if(i == index) {
//             change[i].style.color = '#FFFFFF';
//         } else {
//             change[i].style.color = '#6b7386';
//         }
//     }
// }
//---------------混动js方法---------------------------



