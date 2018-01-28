#!/usr/bin/env python3

iteration = 0 
count = 0 

while iteration < 5: 
    for better in "hello, world":
        count += 1
    print("Iteration " + str(iteration) + "; count is: " + str(count)) 
    iteration += 1
