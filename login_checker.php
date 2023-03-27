<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="utf-8">
    <title>log in</title>


</head>
<body>


<p><?php



include ('./db_connection.php');


/*if ($conn->connect_error) {
  echo"Connection failed: ";
  }
  else{
  echo "Connected successfully!!!";
      
}
*/

echo"<br>";
 
  
  $email=$_POST['email'];
  $password=$_POST['password'];
   
   
  $sql= "select * from users where email = '$email' and password = '$password' ";
  
    $result = mysqli_query($conn,$sql);
 
    $row = mysqli_fetch_array($result);

  
  if ($username == "" && $password == ""){
  	header('location:index.html');
  	
  	}
  

  if($row['email'] == $email && $row['password'] == $password){

    echo "welcome ".$email." you sucessfully logged in!!";
     
   }
        
        
  else{
    echo "<script>  alert('password is wrong, try again')</script>";
      echo "<script> location.replace('index.html') </script>";
  
  }
  
  
        
   
?></p>



</body>
</html>
