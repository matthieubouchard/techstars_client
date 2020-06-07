beforeEach(() => {
  cy.visit('http://localhost:3000')
})

it('renders a list of companies', () => {
  cy.get('#company-list')
    .should('have.length', 1)
    .children()
    .should('have.length', 4)
    .first()
    .click()
  
  cy.location('pathname').should('include', 'companies')

  cy.get('#edit-btn')
    .click()
    .get('#edit-form')
    .should('have.length', 1)

})