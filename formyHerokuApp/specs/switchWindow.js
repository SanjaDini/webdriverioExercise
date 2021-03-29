const BasicActions = new (require('../actions/basicActions'))();
const { entryPage, switchWindow } = require('../test_data/selectors');

describe('Fill all fields into Autocomplete page', () => {
  describe('Open Autocomplete page', () => {
    it('Given I can open base page', () =>
      BasicActions.openPage('')
    );
    it('Then I can click on Switch Window from all components list', () =>
      BasicActions.selectGivenValueFromComponentList(entryPage, 'allLinks', 'Switch Window')
    );
  });
  describe('Test opening alert', () => {
    it('Given I can click on "Open alert"', () =>
      BasicActions.clickOnElement(switchWindow, 'openAlert')
    );
    it('Then I can close alert ', () =>
      browser.dismissAlert()
    );
  });
  describe('Test switch window', () => {
    it('Given I can click on "Open new tab"', () =>
      BasicActions.clickOnElement(switchWindow, 'openNewTab')
    );
    it('Then I can close opened page in new tab', () =>
      BasicActions.switchToWindow()
    );
  });
});
