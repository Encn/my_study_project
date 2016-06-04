#!/bin/bash
TEST1_VAR='hello, defined in test1'

source $(cd `dirname $0`; pwd)/test2.sh

# different
$(cd `dirname $0`; pwd)/test3.sh

echo "in script test1.sh -----"
echo $TEST2_VAR
echo $TEST3_VAR
