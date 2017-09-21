<?php
header("Content-disposition: attachment; filename=your_license.".$_POST["id"].".".$_POST["ext"]);
header("Content-type: application/vnd.openxmlformats-officedocument.wordprocessingml.document");
$ext = $_POST["ext"];
$id = $_POST["id"];
readfile("license_tmp/your_licence.$id.$ext");
?>
