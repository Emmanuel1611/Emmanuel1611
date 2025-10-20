// Builds and renders the built app to a PNG using a local static server + puppeteer
const { spawn } = require("child_process");
const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

async function runCmd(cmd, args, opts = {}) {
  return new Promise((res, rej) => {
    const p = spawn(cmd, args, { stdio: "inherit", ...opts });
    p.on("exit", (code) => (code === 0 ? res() : rej(new Error(cmd + " exited " + code))));
  });
}

(async () => {
  try {
    // 1) build the app
    await runCmd("npm", ["run", "build"]);

    // 2) start a static server to serve build output
    const serve = spawn("npx", ["serve", "-s", "dist", "-l", "5000"], { stdio: "inherit" });
    // wait briefly for server to start
    await new Promise((r) => setTimeout(r, 1500));

    // 3) launch puppeteer and screenshot the banner page
    const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 560, deviceScaleFactor: 2 });
    await page.goto("http://localhost:5000", { waitUntil: "networkidle0", timeout: 60000 });
    const outDir = path.join(process.cwd(), "README-assets");
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
    const outPath = path.join(outDir, "profile-banner.png");
    await page.screenshot({ path: outPath, fullPage: false });
    await browser.close();

    // 4) kill the server
    serve.kill();
    console.log("Generated", outPath);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();