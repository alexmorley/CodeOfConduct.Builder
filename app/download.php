<?php

$ext = $_POST["ext"];
$id = $_POST["id"];

header("Content-disposition: attachment; filename=your_license.{$id}.{$ext}");
header("Content-type: application/vnd.openxmlformats-officedocument.wordprocessingml.document");

$filename = "license_tmp/your_licence.$id.$ext";

file_put_contents($filename, $_POST['content']);

readfile($filename);
?>
