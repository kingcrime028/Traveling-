<style>
    body{
        background-color: purple;
        color: white;
        font-size: 30px;
    }
</style>

<?php 

$conn = new mysqli("localhost", "root", "", "suggestion");
$sql='Select * from information';
$retval=mysqli_query($conn,$sql);

if(mysqli_num_rows($retval)>0){
    while($row=mysqli_fetch_assoc($retval)){
        echo"id:{$row['id']}<br>".
        "country:{$row['country']}<br>".
        "ticket cost:{$row['ticket cost']}<br>".
        "best travel time:{$row['best travel time']}<br>".
        "--------------------------------<br>";
    }
}
  ?>
