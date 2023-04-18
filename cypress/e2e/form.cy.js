describe('Form Page Test', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('check errors validation', () => {
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
  it.only('submit data', () => {
    cy.getByData('text-input').type('JavaScript');
    cy.getByData('date-input').type('2023-01-10');
    cy.getByData('radio-input').last().check();
    cy.getByData('file-input').selectFile(
      {
        fileName: 'users.json',
        contents: [{ name: 'John Doe' }],
      },
      { force: true }
    );
    cy.getByData('checkbox-input').eq(0).click();
    cy.getByData('checkbox-input').eq(1).click();
    cy.getByData('checkbox-input').eq(2).click();
    cy.getByData('select-input').select('Perfume');
    cy.getByData('submit-button').click();
  });
});
