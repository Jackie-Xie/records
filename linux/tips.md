### Linux 系统产生随机数的6中方法
* 通过系统环境变量（$RANGDOM）实现, 示例代码如下：

    echo $RANDOM

* 通过openssl 

    openssl rand -base64 8

* 通过date获取

    date +%s%N

* 通过/dev/urandom

    head /dev/urandom|cksum

* 通过UUID生成随机数

    cat /proc/sys/kernel/random/uuid

* 使用expect附带的mkpasswd 生成随机数
    
    yum install expect -y

    mkpasswd -l 9 -d 2 -c 3 -C 3 -s 1

