SUBDIRS := ebpf-exporter-docker ebpf-exporter-helm

$(SUBDIRS)::
	$(MAKE) -C $@ $(MAKECMDGOALS)

docs lint release release.dryrun : $(SUBDIRS)
