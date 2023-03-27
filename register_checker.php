<?php

include ('./db_connection.php');


$email = $_POST['email'];

$password = $_POST['password'];



 $sql= "insert into users (email,password)
       values('$email','$password');";

      $result = mysqli_query($conn,$sql);

      if(isset($_POST["register"]))
      {
     
      echo "<script>  alert('thank you for registering')</script>";
          echo "<script> location.replace('sign_in.html') </script>";
      }
     
        
      
    

    
      

?>