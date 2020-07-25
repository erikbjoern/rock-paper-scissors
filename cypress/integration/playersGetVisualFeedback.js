describe('Players should see', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('a button to start the game timer', () => {
     cy.get('#start-game').should('contain', 'Start!')
  })

  it('a timer countdown', () => {
    cy.get('#start-game').click()
    cy.get('#countdown').should('be.visible')
  })
  
  it('the timer ticking', () => {
    cy.get('#start-game').click()
    cy.get('#countdown').should('contain', 'rock')
    cy.wait(1000)
    cy.get('#countdown').should('contain', 'paper')
    cy.wait(1000)
    cy.get('#countdown').should('contain', 'scissors')
  })

  it('a representation of left player', () => {
    cy.get('#leftPlayer').should('be.visible')
  })

  it('a representation of right player', () => {
    cy.get('#rightPlayer').should('be.visible')
  })

  it("left player's choice after countdown", () => {
    cy.get('#start-game').click()
    cy.get('body').trigger('keydown', { keyCode: 49 })
    cy.get('body').trigger('keydown', { keyCode: 39 })
    cy.wait(4000)
    cy.get('#leftPlayerChoice').should('be.visible')
  })

  it("right player's choice after countdown", () => {
    cy.get('#start-game').click()
    cy.get('body').trigger('keydown', { keyCode: 49 })
    cy.get('body').trigger('keydown', { keyCode: 39 })
    cy.wait(4000)
    cy.get('#rightPlayerChoice').should('be.visible')
  })
  
  it('the winner after countdown', () => {
    cy.get('#start-game').click()
    cy.get('body').trigger('keydown', { keyCode: 49 })
    cy.get('body').trigger('keydown', { keyCode: 39 })
    cy.wait(4000)
    cy.get('#winner').should('contain', 'Left player wins')
  })
  
  it("left player's score", () => {
    cy.get('#leftPlayerScore').should('contain', '0')
  })
  
  it("right player's score", () => {
    cy.get('#rightPlayerScore').should('contain', '0')
  })

  it("winner's score increase", () => {
    cy.get('#start-game').click()
    cy.get('body').trigger('keydown', { keyCode: 49 })
    cy.get('body').trigger('keydown', { keyCode: 39 })
    cy.wait(5000)
    cy.get('#leftPlayerScore').should('contain', '1')
  })

  it('the score limit', () => {
    cy.get('#score-limit').should('contain', 'First to 10 wins!')
  })

  it('the hotkeys to use', () => {
    cy.get('.hotkeysSheet').should('be.visible')
  })
})