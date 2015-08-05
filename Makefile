

start:
	./node_modules/.bin/electron .

build:
	./node_modules/.bin/electron-packager . 'Network Interface Menubar' --platform=darwin --arch=x64 --version=0.26.0 --ignore=node_modules/electron
	tar cvzf Network\ Interface\ Menubar.app.tgz Network\ Interface\ Menubar.app

.PHONY: build start
