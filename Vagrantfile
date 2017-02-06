Vagrant.configure(2) do |config|
  config.vm.box = 'ubuntu/xenial64'

  config.vm.network 'forwarded_port', guest: 3000, host: 3000
  config.vm.network 'forwarded_port', guest: 9090, host: 9090

  config.vm.provision 'shell', inline: <<-SHELL
    set -e
    apt-get update -qq

    # Install Docker
    apt-get install -q -y apt-transport-https ca-certificates
    apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
    apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main'
    apt-get update -qq
    apt-get purge lxc-docker
    apt-cache policy docker-engine
    apt-get install -q -y docker-engine

    # Install Docker Compose
    curl -L "https://github.com/docker/compose/releases/download/1.10.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose

    # Install jq
    apt-get install -q -y jq

    # Print versions
    docker --version
    docker-compose --version
    jq --version

    # Start containers
    cd /vagrant
    docker-compose up -d
    echo "Waiting for 10 seconds..."
    sleep 10

    # Configure Grafana
    cd /vagrant
    curl -vvvv --user admin:admin -X POST -H 'Content-Type: application/json' --data @config/dataSource.json http://localhost:3000/api/datasources
    curl -vvvv --user admin:admin -X POST -H 'Content-Type: application/json' --data @config/dashboard.json http://localhost:3000/api/dashboards/db
    export DASHBOARD_ID=$(curl --user admin:admin http://localhost:3000/api/dashboards/db/sample-dashboard 2>/dev/null|jq .dashboard.id)
    echo "{\\"homeDashboardId\\":${DASHBOARD_ID}}" | curl -s --show-error --user admin:admin -X PUT -H 'Content-Type: application/json' --data @- http://localhost:3000/api/user/preferences
  SHELL
end
