describe("Player choices are visually represented by hands", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("initially by rock for both players", () => {
    cy.get("[data-cy=l-hand]")
      .should("have.attr", "src")
      .should("include", "leftrock");
    cy.get("[data-cy=r-hand]")
      .should("have.attr", "src")
      .should("include", "rightrock");
  });

  describe("after the countdown, by their choice", () => {
    beforeEach(() => {
      cy.get("[data-cy=start-btn").click();
      cy.get("[data-cy=countdown]").contains("rock");
    });

    it("Key 1 for left hand rock", () => {
      cy.get("body").trigger("keydown", { keyCode: 49 });

      cy.get("[data-cy=l-hand]")
        .should("have.attr", "src")
        .should("include", "leftrock");
    });

    it("Key 2 for left hand paper", () => {
      cy.get("body").trigger("keydown", { keyCode: 50 });

      cy.get("[data-cy=l-hand]")
        .should("have.attr", "src")
        .should("include", "leftpaper");
    });

    it("Key 3 for left hand scissors", () => {
      cy.get("body").trigger("keydown", { keyCode: 51 });

      cy.get("[data-cy=l-hand]")
        .should("have.attr", "src")
        .should("include", "leftscissors");
    });

    it("Key arrow-left for right hand rock", () => {
      cy.get("body").trigger("keydown", { keyCode: 37 });

      cy.get("[data-cy=r-hand]")
        .should("have.attr", "src")
        .should("include", "rightrock");
    });

    it("Key arrow-up for right hand paper", () => {
      cy.get("body").trigger("keydown", { keyCode: 38 });

      cy.get("[data-cy=r-hand]")
        .should("have.attr", "src")
        .should("include", "rightpaper");
    });

    it("Key arrow-right for right hand scissors", () => {
      cy.get("body").trigger("keydown", { keyCode: 39 });

      cy.get("[data-cy=r-hand]")
        .should("have.attr", "src")
        .should("include", "rightscissors");
    });
  });
});
