import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  beforeAll(async () => {
    jest.setTimeout(30000);
  });
  test("An event element is collapsed by default", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 250, // slow down by 250ms
      ignoreDefaultArgs: ["--disable-extensions"], // ignores default setting that causes timeout errors
    });

    const page = await browser.newPage();
    await page.goto("http://localhost:3000/");

    await page.waitForSelector(".event-wrapper");

    const eventDetails = await page.$(
      ".event-wrapper .details-toggle-button-2"
    );
    expect(eventDetails).toBeNull();
    browser.close();
  });

  test("User can expand an event to see its details", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/");

    await page.waitForSelector(".details-toggle-button1");
    await page.click(".details-toggle-button1");

    const eventDetails = await page.$(".about-event");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide its details", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/");

    await page.waitForSelector(".details-toggle-button1");
    await page.click(".details-toggle-button1");
    await page.click(".details-toggle-button2");
    const eventDetails = await page.$(".about-event");
    expect(eventDetails).toBeNull();
  });
});
