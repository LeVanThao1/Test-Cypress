describe('Working with plugins', function(){
    it('File upload', function(){
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
        
        const fileName = 'test.txt';
        cy.get('[type="file"]').attachFile(fileName);

        cy.get('[type="submit"]').click()

        cy.contains("You've uploaded a file. Your notes on the file were:")
        cy.get('pre').contains('test upload file')
    })
})