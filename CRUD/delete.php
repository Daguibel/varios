<?php

include("conexion.php");
$con=conectar();

/* Codigo que captura el ID de los nobmres cuando se eliminan */

$cod_estudiante=$_GET['id'];

/* Comando SQL para eliminar la variable cod_estudiante */

$sql="DELETE FROM alumno WHERE cod_estudiante='$cod_estudiante'";
$query=mysqli_query($con,$sql);

/* Una vez hecho el proceso. Llevar a index.php */

    if($query){
        Header("Location: index.php");
    }
?>    