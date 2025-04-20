beforeEach(() => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });
});

describe ("Full Name",()=>{

  it("valid first name entry", () => {
  cy.visit("https://demoqa.com/automation-practice-form");
  cy.get("#firstName").type("Kreetika").should("have.value","Kreetika");
  })

  it("Invalid first name entry", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get("#submit").click();
    cy.get("#firstName").then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
    })

    it("Clear first name entry", () => {
      cy.visit("https://demoqa.com/automation-practice-form");
      cy.get("#firstName").type("Kreetika").should("have.value","Kreetika");
      cy.get("#firstName").clear();
      cy.get("#firstName").should("have.value", "");
      cy.get("#firstName").should("have.attr", "placeholder", "First Name");
      })

  
    it("valid last name entry", () => {
      cy.visit("https://demoqa.com/automation-practice-form");
      cy.get("#lastName").type("Bhetuwal").should("have.value","Bhetuwal");
      })


      it("Invalid last name entry", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.get("#submit").click();
        cy.get("#lastName").then(($input) => {
          expect($input[0].checkValidity()).to.be.false;
        });
      })

      it("Clear last name entry", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.get("#lastName").type("Bhetuwal").should("have.value","Bhetuwal");
        cy.get("#lastName").clear();
        cy.get("#lastName").should("have.value", "");
        cy.get("#lastName").should("have.attr", "placeholder", "Last Name");
        })

})

