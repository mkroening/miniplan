
default:
	kanso ls

deploy: configure test
	kanso push

test:
	mocha

configure:
	kanso install
	kanso update

.PHONY: deploy test configure

