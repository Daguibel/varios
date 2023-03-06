<?php
include("conexion.php");
$con=conectar();

/* Creacion de las variables: Estudiante, Dni, Nombre y Aprellido */

$cod_estudiante=$_POST['cod_estudiante'];
$dni=$_POST['dni'];
$nombres=$_POST['nombres'];
$apellidos=$_POST['apellidos'];

/* Comando que captura los valores de las variables  */

$sql="INSERT INTO alumno VALUES('$cod_estudiante','$dni','$nombres','$apellidos')";
$query= mysqli_query($con,$sql);

/* Una vez hecha la conexion. Llevar a index.php */

if($query){
    Header("Location: index.php");
    
}else {    
}
?>