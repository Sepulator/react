describe('Error Page Test', () => {
  it('check error routing', () => {
    cy.visit('/wrong-url');
    cy.url().should('include', '/404');
    cy.get('h1').contains('Error Page');
  });

  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});
