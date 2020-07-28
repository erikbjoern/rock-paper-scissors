describe('Players start the game manually', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('by clicking "Start!"', () => {
    cy.get('#start-game').should('contain', 'Start!')
    cy.get('#start-game').click()
    cy.get('#countdown').should('contain', 'rock')
    cy.get('#countdown').should('contain', 'paper')
    cy.get('#countdown').should('contain', 'scissors')
  })

  
  it('"make a choice" should not be visible before game start', () => {
    cy.get('.make-a-choice').should('not.exist')
  })
})