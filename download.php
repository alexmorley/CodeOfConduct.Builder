<?php
header('Content-disposition: attachment; filename=your_license.docx');
header('Content-type: application/vnd.openxmlformats-officedocument.wordprocessingml.document');
readfile("license_tmp/your_licence.docx");
?>
