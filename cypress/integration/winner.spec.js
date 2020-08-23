describe("Winner", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=start-btn]").click();
  });

  it("is determined automatically each round and after a set", () => {
    cy.gameRoundWhereWinnerIs("left");
    cy.get("[data-cy=winner]").should("contain", "Left player wins!");

    cy.gameRoundWhereWinnerIs("right");
    cy.get("[data-cy=winner]").should("contain", "Right player wins!");

    cy.gameRoundWhereWinnerIs("left");
    cy.get("[data-cy=winner]").should("contain", "Left player wins!");

    cy.gameRoundWhereWinnerIs("left");
    cy.get("[data-cy=winner]").should("contain", "Left player wins!");
    cy.get("[data-cy=winner]").should("contain", "Left player wins it all!");
  });
});
