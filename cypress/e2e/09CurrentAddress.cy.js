beforeEach(() => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });
});

describe("Current Address", () => {
  it("Enter Current Address and clear it ", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    //enter addres
    const address = "Tokha-12";
    cy.get("#currentAddress").type(address);
    cy.get("#currentAddress").should("have.value", address);
    //clear it
    cy.get("#currentAddress").clear();
    cy.get("#currentAddress").should("have.value", "");
    cy.get("#currentAddress").should("have.attr", "placeholder");
  });
});
