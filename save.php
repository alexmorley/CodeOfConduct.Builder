<?php

echo 'DEBUG: save.php running';

$dir = 'license_tmp';

// create new directory with 744 permissions if it does not exist yet
// owner will be the user/group the PHP script is run under
if ( !file_exists($dir) ) {
    echo $b;
	$oldmask = umask(0);
	mkdir ($dir, 0777); //remember to change this back for production
}

file_put_contents($dir.'/post.dump', $_POST);

$ext = 'docx';

exec("pandoc -f html -t {$ext} -o {$dir}/licence.{$ext} {$dir}/post.dump");

?>
