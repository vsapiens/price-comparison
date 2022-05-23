const puppeteer = require('puppeteer');



(async () => {
    const browser = await puppeteer.launch()
    const urls = [
        "https://www.heb.com.mx/catalogsearch/result/?q=",
        "https://www.soriana.com/buscar/?q=",
        "https://www.walmart.com.mx/productos?Ntt=",
        "https://www.amazon.com.mx/s?k=",
        "https://www.costco.com.mx/search?text="
    ]
    const results = []
    const keyword = "smirnoff"
    const zipCode = 19721

    for (const [i, url] of urls.entries()) {
        const page = await browser.newPage()
        await page.goto(`${url}smirnoff`)
        await page.screenshot({ path: `${i}.png` })

        await page.close()
    }

    await browser.close()
})()