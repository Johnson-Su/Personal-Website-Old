#include <stdio.h>
#include <stdlib.h>
#include <string.h>

float funky(int,int);

typedef struct longname{
  int hi;
  struct longname *his;
}shortname;

float funky(int hello, int hellos){
  return hello * hellos;
};
int global=2;

int main (){
  printf("strcmp=%d\n",strcmp("hello"," hello"));
  printf("%f\n",(float)(17/4));
  printf("%f\n",(float)17/(float)4);
  return 0;
}
