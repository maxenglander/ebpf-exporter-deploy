SUBDIRS := charts/ebpf-exporter

$(SUBDIRS)::
	$(MAKE) -C $@ $(MAKECMDGOALS)

.PHONY: release.dryrun
release.dryrun:
	npm ci
	npx semantic-release -d

.PHONY: release
release:
	npm ci
	npx semantic-release --ci=false

docs lint : $(SUBDIRS)
