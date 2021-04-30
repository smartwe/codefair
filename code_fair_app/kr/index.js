const { app, BrowserWindow } = require('electron');

function createWindow () { 
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    darkTheme: true,
    transparent: false,
    frame: true,
    fullscreen:true,
    autoHideMenuBar:true,
    webPreferences: {
      nodeIntegration: true
    }
  })
  

  win.loadFile('./index.html')
  win.setIgnoreMouseEvents(false)
}

app.on('ready', createWindow);