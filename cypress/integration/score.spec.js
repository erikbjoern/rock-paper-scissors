describe("Score", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=start-btn]").click();
  });

  it("is initially set to 0 - 0", () => {
    cy.get("[data-cy=l-score]").should("contain", 0);
    cy.get("[data-cy=r-score]").should("contain", 0);
  });

  it("increases by 1 for winner", () => {
    cy.playerKeypress("left", "rock");
    cy.playerKeypress("right", "scissors");
    
    cy.get("[data-cy=l-score]").should("contain", 1);
  });
});