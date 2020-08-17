describe('Winner is determined automatically', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#start-button').click()
  })

  it('after a timer countdown', () => {
    cy.get('body').trigger('keydown', { keyCode: 49 })
    cy.get('body').trigger('keydown', { keyCode: 39 })
    cy.get('#winner').should('contain', 'Left player wins')
  })
})