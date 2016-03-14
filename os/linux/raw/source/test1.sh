#!/bin/bash
TEST1_VAR='hello, defined in test2'

source $(cd `dirname $0`; pwd)/test2.sh

echo $TEST2_VAR
