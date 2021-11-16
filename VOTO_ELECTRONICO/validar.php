<?php
include('db.php');
$correo=$_POST['correo'];
$contrasena=$_POST['contrasena'];
session_start();
$_SESSION['correo']=$correo;


$conexion=mysqli_connect("localhost","Marcos","1234","voto_electronico");

$consulta="SELECT*FROM login where userName='$correo' and password='$contrasena'";
$resultado=mysqli_query($conexion,$consulta);

$filas=mysqli_num_rows($resultado);

if($filas){
  
    header("location:home.php");

}else{
    ?>
    <?php
    include("indextest.html");

  ?>
  <h1 class="bad">ERROR DE AUTENTIFICACION</h1>
  <?php
}
mysqli_free_result($resultado);
mysqli_close($conexion);
