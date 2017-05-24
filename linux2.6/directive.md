
###1

awk -F ":" '{print $3}' /etc/passwd

awk -F ":" 'NR==3 {print $3}' /etc/passwd

ifconfig | awk -F "[ :]+" 'NR==2{print $4" "$6" "$8}'