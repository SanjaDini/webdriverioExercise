class BasicPageObject {
  selectGivenValueFromComponentList(allComponents, optionValue) {
    let found = false;

    allComponents.some((textValue) => {
      if (textValue.getText().match(optionValue)) {
        found = true;
        textValue.click();

        return true;
      }
    });

    expect(found).toBeTruthy();
  }
}

module.exports = BasicPageObject;
