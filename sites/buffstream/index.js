import puppeteer from 'puppeteer';

const url = 'https://buffstreams.app/mlbstreams';

const scrapeBuffStream = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const comps = await page.$$('.competition');

  for (const comp of comps) {
    const title = await page.evaluate(
      (anchor) => anchor.getAttribute('title'),
      comp
    );
    const href = await page.evaluate(
      (anchor) => anchor.getAttribute('href'),
      comp
    );
    console.log(title, href);
  }

  await browser.close();
};

export default scrapeBuffStream;
