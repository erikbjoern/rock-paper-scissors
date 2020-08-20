describe('Game rules',  () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy=start-btn]').click()
  })

  it('Rock wins over Scissors', () => {
    cy.playerKeypress('left', 'rock')
    cy.playerKeypress('right', 'scissors')

    cy.get('[data-cy=winner]').should('contain', 'Left player wins')
  })
  
  it('Scissors win over Paper', () => {
    cy.playerKeypress('left', 'paper')
    cy.playerKeypress('right', 'scissors')
    
    cy.get('[data-cy=winner]').should('contain', 'Right player wins')
  })
  
  it('Paper wins over Rock', () => {
    cy.playerKeypress('left', 'paper')
    cy.playerKeypress('right', 'rock')
    
    cy.get('[data-cy=winner]').should('contain', 'Left player wins')
  })
  
  it('Identical choices result in a tie', () => {
    cy.playerKeypress('left', 'rock')
    cy.playerKeypress('right', 'rock')
    
    cy.get('[data-cy=winner]').should('contain', 'Tie')
  })

  it('No choices results in a tie', () => {
    cy.get('[data-cy=countdown]').contains('scissors')
    cy.get('[data-cy=winner]').should('contain', 'Tie')
  })
  
  it("A player who doesn't make a choice in time looses (left wins)", () => {
    cy.playerKeypress('left', 'paper')
    
    cy.get('[data-cy=winner]').should('contain', 'Left player wins')
  })
  
  it("A player who doesn't make a choice in time looses (right wins)", () => {
    cy.playerKeypress('right', 'rock')
    
    cy.get('[data-cy=winner]').should('contain', 'Right player wins')
  })
})