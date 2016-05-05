#!/bin/bash
basepath=$(cd `dirname $0`; pwd)

###############################
#  path
###############################
# cd & pwd
echo "[cd & pwd]--------------------------"
cd ~ && pwd
cd /etc && pwd
cd - && pwd
cd .. && pwd
cd . && pwd

cd $basepath

echo "[ls]--------------------------"
# ls command
ls

# show files include hidden files
# when a file name on a Linux file system starts with a dot, it is considered as a hidden file
ls -a

# list a long list
ls -l

# show file sizes in a more human readable format
ls -hl

###############################
#  directory
###############################

# mkdir
echo "[mkdir]--------------------------"
cd $basepath && cd ../fixtures
rm -r test_mkdir
mkdir test_mkdir && ls .

rm -r test_mkdir2
mkdir -p test_mkdir2/test && ls test_mkdir2
cd $basepath

# rmdir rmdir -p
# when a directory is not empty, use rmdir to remove the directory
echo "[rmdir]-------------------------"
cd ../fixtures
mkdir test_rmdir
rmdir test_rmdir
ls .

mkdir -p test_rmdir2/test
rmdir -p test_rmdir2/test

ls .

cd $basepath

###############################
#  files
###############################

# Files on Linux are case sensitive
# every thing is file, a directory is a special file
echo "[file]--------------------------"
file ./base.sh
file -s ./base.sh

# touch
echo "[touch]-------------------------"
rm ../fixtures/test_touch.txt ../fixtures/test_touch2.txt

touch ../fixtures/test_touch.txt
touch -t 200505050000 ../fixtures/test_touch2.txt
ls -l ../fixtures

# remove forever
echo "[rm]-----------------------------"
touch ../fixtures/test_rm.txt
touch ../fixtures/test_rm2.txt
mkdir ../fixtures/test_rm3
rm ../fixtures/test_rm.txt
rm -i ../fixtures/test_rm2.txt # prompt before every removal
rm -rf ../fixtures/test_rm3
ls ../fixtures

# TODO specify
# cp cp -i cp -r
# cp file1 file2 file3 dir
# mv mv -i

# rename

###############################
# file content
###############################

# head, by default display the first ten lines of a file
echo "[head]---------------------------"
head ./base.sh

# assign line numbers
head -5 ./base.sh

# assign bytes
head -c14 ./base.sh

# tail, by default display the last ten lines of a file
echo "[tail]---------------------------"
tail ./base.sh
tail -3 ./base.sh

# cat
cd $basepath
cd ../fixtures
echo "[cat]---------------------------"
# use > can create file
echo one > test_cat
echo two > test_cat2
echo three > test_cat3
cat test_cat
cat test_cat test_cat2 test_cat3
cat test_cat test_cat2 test_cat3 >> test_cat4

cat test_cat4
echo "write file content via cat, press ctrl-d to send EOF (end of file)"
cat > test_cat5
cat test_cat5
echo "chose an end maker for writing file via cat. Here using stop"
# cat > test_cat6 <<stop

cd $basepath

# more and less to read file page by page
# press space to jump to next page, press q to quit

# more file
# less file

# strings, display readable ascii strings found in (binary) files.

strings /usr/bin/who
