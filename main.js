const {app,Menu,BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

const https = require('https');

let mainWindow;

//参考にしたサイト https://www.electronjs.org/docs/tutorial/quick-start
function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    })
  Menu.setApplicationMenu(null);
    win.loadFile('index.html')
  }
  
//参考にしたサイト https://qiita.com/y-tsutsu/items/179717ecbdcc27509e5a
app.on('ready', createWindow);

app.on('window-all-closed', () =>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate',()=>{
    if(mainWindow === null){
        createWindow();
    }
})



