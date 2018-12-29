<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/31
 * Time: 7:44
 */
include_once "help.php";
mysqli_select_db($conn,"ge");
$page = $_POST["P"];
$pageSize = 8;
echo "$pageSize";
$total_sql="SELECT COUNT(*)FROM ge";
$total_result=mysqli_fetch_array(mysqli_query($conn,$total_sql));
$total=$total_result[0];
$total_pages=ceil($total/$pageSize);
//编写sql获取分页数据 SELECT * FROM 表名 LIMIT 起始位置，显示条数
$sql="SELECT * FROM ge order by id ASC LIMIT ".($page-1)*$pageSize.",{$pageSize}";
$result1=mysqli_query($conn,$sql);
$arr = array();
// var_dump($sql);
while ($row = mysqli_fetch_array($result1)) {
    $data = array();
    $data['img'] = $row['img'];
    $data['h4'] = $row['h4'];
    $data['p'] = $row['p'];
    $data['time'] = $row['time'];
    $data['m1'] = $row['m1'];
    $data['m2'] = $row['m2'];
    $data['m3'] = $row['m3'];
    array_push($arr,$data);
}
$json = json_encode(array("data"=>$arr));
echo $json;
mysqli_close($conn);