```
nginx -h
```

default config file:

nginx.conf

/usr/local/nginx/conf, etc/nginx, or usr/local/etc/nginx

```
nginx -s signal

signal = stop || quit || reload || reopen

when you change configuration, reload
```


check configuration file

```
nginx -t
```

手动指定配置文件地址

```
nginx -c {path}
```

nginx -c '/Users/ddchen/Desktop/accumulation/study/back tech/nginx/basic/localStaticDemo/nginx.conf'


default log

/usr/local/var/log/nginx


as proxy config
location / {
   proxy_pass http://127.0.0.1:8080;
}



regular path

~ \.(gif|jpg|png)$


CGI

common gateway interface

fastCGI




