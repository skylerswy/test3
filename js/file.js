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


// function register() {
//     var oUname = document.getElementById("user1").value;
//     var oUpass = document.getElementById("password1");
//     var oUpassagain = document.getElementById("password2");
//     var oError = document.getElementById("error_box");

//     if (oUname.length == 0) {
//         oError.innerHTML = "账号不能为空"
//         return false;
//     }

//     if (oUname.length != 0) {
//         var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
//         isok= reg.test(oUname );
//         if (!isok) {
//             oError.innerHTML = "邮箱格式不正确，请重新输入！"
//             document.getElementById("user1").focus();
//             // 该方法表示将输入焦点移至对象上
//             return false;
//         }
//     }

//     if (oUpass.value.length > 20 || oUpass.value.length < 6) {
//         oError.innerHTML = "密码请输入6-20位字符"
//         return false;
//     }

//     if (oUpassagain.value.length == 0) {
//         oError.innerHTML = "请输入第二次密码"
//         return false;
//     }

//     if (oUpassagain.value != oUpass.value) {
//         oError.innerHTML = "两次密码不一致，请重新输入"
//         oUpass.value = "";
//         oUpassagain.value = "";
//         return false;
//     }
//     window.alert("注册成功")
//     $("#myModal-register").modal('hide');
// }

$(".search-button").click(function() {
    var val = $(".search").val(); // 获取搜索词
    if (val.length > 0) {
        console.log(val);
        $(".nav-1").hide(); 
        $(".nav-1:contains(" + val + ")").show(); 
    } else {
        alert("输入为空");
    }
});
   
//---------------------ajsx-------------------------
var xmlHttp;
function checkIt(){
    var account=document.getElementById("user1").value;
    //console.log(account);
    //获取注册帐号
    xmlHttp = new XMLHttpRequest();
    //创建XMLHttpRequest对象XMLHttpRequest
    //用于在后台与服务器交换数据。
    //这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
    var url = "/auth/register";
    //url：文件在服务器上的位置
    xmlhttp.open("POST",url,true);
    //规定请求的类型、URL 以及是否异步处理请求。
    xmlhttp.setRequestHeader("Content-type","application/json ");
    //如果需要像 HTML 表单那样 POST 数据，
    //请使用 setRequestHeader() 来添加 HTTP 头。
    //然后在 send() 方法中规定您希望发送的数据：
    xmlhttp.send("account");
    xmlHttp.onreadystatechange=function(){
        if (xmlHttp.readyState==4 && xmlHttp.status==200){
            document.getElementById("errorAccount").innerHTML = xmlHttp.responseText;
        }
    }

}



//---------------------ajsx-------------------------

function register(){
    alert(".");
}