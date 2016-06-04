# URI template

RFC: https://tools.ietf.org/html/rfc6570

## reserved

ireserved  =  gen-delims / sub-delims
gen-delims =  ":" / "/" / "?" / "#" / "[" / "]" / "@"
sub-delims =  "!" / "$" / "&" / "'" / "(" / ")"
           /  "*" / "+" / "," / ";" / "="
"'"

## fragment identifier

The fragment identifier introduced by a hash mark # is the optional last part of a URL for a document.
