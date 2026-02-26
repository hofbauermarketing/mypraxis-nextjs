import { chromium } from 'playwright'

const CONSENT_VALUE = JSON.stringify({
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: new Date().toISOString(),
})

const pages = [
    { url: 'https://www.mypraxis.at/demo/privatarzt-classic', file: 'public/demo-preview-classic.jpg' },
    { url: 'https://www.mypraxis.at/demo/privatarzt-modern', file: 'public/demo-preview-modern.jpg' },
    { url: 'https://www.mypraxis.at/demo/privatarzt-warm', file: 'public/demo-preview-warm.jpg' },
    { url: 'https://www.mypraxis.at/demo/aerztezentrum-classic', file: 'public/demo-preview-aerztezentrum.jpg' },
    { url: 'https://www.mypraxis.at/demo/aerztezentrum-premium', file: 'public/demo-preview-premium.jpg' },
]

const browser = await chromium.launch()

for (const p of pages) {
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 } })
    const page = await context.newPage()

    // Load the page first so the origin is set, then inject consent into localStorage
    await page.goto(p.url, { waitUntil: 'domcontentloaded' })
    await page.evaluate((val) => {
        localStorage.setItem('mypraxis_cookie_consent', val)
    }, CONSENT_VALUE)

    // Reload so the banner doesn't appear
    await page.reload({ waitUntil: 'networkidle' })
    await page.waitForTimeout(1500)

    await page.screenshot({
        path: p.file,
        type: 'jpeg',
        quality: 88,
        clip: { x: 0, y: 0, width: 1280, height: 800 },
    })
    console.log('✓', p.file)
    await context.close()
}

await browser.close()
console.log('All done.')
