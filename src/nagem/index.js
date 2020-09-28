const puppeteer = require('puppeteer');

const app = async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  const pesquisa = 'tv'
  const sitePesquisa = `https://nagem.com.br/navegacao?busca=${pesquisa}`

  await page.goto('https://nagem.com.br/cliente/login/');
  await page.waitFor('input[id="login"]');

  await page.type('input[id="login"]', 'lleonardob9@gmail.com', { delay: 100 });
  await page.type('input[id="senha"]', '18012019a', { delay: 100 });
  await page.keyboard.press('Enter');

  await page.waitFor('input[id="buscaGeral-mobile"]');
  await page.goto(sitePesquisa);
  await page.screenshot({ path: './src/nagem/consultaTv.png', fullPage: true })

  browser.close()
}

app();