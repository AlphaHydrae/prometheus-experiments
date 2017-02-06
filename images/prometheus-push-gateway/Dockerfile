FROM debian:jessie
MAINTAINER Simon Oulevay (Alpha Hydrae) <docker@alphahydrae.com>

ENV PROMETHEUS_PUSH_GATEWAY_VERSION="0.3.1"
ENV PROMETHEUS_PUSH_GATEWAY_FILENAME="pushgateway-${PROMETHEUS_PUSH_GATEWAY_VERSION}.linux-amd64"
ENV PROMETHEUS_PUSH_GATEWAY_DIR="/opt/${PROMETHEUS_PUSH_GATEWAY_FILENAME}"
ENV PROMETHEUS_PUSH_GATEWAY_BIN="${PROMETHEUS_PUSH_GATEWAY_DIR}/pushgateway"

RUN mkdir -p /opt /var/lib/prometheus-push-gateway
ADD https://github.com/prometheus/pushgateway/releases/download/v${PROMETHEUS_PUSH_GATEWAY_VERSION}/${PROMETHEUS_PUSH_GATEWAY_FILENAME}.tar.gz /root
WORKDIR /root
RUN tar -xvzf ${PROMETHEUS_PUSH_GATEWAY_FILENAME}.tar.gz -C /opt

ADD entrypoint.sh /entrypoint.sh

EXPOSE 9090

ENTRYPOINT [ "/entrypoint.sh" ]
CMD [ "-web.listen-address=0.0.0.0:9091", "-persistence.file=/var/lib/prometheus-push-gateway/prometheus.dat"]
