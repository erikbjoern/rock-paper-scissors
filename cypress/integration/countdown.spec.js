describe("Countdown", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=start-btn]").click();
  });

  it('starts with "Get ready!" and then counts down with "rock, paper, scissors"', () => {
    cy.get("[data-cy=countdown").then((p) => {
      expect(p.text()).to.match(/Get ready!/);
    });
    cy.get("[data-cy=countdown")
      .should("contain", "rock")
      .then((p) => {
        expect(p.text()).to.match(/rock/);
      });
    cy.get("[data-cy=countdown")
      .should("contain", "paper")
      .then((p) => {
        expect(p.text()).to.match(/rockpaper/);
      });
    cy.get("[data-cy=countdown")
      .should("contain", "scissors")
      .then((p) => {
        expect(p.text()).to.match(/rockpaperscissors/);
      });
  });

  it("is displayed in compact format on smaller viewport", () => {
    cy.viewport(700, 500);
    cy.get("[data-cy=countdown")
      .should("contain", "rock")
      .then((p) => {
        expect(p.text()).to.match(/rock/);
      });
    cy.get("[data-cy=countdown")
      .should("contain", "paper")
      .then((p) => {
        expect(p.text()).to.match(/paper/);
      });
    cy.get("[data-cy=countdown")
      .should("contain", "scissors")
      .then((p) => {
        expect(p.text()).to.match(/scissors/);
      });
  });
});
