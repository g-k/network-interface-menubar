# Network Interface Menubar

An app to display when a mac uses a wired connection for the default
network interface (this might be problem if you're
[running into wifi issues on a Late 2013 MBP with a wireless N router](https://discussions.apple.com/thread/5535320?start=0&tstart=0)
then bought a rather expensive thunderbolt to ethernet adapter and
expected Ubuntu-style network menubar to tell you when you have a
wired connection and don't want to buy a separate mac app or toggle to
the System Preferences Network tab).

## Installation

Download Network Interface Menubar.app from releases.

## Developer Instructions

git clone this repo and run `npm install --dev` to install dev dependencies

Run `make build` to build Network Interface Menubar.app

Run `make start` to run the app with logging and without building the app.


Built from the [menubar](https://github.com/maxogden/menubar) example on [Electron](http://electron.atom.io/) using the Ubuntu GNOME icons.
