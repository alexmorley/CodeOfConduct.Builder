<?php
header("Content-disposition: attachment; filename=your_license.".$_POST["ext"]);
header("Content-type: application/vnd.openxmlformats-officedocument.wordprocessingml.document");
$ext = $_POST["ext"];
readfile("license_tmp/your_licence.$ext");
?>
