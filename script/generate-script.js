import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateBanner() {
  console.log('🎨 Starting banner generation...');
  
  let browser;
  try {
    // Launch browser with optimized settings
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process',
        '--disable-gpu'
      ]
    });

    const page = await browser.newPage();
    
    // Set viewport for banner dimensions (GitHub optimal size)
    await page.setViewport({
      width: 1280,
      height: 640,
      deviceScaleFactor: 2
    });

    // Navigate to the local build
    const htmlPath = join(__dirname, '../dist/index.html');
    await page.goto(`file://${htmlPath}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for animations and content to load
    await page.waitForTimeout(3000);

    // Ensure the README-assets directory exists
    const assetsDir = join(__dirname, '../README-assets');
    if (!fs.existsSync(assetsDir)) {
      fs.mkdirSync(assetsDir, { recursive: true });
    }

    // Take screenshot
    const screenshotPath = join(assetsDir, 'profile-banner.png');
    await page.screenshot({
      path: screenshotPath,
      type: 'png',
      fullPage: false,
      clip: {
        x: 0,
        y: 0,
        width: 1280,
        height: 640
      }
    });

    console.log('✅ Banner generated successfully!');
    console.log(`📁 Saved to: ${screenshotPath}`);
    
  } catch (error) {
    console.error('❌ Error generating banner:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the generator
generateBanner();