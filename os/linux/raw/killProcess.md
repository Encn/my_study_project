http://www.thegeekstuff.com/2009/12/4-ways-to-kill-a-process-kill-killall-pkill-xkill/

kill

```
$ kill -TERM pid

$ kill -SIGTERM pid
```

kill by name

```
$ ps -ef | grep firefox

1986 ?      sl     7:22  /usr/lib/firefox/firefox

$ kill -9 1986
```

killall

```
$ killall -9 firefox
```

pkill (based on name)

```
$ pkill sample

$ pkill -l sample

12406 sample-server.p
12425 sample-server.p
12430 sample-garbagec

```


xkill
```
$ xkill
Select the window whose client you wish to kill with button 1....
xkill:  killing creator of resource 0x1200003
```



