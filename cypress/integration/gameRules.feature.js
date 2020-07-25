describe('Game rules',  () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Rock wins over Scissors', () => {
    cy.get('#start-game').click()
    cy.get('body').trigger('keydown', {keyCode: 49})
    cy.get('body').trigger('keydown', {keyCode: 39})
    cy.get('#winner').should('contain', 'Left player wins')
  })
  
  it('Scissors win over Paper', () => {
    cy.get('#start-game').click()
    cy.get('body').trigger('keydown', {keyCode: 50})
    cy.get('body').trigger('keydown', {keyCode: 39})
    cy.get('#winner').should('contain', 'Right player wins')
  })
  
  it('Paper wins over Rock', () => {
    cy.get('#start-game').click()
    cy.get('body').trigger('keydown', {keyCode: 50})
    cy.get('body').trigger('keydown', {keyCode: 37})
    cy.get('#winner').should('contain', 'Left player wins')
  })
  
  it('Identicals picks result in a tie', () => {
    cy.get('#start-game').click()
    cy.get('body').trigger('keydown', {keyCode: 49})
    cy.get('body').trigger('keydown', {keyCode: 37})
    cy.get('#winner').should('contain', 'Tie')
  })
})