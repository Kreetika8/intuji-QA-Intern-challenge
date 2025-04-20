beforeEach(() => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });
});

describe("Mobile Number Entry", () => {
  it("Enter valid 10-digit mobile number", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get("#userNumber").type("9876543210");
    cy.get("#userNumber").should("have.value", "9876543210");
    cy.get("#submit").click();
    cy.get("#userNumber").then(($input) => {
      expect($input[0].checkValidity()).to.be.true;
    });
  });

  it("Should show error for mobile number with fewer than 10 digits", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get("#userNumber").type("123456789");
    cy.get("#submit").click();
    cy.get("#userNumber").then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      expect($input[0].validationMessage).to.contain("at least 10 characters");
    });
  });

  it("Should not allow more than 10 digits in mobile number field", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get("#userNumber").type("123456789012345");
    cy.get("#userNumber").should("have.value", "1234567890");
    cy.get("#submit").click();
    cy.get("#userNumber").then(($input) => {
      expect($input[0].checkValidity()).to.be.true;
    });
  });

  it("Should clear the mobile number and show the placeholder", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get("#userNumber").type("9876543210");
    cy.get("#userNumber").clear();
    cy.get("#userNumber").should("have.value", "");
    cy.get("#userNumber").should("have.attr", "placeholder", "Mobile Number");
  });
});
