#!/bin/bash

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

# /proc, a view of the kernel, or better, what the kernel manages, and is a means to interact with it directly.
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
