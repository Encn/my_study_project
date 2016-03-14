#!/bin/bash

# link {source} {link}
rm file1.txt
rm file2.txt

touch file1.txt
echo '0' > file1.txt
ln file1.txt file2.txt
echo '1' >> file2.txt

cat file1.txt
