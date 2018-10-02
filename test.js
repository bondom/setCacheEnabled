const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true, slowMo: 150 });
  const page = await browser.newPage();

  await page.setCacheEnabled(false);
  // Uncomment this piece of code:
  // await page.setRequestInterception(true);
  // page.on("request", interceptedRequest => {
  //   interceptedRequest.continue();
  // });

  let responses = [];
  page.on("response", r => responses.push(r));

  await page.goto("http://localhost:8080");

  await page.click("button");
  await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 500);
  });

  await page.click("button");
  await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 500);
  });

  for (const r of responses) {
    if (r.fromCache()) {
      console.log(`CACHED: url: ${r.url()}, status: ${r.status()}`);
    } else {
      console.log(`NOT CACHED: url: ${r.url()}, status: ${r.status()}`);
    }
  }

  await browser.close();
})();
