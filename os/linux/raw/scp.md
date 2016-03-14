http://www.vpser.net/manage/scp.html

- 获取远程服务器上的文件

scp -P 2222 root@www.vpser.net:/root/lnmp0.4.tar.gz /home/lnmp0.4.tar.gz

`root@www.vpser.net:/root/lnmp0.4.tar.gz` is remote file

`/home/lnmp0.4.tar.gz` is the local file

- 获取远程服务器上的目录

scp -P 2222 -r root@www.vpser.net:/root/lnmp0.4/ /home/lnmp0.4/


- 将本地文件上传到服务器上

scp -P 2222 /home/lnmp0.4.tar.gz root@www.vpser.net:/root/lnmp0.4.tar.gz

- 将本地目录上传到服务器上

scp -P 2222 -r /home/lnmp0.4/ root@www.vpser.net:/root/lnmp0.4/
