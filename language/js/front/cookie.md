https://www.nczonline.net/blog/2009/05/05/http-cookies-explained/
http://blog.csdn.net/lijing198997/article/details/9378047

Lou Montulli,那时是网景通讯的一个雇员，被认为在1994年将“magic cookies”的概念应用到了web通讯中。他意图解决的是web中的购物车，现在所有购物网站都依赖购物车。他的最早的说明文档提供了一些cookies工作原理的基本信息该文档在RFC2109中被规范化（这是所有浏览器实现cookies的参考依据），并且最终逐步形成了REF2965.Montulli最终也被授予了关于cookies的美国专利。网景浏览器在它的第一个版本中就开始支持cookies，并且当前所有web浏览器都支持cookies。

创建 cookie

```
Set-Cookie:value [ ;expires=date][ ;domain=domain][ ;path=path][ ;secure]
```

date 格式 DD-Mon--YYYY HH:MM:SS GMT

js 操作 cookie

```
document.cookie="name=Nicholas;domain=nczonline.net;path=/";
```

