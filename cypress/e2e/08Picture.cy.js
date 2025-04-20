import 'cypress-file-upload';

beforeEach(() => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });
});

describe ("Picture",()=>{

  it("valid picture format", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
  
    cy.get('input#uploadPicture').attachFile('image.jpg');
    cy.wait(5000);

    cy.get('input#uploadPicture').then(input => {
      const fileName = input[0].files[0].name;
      expect(fileName).to.equal('image.jpg');
    });
  });

  it("replace image uploaded", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
  
    cy.get('input#uploadPicture').attachFile('image.jpg');
    cy.wait(5000);

    cy.get('input#uploadPicture').then(input => {
      const fileName = input[0].files[0].name;
      expect(fileName).to.equal('image.jpg');
    });
    cy.get('input#uploadPicture').attachFile('image2.jpg');
    cy.wait(5000);

    cy.get('input#uploadPicture').then(input => {
      const fileName = input[0].files[0].name;
      expect(fileName).to.equal('image2.jpg');
    });
  });

  it("Invalid picture format", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
  
    cy.get('input#uploadPicture').attachFile('pdf.pdf');

  // Check that no file is actually uploaded
  cy.get('input#uploadPicture').should(input => {
    expect(input[0].files.length).to.eq(0); // file not accepted
  });


  });

})