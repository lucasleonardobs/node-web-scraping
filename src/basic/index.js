const puppeteer = require('puppeteer');

const app = async () => {
  /* const browser = await puppeteer.launch({
    headless: false
  }); */
  const browser = await puppeteer.launch()
  const page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 1080
  })

  await page.goto('https://github.com/lucasleonardobs');
  await page.screenshot({ path: 'meugit.png' });

  await browser.close()
}

app();