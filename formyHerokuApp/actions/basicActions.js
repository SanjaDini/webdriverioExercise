const BasicPageObject = new (require('../pageobjects/basicPageObjects'))();
const { autocomplete, dragAndDrop } = require('../test_data/selectors');

class BasicActions {
  openPage(url) {
    browser.url(url);
    expect(browser).toHaveTitle('Formy');
  }

  clickOnElement(dataSelector, cssSelector) {
    try {
      $(dataSelector[cssSelector]).click();
    } catch (e) {
      throw new Error(`Could not click on ${$(dataSelector[cssSelector])}`);
    }
  }

  selectGivenValueFromComponentList(dataSelector, selector, optionValue) {
    const allComponents = $$(dataSelector[selector]);

    BasicPageObject.selectGivenValueFromComponentList(allComponents, optionValue);
  }

  waitUntilDropdownIsDisplayed(value) {
    this.waitUntilElementIsDisplayed(autocomplete, 'addressAutocomplete');
    this.selectGivenValueFromComponentList(autocomplete, 'addressAutocomplete', value);
  }

  waitUntilElementIsDisplayed(dataSelector, cssSelector) {
    browser.waitUntil(() => $(dataSelector[cssSelector]).isDisplayed(), {
      timeout: 25000, timeoutMsg: 'Element does not showing up',
    });
  }

  insertValueInTheField(value, cssSelector) {
    try {
      browser.$(autocomplete[cssSelector]).setValue(value);
    } catch (e) {
      throw new Error(`Field is not displaying ${$(autocomplete[cssSelector])}`);
    }
  }

  dragAndDrop() {
    const element = $(dragAndDrop.image);
    const target = $(dragAndDrop.box);

    element.dragAndDrop(target, { duration: 1500 });
  }

  switchToWindow() {
    browser.closeWindow();
    browser.switchWindow('');
    browser.pause(1500);
  }
}

module.exports = BasicActions;
