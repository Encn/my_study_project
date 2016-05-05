### find 

 -name 
 -regex
 -o， or
 -type 
 -atime/mtime/ctime，access time, modify time, change time.
 -size
```
find . -name "*.js" 

find . -regex ".*\.pdf$"

find . -name "*.txt" -o -name "*.pdf"

// only display dir
find . -type d 

find . -mtime +1  

//find dir,size > 2k 
find . -type f -size +2k 

//find kino owner file
find . -type f -user kino
```

-delete
-exec (very strong!!)
```
find . -name "*.swp" -delete

//find it then excute some commands in commands.sh
find . -name "*.txt" -exec ./commands.sh {}
```

### grep 
grep match_patten file
-n show line number
-R find recursive
```
grep -n "text" filename

grep "class" . -R -n

// match multiple patterns
grep -e "class" -e "method" file
```

### sort
```
sort -nrk 1 README.md

// delete duplicate rows
sort unsort.txt | uniq 

sort unsort.txt | uniq -c
```
