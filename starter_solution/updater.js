// add autoupdater
const { autoUpdater } = require("electron-updater")

// add the electron-log for logging to a file
// tail -f ~/Library/Logs/cm19_electron/log.log
autoUpdater.logger = require("electron-log");
autoUpdater.logger.transports.file.level = 'info';

// Check for updates
function checkForUpdates() {
  autoUpdater.checkForUpdatesAndNotify();
}
