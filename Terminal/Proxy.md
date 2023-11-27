# 终端代理配置

## 方式一

> 其中**proxy与unproxy可以修改成你喜欢的名字**

```shell
alias setproxy="export https_proxy=http://127.0.0.1:8888;export http_proxy=http://127.0.0.1:8888;export all_proxy=socks5://127.0.0.1:8889;echo 'open terminal proxy ...';"

alias unsetproxy="unset http_proxy;unset https_proxy;unset all_proxy;echo 'close terminal proxy!';" 

```



## 测试代理

> IP信息查询：https://ipinfo.io/

### 获取本机IP信息

```shell
# 测试终端代理
export IPINFO_TOKEN="e08e19e89af578"
alias testProxy="curl ipinfo.io\?token=$IPINFO_TOKEN ;echo"
```





### 获取公网IP地址

```shell
# 获取公网IP地址
alias IP="curl ip.gs || curl ip.sb || curl icanhazip.com || curl https://ipinfo.io/ip &&;echo || curl https://ipecho.net/plain &&;echo"
```



### 检测终端代理是否成功

```shell
curl -I https://www.google.com
curl -I https://api.telegram.org
```



### 测试域名访问时间

```shell
# myself环境
export MYSELF_HOME="$HOME/myself"
# 测试路径
export TEST_PATH="$MYSELF_HOME/test"
# 测试curl时间
alias curlTime="curl -w \"@$TEST_PATH/curl-format.txt\" -o /dev/null -s"
```

```shell
# curl-format.txt
   time_namelookup:  %{time_namelookup}s\n
      time_connect:  %{time_connect}s\n
   time_appconnect:  %{time_appconnect}s\n
  time_pretransfer:  %{time_pretransfer}s\n
     time_redirect:  %{time_redirect}s\n
time_starttransfer:  %{time_starttransfer}s\n
                   ----------\n
        time_total:  %{time_total}s\n
```

```shell
# 测试指定域名访问时间
curlTime 域名
```

