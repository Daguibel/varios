<?php
    include("conexion.php");
    /*conexcion php*/
    $con=conectar();
    /* retorno del con produccido en conexion*/
    $sql="SELECT * FROM alumno";
    /*llamado de los objetos de la tabla 1 en nuestra base de datos*/
    $query=mysqli_query($con,$sql);


    $row=mysqli_fetch_array($query);
    /*accion de query y redireccion de rwo*/
?>

<!DOCTYPE html>
<html lang="en">

   <!-- Meta datos que sirven para la Localizacion de la Pagina Web y sus Referencias -->

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crud de Registro</title>
    <link href="css/style.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <div class="row">
            <div class="col-md-3 p-4  mb-2 bg-info text-dark">

             <!-- Seccion donde se insertan los datos -->

            <h1>Ingrese datos</h1>
                                <form action="insertar.php" method="POST">

                                    <input type="text" class="form-control mb-4 my-4 " name="cod_estudiante" placeholder="cod estudiante">
                                    <input type="text" class="form-control mb-4 " name="dni" placeholder="Cédula de Ciudadanía">
                                    <input type="text" class="form-control mb-4" name="nombres" placeholder="Nombres">
                                    <input type="text" class="form-control mb-4" name="apellidos" placeholder="Apellidos">
                                    
                                    <input type="submit" class="btn btn-primary">
                                </form>
            </div>
            <div class="col-md-8">
            <table class="table border border-primary border border-4">
                                <thead class="table-success table-striped border ">

                                <!-- Titulo de los campos donde se insertan los datos -->

                                    <tr>
                                        <th >Codigo</th>
                                        <th>CC</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody class="table-info ">

                                 <!-- Seccion donde se guardan los datos ya ingresados -->

                                        <?php
                                            while($row=mysqli_fetch_array($query)){
                                        ?>
                                            <tr class=" border border-primary border-bottom border border-2">
                                                <th><?php  echo $row['cod_estudiante']?></th>
                                                <th><?php  echo $row['dni']?></th>
                                                <th><?php  echo $row['nombres']?></th>
                                                <th><?php  echo $row['apellidos']?></th>    

                                             <!-- Seccion de botones "Editar" y "Eliminar" -->

                                                <th><a href="actualizar.php?id=<?php echo $row['cod_estudiante'] ?>" class="btn btn-info">Editar</a></th>
                                                <th><a href="delete.php?id=<?php echo $row['cod_estudiante'] ?>" class="btn btn-danger">Eliminar</a></th>                                        
                                            </tr>
                                        <?php 
                                            }
                                        ?>
                                </tbody>
                            </table>
            </div>
        </div>
    </div>
</body>
</html>