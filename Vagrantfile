Vagrant.configure(2) do |config|
  config.vm.box = 'ubuntu/xenial64'

  config.vm.network 'forwarded_port', guest: 9090, host: 9090

  config.vm.provision 'shell', inline: <<-SHELL
    apt-get update -qq

    # Install Docker
    apt-get install -q -y apt-transport-https ca-certificates
    apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
    apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main'
    apt-get update -qq
    apt-get purge lxc-docker
    apt-cache policy docker-engine
    apt-get install -q -y docker-engine
    usermod -a -G docker vagrant

    # Install Docker Compose
    curl -L "https://github.com/docker/compose/releases/download/1.10.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose

    # Print versions
    docker --version
    docker-compose --version
  SHELL
end
