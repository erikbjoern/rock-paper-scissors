describe("Players cannot see", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('left player choice', () => {
    cy.get('body').trigger('keydown', {keyCode: 49})
    cy.get('input#leftChoice').should('not.exist')
  })

  it('right player choice', () => {
    cy.get('body').trigger('keydown', {keyCode: 39})
    cy.get('input#rightChoice').should('not.exist')
  })

  it("Hidden 'rock' wins over hidden 'scissors'", () => {
    cy.get('#start-game').click()
    cy.get('body').trigger('keydown', {keyCode: 49})
    cy.get('body').trigger('keydown', {keyCode: 39})
    cy.get('#winner').should('contain', 'Left player wins')
  })

})