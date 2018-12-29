<?php
    // 设置编码
header("Content-type: text/html; charset=UTF-8");
	// 服务器地址
	$servername="localhost";
	// 服务器账号
	$username="root";
	// 服务器密码
	$password="";
	// 数据库名字
	$dbname="cangku";
	// 连接数据库
	$conn = mysqli_connect($servername,$username,$password);
	if(!$conn){
	    echo "数据库连接失败！";
	}
	// 选择连接的数据库名
	mysqli_select_db($conn,$dbname);
	
	mysqli_set_charset($conn,"utf8");
	// 构造返回数据的类
	class Response{
		// 声明一个公共静态方法:重组查询到的数据
		public static function json($data=array(),$num){
			$result=array(
			//   // 状态码
			//   'code'=>$code,
			//   // 提示信息
			//   'message'=>$message,
			//   // 查询到的具体数据
			  'data'=>$data, 
			  "num"=>$num
			);
			//输出json
			echo json_encode($result,320);
			exit;
		}
	}
