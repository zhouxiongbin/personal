<?php
header("Content-type: text/html; charset=UTF-8");
include_once 'help.php'; 

$code=mysqli_select_db($conn,"cangku");
mysqli_set_charset($conn,"utf8");

if(!$code){
    die("数据失败".mysqli_error($conn));
}
$selStr="SELECT img,h4,p,time,m1,m2,m3  FROM ge";
$result=mysqli_query($conn,$selStr);
if(!$result){
    die("数据库查询失败".mysqli_error($conn));
}
$page=$_GET["page"];
$long=$_GET["longs"];
$nums=mysqli_num_rows($result);//获取总数据
$arry=[];
$pageArry=[];
while($row=mysqli_fetch_assoc($result)){
    $arry[]=$row;  
}
for ($i=$page*$long-$long; $i <$nums &&$i<$page*$long ; $i++) { 
    $pageArry[]=$arry[$i]; 
}
@Response::json($pageArry,$nums);