# Installation

These are example installation instuctions on AWS EC2 free-tier instance (t2.micro, Amazon Linux 2 AMI).

A detailed AWS installation video: https://mwdstd.com/aws-installation-video-guide/

### WARNING: THE INSTALLATION INSTRUCTIONS DO NOT INCLUDE SETTING UP HTTPS CONNECTION. PLEASE NOTE, WITHOUT THE SECURE CONNECTION, THE TRANSMITTED DATA IS NOT ENCRYPTED AND ITS CONFIDENTIALITY IS NOT GUARANTEED.
#### Please, keep in mind, the platform uses HTTP server-side events (SSE) to provide update of the Web UI in real-time. When deploying behind a reverse proxy, be sure to disable HTTP buffering to avoid losing update events.

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
       
# Update

1. Stop the system

       sudo /usr/local/bin/docker-compose down

1. Update components

       sudo docker pull mwdstd/mwdstdb
       sudo docker pull mwdstd/mwdstdui
       sudo docker pull mwdstd/mwdstdcore

1. Start the system 

       sudo /usr/local/bin/docker-compose up -d

1. (Optional) Remove old docker images

       sudo docker image prune -f
