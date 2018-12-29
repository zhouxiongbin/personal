<?php
	$img=$_POST['img'];
	$h4 = $_POST['h4'];
	$p = $_POST['p'];
	$time = $_POST['time'];
	$m1 = $_POST['m1'];
	$m2 = $_POST['m2'];
	$m3 = $_POST['m3'];
	include_once "help.php";
	$sqlStr1 = <<<sql1
INSERT INTO ge (img,h4,p,time,m1,m2,m3) values ("$img","$h4","$p","$time","$m1","$m2","$m3");
sql1;
$res1 = mysqli_query($conn,$sqlStr1);
if (!$res1){
    echo "插入数据库失败".mysqli_error($conn);
}
echo "插入数据库成功";
// 查询
mysqli_close($conn);