describe.only("Score", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=start-btn]").click();
  });

  it("is initially set to 0 - 0", () => {
    cy.get("[data-cy=l-score]").should("contain", 0);
    cy.get("[data-cy=r-score]").should("contain", 0);
    cy.get("[data-cy=l-set-score]").should("contain", 0);
    cy.get("[data-cy=r-set-score]").should("contain", 0);
  });

  it("increases by 1 for winner", () => {
    cy.playerKeypress("left", "rock");
    cy.playerKeypress("right", "scissors");
    
    cy.get("[data-cy=l-score]").should("contain", 1);
  });

  it("after a set, the winner's set score increases by 1", () => {
    cy.gameRoundWhereWinnerIs('left')
    cy.gameRoundWhereWinnerIs('left')
    cy.gameRoundWhereWinnerIs('left')

    cy.get("[data-cy=l-set-score").should("contain", 1)
  })
});