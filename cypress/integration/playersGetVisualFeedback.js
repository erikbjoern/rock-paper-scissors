describe('Players should see', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#start-button').click()
  })

  it('a timer countdown', () => {
    cy.get('#countdown').should('be.visible')
  })
  
  it('the timer ticking', () => {
    cy.get('#countdown').should('contain', 'rock')
    cy.wait(1000)
    cy.get('#countdown').should('contain', 'paper')
    cy.wait(1000)
    cy.get('#countdown').should('contain', 'scissors')
  })

  it('a representation of left player', () => {
    cy.get('#left-player').should('be.visible')
  })

  it('a representation of right player', () => {
    cy.get('#right-player').should('be.visible')
  })

  it('a call to make a choice until a choice is made', () => {
    cy.get("#left-player").within(() => {
      cy.get('.make-a-choice').should('contain', 'make a choice!')
    })
    cy.get('body').trigger('keydown', { keyCode: 49 })
    cy.get("#left-player").within(() => {
      cy.get('.make-a-choice').should('not.be.visible')
    })
  })

  it("left player's choice after countdown", () => {
    cy.get('body').trigger('keydown', { keyCode: 49 })
    cy.get('body').trigger('keydown', { keyCode: 39 })
    cy.wait(4000)
    cy.get('#left-playerChoice').should('be.visible')
  })

  it("right player's choice after countdown", () => {
    cy.get('body').trigger('keydown', { keyCode: 49 })
    cy.get('body').trigger('keydown', { keyCode: 39 })
    cy.wait(4000)
    cy.get('#right-playerChoice').should('be.visible')
  })
  
  it('the winner after countdown', () => {
    cy.get('body').trigger('keydown', { keyCode: 49 })
    cy.get('body').trigger('keydown', { keyCode: 39 })
    cy.wait(4000)
    cy.get('#winner').should('contain', 'Left player wins')
  })

  it('feedback when not making a choice', () => {
    cy.get('body').trigger('keydown', { keyCode: 39 })
    cy.get('.slow-left').should('contain', 'too slow!')
  })
  
  it("left player's score", () => {
    cy.get('#leftScore').should('contain', '0')
  })
  
  it("right player's score", () => {
    cy.get('#rightScore').should('contain', '0')
  })

  it("winner's score increase", () => {
    cy.get('body').trigger('keydown', { keyCode: 49 })
    cy.get('body').trigger('keydown', { keyCode: 39 })
    cy.wait(5000)
    cy.get('#leftScore').should('contain', '1')
  })

  it('the score limit', () => {
    cy.get('#scoreLimit').should('contain', 'First to 3 wins!')
  })

  it('the hotkeys to use', () => {
    cy.get('.hotkeysSheet').should('be.visible')
  })
})