FROM debian:jessie
MAINTAINER Simon Oulevay (Alpha Hydrae) <docker@alphahydrae.com>

ENV PROMETHEUS_VERSION="1.5.0"
ENV PROMETHEUS_FILENAME="prometheus-${PROMETHEUS_VERSION}.linux-amd64"
ENV PROMETHEUS_DIR="/opt/${PROMETHEUS_FILENAME}"
ENV PROMETHEUS_BIN="${PROMETHEUS_DIR}/prometheus"

RUN mkdir -p /opt
ADD https://github.com/prometheus/prometheus/releases/download/v${PROMETHEUS_VERSION}/${PROMETHEUS_FILENAME}.tar.gz /root
WORKDIR /root
RUN tar -xvzf ${PROMETHEUS_FILENAME}.tar.gz -C /opt

RUN mkdir -p /etc/prometheus
ADD prometheus.yml /etc/prometheus

ADD entrypoint.sh /entrypoint.sh

EXPOSE 9090

ENTRYPOINT [ "/entrypoint.sh" ]
CMD [ "-config.file=/etc/prometheus/prometheus.yml", "-storage.local.memory-chunks=100000"]
