describe('Players start the game manually', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('by clicking "Start!"', () => {
    cy.get('#start-game').click()
    cy.get('#countdown').should('contain', 'rock')
    cy.get('#countdown').should('contain', 'paper')
    cy.get('#countdown').should('contain', 'scissors')
  })
})