#!/usr/bin/env bash
/usr/sbin/grafana-server \
  --homepath /usr/share/grafana \
  --config /etc/grafana/grafana.ini \
  cfg:default.paths.data=/var/lib/grafana \
  cfg:default.paths.logs=/var/log/grafana \
  cfg:default.paths.plugins=/var/lib/grafana/plugins \
  "$@"
