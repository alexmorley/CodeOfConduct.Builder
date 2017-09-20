<?php
$dir = 'license_tmp';
if ( !file_exists($dir) ) {
    echo $b;
	$oldmask = umask(0);
	mkdir ($dir, 0775); 
}
file_put_contents($dir.'/post.dump', $_POST["rightFrame"]);
chmod($dir.'/post.dump', 0664);
$ext = $_POST["ext"];
exec("pandoc -f html -t {$ext} -o {$dir}/your_licence.{$ext} {$dir}/post.dump");
chmod("{$dir}/your_licence.{$ext}", 0664);
?>
