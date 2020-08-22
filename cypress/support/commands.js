// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("playerKeypress", (player, choice) => {
  let key;
  switch (choice) {
    case "rock":
      key = { keyCode: player === "right" ? 37 : 49 };
      break;
    case "paper":
      key = { keyCode: player === "right" ? 38 : 50 };
      break;
    case "scissors":
      key = { keyCode: player === "right" ? 39 : 51 };
      break;
    default:
      break;
  }

  cy.get("[data-cy=countdown]").contains("rock");
  cy.get("body").trigger("keydown", key);
});

Cypress.Commands.add("gameRoundWhereWinnerIs", (player) => {
  cy.playerKeypress(player, "rock");
  cy.playerKeypress(player === "right" ? "left" : "right", "scissors");
  cy.get("[data-cy=winner]").contains("!");
});
