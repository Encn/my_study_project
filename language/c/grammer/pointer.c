#include <stdio.h>

int main(void) {
    int x = 10;
    int* pi = &x;
    int** ppi = &pi;
    *pi = *pi + 10;
    printf("%d  %d\n", x, **ppi);
    // void type pointer can point to any type
    int a[3] = {1, 2, 3};
    int *pa = a;
    printf("%d\n", *(pa + 1));
}
