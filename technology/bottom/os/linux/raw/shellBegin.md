```
#!/bin/sh
```

define function

```
hello () {
    echo $1
    echo $2
}
```

current dir

```
$(cd `dirname $0`;pwd)
```

if then else fi

```
if [ -d ~/test ]; then
    # some code
else
    # some code
fi
```
