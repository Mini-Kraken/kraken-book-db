const {app, BrowserWindow} = require('electron')

let mainWindow;

app.on('ready', () => {
    
    mainWindow = new BrowserWindow({
        minHeight: 600,
        minWidth: 1200,
        //frame: false,
    });
    mainWindow.setMenu(null);
    mainWindow.setIcon(`${__dirname}/icon.png`, `Overlay Icon`)
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});