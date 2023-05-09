/// <reference types="cypress" />

context('localhost', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4344/');
    });

    describe('Visiting the page', () => {
        it('should be able to see the heading', () => {
            cy.contains(/Ainautes/i);
        });
    });
});
