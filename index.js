const electron = require('electron');
const path     = require('path');
const url      = require('url');

const extensionPath = '/Users/bryan/Library/Application\ Support/Google/Chrome/Default/Extensions';

const { app, BrowserWindow } = electron;

let mainWindow;

function createWindow() {
  const screenSize = electron.screen.getPrimaryDisplay().size;

  // Add devtools extensions
  BrowserWindow.addDevToolsExtension(`${extensionPath}/fmkadmapgofadopljbjfkapdkoienihi/3.5.0_0`);
  BrowserWindow.addDevToolsExtension(`${extensionPath}/lmhkpmbekcpmknklioeibfkpmmfibljd/2.17.0_0`);

  // Create the browser window.
  mainWindow = new BrowserWindow({
    backgroundColor: '#f8f8f8',
    frame: false,
    height: screenSize.height * 0.85,
    icon: path.resolve(__dirname, 'assets/icons/icon.icns'),
    minHeight: 800,
    minWidth: 1000,
    nodeIntegration: false,
    width: screenSize.width * 0.8,
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
