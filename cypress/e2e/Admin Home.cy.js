describe('Create new account', () => {
  it('create new account', () => {
    cy.visit('http://localhost:3000/banking-app')
    cy.get('#username').type('jeff@gmail.com');
    cy.get('#password').type('abc123');
    cy.get('#loginbtn').click();
    cy.contains('Create Account').click();
    cy.get('#fullname').type("newuser");
    cy.get('#balance').type("10000");
    cy.get('#email').type("newuser@gmail.com");
    cy.get('#password').type("abc123");
    cy.get('#add').click();
    cy.contains('Successfully saved').should('exist');
  });
});