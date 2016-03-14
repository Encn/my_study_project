#!/bin/bash
basepath=$(cd `dirname $0`;pwd)

cd $basepath

echo $basepath

# list user accounts
cut -d: -f1 /etc/passwd | column

test_file=../fixtures/test_file

echo "hello" > $test_file

# see user owner and group owner
ls -lh $test_file 

# change group
chgrp staff $test_file

# change owner
chown yuer $test_file

# when you ls -l, the first character tells us the type of file
# list of special files
# -        normal file
# d        directory
# l        symbolic link
# p        named pipe
# b        block device
# c        character device
# s        socket

# the nine characters following the file type denote the permissions in three triplets.
# permission   on a file   on a directory
# r            read        read
# w            change      create files
# x            exe         enter
# 2-4 is permissions for the user owner
# 5-7 is permissions for the group owner
# 8-10 is permissions for others

# chmod     set permission
chmod u+x $test_file # user add x
chmod g-r $test_file # group del r
chmod u-x $test_file
chmod g+r $test_file
chmod o-r $test_file # for other
chmod o+r $test_file
chmod a+r $test_file # for all
chmod u=rw,g=rw $test_file

umask

# mkdir -m 777 dir
[ ! -d ../fixtures/test_mod ] && mkdir -m 777 ../fixtures/test_mod 
chmod +t ../fixtures/test_mod # stricky bit, prevent users from removing files that they do not own as a user owner.

# cp -p     preserve permissions and time stamps
cp -p $test_file ../fixtures/test_file2

# TODO setgit setuid
chown yuer:staff ../fixtures/test_mod
