describe('Reponsive Test', function() {
    beforeEach(function() {
        cy.visit('https://css-tricks.com/');
    });
    it('has a visible star logo', function() {
        cy.get('.icon-logo-star').should('be.visible');
    });

    it('contains "CSS-Tricks" in the title', function() {
        cy.title().should('contain', 'CSS-Tricks');
    });

    it('with a screen of desktop viewport', function() {
        cy.viewport(1366, 1080);
        cy.get('#search-input').should('be.visible')
    });

    
    it('with a screen of ipad pro viewport', function() {
        cy.viewport(1024, 1366);
        cy.get('#search-input').should('be.hidden')
    });

    it('with a screen of iphone 6/7/8 plus viewport', function() {
      cy.viewport(414, 736);
      cy.get('.icon-burger').should('be.visible');
    });
  });