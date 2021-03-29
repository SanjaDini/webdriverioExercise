const BasicActions = new (require('../actions/basicActions'))();
const { entryPage } = require('../test_data/selectors');

describe('Fill all fields into Autocomplete page', () => {
  describe('Open Autocomplete page', () => {
    it('Given I can open base page', () =>
      BasicActions.openPage('')
    );
    it('Then I can click on Drag and drop from all components list', () =>
      BasicActions.selectGivenValueFromComponentList(entryPage, 'allLinks', 'Drag and Drop')
    );
  });
  describe('Drag the image into the box', () => {
    it('Given I drag the image into the box', () =>
      BasicActions.dragAndDrop()
    );
  });
});
