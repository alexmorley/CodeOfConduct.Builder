<?php
$dir = 'license_tmp';
if ( !file_exists($dir) ) {
    echo $b;
	$oldmask = umask(0);
	mkdir ($dir, 0775); 
}

$content = $_POST["rightFrame"];
$id = $_POST["id"];
$ext = $_POST["ext"];

$dump_name = "$dir/post.$id.dump";
file_put_contents($dump_name, $content);
chmod($dump_name, 0664);
exec("pandoc -f html -t {$ext} -o {$dir}/your_licence.$id.{$ext} $dump_name");
chmod("$dir/your_licence.$id.$ext", 0664);
?>
