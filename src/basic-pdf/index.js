const puppeteer = require('puppeteer');

const app = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://github.com/lucasleonardobs');
  await page.pdf({
    path: 'meugit.pdf',
    format: 'A4'
  });

  browser.close();
}

app();