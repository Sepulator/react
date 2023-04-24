describe('Home Page Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  afterEach(() => {
    cy.window().trigger('unload');
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
    cy.get('h1').contains('About Page');
    cy.contains('Form').click();
    cy.url().should('include', '/form');
    cy.get('h1').contains('Form Page');
  });

  it('check search-bar with submitting "apple"', () => {
    cy.getByData('search-bar').type('apple');
    cy.getByData('search-btn').click();
    cy.get('h6').contains('iPhone 9');
    cy.getByData('card-body').should('exist');
    cy.getByData('card-body').should('have.length', 1);
  });

  it('default view and empty search value', () => {
    cy.getByData('search-bar').type('JavaScript');
    cy.getByData('search-btn').click();
    cy.contains('Nothing to display');

    cy.getByData('search-bar').clear();
    cy.getByData('search-btn').click();
    cy.getByData('card-body').should('have.length', 24);
  });

  it('open and close modal window', () => {
    cy.getByData('card-body').eq(0).click();
    cy.getByData('card-body-expand').should('exist');
    cy.getByData('close-btn').eq(0).click();
  });
});
