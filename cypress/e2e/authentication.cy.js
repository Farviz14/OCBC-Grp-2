describe('authentication', () => {
  it('wrong username and password.', () => {
    cy.visit('http://localhost:3000/banking-app')
    cy.get('#loginbtn').click();

    cy.get('div[class="notif danger"]').contains('Wrong username and password.').should('exist')

  })
})

describe('Incorrect password for admin login', () => {
  it('Wrong username and password.', () => {
    cy.visit('http://localhost:3000/banking-app')
    cy.get('#username').type("admin@admin.com");
    cy.get('#password').type("12345");
    cy.get('#loginbtn').click();



    cy.get('div[class="notif danger"]').contains('Wrong username and password.').should('exist')

  })
})

describe('Incorrect username for admin login', () => {
  it('Wrong username and password.', () => {
    cy.visit('http://localhost:3000/banking-app')
    cy.get('#username').type("ererferferef");
    cy.get('#password').type("12345");
    cy.get('#loginbtn').click();



    cy.get('div[class="notif danger"]').contains('Wrong username and password.').should('exist')

  })
})

describe('Incorrect password for client login', () => {
  it('Wrong username and password.', () => {
    cy.visit('http://localhost:3000/banking-app')
    cy.get('#username').type("client@client.com");
    cy.get('#password').type("abc12323");
    cy.get('#loginbtn').click();

    cy.get('div[class="notif danger"]').contains('Wrong username and password.').should('exist')

  })
})

describe('Incorrect username for client login', () => {
  it('Wrong username and password.', () => {
    cy.visit('http://localhost:3000/banking-app')
    cy.get('#username').type("cliqw2ent@client.com");
    cy.get('#password').type("abc123");
    cy.get('#loginbtn').click();



    cy.get('div[class="notif danger"]').contains('Wrong username and password.').should('exist')

  })
})

describe('Successful admin login', () => {
  it('Wrong username and password.', () => {
    cy.visit('http://localhost:3000/banking-app')
    cy.get('#username').type("admin@admin.com");
    cy.get('#password').type("abc123");
    cy.get('#loginbtn').click();



    cy.contains('Create Account').should('exist');
 

  })
})

describe('Successful client login', () => {
  it('Wrong username and password.', () => {
    cy.visit('http://localhost:3000/banking-app')
    cy.get('#username').type("client@client.com");
    cy.get('#password').type("abc123");
    cy.get('#loginbtn').click();



    cy.contains('Budget App').should('exist');
 

  })
})

/*added*/


