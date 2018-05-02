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
// var xmlHttp;
// $(document).ready(function(){
//     function register(){    
//         var account=document.getElementById("user1").value;
//         //console.log(account);
//         //获取注册帐号
//         xmlHttp = new XMLHttpRequest();
//         //创建XMLHttpRequest对象XMLHttpRequest
//         //用于在后台与服务器交换数据。
//         //这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
//         var url = "/auth/register";
//         //url：文件在服务器上的位置
//         xmlhttp.open("POST",url,true);
//         //规定请求的类型、URL 以及是否异步处理请求。
//         xmlhttp.setRequestHeader("Content-type","application/json ");
//         //如果需要像 HTML 表单那样 POST 数据，
//         //请使用 setRequestHeader() 来添加 HTTP 头。
//         //然后在 send() 方法中规定您希望发送的数据：
//         xmlhttp.send("account");
//         xmlHttp.onreadystatechange=function(){
//             if (xmlHttp.readyState==4 && xmlHttp.status==200){
//                 document.getElementById("errorAccount").innerHTML = xmlHttp.responseText;
//             }
//         }
//     }  
// });
//---------------------ajax-------------------------

// 1.ajax()方法是功能最强大最齐全的请求服务器数据的方法
// 2.ajax()能够获取服务器返回的数据
// 3.ajax()能够向服务器发送并传递数值

// 调用的格式：jQuery.ajax([settings])或$.ajax([settings])
// 参数[settings]为发送ajax()请求时的各项参数的配置信息，键值对的形式写入

// var settings = {    
//     "async": true,
//     // 布尔值，表示请求是否异步处理。默认是 true。   
//     "crossDomain": true,    
//     //跨域请求
//     "url": "http://120.77.34.120:8080/auth/login",
//     //规定发送请求的 URL。默认是当前页面。  
//     "method": "POST",    
//     "headers": {        
//         "content-type": "application/json" 
//         //发送数据到服务器时所使用的内容类型。
//         //默认是："application/x-www-form-urlencoded"。
//     },    
//     "processData": false,
//     //布尔值，规定通过请求发送的数据是否转换为查询字符串。默认是 true。    
//     "data": JSON.stringify({ 
//         //data规定要发送到服务器的数据。       
//         "email": "username@domain.com",        
//         "password": "123456"    
//     }) 
// }
    
// $.ajax(settings).done(function(response) {    
//     console.log(response); 
// }).fail(function(error) {    
//     console.log(error); 
// });

//---------------------注册--------------------
// var account=document.getElementById("user1").value;
// $(document).ready(function(){
//     $("#register-ajax").click(function(){
//         var settings = {    
//             "async": true,
//             // 布尔值，表示请求是否异步处理。默认是 true。   
//             "crossDomain": true,    
//             //跨域请求
//             "url": "http://120.77.34.120:8080/auth/register",
//             //规定发送请求的 URL。默认是当前页面。  
//             "method": "POST",    
//             "headers": {        
//                 "content-type": "application/json" 
//                 //发送数据到服务器时所使用的内容类型。
//                 //默认是："application/x-www-form-urlencoded"。
//             },    
//             "processData": false,
//             //布尔值，规定通过请求发送的数据是否转换为查询字符串。默认是 true。    
//             "data": JSON.stringify({ 
//                 //data规定要发送到服务器的数据。       
//                 "email": "username@domain.com",        
//                 "password": "123456",  
//                 "verifyCode": "789012",
//                 "name": "username"       
//             }) 
//         }
//         $.ajax(settings).done(function(response) {    
//             console.log(response); 
//         }).fail(function(error) {    
//             console.log(error); 
//         });



//         // $.post("http://120.77.34.120:8080/auth/register",
//         // {
//         //     "email": "username@domain.com",    
//         //     "password": "123456",    
//         //     "verifyCode": "789012",    
//         //     "name": "username" 
//         // },
//         // function(response){
//         //     console.log(response); 
//         // });
//     });
// });

//------------------------------------------------------------------

// API host
var api_host = 'http://120.77.34.120:8080';
// API 地址
var api_urls = {
    // 获取验证码 API 地址
    get_verify_code: api_host + '/auth/verifyCode',
    //注册地址
    register: api_host + '/auth/register',
    //登录地址
    login: api_host + '/auth/login',
    user: api_host + '/user',
    //用户收藏地址
    add_category: api_host + '/category/add',
    //添加分类
    add_website: api_host + '/website/add'
    //添加网站
};


 // 发起请求的 button
 var request_btn = null;
 // 120 秒间隔
 var countdown_time = 120;
 // 定时器
 var interval = null;
 // 用户收藏
 var user_favorites = null;

// $(function() {});是$(document).ready(function(){ })的简写

$(function() {
    /**
     * 设置 ajax 全局参数
    */
   //jQuery.ajaxSetup()函数用于设置AJAX的全局默认设置。
   //该函数用于更改jQuery中AJAX请求的默认设置选项。之后执行的所有AJAX请求，如果对应的选项参数没有设置，将使用更改后的默认设置。
   //该函数属于全局jQuery对象。


   //------------开始设置-------------
   $.ajaxSetup({
    'async': true,
    // 布尔值，表示请求是否异步处理。默认是 true。   
    'crossDomain': true,
    //跨域请求
    'headers': {
        'content-type': 'application/json'
        //请求头
        //发送数据到服务器时所使用的内容类型。                
        //默认是："application/x-www-form-urlencoded"。
    },
    'processData': false,
    //布尔值，规定通过请求发送的数据是否转换为查询字符串。默认是 true。



    // 常见的一种效果，在用ajax请求时，
    //没有返回前会出现前出现一个转动的loading小图标或者“内容加载中..”，
    //用来告知用户正在请求数据。这个就可以用beforeSend方法来实现。
    'beforeSend': function () {
        console.log('ajax: beforeSend');
        // 如果正在请求，取消
//                if (is_requesting) {
//                    console.log('is_requesting');
//                    return false;
//                } else {
//                    mark_is_requesting();
//                    // 锁定发起请求的 btn
//                    request_btn && disabled_btn(request_btn);
//                }
        request_btn && disabled_btn(request_btn);
    },
    // 请求完成后调用，不管 success 还是 error
    // 规定 AJAX 请求完成时运行的函数。
    'complete': function () {
        console.log('ajax: complete');
        // 重置 is_requesting
//                reset_is_requesting();
        // 解锁发起请求的 btn
        request_btn && enable_btn(request_btn);
        // 重置为 null
        request_btn = null;
    },
    // 请求失败时调用
    'error': function (xhr, textStatus, error) {
        console.log('ajax: error');
        console.log('status: ' + xhr.status);
        console.log('textStatus: ' + textStatus);
        console.log('error: ' + error);
        //XMLHttpRequest 对象的 status 和 statusText 属性
        //保存有服务器返回的 http 状态码，
        //不同的是，status 属性保存的状态码是以数字表示的，
        //而 statusText 属性保存的状态码是以字符串表示的。
        if (xhr.status === 404) {
            error_tip('请求 URL 错误');
        }
        // 如果是 status 是 4xx，显示登录 modal
        else if (xhr.status >= 400 && xhr.status < 500) {
            error_tip('请先登录');
            close_register_modal();
            show_login_modal();
        } else if (xhr.status >= 500) {
            error_tip('抱歉，服务器错误');
        } else {
            error_tip('发生未知错误');
        }
    }
});
//-----------设置结束---------------

// 登录 modal 中的注册按钮
$('#login_modal_register_btn').on('click', function () {
    // 关闭登录 modal
    close_login_modal();
    // 显示注册 modal
    show_register_modal();
});
// 注册 modal 中的登录按钮
$('#register_modal_login_btn').on('click', function () {
    // 关闭注册 modal
    close_register_modal();
    // 显示登录 modal
    show_login_modal();
});

// 登陆 modal
var $login_modal = $('#myModal-logoin');
// 注册 modal
var $register_modal = $('#myModal-register');
// 获取邮箱验证码
var $get_verify_code_btn = $('#get_verify_code_btn');
// 点击获取邮箱验证码按钮事件
$get_verify_code_btn.on('click', on_click_get_verify_code_btn);

// 登录 input
var $login_email = $('input[name="login_email"]');
var $login_password = $('input[name="login_password"]');
var $login_btn = $('#login_btn');
// 点击登录按钮
$login_btn.on('click', on_click_login_btn);
// 注册 input
var $register_email = $('input[name="register_email"]');
var $verify_code = $('input[name="verify_code"]');
var $register_password = $('input[name="register_password"]');
var $register_password2 = $('input[name="register_password2"]');
var $register_btn = $('#register_btn');
// 点击注册按钮
$register_btn.on('click', on_click_register_btn);

// container
var $container = $('#container');
// 显示分类的 div
var $categories = $('#categories');
// 添加分类按钮
var $add_category_btn = $('#add_category_btn');

// 点击添加分类按钮
$add_category_btn.on('click', on_click_add_category_btn);
// 添加分类 modal
var $add_category_modal = $('#add_category_modal');
// 新分类名称
var $category_name = $('input[name="category_name"]');
// 新分类排序
var $category_sort = $('#category_sort');
// 确定添加分类按钮
var $add_category_ok_btn = $('#add_category_ok_btn');
// 点击确定添加分类按钮
$add_category_ok_btn.on('click', on_click_add_category_ok_btn);
// 添加网站按钮
var $add_website_btn = $('#add_website_btn');
// 添加网站 modal
var $add_website_modal = $('#add_website_modal');
// 点击添加网站按钮
$add_website_btn.on('click', on_click_add_website_btn);
// 添加网站确定按钮
var $add_website_ok_btn = $('#add_website_ok_btn');
$add_website_ok_btn.on('click', on_click_add_website_ok_btn);
// 网站字段
var $website_category = $('#website_category');
$website_category.on('change', on_website_category_change);
var $website_name = $('#website_name');
var $website_url = $('#website_url');
var $website_description = $('#website_description');
var $website_sort = $('#website_sort');
// 新网站分类
var website_category_id = -1;


//什么是token
//token的意思是“令牌”，是服务端生成的一串字符串，作为客户端进行请求的一个标识。
//当用户第一次登录后，服务器生成一个token并将此token返回给客户端，
//以后客户端只需带上这个token前来请求数据即可，无需再次带上用户名和密码。
//客户端使用用户名和密码请求登录。服务端收到请求，验证用户名和密码。
//验证成功后，服务端会生成一个token，然后把这个token发送给客户端。
//客户端收到token后把它存储起来，可以放在cookie或者Local Storage（本地存储）里。
//客户端每次向服务端发送请求的时候都需要带上服务端发给的token。服务端收到请求，
//然后去验证客户端请求里面带着token，如果验证成功，就向客户端返回请求的数据。

// 读取 token
var token = get_local_token();
// 如果 token 不为空
if (token) {
    // TODO 显示用户信息
    return get_user_favorite(token);
    return;
}
// 弹出登录 modal
show_login_modal();
// 从 local storage 获取 token
function get_local_token() {
    return localStorage.getItem('token');
}
// 更新 local storage 的 token
function update_local_token(token) {
    // 删除原来的
    localStorage.removeItem('token');
    localStorage.setItem('token', token);
}

// 获取用户收藏
function get_user_favorite(token) {
    // 调用 API
    $.ajax({
        'url': api_urls.user,
        'method': 'GET',
        // 用户认证 token
        'headers': {
            'Authorization': 'Bearer ' + token
        }
    }).done(function (response) {
        console.log(response);
        if (is_success(response)) {
            // 输出收藏
            render_favorite(response.categories);
            return;
        }
        // 失败
        error_tip(get_error_message(response));
    });
}
// 输出用户收藏
function render_favorite(categories) {
    console.log(categories);
    // 保存用户收藏，用于添加分类或是网站时使用
    user_favorites = categories;
    // 分类
    render_categories(categories);
    // 下拉框
    add_categories_to_select(categories);
    add_categories_to_select2(categories);
    // 显示我的收藏
    $container.show();
}
// 输出分类
function render_categories(categories) {
    var li = '';
    for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        li += '<li class="category" data-cid="' + category.id + '">';
        li +=  category.name ;
        // 分类下的网站
        var websites = category.websites;
        // 排序
        websites = websites.sort(function (a, b) {
            return a.sort - b.sort;
        });
        for (var j = 0; j < websites.length; j++) {
            li += '<p><a href="' + websites[j].url + '">' + websites[j].name + '</a></p>';
        }
        li += '</li>';
    }
    $categories.html(li);
}


// 显示登录 modal
function show_login_modal() {
    $login_modal.modal({
        'backdrop': 'static'
    });
}
// 关闭登录 modal
function close_login_modal() {
    $login_modal.modal('hide');
}
// 显示注册 modal
function show_register_modal() {
    $register_modal.modal({
        'backdrop': 'static'
    });
}
// 关闭注册 modal
function close_register_modal() {
    $register_modal.modal('hide');
}
// 错误提示
function error_tip(msg) {
    console.log(msg);
    alert(msg);
}

// 点击获取邮箱验证码时
function on_click_get_verify_code_btn() {
    // 注册邮箱
    var email = get_register_email();
    if (!email) {
        return;
    }
    // 发起请求的 btn
    request_btn = $(this);
    // 调用 API
    $.ajax({
        'url': api_urls.get_verify_code,
        'method': 'POST',
        'data': JSON.stringify({
            email: email
        })
    }).done(function (response) {
        console.log(response);
        if (is_success(response)) {
            // 开始倒计时 120
            verify_code_countdown();
            return;
        }
        // 失败
        error_tip(get_error_message(response));
    });
}
// 获取注册邮箱
function get_register_email() {
    var email = $register_email.val();
    // 去掉前后空格
    email = email.trim();
    // 是否为空
    if (email.length === 0) {
        error_tip('请输入邮箱地址');
        return false;
    }
    if (!is_email(email)) {
        error_tip('邮箱格式错误');
        return false;
    }
    return email;
}

function is_success(data) {
    return data.code === 0;
}
// 获取错误 message
function get_error_message(data) {
    return data.message || '未知错误';
}
// 设置 button 的 disabled => true
function disabled_btn(btn) {
    btn.prop('disabled', true);//禁用
    //prop() 方法设置或返回被选元素的属性和值。
}
// 设置 button 的 disabled => false
function enable_btn(btn) {
    btn.prop('disabled', false);
}
// 发送邮箱验证码 120 秒倒计时
function verify_code_countdown() {
    console.log('verify_code_countdown');
    // 锁定 btn
    disabled_btn($get_verify_code_btn);
    // 开始定时器
    interval = setInterval(function () {
        if (countdown_time < 1) {
            // 解锁 btn
            enable_btn($get_verify_code_btn);
            $get_verify_code_btn.html('获取验证码');
            clearInterval(interval);
            return;
        }
        $get_verify_code_btn.html((countdown_time--) + ' 秒后重发');
    }, 1000);
}
// 点击注册
function on_click_register_btn() {
    // 注册邮箱
    var email = get_register_email();
    if (!email) {
        return;
    }
    // 验证码
    var verify_code = get_verify_code();
    if (!verify_code) {
        return;
    }
    // 密码
    var password = get_register_password();
    if (!password) {
        return;
    }
    // 发起请求的 btn
    request_btn = $(this);
    // 调用 API
    $.ajax({
        'url': api_urls.register,
        'method': 'POST',
        'data': JSON.stringify({
            email: email,
            password: password,
            verifyCode: verify_code
        })
    }).done(function (response) {
        console.log(response);
        if (is_success(response)) {
            // TODO 注册成功
            return;
        }
        // 失败
        error_tip(get_error_message(response));
    });
}
// 获取验证码
function get_verify_code() {
    var verify_code = $verify_code.val();
    // 去掉前后空格
    verify_code = verify_code.trim();
    // 是否为空
    if (verify_code.length === 0) {
        error_tip('请输入验证码');
        return false;
    }
    return verify_code;
}
// 获取注册输入的密码
function get_register_password() {
    var password = $register_password.val();
    password = password.trim();
    // 是否为空
    if (password.length === 0) {
        error_tip('请输入密码');
        return false;
    }
    // 格式是否正确
    var reg = /^[a-zA-Z0-9]{6,20}$/;
    if (!reg.test(password)) {
        error_tip('密码格式错误');
        return false;
    }
    // 两次密码是否一致
    if (password !== $register_password2.val()) {
        error_tip('两次密码不一致');
        return false;
    }
    return password;
}
// 点击登录
function on_click_login_btn() {
    // 邮箱
    var email = get_login_email();
    if (!email) {
        return;
    }
    // 密码
    var password = get_login_password();
    if (!password) {
        return;
    }
    // 发起请求的 btn
    request_btn = $(this);
    // 调用 API
    $.ajax({
        'url': api_urls.login,
        'method': 'POST',
        'data': JSON.stringify({
            email: email,
            password: password
        })
    }).done(function (response) {
        console.log(response);
        if (is_success(response)) {
            // NOTICE 因为 alert 后又延迟，这里先释放掉 is_requesting
//                    reset_is_requesting();
            login_success(response);
            return;
        }
        // 失败
        error_tip(get_error_message(response));
    });
}
// 获取登录邮箱
function get_login_email() {
    var email = $login_email.val();
    // 去掉前后空格
    email = email.trim();
    // 是否为空
    if (email.length === 0) {
        error_tip('请输入邮箱地址');
        return false;
    }
    if (!is_email(email)) {
        error_tip('邮箱格式错误');
        return false;
    }
    return email;
}
// TODO 判断是否是正确的邮箱格式
function is_email(email) {
    console.log(email);
    return true;
}
// 获取登录密码
function get_login_password() {
    var password = $login_password.val();
    password = password.trim();
    // 是否为空
    if (password.length === 0) {
        error_tip('请输入密码');
        return false;
    }
    return password;
}
// 获取服务器返回的 token
function get_response_token(response) {
    if (typeof response.token === 'undefined') {
        console.log('response.token undefined');
        return '';
    }
    return response.token;
}
// 登陆成功
function login_success(response) {
    var token = get_response_token(response);
    if (!token) {
        error_tip('获取 token 失败');
        return;
    }
    // 保存 token 到 local storage
    update_local_token(token);
    // 关闭登录 modal
    close_login_modal();
    // TODO 显示用户信息
    // 获取用户收藏并显示到网页
    get_user_favorite(token);
    
}

// 点击添加分类按钮
function on_click_add_category_btn() {
    show_add_category_modal();
}
// 显示添加分类 modal
function show_add_category_modal() {
    //$add_category_modal.modal('show');
    $add_category_modal.modal({
        'backdrop': 'static'
        //点击背景空白处不被关闭； 
    });
}
// 关闭添加分类 modal
function close_add_category_modal() {
    $add_category_modal.modal('hide');
}
// 点击确定添加分类按钮
function on_click_add_category_ok_btn() {
    // 名称
    var name = get_category_name();
    if (!name) {
        return;
    }
    // 排序
    var after = get_category_sort();
    // 是否是第一位
    var first = false;
    if (after === true) {
        first = true;
        after = -1;
    }
    // // 读取 token
    var token = get_local_token();
    if (!token) {
        error_tip('获取 token 失败');
        return;
    }
    // 发起请求的 btn
    request_btn = $(this);
    // 调用 API
    $.ajax({
        'url': api_urls.add_category,
        'method': 'POST',
        'data': JSON.stringify({
            name: name,
            first: first,
            after: after
        }),
        // 用户认证 token
        'headers': {
            'Authorization': 'Bearer ' + token
        }
    }).done(function (response) {
        console.log(response);
        if (is_success(response)) {
            // 关闭 modal
            close_add_category_modal();
            // 清空掉 category_name
            $category_name.val('');
            // 重新请求一次获取用户收藏：
            // 1、更新 user_favorites
            // 2、显示到页面
            // 3、更新两个 select
            get_user_favorite(token);
            return;
        }
        // 失败
        error_tip(get_error_message(response));
    });
}
// 获取新分类名称
function get_category_name() {
    var name = $category_name.val();
    name = name.trim();
    //trim去掉字符序列左边和右边的空格
    if (name.length === 0) {
        error_tip('请输入分类名称');
        return false;
    }
    // 不能超过 20 个字符
    if (name.length > 20) {
        error_tip('分类名称不能超过 20 个字符');
        return false;
    }
    return name;
}
// 获取新分类排序
function get_category_sort() {
    var sort = $category_sort.val();
    // 解析成 int
    sort = parseInt(sort);
    // 解析失败，当作排在第一位
    if (isNaN(sort)) {
        return true;
    }
    // 是否排在第一位
    if (sort < 0) {
        return true;
    }
    return sort;
}
// 添加分类到 add_category_modal 的下拉选项
function add_categories_to_select(categories) {
    var options = '<option value="-1" selected>排在第一位</option>';
    for (var i = 0; i < categories.length; i++) {
        options += '<option value="' + categories[i].id + '">' + categories[i].name + '</option>';
    }
    $category_sort.html(options);
}
// 添加分类到 add_website_modal
function add_categories_to_select2(categories) {
    var options = '<option value="-1" selected>选择分类</option>';
    for (var i = 0; i < categories.length; i++) {
        options += '<option value="' + categories[i].id + '">' + categories[i].name + '</option>';
    }
    $website_category.html(options);
}
// 点击添加网站按钮
function on_click_add_website_btn() {
    show_add_website_modal();
}
// 显示添加网站 modal
function show_add_website_modal() {
    $add_website_modal.modal({
        'backdrop': 'static'
    });
}
// 关闭添加网站 modal
function close_add_website_modal() {
    $add_website_modal.modal('hide');
}
// 点击添加网站确定按钮
function on_click_add_website_ok_btn() {
    // 分类
    if (website_category_id < 1) {
        error_tip('请选择网站分类');
        return;
    }

    //icon
    var icon = get_website_icon();
    if(!icon) {
        return;
    }

    // 名称
    var name = get_website_name();
    if (!name) {
        return;
    }
    // url
    var url = get_website_url();
    if (!url) {
        return;
    }
    // description
    var description = get_website_description();
    if (!description) {
        return;
    }
    // 排序
    var after = get_website_sort();
    // 是否是第一位
    var first = false;
    if (after === true) {
        first = true;
        after = -1;
    }
    // token
    var token = get_local_token();
    if (!token) {
        error_tip('获取 token 失败');
        return;
    }
    // 发起请求的 btn
    request_btn = $(this);
    // 调用 API
    $.ajax({
        'url': api_urls.add_website,
        'method': 'POST',
        'data': JSON.stringify({
            icon: icon,
            name: name,
            url: url,
            description: description,
            categoryId: website_category_id,
            first: first,
            after: after
        }),
        // 用户认证 token
        'headers': {
            'Authorization': 'Bearer ' + token
        }
    }).done(function (response) {
        console.log(response);
        if (is_success(response)) {
            // 关闭 modal
            close_add_website_modal();
            // 清空 modal 的 input
            $website_icon.val('');
            $website_name.val('');
            $website_url.val('');
            $website_description.val('');
            // 重新请求一次获取用户收藏：
            // 1、更新 user_favorites
            // 2、显示到页面
            // 3、更新两个 select
            get_user_favorite(token);
            return;
        }
        // 失败
        error_tip(get_error_message(response));
    });
}

//新网站icon
var $website_icon = $('#website_icon');
function get_website_icon() {
    var icon = $website_icon.val();
    if (icon.length === 0) {
        error_tip('请输入网站URL');
        return false;
    }
    // 不能超过 255 个字符
    if (icon.length > 255) {
        error_tip('图片URL不能超过 255 个字符');
        return false;
    }
    // TODO 判断是否是有效的 URL
    return url;
}

// 新网站名称
function get_website_name() {
    var name = $website_name.val();
    name = name.trim();
    if (name.length === 0) {
        error_tip('请输入网站名称');
        return false;
    }
    // 不能超过 20 个字符
    if (name.length > 20) {
        error_tip('网站名称不能超过 20 个字符');
        return false;
    }
    return name;
}
// 新网站 URL
function get_website_url() {
    var url = $website_url.val();
    url = url.trim();
    if (url.length === 0) {
        error_tip('请输入网站URL');
        return false;
    }
    // 不能超过 255 个字符
    if (url.length > 255) {
        error_tip('网站URL不能超过 255 个字符');
        return false;
    }
    // TODO 判断是否是有效的 URL
    return url;
}
// 新网站简介
function get_website_description() {
    var description = $website_description.val();
    description = description.trim();
    if (description.length === 0) {
        error_tip('请输入网站简介');
        return false;
    }
    // 不能超过 100 个字符
    if (description.length > 100) {
        error_tip('网站简介不能超过 100 个字符');
        return false;
    }
    return description;
}
// 网站排序
function get_website_sort() {
    var sort = $website_sort.val();
    // 解析成 int
    sort = parseInt(sort);
    // 解析失败，当作排在第一位
    if (isNaN(sort)) {
        return true;
    }
    // 是否排在第一位
    if (sort < 0) {
        return true;
    }
    return sort;
}
// 当网站分类改变时
function on_website_category_change() {
    var id = $website_category.val();
    id = parseInt(id);
    if (!isNaN(id)) {
        website_category_id = id;
    }
    var category = find_category(id);
    // 重新输出网站排序的 options
    if (category) {
        render_category_websites(category.websites);
    }
}
// 查找 category
function find_category(id) {
    for (var i = 0; i < user_favorites.length; i++) {
        if (user_favorites[i].id === id) {
            return user_favorites[i];
        }
    }
    return false;
}
// 输出分类下的网站到 select
function render_category_websites(websites) {
    // 排序
    websites = websites.sort(function (a, b) {
        return a.sort - b.sort;
    });
    var options = '<option value="-1" selected>排在第一位</option>';
    for (var i = 0; i < websites.length; i++) {
        options += '<option value="' + websites[i].id + '">' + websites[i].name + '</option>';
    }
    $website_sort.html(options);
}
});

