describe('Duck Duck Go Search', () => {
  beforeEach(() => {
    cy.visit('http://www.duckduckgo.com')
    cy.get('input[type="text"]')
      .as('searchField')
      .should('be.visible')
  })

  it('searches by typing and selecting the first option from the list', () => {
    cy.get('@searchField')
      .type('cypress.io{downarrow}{enter}', { delay: 500 })

    cy.get('.results .result')
      .should('have.length', 11)
      .last()
      .should('have.text', 'More results')
  })

  it('searches by typing and selecting the second option from the list', () => {
    cy.get('@searchField')
      .type('cypress.io{downarrow}{downarrow}{enter}', { delay: 500 })

    cy.get('.results .result')
      .should('have.length', 11)
      .last()
      .should('have.text', 'More results')
  })

  it('searches by typing and selecting the third option from the list', () => {
    cy.get('@searchField')
      .type('cypress.io{downarrow}{downarrow}{downarrow}{enter}', { delay: 500 })

    cy.get('.results .result')
      .should('have.length', 11)
      .last()
      .should('have.text', 'More results')
  })
})