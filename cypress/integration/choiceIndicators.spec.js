describe("Choice indicators", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('"Make a choice!" appears for each player when countdown starts', () => {
    cy.get("[data-cy=l-make-choice]").should("not.exist");
    cy.get("[data-cy=r-make-choice]").should("not.exist");
    cy.get("[data-cy=start-btn]").click();
    cy.get("[data-cy=l-make-choice]").should("not.exist");
    cy.get("[data-cy=r-make-choice]").should("not.exist");
    cy.get("[data-cy=countdown]").should("contain", "rock");
    cy.get("[data-cy=l-make-choice]").should("be.visible");
    cy.get("[data-cy=r-make-choice]").should("be.visible");
  });

  it('"Make a choice!" disappears when the player makes a choice', () => {
    cy.get("[data-cy=start-btn]").click();
    cy.playerKeypress("left", "scissors");
    cy.get("[data-cy=l-make-choice]").should("not.exist");
    cy.get("[data-cy=r-make-choice]").should("be.visible");
    cy.playerKeypress("right", "paper");
    cy.get("[data-cy=r-make-choice]").should("not.exist");
  });

  it('"Too slow!" appears for any player who does not make a choice in time', () => {
    cy.get("[data-cy=start-btn]").click();
    cy.playerKeypress("left", "scissors");
    cy.get("[data-cy=l-slow]").should("not.exist");
    cy.get("[data-cy=r-slow]").should("be.visible");

    cy.playerKeypress("right", "scissors");
    cy.get("[data-cy=l-slow]").should("be.visible");
    cy.get("[data-cy=r-slow]").should("not.exist");
  });
});
