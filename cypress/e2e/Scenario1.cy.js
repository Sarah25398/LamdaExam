describe('Scenario 1: Drag & Drop Sliders', () => {
  it('Test drag and drop to Slider value 15', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground');
    cy.contains('Drag & Drop Sliders').click();
    cy.get("input[type='range'][value='15']")
      .invoke('val', 95)
      .trigger('input')
      .trigger('change');
    cy.get('#rangeSuccess').should('have.text', '95');
  });

})
