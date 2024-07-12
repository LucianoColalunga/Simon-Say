describe('Simon Says Game', () => {
        beforeEach(() => {
                cy.visit('http://26.11.136.124:8081/');
        });

        it('debería cargar la página correctamente', () => {
                cy.title().should('eq', 'Simon Says');

                cy.get('#start').should('be.visible');
        })
});