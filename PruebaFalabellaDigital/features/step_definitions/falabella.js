
const { Given, When, Then } = require("cucumber");
const Selector = require("testcafe").Selector;

// Scenario Searching for Falabella by Google
Given("I open the Google's search page", async function() {
  await testController.navigateTo("https://google.com");
});

When("I am typing my search request {string} on Google", async function(text) {
  var input = Selector(".gLFyf").with({ boundTestRun: testController });
  await this.addScreenshotToReport();
  await testController.typeText(input, text);
});

Then("I press the {string} key on Google", async function(text) {
  await testController.pressKey(text);
});

Then("I press text that Google's result is {string}", async function(text) {
  var falabellaLink = Selector(".LC20lb")
    .withText("Falabella.com - Mejor Compra Online")
    .with({ boundTestRun: testController });
  await testController.expect(falabellaLink.innerText).contains(text);
  await testController.click(falabellaLink);
});

// Adding product to the shopping cart
Given("I am in Falabella's retail page", async function() {
  await testController.navigateTo("https://www.falabella.com/falabella-cl/");
});

When("I search {string} in Falabella's retail home page", async function(text) {
  var input = Selector("#searchQuestionSolr").with({ boundTestRun: testController });
  await testController.typeText(input, text);
});

Then("I am press {string} in search", async function(text) {
  await testController.pressKey(text);
});

Then("Select first product", async function() {
  var selectFirstProduct = Selector(".pod-head")
    .nth(0)
    .with({ boundTestRun: testController });

  await testController.click(selectFirstProduct);
});

Then("I should see that the detail of the product has {string}", async function(text) {
  var productDetail = Selector(".fb-product-cta__title")
    .nth(0)
    .with({ boundTestRun: testController });
  await testController.expect(productDetail.innerText).contains(text);
});

Then("Add product to shopping cart", async function() {
  var selectedProduct = Selector(
    ".fb-btn.fb-btn-primary.fb-product-cta__controls--actions--choose.full-width-btn"
  ).with({ boundTestRun: testController });
  await testController.click(selectedProduct);

  var productAdd = Selector(".fb-added-to-basket__title").with({ boundTestRun: testController });
  await testController.expect(productAdd.innerText).contains(" Agregado");
});

Then("I Go to the shopping cart", async function() {
  var goShoppingCart = Selector(
    ".fb-btn.fb-btn-primary.fb-added-to-basket__cta.fb-added-to-basket__cta--basket"
  )
    .nth(1)
    .with({ boundTestRun: testController });
  await testController.click(goShoppingCart);
});

Then("I increase {string} products to buy", async function(text) {
  var addProduct = Selector(".fb-quantity-input__plus").with({ boundTestRun: testController });
  await testController.click(addProduct);

  var productQuantity = Selector(".fb-quantity-input__field").with({
    boundTestRun: testController
  });
  await testController.expect(productQuantity.value).contains(text);
});

Then("I add {string} year extended warranty", async function(text) {
  var selectedWarranty = Selector(".fb-inline-dropdown__link.js-inline-dropdown__link").with({
    boundTestRun: testController
  });
  await testController.click(selectedWarranty);

  var selectedTwoYears = Selector(".fb-inline-dropdown__list-item")
    .withText("2 Años")
    .with({ boundTestRun: testController });
  await testController.click(selectedTwoYears);
  await testController.expect(selectedTwoYears.innerText).contains(text);
});

Then("I press {string}", async function(string) {
  var shopButton = Selector(
    ".fb-btn.fb-btn-primary.fb-btn-icon.fb-order-status__continue-purchase.js-fb-continue-purchase"
  )
    .nth(0)
    .with({ boundTestRun: testController });
  await testController.click(shopButton);

  var productAdd = Selector(
    ".fbra_heading.fbra_unrecognizedUser__fasterCheckoutTitle.fbra_test_unrecognizedUser__fasterCheckoutTitle"
  ).with({ boundTestRun: testController });
  await testController.expect(productAdd.innerText).contains("Bienvenid@ a Falabella.com!");
});
