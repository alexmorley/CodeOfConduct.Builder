<?php
header('Content-disposition: attachment; filename=your_license.docx');
header('Content-type: application/vnd.openxmlformats-officedocument.wordprocessingml.document');
$dir = 'license_tmp';
if ( !file_exists($dir) ) {
    echo $b;
	$oldmask = umask(0);
	mkdir ($dir, 0775); 
}
file_put_contents($dir.'/post.dump', $_POST);
$ext = 'docx';
exec("pandoc -f html -t {$ext} -o {$dir}/your_licence.{$ext} {$dir}/post.dump");
readfile("{$dir}/your_licence.{$ext}")
?>
