/* 
7. Escribir un script que inicie sesión en una aplicación web y verifique que el usuario
haya iniciado sesión correctamente.
*/

describe('Ejercicio 7', () => {
  it('Login en code damn', () => {
    //Se utiliza el comando de Login.
    cy.codedamnLogin('testeando', 'Prueba.1233');
    //Verificamos que nos redirija a la pantalla de dashboard.
    cy.url().should('contain', 'dashboard');
    //Verificamos que el mensaje de bienvenida post-logueo se muestre correctamente.
    cy.contains('Hello Test!').should('exist');
  })
})
