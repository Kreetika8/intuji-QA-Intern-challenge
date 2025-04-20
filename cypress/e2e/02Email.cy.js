beforeEach(() => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });
});

describe("Email Entry", () => {
  it("Valid Email Entry", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get("#userEmail").type("Kreetika@gmail.com");
    cy.get("#userEmail").should("have.value", "Kreetika@gmail.com");
    cy.get("#submit").click();
    cy.get("#userEmail").should("not.have.class", "field-error");
  });

  it("Invalid Email Entry", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get("#userEmail").type("john@gmail");
    cy.get("#userEmail").should("have.value", "john@gmail");
    cy.get("#submit").click();
    cy.get("#userEmail").then(($input) => {
    expect($input[0].checkValidity()).to.be.false;
    });
    cy.get("#userEmail").clear().type("kreetika.com");
    cy.get("#userEmail").should("have.value", "kreetika.com");
    cy.get("#submit").click();
    cy.get("#userEmail").then(($input) => {
    expect($input[0].checkValidity()).to.be.false;
    });
  });

  it("Clears Email Field and Shows Placeholder", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get("#userEmail").type("Kreetika@gmail.com").clear();
    cy.get("#userEmail").should("have.attr", "placeholder", "name@example.com");
  });
});
