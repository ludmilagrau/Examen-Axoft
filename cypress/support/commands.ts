/// <reference types="cypress" />

//Se crea un custom command para que tomar elementos con el atributo data-testid no tenga tanta longitud y sea más fácil de leer.
Cypress.Commands.add('dataId', (value) => {
    return cy.get(`[data-testid=${value}]`)
})

//Se crea un custom command con el login a codedamn para no repetir código.
Cypress.Commands.add('codedamnLogin', (username, password) => {
    //Se ingresa a Codedamn.
    cy.visit('https://codedamn.com'); 
    //Se hace click en el boton de Login.
    cy.get('a > .inline-flex').click();
    //Se verifica que efectivamente nos encontremos en la pantalla de Login.
    cy.url().should('include', 'login');
    //Se tipea el usuario.
    cy.dataId('username').type(username);
    //Se tipea la contraseña.
    cy.dataId('password').type(password);
    //Se hace click en el boton para loguearse.
    cy.dataId('login').click();
})