describe('CSS Test', () => {
    it('changes background color', () => {
        cy.visit('http://127.0.0.1:5500/test.html')
        cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)')
      
        // select the new color value in the <input type="color">
        // element and trigger "change" event
        cy.get('input[type=color]')
          .invoke('val', '#ff0000')
          .trigger('change')
      
        // check the background color has been changed
        cy.get('body')
          .should('have.css', 'background-color', 'rgb(255, 0, 0)')
    })
})