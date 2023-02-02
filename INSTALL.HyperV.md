# Installation on local Hyper-V virtual machine

## 1. Setup Hyper-V and create Ubuntu VM

The comprehensive guide can be found at https://phoenixnap.com/kb/hyper-v-ubuntu. 

Follow the manual utilizing **Quick Create** option in **Step 4**.


## 2. Prepare the system
1. Finish installation wizard and setup default user account (username and password)

1. Press Ctrl-Alt-F3 to switch to text terminal

1. Enter your username and password

1. Install tools. When prompted enter your password to authorize the action

       sudo apt install docker.io docker-compose

## 3. Install mwdstdbasic
1. Clone repository 

       git clone https://github.com/mwdstd/mwdstdbasic.git
       cd mwdstdbasic

1. Start the system 

       sudo docker-compose up -d

## 4. Connect to mwdstdbasic

1. On the **Guest**(virtual) machine execute

       ip address show dev eth0

The outut will be something like

       2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
           link/ether 00:15:5d:01:23:00 brd ff:ff:ff:ff:ff:ff
           inet 192.168.1.41/24 brd 192.168.1.255 scope global dynamic noprefixroute eth0
              valid_lft 3069sec preferred_lft 3069sec
           inet6 fe80::ab96:1d21:871b:64e6/64 scope link noprefixroute
              valid_lft forever preferred_lft forever

192.168.1.41 in this case is the IP address of virtual machine.

2. On your **Host**(real) machine enter the virtual machine's IP in the address bar of web-browser

3. The default user 

       login: super@user
       password: superuser
       
# Update

1. Stop the system

       sudo docker-compose down

1. Update components

       sudo docker pull mwdstd/mwdstdb
       sudo docker pull mwdstd/mwdstdui
       sudo docker pull mwdstd/mwdstdcore

1. Start the system 

       sudo docker-compose up -d

1. (Optional) Remove old docker images

       sudo docker image prune -f
