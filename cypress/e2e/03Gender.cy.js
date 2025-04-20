/// <reference types="Cypress" />

describe ("Verify Gender", ()=>{
  
  beforeEach(() => {
    // Ignore any uncaught JS errors from the site
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // prevents Cypress from failing the test
    });
  });

  it("Checking Gender Radio Buttons",()=>{

    cy.visit("https://demoqa.com/automation-practice-form")

    //visibility
    cy.get("label[for='gender-radio-1']").should('be.visible')
    cy.get("label[for='gender-radio-2']").should('be.visible')
    cy.get("label[for='gender-radio-3']").should('be.visible')

    //selecting male
    cy.get("label[for='gender-radio-1']").click()
    cy.get("input#gender-radio-1").should('be.checked')
    cy.get("input#gender-radio-2").should('not.be.checked')
    cy.get("input#gender-radio-3").should('not.be.checked')
    //selecting female
    cy.get("label[for='gender-radio-2']").click()
    cy.get("input#gender-radio-1").should('not.be.checked')
    cy.get("input#gender-radio-2").should('be.checked')
    cy.get("input#gender-radio-3").should('not.be.checked')
  });


  })