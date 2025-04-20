beforeEach(() => {
  Cypress.on("uncaught:exception", () => false); // prevent site errors from failing test
});

describe("Enter Subjects", () => {
  it("Enter single subject", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get(".subjects-auto-complete__value-container").click().type("hi");
    cy.contains(".subjects-auto-complete__option", "Hindi") .should("be.visible").click();
    cy.get(".subjects-auto-complete__multi-value__label").should("contain.text", "Hindi");
  });


  it("Enter multiple subjects", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get(".subjects-auto-complete__value-container").click().type("hi");
    cy.contains(".subjects-auto-complete__option", "Hindi").should("be.visible").click();
    cy.get(".subjects-auto-complete__multi-value__label").should("contain.text", "Hindi");
    cy.get(".subjects-auto-complete__value-container").click().type("en");
    cy.contains(".subjects-auto-complete__option", "English").should("be.visible").click();
    cy.get(".subjects-auto-complete__multi-value__label").should("contain.text", "English");
  });

  it("Clear subject", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get(".subjects-auto-complete__value-container").click().type("hi");
    cy.contains(".subjects-auto-complete__option", "Hindi") .should("be.visible").click();
    cy.get(".subjects-auto-complete__multi-value__label").should("contain.text", "Hindi");
    cy.get(".subjects-auto-complete__multi-value__remove").click();
    cy.get(".subjects-auto-complete__multi-value__label").should("not.exist");

  });

});
