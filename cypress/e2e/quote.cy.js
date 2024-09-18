describe('It should render the html', () => {
    //render the html
    it('should render the html', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
    })

    // check if the h2 contains the correct text
    it('should contain the correct text after content loads', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.get('#card-heading').should('contain', 'ADVICE');
    });

    // should generate a new quote
    it('should generate a new quote on click', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.get('button[type="submit"]').click()
    })
})