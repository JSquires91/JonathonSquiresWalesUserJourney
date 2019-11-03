const { Given, When, Then} = require('cucumber');
const {Builder, By, Key, until} = require('selenium-webdriver');
const {pageObjects} = require('../../pageObjects/pageObjects.js');
const {assert} = require('chai');

let driver =new Builder().forBrowser('chrome').build();

Given('I am a person from Wales', {timeout: 60*1000}, async function (){
await driver.get('https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/start');
await driver.findElement(By.id(pageObjects.nextButton)).click(); //start
await driver.findElement(By.id(pageObjects.walesRadio)).click(); //select wales
await driver.findElement(By.id(pageObjects.nextButton)).click(); //click next
});

When('I put my circumstances into the Checker tool', async function (){

await driver.findElement(By.id(pageObjects.dobDay)).sendKeys('01'); //enter Birth day
await driver.findElement(By.id(pageObjects.dobMonth)).sendKeys('01'); //Enter Birth month
await driver.findElement(By.id(pageObjects.dobYear)).sendKeys('1991'); //enter Birth year
await driver.findElement(By.id(pageObjects.nextButton)).click(); //click next
await driver.findElement(By.id(pageObjects.radioNo)).click(); //select for partner
await driver.findElement(By.id(pageObjects.nextButton)).click();
await driver.findElement(By.id(pageObjects.radioNo)).click(); //select for benefits
await driver.findElement(By.id(pageObjects.nextButton)).click();
await driver.findElement(By.id(pageObjects.radioNo)).click(); //select for pregnant
await driver.findElement(By.id(pageObjects.nextButton)).click();
await driver.findElement(By.id(pageObjects.radioNo)).click(); //select for injury or illness
await driver.findElement(By.id(pageObjects.nextButton)).click();
await driver.findElement(By.id(pageObjects.radioNo)).click(); //select for diabetes
await driver.findElement(By.id(pageObjects.nextButton)).click();
await driver.findElement(By.id(pageObjects.radioNo)).click(); //select for glaucoma
await driver.findElement(By.id(pageObjects.nextButton)).click();
await driver.findElement(By.id(pageObjects.radioNo)).click(); //select for carehome
await driver.findElement(By.id(pageObjects.nextButton)).click();
await driver.findElement(By.id(pageObjects.radioNo)).click(); //select for savings
await driver.findElement(By.id(pageObjects.nextButton)).click();
});

Then('I should get a result of whether I will get help or not', async function (){
var endResult = await driver.findElement(By.id(pageObjects.endPage));
let textCheck = await endResult.getText();
assert.include(textCheck, `Based on what you've told us`);
var welshEntitlement = await driver.findElement(By.id(pageObjects.entitlement));
let textPrintout = await welshEntitlement.getText();
assert.include(textPrintout, 'Wales');


});