var path = require('path');

var ipc = require('ipc');
var menubar = require('menubar');
var network = require('network');

var icons = {
  unknown: path.join(__dirname, 'network-wired-acquiring.@2.5x.png'),
  disconnected: path.join(__dirname, 'network-wired-disconnected.@2.5x.png'),
  wired: path.join(__dirname, 'network-wired.@2.5x.png'),
};

var mb = menubar({
  dir: __dirname,
  icon: icons.unknown,
  width: 350,
  height: 250,
});

var pollFrequency = 3000; // ms between checks

var updateIcon = function () {
  network.get_active_interface(function (e, r) {
    // console.debug(e, r);

    if (r && r.type && r.type === 'Wired') {
      mb.tray.setImage(icons.wired);
    } else {
      mb.tray.setImage(icons.disconnected);
    };

    if (mb.window && mb.window.webContents) {
      mb.window.webContents.send('default-network-state', JSON.stringify(r));
    }

    // TODO: backoff if the state hasn't changed for awhile
    setTimeout(updateIcon, pollFrequency);
  });
};

mb.on('ready', function ready () {
  setTimeout(updateIcon, pollFrequency);
});


ipc.on('quit', function() {
  mb.app.quit();
});
