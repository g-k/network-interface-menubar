# Network Interface Menubar

An app to display when a mac uses a wired connection for the default
network interface (this might be problem if you're
[running into wifi issues on a Late 2013 MBP with a wireless N router](https://discussions.apple.com/thread/5535320?start=0&tstart=0)
then bought a rather expensive thunderbolt to ethernet adapter and
expected Ubuntu-style network menubar to tell you when you have a
wired connection and don't want to buy a separate mac app or toggle to
the System Preferences Network tab).  It updates roughly every 3 seconds.

## Screenshots

<img src="disconnected-collapsed.png?raw=true" alt="" width=450>

<img src="wired-collapsed.png?raw=true" alt="" width=450>

<img src="wired-expanded.png?raw=true" alt="" width=450>

<img src="wireless-expanded.png?raw=true" alt="" width=450>

## Installation

1. Download [Network Interface Menubar.app.tgz (36 MB)](https://github.com/g-k/network-interface-menubar/releases/download/0.1.0/Network.Interface.Menubar.app.tgz) from releases.
1. Double click to unarchive the app.
1. Drag to Applications

Note: It might be necessary to 'open anyway' on the System Preferences
Security & Privacy page if github.com is not a trusted developer.

## Developer Instructions

git clone this repo and run `npm install --dev` to install dev dependencies

Run `make build` to build Network Interface Menubar.app

Run `make start` to run the app with logging and without building the app.


Built from the [menubar](https://github.com/maxogden/menubar) example on [Electron](http://electron.atom.io/) using the Ubuntu GNOME icons.
