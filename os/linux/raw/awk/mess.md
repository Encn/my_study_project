### awk program
- to count user
```
awk '{count++;print $0;} END{print "user count is ", count}' /etc/passwd
```

- to count current dir's size
```
ls -l |awk 'BEGIN {size=0;print "[start]size is ", size} {if($5!=4096){size=size+$5;}} END{print "[end]size is ", size/1024/1024,"M"}' 

```

- And, You can use it to analyse log...
For example, to analyse info.2016-04-26
    - to get all render log, and count it 
```
awk 'BEGIN {count=0; print "start count!", count} {if($4==="render"){count = count+1;print $0;}} END{print "[end]count is ", count}' ./os/linux/awk/info.2016-04-26.log

```
    - to display log with pid = 7480 
```
awk '{if($3=="[7480]"){print $0;}}' ./os/linux/awk/info.2016-04-26.log
```

refer document 
http://www.gnu.org/software/gawk/manual/gawk.html