const BasicActions = new (require('../actions/basicActions'))();
const { entryPage, datepicker } = require('../test_data/selectors');

describe('Fill all fields into Autocomplete page', () => {
  describe('Open Autocomplete page', () => {
    it('Given I can open base page', () =>
      BasicActions.openPage('')
    );
    it('Then I can click on Datepicker from all components list', () =>
      BasicActions.selectGivenValueFromComponentList(entryPage, 'allLinks', 'Datepicker')
    );
  });
  describe('Select current date', () => {
    it('Given I can click inside the datepicker field', () =>
      BasicActions.clickOnElement(datepicker, 'dateField')
    );
    it('When I see datepicker expanded', () =>
      BasicActions.waitUntilDropdownIsDisplayed(datepicker, 'datepickerDropdown')
    );
    it('Then I can choose current date', () =>
      BasicActions.clickOnElement(datepicker, 'currentDate')
    );
  });
});
