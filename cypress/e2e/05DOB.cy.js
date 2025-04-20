beforeEach(() => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });
});

describe("DOB", () => {
  it("should accept valid past date of birth", () => {
    cy.visit("https://demoqa.com/automation-practice-form");

    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__year-select").select("2002");
    cy.get(".react-datepicker__month-select").select("April");
    cy.contains(".react-datepicker__day--006", "6").click();
    cy.get("#submit").click();
    cy.get("#dateOfBirthInput").should("have.value", "06 Apr 2002");
  });

  it("should not accept future date of birth", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__year-select").select("2030");
    cy.get(".react-datepicker__month-select").select("April");
    cy.contains(".react-datepicker__day--006", "6").click();
    cy.get("#submit").click();
    cy.get("#dateOfBirthInput").should("have.class", "is-invalid"); 
    // OR
    cy.get("#dateOfBirthInput")
      .parent()
      .find(".error")
      .should("contain", "Date of birth cannot be in the future"); 
  });
});
