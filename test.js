import { log } from 'console';
import { JSDOM } from 'jsdom';
import puppeteer from 'puppeteer';
import express from 'express';
(async () => {
  // 启动浏览器并且打开一个空白页
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.viewport({ width: 2560, height: 1660 })
  // 访问B站首页
  await page.goto('https://www.bilibili.com/opus/658854266770817030?spm_id_from=333.1387.0.0', { waitUntil: 'networkidle2' });

  // 使用evaluate函数在浏览器上下文中运行JavaScript代码以获取所有图片的URL
  const imageUrls = await page.evaluate(() => {
    const images = document.querySelectorAll('.opus-module-content img'); // 可能需要根据实际情况调整选择器,是的它确实需要根据实际情况去调整，不要全部去选择
    return Array.from(images).map(img => img.src);
  });


  // console.log(typeof imageUrls[0] === `string`); 检查imageUrls是否为字符串类型, 输出为true

  // console.log(imageUrls);

  // 仅获取URL字符串中那些同时带有.webp和.jpg后缀的图片
  const filteredUrls = imageUrls.map(items => {
    if (items.includes(`.webp`) && items.includes(`.jpg`)) {
      return items;
    }
    else {
      return ``; //如果不满足条件，则返回空字符串
    }
  })

  // console.log(filteredUrls);

  const filteredUrlswithurl = filteredUrls.filter(item => item !== ``); // 过滤掉空字符串

  // console.log(filteredUrlswithurl);

  // 先获取所有字符串中的 @字符的索引值，然后使用slice()函数从(0, index) 提取字符串
  const filteredUrlsWithIndex = filteredUrlswithurl.map(item => {
    const index = item.indexOf("@", 1)
    if (index !== -1) {
      return item.slice(0, index); // 提取到@字符之前的部分
    } else {
      return item; // 如果没有@字符，则返回原字符串
    }
  })



  // console.log(filteredUrlsWithIndex);
  // 对获取到的图片URL进行渲染

  // const content = document.querySelector(`.content`)
  // content.innerHTML = filtercontent; // !!错误!!:这是在浏览器端将渲染后的内容插入到页面中,Nodejs端没有DOM对象

  // 在Node.js中解析HTML(爬虫，服务器端渲染)
  // 使用express框架将渲染结果发送到客户端(浏览器)
  const app = express();
  const PORT = 3000;

  app.get(`/`, (rep, res) => {
    // 使用虚拟DOM库进行渲染操作
    const html = `<html>
    <body>
      <div class="content">
      </div>
    </body>
  </html>
    `
    const dom = new JSDOM(html)
    const document = dom.window.document;
    const content = document.querySelector(`.content`)
    const filtercontent = filteredUrlsWithIndex.map(item => {
      return `<img src="${item}" alt="images">`
    }).join(``);

    content.innerHTML = filtercontent

    const finalHtml = dom.serialize();

    res.send(finalHtml)

    console.log(document.body.innerHTML);
  })

  app.listen(PORT, () => {
    console.log(`服务已经启动，请访问http://localhost:${PORT}`);

  })




  // await browser.close();
  // 关闭浏览器
})();;
