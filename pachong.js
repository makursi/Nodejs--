//使用Nodejs库puppeteer获取b站数据
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: false })

const page = await browser.newPage()

await page.viewport({ width: 2560, height: 1660 })
await page.goto(`https://www.bilibili.com/`)

// 获取元素类似qs
await page.waitForSelector(`.bili-video-card__image--wrap`)


// 获取单个元素$,多个$$
const elements = await page.$$(`.bili-video-card__image--wrap .bili-watch-later--wrap img`)

// 循环
for await (const el of elements) {
  const prop = await el.getProperty(`innerText`)
  const text = await prop.jsonValue()
  console.log(text);
  if (text === `番剧`) {
    await el.click()
    break
  }
}
