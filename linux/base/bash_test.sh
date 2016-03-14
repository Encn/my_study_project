#!/bin/bash

echo 'test bash calling'

echo the name of the script $0
echo The first argument is $1
echo The second argument is $2
echo The third argument is $3

echo \$ $$ PID of the script
echo \# $# count arguments
echo \? $? last return code
echo \* $* all the argument

# getopts
while getopts ":afz" options;
do
    case $options in
        a)
            echo received -a;;
        f)
            echo received -f;;
        z)
            echo received -z;;
        *)
            echo received other;;
    esac
done


# shift parse all parameters one by one
while (( $# ))
do
    echo You gave me $1
    shift
done
