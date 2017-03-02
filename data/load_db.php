<?php

$db = new PDO('sqlite:' . realpath(__DIR__) . '/helloworld.db');
$fh = fopen(__DIR__ . '/helloworld.db.sql', 'r');
while ($line = fread($fh, 4096)) {
    $db->exec($line);
}
fclose($fh);