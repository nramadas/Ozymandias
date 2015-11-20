import app              from "app";
import BrowserWindow    from "browser-window";

const WINDOWS = {
    "main": null,
}

app.on("window-all-closed", () => {
    if (process.platform != "darwin") {
        app.quit();
    }
});

app.on("ready", () => {
    const mainWindow = new BrowserWindow({width: 800, height: 800});
});
