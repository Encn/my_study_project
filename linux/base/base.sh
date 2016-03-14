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
rm -i ../fixtures/test_rm2.txt
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

#####################################
# FHS filesystem hierarchy standard
#####################################
echo "[FHS]"
man hier
ls / # root /

########## binaries directory
# /bin /home/[user]/bin, /sbin
# according to the FHS, the /bin should contain /bin/cat and /bin/date
ls /bin # using by all users

# /sbin, contains binaries to configure the operating system. (system binaries)
ls /sbin

# /lib, binaries found in /bin and others often use shared libraries located in /lib
#/lib/modules, typically, the Linux kernel loads kernel modules from /lib/modules/$kernel-version
#/lib32 and /lib64
# ELF (Executable and Linkable Format)
ls /lib

# /opt, the purpose of /opt is to store optional software
# A large package can install all its files in /bin, /lib, /etc, /opt/$packageName
ls /opt

########## configuration directories
# /boot, contains all files needed to boot the computer.
# /etc, machine-specific configuration files. (etcetera, Editable Text Configuration).
# /etc/init.d start or stop daemons
# /etc/x11 graphicla display
# /etc/skel skeleton directory. copied to the home directory of a newly created user. It usually contains hidden files like a .bashrc script
# /etc/sysconfig not mentioned in FHS
ls /etc/*.conf

######### data directory

# /home, eg: /home/$USERNAME
ls /home
ls -d ~/.*

# /root, on many systems /root is the default location for personal data and profile of the root user.

# /srv served by your system. The FHS allows locating cvs, rsync, ftp and www data in this location. On Sun Solaris (or Oracle Solaris) /export is used for this purpose.

# /media mount point for removable media devices such as CD_ROM's, digital camerals

# /mnt should only be used for temporary mount points (accroding to FHS)

# /tmp store temporary data. Data stored in /tmp may use either disk space or RAM. Nerver use /tmp to store data that is important or which you wish to archive.

########### in memory directories

# /dev (devices) are not actually located on the hard disk. The /dev directory is populated with files as the kernel is recognising hardware.

ls /dev
ls /dev/tty # represents a terminal or console attached to the system.
ls /dev/pts # when represents a terminal that is part of a graphical interface like Gnome
ls /dev/null # a black hole. It has unlimited storage, but nothing can be retrieved from it. So it can be used to discard unwanted output from commands.(anything written to it will be discard)

# /proc, a view of the kerel, or better, what the kernel manages, and is a means to interact with it directly.
# not taking up disk space
ls /proc

############ /usr  Unix System Resources
# /usr hierarchy should contain shareable, read only data.
ls /usr
ls /usr/bin
ls /usr/include
ls /usr/lib # contains libs that are not directly executed by users or scripts
ls /usr/local # can used by an admin to install software locally
ls /usr/share
ls /usr/src # recommended location for kernel source files

############# /var
# Files that are unpredictable in size, such as log , cache and spool files. should be located in /var
ls /var
ls /var/log
ls /var/lib # contains application state information
