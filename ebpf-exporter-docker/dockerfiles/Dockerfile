FROM debian:sid-slim AS downloader

ARG ebpf_exporter_version

RUN apt-get update \
 && apt-get install -y --no-install-recommends --no-install-suggests \
      ca-certificates \
      jq \
      wget

RUN wget https://github.com/cloudflare/ebpf_exporter/releases/download/v${ebpf_exporter_version}/ebpf_exporter-${ebpf_exporter_version}.tar.gz \
 && tar -zvxf ebpf_exporter-${ebpf_exporter_version}.tar.gz \
 && mv ebpf_exporter-${ebpf_exporter_version}/ebpf_exporter /usr/local/bin

FROM debian:sid-slim

RUN apt-get update \
 && apt-get install -y --no-install-recommends --no-install-suggests libbpfcc

COPY --from=downloader /usr/local/bin/ebpf_exporter /usr/local/bin/ebpf_exporter
