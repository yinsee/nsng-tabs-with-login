<?php
// $usage =
// "make <base-size> <files>
// - base-size     size in pixels (eg: 24)
// - files         files to resize and create asset

// ";

// usage: make <base-size> <files>
// resize images to 1x, 2x, 3x
// create Contents.json

// error_reporting(E_ERROR);
// mkdir("output");
// file_put_contents("output/Contents.json", json_encode(["info"=>["version"=>1, "author"=>"xcode"]], true));

$args = $argv;
array_shift($args);
if (is_numeric($args[0])) {
    $basesize = intval(array_shift($args));
} else {
    $basesize = 0;
}

// if (empty($args)) {
//     die("Error: No files to convert.\n\n$usage");
// }
// print("Resizing icons to {$basesize}x{$basesize}...\n");
$sizes = [
    ["ldpi", 0.75, "Android/drawable-ldpi", ""],
    ["mdpi", 1.0, "Android/drawable-mdpi", ""],
    ["hdpi", 1.5, "Android/drawable-hdpi", ""],
    ["xhdpi", 2.0, "Android/drawable-xhdpi", ""],
    ["xxhdpi", 3.0, "Android/drawable-xxhdpi", ""],
    ["xxxhdpi", 4.0, "Android/drawable-xxxhdpi", ""],
    ["1x", 1.0, "iOS", ""],
    ["2x", 2.0, "iOS", "@2x"],
    ["3x", 3.0, "iOS", "@3x"],
];

foreach ($args as $path) {
    foreach ($sizes as $sz) {
        resize($path, $sz[1], $sz[2], $sz[3] ?: "");
    }
}

print "\n\nDone!\n\n";

function resize($path, $scale, $saveto, $suffix)
{
    global $basesize;

    $name = pathinfo($path)['filename'];
    $img = imagecreatefrompng($path);
    $w = imagesx($img);
    $h = imagesy($img);

    if (!$img) {
        print(" not PNG!");
        return;
    }

    if (!is_dir("../App_Resources/{$saveto}")) {
        mkdir("../App_Resources/{$saveto}");
    }
    $outputFile = "../App_Resources/{$saveto}/{$name}{$suffix}.png";
    if ($basesize) {
        $ow = $scale * $w * $basesize / $h;
        $oh = $scale * $basesize;
    } else {
        $ow = $scale / 3 * $w;
        $oh = $scale / 3 * $h;
    }
    print "$path => $outputFile ($ow, $oh)\n";
    $newimg = imagescale($img, $ow, $oh);
    imagesavealpha($newimg, true);
    imagepng($newimg, $outputFile);

    imagedestroy($img);
}
