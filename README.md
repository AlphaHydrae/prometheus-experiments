# Prometheus Experiments

Trying out [Prometheus](https://prometheus.io), an open-source monitoring solution.

## Requirements

* [Vagrant](https://www.vagrantup.com) 1.9+
* A Vagrant-supported virtual machine provider like [VirtualBox](http://virtualbox.org) or [VMWare](http://www.vmware.com).

## Usage

```
vagrant up
vagrant ssh -c 'sudo su -c "cd /vagrant && docker-compose up -d --build"'
```

Visit [http://localhost:3000](http://localhost:3000).
