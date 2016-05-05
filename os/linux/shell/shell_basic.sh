#!/bin/bash

cd `dirname $0`

# the command line interface or shell used on most linux systems is called bash, which stands for Bourne again shell.
# The bash shell incoporates features from sh (the original Bourne shell), csh (the C shell), and ksh (the Korn shell)

# shell expansion: scan command line -> cut it up in arguments -> modifying (may make chages to arguments) -> execute

# command line -> arguments = [cmd, ...] .arguments seperated by white spaces (or tabs), any white space is removed.

echo hello world
echo hello         world
echo 'hello      world'
echo "hello          world"
# -e inlcude special escaped characters recognised by the echo
echo -e "A line with \na new line. with a \t tab"

type cd # check builtin or external
type cat

# builtin version takes priority
which cp ls cd mkdir pwd

# alias unalias
alias ll='ls -lh --color=auto'
alias vim # check
# unalias ll

# set -x set +x
# to see what the shell is doing with command
set -x
ls
set +x

############## control operators

# ;    cmd1 ; cmd2 ; ... cmds will execute sequentially. The next cmd will wait until the prev cmd finished.

echo Hello ; echo World

# &    When a line ends with &, the shell will not wait for the command to finish, You will get your shell prompt back, and the command is executed in background. You will get a message when this command has finished executing in background.
sleep 2
sleep 20 &

# $? store exit code of the previous command
echo hello
echo $?

rm fakkkkkkk
echo $?

# &&    cmd1 && cmd2 && cmd3 ... the next cmd will execute only when the prev one succeeds (zero exit status)
echo first && echo second
fakeecho first && echo second

# ||    cmd1 || cmd2 || cmd3 ... the next one will execute only when the prev on fails
echo first || echo second
fakeecho first || echo second

# # \
echo hello \; world

# end of line backslash
echo hello \
     world

################ shell variables

# $name
echo $SHELL
my_var=100 ; echo $my_var; echo "$my_var" ; echo '$my_var' # only in double quotes, shell will replace variable

set # show a list of env var
my_var2="ok" ; set ; unset my_var2 ; set

# $PS1 $PATH
echo $PATH

# env
env -i # clears env for subshell

# export    export the variable to child shells
my_var3="dddd"
export $my_var3
echo $my_var3

# ${name}   for convention.
my_var4='44444' ; echo ${my_var4}55555

# unbound variables
echo $(echo $fakkkk ; set -u ; echo $fakkkk ; set +u ; echo $fakkkk)

################ shell embedding
# embed shell, spawn new processes contain a fork of the current shell
# `cmd` or $(cmd)  cmd is called embedded shell, this is called nested embedding.
echo $(my_var5=111;echo $my_var5;echo $(ls)); echo $my_var5

echo `ls` # embedded shell use current dir

# shell options
set -C # no color
echo $- # list set options
set +C ; echo $-

# shell history
# !!         repeat last command
# !hint      reeating other command 
# !n         n is a number
# Ctrl-r     search history
# !c:regular
history 10
echo $HISTSIZE  # history size
echo $HISTFILESIZE

# prevent recording a command by using a space prefix

##################### file globbing

# *    match any combination of characters (even none). When no path is given, the shell will use filenames in the current directory
ls ../*
ls ../ba*

# ?    match exactly one character
ls base.??

# [characters]    match any of the characters between [ and the first ]. each pair of the brackets is replaced by exactly one character. Use ! to exclude characters.
ls b[!cs]*

# a-z [A-Z]  0-9 ranges

echo *; echo \* ; echo '*'


#################### IO redirection
# bash shell's basic streams: stdin, stdout, stderr
# > stdout      the bash shell removes the redirection from the command line before argument 0 is executed. Before executing command, file will be cleared.
[ -f ../fixtures/test_stdout.txt ] && rm ../fixtures/test_stdout.txt
echo "I'm ddchen" > ../fixtures/test_stdout.txt
cat ../fixtures/test_stdout.txt

# use noclobber to prevent erasing file
rm ../fixtures/test_stdout.txt
echo "I'm ddchen" > ../fixtures/test_stdout.txt
set -o noclobber
echo "hello, ddchen" > ../fixtures/test_stdout.txt
set +o noclobber

# >| overruling noclobber
rm ../fixtures/test_stdout.txt
echo "I'm ddchen" > ../fixtures/test_stdout.txt
set -o noclobber
echo "hello, ddchen" >| ../fixtures/test_stdout.txt
cat ../fixtures/test_stdout.txt
set +o noclobber

# >> append output to a file
rm ../fixtures/test_stdout.txt
echo "I'm ddchen" > ../fixtures/test_stdout.txt
echo "hello, ddchen" >> ../fixtures/test_stdout.txt
cat ../fixtures/test_stdout.txt

# 2>    redirect error messages. > is a shortcut of 1>
fakkkkkkk 2> /dev/null
echo hello > /dev/null 2> /dev/null
fakkkkkkk > /dev/null 2> /dev/null

# 2>&1 redirect both stdout and stderr
ls > /dev/null 2>&1 # both stdout and stderr

ls 2>&1 > /dev/null # only stdout to /dev/null

rm fakkkkeeeee 2>&1 | grep fakkkkeeeee

# &> put both stdout and stderr in one stream
echo hello &> /dev/null
fakkkkkkkk &> /dev/null

# < stdin < is short for 0<
echo "new things for me" > ../fixtures/test_stdin.txt
cat < ../fixtures/test_stdin.txt

# << here document

# <<< here string. pass strings to a command, command <<< string, like echo string | command, but have one less process running
base64 <<< ddchen
> ../fixtures/test_stdin.txt
cat ../fixtures/test_stdin.txt

################## filters
# cat tee
tee ../fixtures/test_tee.txt <<< ddchen
cat ../fixtures/test_tee.txt
tee ../fixtures/test_tee.txt
cat ../fixtures/test_tee.txt

# grep   filter lines
cat ./base.sh | grep "#########"
grep "##########" ./base.sh

echo -e "hello, ddchen\n or Ddchen" | grep -i ddchen # -i  case insensitive

echo -e "hello,\n ddchen\n or Ddchen" | grep -v ddchen # -v outputs lines not match 

# -A1 -B1 -C1

# cut
cut -d" " -f1 /etc/passwd | tail -4
cut -d: -f1 /etc/passwd | tail -4

# tr  translate characters
echo "hello, world!" | tr 'e' 'E'
echo "hello, world!" | tr 'a-z' 'A-Z'
echo "hello, world!" | tr -d e # delete
echo "hello,     world" | tr -s ' ' # squeeze multiple occurrences of a character to one

# wc    count words lines characters
wc ./base.sh ; wc -l ./base.sh ; wc -w ./base.sh ; wc -c ./base.sh

# comm      compare streams

comm ./base.sh ./shell_basic.sh

# od    show contents of a file in hexadecimal bytes

od -t <<< "hello"
od -b <<< "hello"
od -c <<< "hello"

# sed    stream editor sed, using regular expressions

echo nummm5 | sed 's/5/44/'
echo nummm5 | sed 's/num/aaa/'

################## basic Unix tools
# find
find . -name "*.sh" # will search all subdirs

# -type [f|d] f stands for file, d stands for directory
find ../fixtures -type f -name "test*"
find ../fixtures -type d -name "test*"

find . -name "*.sh" -exec cat {} \;
find . -name "*.sh" -ok cat {} \;

# date
date
date +'%A %d-%m-%y'
date +%s
date -d '1970-01-01 + 2000000000 seconds'

# cal
cal
cal 2 1970

# time     time cmd
time date

# gzip  zcat bzip2 bzcat
[ -f ../fixtures/test_gzip.txt.gz ] && rm ../fixtures/test_gzip.txt.gz
echo "hello ddchen" > ../fixtures/test_gzip.txt
gzip ../fixtures/test_gzip.txt

#################### regular expressions
# BRE: basic regular expressions
# ERE: extended regular expressions
# PRCE: perl regular expressions
# grep -E to use BRE
# grep -G to use BRG
# grep -P to use PRCE
Test_Regular=../fixtures/test_regular.txt

echo -e "Tania hello today\nLaura hashello\nValentina" > $Test_Regular

# match single character or concatenating characters
grep Tan $Test_Regular

# | match one or the other
grep -E 'i|a' $Test_Regular

grep -G 'i\|a' $Test_Regular # in BRG, need to escape |

# * match zero. one or mpre, + match one or more
# $ match the end of string
# ^ match the start of string
# \b stands for a word separator. Use to only find the seached word
grep '\bhello\b' $Test_Regular
grep -w 'hello' $Test_Regular

# replace s/regex/replacement/
echo Sundayuuu | sed 's/u/n/g'

# the slash can replaced by : _ |

# &
echo Sundayuuu | sed 's/u/&&/g'

# group and referencing. use () to group and \n to refer
echo Sunday | sed 's_\(Sun\)_\1n \1y_'

# \s white space
# ? optional occurrence
# {n} n times repeat
# {n, m} between

