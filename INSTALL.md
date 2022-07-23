# Installation

These are example installation instuctions on AWS EC2 free-tier instance (t2.micro, Amazon Linux 2 AMI) 

1. Prepare the system
   1. Create swap file (https://aws.amazon.com/ru/premiumsupport/knowledge-center/ec2-memory-swap-file/)

   1. Install tools

          sudo yum install git
          sudo yum install docker
          sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
          sudo chmod +x /usr/local/bin/docker-compose

   1. Start docker daemon

          sudo systemctl start docker

1. Clone repository 

       git clone https://github.com/mwdstd/mwdstdbasic.git
       cd mwdstdbasic

1. Clone submodules

       git submodule init
       git submodule update

1. Build the system 

       sudo /usr/local/bin/docker-compose build

1. Start the system 

       sudo /usr/local/bin/docker-compose up -d
