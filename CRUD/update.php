<?php

include("conexion.php");
$con=conectar();

/* Creacion de las variables: Estudiante, Dni, Nombre y Aprellido */

$cod_estudiante=$_POST['cod_estudiante'];
$dni=$_POST['dni'];
$nombres=$_POST['nombres'];
$apellidos=$_POST['apellidos'];

/* Comando que captura los valores de las variables para editarlos  */

$sql="UPDATE alumno SET dni='$dni',nombres='$nombres',apellidos='$apellidos' WHERE cod_estudiante='$cod_estudiante'";
$query=mysqli_query($con,$sql);

/* Una vez hecho el edit. Llevar a index.php */

    if($query){
        Header("Location: index.php");
    }
?>