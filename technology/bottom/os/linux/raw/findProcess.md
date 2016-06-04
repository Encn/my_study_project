http://www.cyberciti.biz/faq/howto-display-process-pid-under-linux-unix/

##list process by names

`ps aux | grep {process-name}`


* a  Display information about other users' processes as well as your own.  This will skip any processes which do not have a controlling terminal, unless the 'x' option is also specified.
* u  Display the processes belonging to the specified usernames
* x  When displaying processes matched by other options, include processes which do not have a controlling terminal.  This is the opposite of the -X option.  If both -X and -x are specified in the same command, then ps will use the one which was specified last.



##find id

`pgrep {process-name}`