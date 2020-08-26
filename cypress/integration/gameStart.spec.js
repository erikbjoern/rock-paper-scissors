describe('Players start the game by clicking the "Start!" button', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("which then disappears and starts the countdown", () => {
    cy.get("[data-cy=start-btn]").contains("Start!").click();
    cy.get("[data-cy=start-btn]").should("not.exist");
    cy.get("[data-cy=countdown]").should("contain", "Get ready!");
  });

  describe("New game can be started after a complete set", () => {
    it("and button says 'Play again!'", () => {
      cy.get("[data-cy=start-btn]").click();
      cy.gameRoundWhereWinnerIs("left");
      cy.get("[data-cy=start-btn]").should("not.exist");
      cy.gameRoundWhereWinnerIs("left");
      cy.gameRoundWhereWinnerIs("left");
      cy.get("[data-cy=start-btn]").contains("Play again!").click();
      cy.get("[data-cy=start-btn]").should("not.exist");
      cy.get("[data-cy=countdown]").should("contain", "Get ready!");
    });
  });
});
