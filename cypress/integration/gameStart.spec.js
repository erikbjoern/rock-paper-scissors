describe('Players start the game by clicking the "Start!" button', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("which then disappears and starts the countdown", () => {
    cy.get("[data-cy=start-btn]").click();
    cy.get("[data-cy=start-btn]").should("not.exist");
    cy.get("[data-cy=countdown]").should("contain", "Get ready!");
  });

  it("New game can be started after a complete set", () => {
    cy.get("[data-cy=start-btn]").click();
    cy.gameRoundWhereWinnerIs("left");
    cy.get("[data-cy=start-btn]").should("not.exist");
    cy.gameRoundWhereWinnerIs("left");
    cy.gameRoundWhereWinnerIs("left");
    cy.get("[data-cy=start-btn]").click();
    cy.get("[data-cy=start-btn]").should("not.exist");
    cy.get("[data-cy=countdown]").should("contain", "Get ready!");
  });
});
