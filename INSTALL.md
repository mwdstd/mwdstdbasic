# Installation

These are example installation instuctions on AWS EC2 free-tier instance (t2.micro, Amazon Linux 2 AMI).

A detailed AWS installation video: https://mwdstd.com/aws-installation-video-guide/

### WARNING: THE INSTALLATION INSTRUCTIONS DO NOT INCLUDE SETTING UP HTTPS CONNECTION. PLEASE NOTE, WITHOUT THE SECURE CONNECTION, THE TRANSMITTED DATA IS NOT ENCRYPTED AND ITS CONFIDENTIALITY IS NOT GUARANTEED.

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

1. Start the system 

       sudo /usr/local/bin/docker-compose up -d

1. The default user 

       login: super@user
       password: superuser
