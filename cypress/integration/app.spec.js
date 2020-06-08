import CompanyCard from "../../src/components/CompanyCard"

beforeEach(() => {
  cy.visit('http://localhost:3000')
})

it('CRUDs companies', () => {

  cy.get('#company-list')
    .should('have.length', 1)
    .children()
    .should('have.length', 4)

  // can add a company
  cy.get('#add-company')
    .click()

  cy.location('pathname').should('include', '/company/add')

  // form validation
  cy.get('input[name="name"]')
    .type('my new comany')
    .get("#submit-btn")
    .click()
    .get(".required-error")
    .should('have.length', 3)
    .get('input[name="city"]')
    .type('boulder')
    .get('input[name="state"]')
    .type('CO')
    .get('textarea[name="description"]')
    .type('We are changing the way America brushes it\'s teeth ')
    .get("#submit-btn")
    .click()
    .wait(1500)

  // redirect on successful create
  cy.location('pathname').should('be', '/')
  cy.get('#company-list')
    .children()
    .should('have.length', 5)  // new card!
    
    cy.get('.card')
    .first() // cards ordered by dateFounded, first el last created
    .click()
  
  cy.location('pathname').should('include', 'companies')

  // can edit
  cy.get('#edit-btn')
    .click()
    .get('#edit-form')
    .should('have.length', 1)

  // validation & upate
  cy.get('input[name="name"]')
    .focus()
    .clear()
    .get("#submit-btn")
    .click()
    .get(".required-error")
    .should('have.length', 1)
    .get('input[name="name"]')
    .type('COMPANY RE-BRANDED')
    .get("#submit-btn")
    .click()
    .wait(1500)

  // check name has been updated  
  cy.get('input[name="name"]')
    .should('have.length', 0) // form is closed
    .get('div[data-selector="company-name"]').then(nameDiv => {
      expect(nameDiv.get(0).innerText).to.eq('COMPANY RE-BRANDED')
    })
  
  cy.get('#delete-btn').click()

  // redirects after delete
  cy.location('pathname').should('be', '/')
  cy.get('#company-list')
    .children()
    .should('have.length', 4) 
})