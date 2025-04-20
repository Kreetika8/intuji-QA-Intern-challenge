describe("Select Hobby", () => {
  beforeEach(() => {
    // Ignore any uncaught JS errors from the site
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false; // prevents Cypress from failing the test
    });
  });

  it("Select Hobby", () => {
    cy.visit("https://demoqa.com/automation-practice-form");

    //select a hobby
    cy.contains("label.custom-control-label", "Sports")
      .click()
      .then(() => {
        cy.get("#hobbies-checkbox-1").should("be.checked");
      });

    //select another hobby
    cy.contains("label.custom-control-label", "Reading")
      .click()
      .then(() => {
        cy.get("#hobbies-checkbox-2").should("be.checked");
      });

    // Clear hobby
    cy.contains("label.custom-control-label", "Sports")
      .click()
      .then(() => {
        cy.get("#hobbies-checkbox-1").should("not.be.checked");
      });

    cy.contains("label.custom-control-label", "Reading")
      .click()
      .then(() => {
        cy.get("#hobbies-checkbox-2").should("not.be.checked");
      });
  });
});
