describe('Game rules',  () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#start-button').click()
  })

  it('Rock wins over Scissors', () => {
    cy.get('body').trigger('keydown', { keyCode: 49 })
    cy.get('body').trigger('keydown', { keyCode: 39 })
    cy.get('#winner').should('contain', 'Left player wins')
  })
  
  it('Scissors win over Paper', () => {
    cy.get('body').trigger('keydown', { keyCode: 50 })
    cy.get('body').trigger('keydown', { keyCode: 39 })
    cy.get('#winner').should('contain', 'Right player wins')
  })
  
  it('Paper wins over Rock', () => {
    cy.get('body').trigger('keydown', { keyCode: 50 })
    cy.get('body').trigger('keydown', { keyCode: 37 })
    cy.get('#winner').should('contain', 'Left player wins')
  })
  
  it('Identical choices result in a tie', () => {
    cy.get('body').trigger('keydown', { keyCode: 49 })
    cy.get('body').trigger('keydown', { keyCode: 37 })
    cy.get('#winner').should('contain', 'Tie')
  })

  it('no choices results in a tie', () => {
    cy.get('#winner').should('contain', 'Tie')
  })
  
  it("a player who doesn't make a choice in time looses (left wins)", () => {
    cy.get('body').trigger('keydown', {  keyCode: 49  })
    cy.get('#winner').should('contain', 'Left player wins')
  })
  
  it("a player who doesn't make a choice in time looses (right wins)", () => {
    cy.get('body').trigger('keydown', {  keyCode: 37  })
    cy.get('#winner').should('contain', 'Right player wins')
  })
})