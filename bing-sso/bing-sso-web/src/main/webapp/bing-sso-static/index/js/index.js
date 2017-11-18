/**
 * -------------------index js------------------->>>>>
 */



/**
 * 加载layui模块
 */
layui.use(['element','form'], function(){
	//Tab选项卡
    var element = layui.element;
    //form表单
    var form = layui.form;
    //自定义表单验证
    form.verify({
    	username: function(value, item){
		    if(!(new RegExp("^[1][3,4,5,7,8][0-9]{9}$").test(value) || new RegExp("^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$").test(value))){
		      return '用户名格式不正确';
		    }
		},
		password : function(value, item){
			if(!new RegExp("^(?=.{6,12}$)(?![0-9]+$)(?!.*(.).*\1)[0-9a-zA-Z$#@^&_.|]+$").test(value)){
				return '密码格式为6-12位字母、数字、特殊符号组合';
			}
		},
		rePassword : function(value, item){
			var rePassword = value;
			var password = $(".register_form input[name='password']").val();
			if(password != rePassword){
				return '两次密码输入不一致';
			}
		}
	});
}); 

/**
 * 全局变量
 */
var variable = {
	//定时器对象
	timer : 0,
	//定时器计数
	count : 60
}

/**
 * 验证码按钮倒计时
 * @param {Object} ele
 */
function countdown(ele){
	if(variable.count == 1){
		variable.count = 60;
		window.clearInterval(variable.timer);
		ele.val("点击获取验证码");	
		ele.removeClass("layui-btn-disabled");
	}else{
		console.log(variable.count);
		ele.addClass("layui-btn-disabled");
		variable.count --;
		ele.val("重新发送:" + variable.count);				
	}
}

/**
 * 全局事件
 */
var index_event = {
	//获取验证码按钮点击事件
	vCode_click : function(){
		var vCode_btn = $(".vCode_btn");
		vCode_btn.on("click", function(){
			var username = $(".register_form input[name='username']").val();
			if(username == null || username == "" || username == undefined){
				layer.msg("请先填写手机或邮箱", {
					/*icon: 5,
				    skin: 'layer-ext-moon',*/
				    shift: 6
				})
			}else{
				variable.timer = setInterval (function(){
					countdown(vCode_btn);
				}, 1000);
			}
			if(new RegExp("^[1][3,4,5,7,8][0-9]{9}$").test(username)){
				/*variable.count = 1;*/
				layer.msg("phone");
			}
			if(new RegExp("^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$").test(username)){
				layer.msg("email");
			}
		});
	}
}

$(function(){
	index_event.vCode_click();
});