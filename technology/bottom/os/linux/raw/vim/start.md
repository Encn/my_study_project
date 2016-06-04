http://tldp.org/LDP/intro-linux/html/sect_06_02.html

practise one by one

```
n dd

eg: 1 dd
```


```
n dw

eg: 1 dw or dw

to the first letter of word
```

```
x
```


```
:n
```


```
:w
```

```
:wq newfile
```

```
:1,$s/word/anotherword/g
```

```
yy
```

```
np

eg: 1p
```


copy one line: yy -> 1p


```
:recover
```


exercises

```
vimtutor
```

for emacs

```
Ctrl + H -> T
```


move 

```
     ^
     k
<h        l>
     j
     v
```

Editing model

c like ce c$ cw

```

i

a

A

c

o

O

R

```


delete to the end of the line

move the cursor to the end of correct line.

```
d$
```


undo

```
u

U
```


de vs dw

on operations and motions

```
operators motions

eg: dw
d is operator
w is motion
```

Pressing just the motion while Normal mode without an operator will move the cursor as specified.

count
```
count motions

eg: 2w
```


```
operation number motion
```


redo

```
CTRL + R
```

put

```
p
```


replace

```
r + letter

eg: rx
```

goto line

```
CTRL - g

gg

G

2gg

2G
```

search

```
/word

n N

?word
```

match parentheses search

```
%
```

substitute

```

:s/old/new

:s/old/new/g

:%s/old/new/gc

```

execute external command

```

:! cmd

eg: :!ls

```

visual

```

v

```

retrieve

```

:r FileName

:r !ls

```

copy and paste

```

y yw

p

```

set option

```

:set ic

:set noic

:set hls is

:nohlsearch

```

```

CTRL-D

```






