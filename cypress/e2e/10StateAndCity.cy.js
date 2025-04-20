beforeEach(() => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });
});

describe("State Selection Test", () => {
  it("should select  state and then city ", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    // Click to open the state dropdown
    cy.get("#state").click();
    // Wait for dropdown to fully render
    cy.get(".css-1n7v3ny-option", { timeout: 10000 })
      .should("exist")
      .and("be.visible");
    // Alternative selection methods with fallbacks
    cy.get("body").then(($body) => {
      // Method 1: Direct text match
      if ($body.find('.css-1n7v3ny-option:contains("Haryana")').length > 0) {
        cy.contains(".css-1n7v3ny-option", "Haryana").click();
      }
      // Method 2: Input typing fallback
      else {
        cy.get("#state input").type("Haryana").type("{enter}");
      }
    });
    // Verify selection
    cy.get("#state").within(() => {
      cy.get(".css-1uccc91-singleValue").should("contain", "Haryana");
    });
    // Wait for city dropdown to be enabled (depends on state selection)
    cy.get("#city").should("not.be.disabled").click();
    // Select Panipat (with multiple fallback methods)
    cy.get("body").then(($body) => {
      // Method 1: Direct option click
      if ($body.find('.css-1n7v3ny-option:contains("Panipat")').length > 0) {
        cy.contains(".css-1n7v3ny-option", "Panipat").click();
      }
      // Method 2: Type and select
      else {
        cy.get("#city input").type("Panipat{enter}");
      }
    });
    // Verify city selection
    cy.get("#city").within(() => {
      cy.get(".css-1uccc91-singleValue").should("contain", "Panipat");
    });
  });


  //should not allow selecting a city without selecting a state
  it("should not allow selecting a city without selecting a state", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
      cy.get("#city").click({ force: true });
      cy.get("body").then(($body) => {
      const optionsExist = $body.find('.css-1n7v3ny-option:contains("Panipat")').length > 0;
      expect(optionsExist).to.be.false;
    });
      cy.get("#city").within(() => {
      cy.get("input").should("have.value", "");
    });
  });
  
});
