describe('Winner is determined automatically', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('after a timer countdown', () => {
    cy.get('#start-game').click()
    cy.get('body').trigger('keydown', { keyCode: 49 })
    cy.get('body').trigger('keydown', { keyCode: 39 })
    cy.get('#winner').should('contain', 'Left player wins')
  })
})