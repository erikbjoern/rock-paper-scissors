describe('Static content is visible', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Score limit', () => {
    cy.get('[data-cy=score-limit]')
      .should('be.visible')
      .should('contain', `First to 3 wins!`)
  })

  it('Hotkeys', () => {
    cy.get('[data-cy=l-hotkeys]')
      .should('be.visible')
      .should('contain', 'Hotkeys')
    cy.get('[data-cy=r-hotkeys]')
      .should('be.visible')
      .should('contain', 'Hotkeys')
  })
})
