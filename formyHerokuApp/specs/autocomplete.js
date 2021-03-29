const BasicActions = new (require('../actions/basicActions'))();
const { entryPage } = require('../test_data/selectors');
const { testValues } = require('../test_data/testValues');

describe('Fill all fields into Autocomplete page', () => {
  describe('Open Autocomplete page', () => {
    it('Given I can open base page', () =>
      BasicActions.openPage('')
    );
    it('Then I can click on Autocomplete from all components list', () =>
      BasicActions.selectGivenValueFromComponentList(entryPage, 'allLinks', 'Autocomplete')
    );
  });
  describe('Insert values in the fields', () => {
    it('Given I can insert value in Address field', () =>
      BasicActions.insertValueInTheField(testValues.address, 'address')
    );
    it('And I should wait until autocomplete search is shown and I can click on first prediction', () =>
      BasicActions.waitUntilDropdownIsDisplayed(testValues.address)
    );
    it('And I can insert value in Street address', () =>
      BasicActions.insertValueInTheField(testValues.streetAddress, 'streetAddress')
    );
    it('And I can insert value in Street address 2', () =>
      BasicActions.insertValueInTheField(testValues.streetAddress2, 'streetAddress2')
    );
    it('When I insert value in State field', () =>
      BasicActions.insertValueInTheField(testValues.state, 'state')
    );
    it('Then I can insert value in Zip Code', () =>
      BasicActions.insertValueInTheField(testValues.zipCode, 'zipCode')
    );
  });
});
