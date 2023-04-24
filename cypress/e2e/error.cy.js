describe('Error Page Test', () => {
  beforeEach(() => {
    cy.visit('/wrong-url');
  });

  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('check error routing', () => {
    cy.url().should('include', '/404');
    cy.get('h1').contains('Error Page');
  });
});
