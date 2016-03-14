#!/bin/bash

whoami # username

who

who am i

w

id

echo $USER

# su $name  run shell as another user.
# su - $name, will get the target user's environment
# su - or su, use root as default
# visudo

tail /etc/passwd

# TODO
# useradd -m -d /home/tt -c 'tt' tt
# useradd -D
# userdel -r tt

# chsh

grep ^PASS /etc/login.defs

# vipw

# profiles
# system profile
cat /etc/profile

# first find ~/.bash_profile, if not exists,
# find ~/.bash_login, if not find,
# find ~/.profile

# ~/.bash_logout, when exiting bash

########### group
# groupadd $name
tail -5 /etc/group
groups

# usermod -a - G user group
# groupmod -n name1 name2   change group name
# groupdel name     delete group
# vigr
