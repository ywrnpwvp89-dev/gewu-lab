const {chromium}=require('playwright');
const assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_BIN||undefined});try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(process.env.TEST_URL||'http://localhost:8766');await page.waitForFunction(()=>document.querySelectorAll('#experimentNav button').length>0);
 assert((await page.title()).includes('格物'));
 const result=await page.evaluate(async()=>{const {modes,compute}=await import('./core.js');const r=compute('inertia',{}, {data:'0 1\n1 3\n2 9\n3 19'});return {count:Object.keys(modes).length,charts:r.charts.length,metrics:r.metrics};});
 assert.equal(result.count,30);assert(result.charts>0);
 const input=page.locator('#tables textarea').first();await input.fill('0 1\n1 3\n2 9\n3 19');await page.locator('#calculate').click();await page.waitForFunction(()=>document.querySelector('#chart svg'));
 assert.equal(await page.locator('[data-export="pdf"]').isDisabled(),false);
 const downloadPromise=page.waitForEvent('download');await page.locator('[data-export="pdf"]').click();const download=await downloadPromise;assert.equal(await download.failure(),null);assert(download.suggestedFilename().endsWith('.pdf'));
 if(process.env.QA_SCREENSHOT)await page.screenshot({path:process.env.QA_SCREENSHOT,fullPage:true});
 assert.equal(errors.length,0,errors.join('\n'));console.log('Gewu: 30 modules, synthetic inertia calculation, chart, PDF export passed.');
 }finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1);});
