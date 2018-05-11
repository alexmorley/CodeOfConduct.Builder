<?php
$dir = 'license_tmp';
if ( !file_exists($dir) ) {
    echo $b;
	$oldmask = umask(0);
	mkdir ($dir, 0775); 
}
$content = filter_var($_POST["rightFrame"], FILTER_SANITIZE_STRING);
$id = filter_var($_POST["id"], FILTER_SANITIZE_STRING);
$ext = filter_var($_POST["ext"], FILTER_SANITIZE_STRING);
$dump_name = "$dir/post.$id.dump";
file_put_contents($dump_name, $content);
chmod($dump_name, 0664);
exec("pandoc -f html -t {$ext} -o {$dir}/your_licence.$id.{$ext} $dump_name");
chmod("$dir/your_licence.$id.$ext", 0664);
?>
