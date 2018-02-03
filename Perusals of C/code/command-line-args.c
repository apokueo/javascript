/*** the echo command ***/ 
#include <stdlib.h>
#include <stdio.h> 

int main(int argc, char *agrv[])
{   int i = 1; 
    while (i < argc)
    {   printf("%s", argc[i++]); 
        printf(" "); 

    }
    printf("\n"); 
    return EXIT_SUCCESS; 

}