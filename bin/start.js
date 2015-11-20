import app              from "app";
import BrowserWindow    from "browser-window";

const WINDOWS = {
    "main": null,
};

app.on("window-all-closed", () => {
    if (process.platform != "darwin") {
        app.quit();
    }
});

app.on("ready", () => {
    WINDOWS.main = new BrowserWindow({width: 800, height: 800});
    WINDOWS.main.on("closed", () => WINDOWS.main = null);
    WINDOWS.main.loadUrl("file://" + __dirname + "/../App.html");
    WINDOWS.main.show();
});
