beforeEach(() => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});

describe("Full Name", () => {
  it("Form  with placeholder checks", () => {
    cy.visit("https://demoqa.com/automation-practice-form");

    cy.get("#firstName").should("have.attr", "placeholder", "First Name");
    cy.get("#lastName").should("have.attr", "placeholder", "Last Name");
    cy.get("#userEmail").should("have.attr", "placeholder", "name@example.com");
    cy.get("#userNumber").should("have.attr", "placeholder", "Mobile Number");
    cy.get("#currentAddress").should("have.attr", "placeholder", "Current Address");

    cy.get(".subjects-auto-complete__value-container input")
      .should("have.attr", "placeholder", "Subjects")

  })
})