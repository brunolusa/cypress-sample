describe('template spec', () => {
  beforeEach(() => {
      cy.visit('https://digital.brochure.tkelevator.com/tke/pt-br/brochure/agile-tutorial-flyer-tke-global-pt-br/cover-11/');
  });

  it('windows visibility', () => { 
    cy.get('.button').should('be.visible');
  });
  it('menu', () => { 
    cy.get('#menu-btn').should('be.visible');
  });
});