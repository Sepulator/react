describe('Home Page Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('the h1 contains the correct text', () => {
    cy.get('h1').contains('Home Page');
  });

  it('the nav links on the homepage are correct', () => {
    cy.get('li').eq(0).contains('Home');
    cy.get('li').eq(1).contains('About');
    cy.get('li').eq(2).contains('Form');
  });

  it('clicking links navigates to a new url', () => {
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('Form').click();
    cy.url().should('include', '/form');
  });
});
