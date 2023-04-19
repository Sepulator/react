describe('Form Page Test', () => {
  it('check errors validation', () => {
    cy.visit('/form');
    cy.getByData('submit-button').click();
    cy.getByData('text-input').should('have.class', 'is-invalid');
    cy.getByData('date-input').should('have.class', 'is-invalid');
    cy.getByData('radio-input').should('have.class', 'is-invalid');
    cy.getByData('file-input').should('have.class', 'is-invalid');
    cy.getByData('checkbox-input').should('have.class', 'is-invalid');
    cy.getByData('select-input').should('have.class', 'is-invalid');

    cy.getByData('reset-button').click();
    cy.getByData('text-input').should('not.have.class', 'is-invalid');
    cy.getByData('date-input').should('not.have.class', 'is-invalid');
    cy.getByData('radio-input').should('not.have.class', 'is-invalid');
    cy.getByData('file-input').should('not.have.class', 'is-invalid');
    cy.getByData('checkbox-input').should('not.have.class', 'is-invalid');
    cy.getByData('select-input').should('not.have.class', 'is-invalid');
  });

  it('submit data', () => {
    cy.visit('/form');
    cy.getByData('text-input').type('JavaScript');
    cy.getByData('date-input').type('2023-01-10');
    cy.getByData('radio-input').last().check();
    cy.getByData('file-input').selectFile('./src/assets/no-img-placeholder.jpg', { force: true });
    cy.getByData('checkbox-input').eq(0).click();
    cy.getByData('checkbox-input').eq(1).click();
    cy.getByData('checkbox-input').eq(2).click();
    cy.getByData('select-input').select('Perfume');
    cy.getByData('submit-button').click();
    cy.getByData('card-form').should('have.length', 1);
  });

  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});
