<?php
// Include the library
include('external_code/simple_html_dom.php');
 
// Retrieve the DOM from a given URL
htmlParse('kaffeinfo.php');
htmlParse('kaffenorge.php');
htmlParse('tilbredning.php');
htmlParse('kaffehelse.php');
htmlParse('funfacts.php');
function htmlParse($filename) {
$html = file_get_html('pages/'.$filename);

// Find all "A" tags and print their HREFs
foreach($html->find('h1,h2,h3,h4,h5,h6') as $e) 
    echo $e->outertext;
echo "<hr/>";
}
// Extract all text from a given cell
//echo $html->find('td[align="center"]', 1)->plaintext.'<br><hr>';
?>