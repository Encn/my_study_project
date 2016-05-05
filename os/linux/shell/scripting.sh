#!/bin/bash

basepath=$(cd `dirname $0`;pwd)

cd $basepath

# variables
# variables do not survive the end of the script
test_var1=1
echo $test_var1

# source other script
source ./source_test.sh
echo $test_var_src_1

# test []  the test command can test whether something is true or false. when fails return 1 

test 10 -gt 55 ; echo $?
test 10 -lt 55 ; echo $?

test 90 -gt 55 && echo true || echo false
test 10 -gt 55 && echo true || echo false

[ 66 -gt 55 ] && echo 'ok'

# -a -o    and or

[ 66 -gt 55 -a 31 -lt 10 ] && echo 'ok2'
[ 66 -gt 55 -o 31 -lt 10 ] && echo 'ok3'

[ -f ./base.sh ] ; echo $?
[ -f ./fffffff ] ; echo $?

[ -d ../fixtures ] ; echo $?
[ -d ./fffffff ] ; echo $?

[ -z "" ] ; echo $?
[ -z "1" ] ; echo $?

# if then [elif then] else fi
if [ -f ./base.sh ]
then 
    echo 'find file'
elif [ -d ../fixtures ]
then
    echo 'find dir'
else 
    echo 'not find it'
fi

# for loop {from..to}
for i in 1 2 4
do
    echo $i
done

for i in `seq 1 20`
do
    echo $i
done

for i in {1..20}
do
    echo $i
done

for i in `ls`
do
    echo $i
done

# while loop
test_var2=5
while [ $test_var2 -ge 0 ] ;
do
    echo $test_var2;
    let test_var2--;
done

# until loop
let test_var3=3
until [ $test_var3 -le 0 ];
do
    echo $test_var3;
    let test_var3--;
done

bash -x ./bash_test.sh -afzbd # -x makes you can see the commands

echo -n Enter a number;
read number
echo $number

# eval
test_var4="echo ddchen"
eval $test_var4

# (())  allows for evaluation of numerical expressions

(( 42 > 33 )) && echo true || echo false

# let  perfom an ecaluation of arithetic expressions

let x="3 + 4" ; echo $x
let x="0xFF" ; echo $x

echo -n 'your name'; read name;
case $name in 
    "ddchen" | "Ddchen" )
        echo "hello ddchen"
        ;;
    *)
        echo "o"
        ;;
esac

############# function in shell
function sayHi {
    echo "hi, $1"
}

sayHi ddchen
