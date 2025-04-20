import "cypress-file-upload";

beforeEach(() => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });
});

describe("Full Name", () => {
  it("Form submit by filling all valid details", () => {
    cy.visit("https://demoqa.com/automation-practice-form");

    //name
    cy.get("#firstName").type("Kreetika").should("have.value", "Kreetika");
    cy.get("#lastName").type("Bhetuwal").should("have.value", "Bhetuwal");

    //email
    cy.get("#userEmail").type("Kreetika@gmail.com");
    cy.get("#userEmail").should("have.value", "Kreetika@gmail.com");

    //gender
    cy.get("label[for='gender-radio-1']").click();
    cy.get("input#gender-radio-1").should("be.checked");
    cy.get("input#gender-radio-2").should("not.be.checked");
    cy.get("input#gender-radio-3").should("not.be.checked");

    //mobile number
    cy.get("#userNumber").type("9876543210");
    cy.get("#userNumber").should("have.value", "9876543210");

    //dob
    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__year-select").select("2002");
    cy.get(".react-datepicker__month-select").select("April");
    cy.contains(".react-datepicker__day--006", "6").click();
    cy.get("#dateOfBirthInput").should("have.value", "06 Apr 2002");

    //subjects
    cy.get(".subjects-auto-complete__value-container").click().type("hi");
    cy.contains(".subjects-auto-complete__option", "Hindi")
      .should("be.visible")
      .click();
    cy.get(".subjects-auto-complete__multi-value__label").should(
      "contain.text",
      "Hindi"
    );

    //hobbies
    cy.contains("label.custom-control-label", "Sports")
      .click()
      .then(() => {
        cy.get("#hobbies-checkbox-1").should("be.checked");
      });

    //picture
    cy.get("input#uploadPicture").attachFile("image.jpg");
    cy.wait(1000);

    cy.get("input#uploadPicture").then((input) => {
      const fileName = input[0].files[0].name;
      expect(fileName).to.equal("image.jpg");
    });

    //current address
    const address = "Tokha-12";
    cy.get("#currentAddress").type(address);
    cy.get("#currentAddress").should("have.value", address);

    //state and city
    cy.get("#state").click();
    cy.get(".css-1n7v3ny-option", { timeout: 10000 })
      .should("exist")
      .and("be.visible");
    cy.get("body").then(($body) => {
      if ($body.find('.css-1n7v3ny-option:contains("Haryana")').length > 0) {
        cy.contains(".css-1n7v3ny-option", "Haryana").click();
      }
      else {
        cy.get("#state input").type("Haryana").type("{enter}");
      }
    });
    cy.get("#state").within(() => {
      cy.get(".css-1uccc91-singleValue").should("contain", "Haryana");
    });
    cy.get("#city").should("not.be.disabled").click();
    cy.get("body").then(($body) => {
      if ($body.find('.css-1n7v3ny-option:contains("Panipat")').length > 0) {
        cy.contains(".css-1n7v3ny-option", "Panipat").click();
      }
      else {
        cy.get("#city input").type("Panipat{enter}");
      }
    });
    cy.get("#city").within(() => {
      cy.get(".css-1uccc91-singleValue").should("contain", "Panipat");
    });

    //click submit
    cy.get("#submit").click();
    cy.get(".modal-content").should("be.visible");
  });
});
