#!/usr/bin/env python3 

for iteration in range(5): 
    count = 0 
    while True:
        for letter in "hello, world": 
            count += 1 
        print("Iteration " + str(iteration) + "; count is: " + str(count)) 



for iteration in range(5): 
    count = 0
    while True: 
        for letter in "hello, world":
            count += 1
        print("Iteration " + str(iteration) + "; count is: " + str(count)) 
        break 


count = 0 
phrase = "hello, world"
for iteration in range(5): 
    index = 0
    while index < len(phrase):
        count += 1
        index += 1
    print("Iteration " + str(iteration) + "; count is: " + str(count)) 


count = 0 
phrase = "hello, World"
for iteration in range(5): 
    while True: 
        count += len(phrase)
        break 
    print("Iteration " + str(iteration) + "; count is: " + str(count)) 


count = 0 
phrase = "hello, world"
for iteration in range(5): 
    count += len(phrase)
    print("Iteration " + str(iteration) + "; count is: " + str(count)) 
