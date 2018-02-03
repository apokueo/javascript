#!/bin/bash
#
file=$(perl -pi.here -e 's/evan/Vincent/g' arbitrary_data.txt)

${file} 
