/* 
6. Escribir un script que abra la página de Google, ingrese un término de búsqueda y
verifique que los resultados de búsqueda se muestren correctamente.
*/

describe('Ejercicio 6', () => {
  it('Ingresando a Google', () => {
    //Se ingresa a Google.
    cy.visit('https://google.com');
    //Se tipea una búsqueda y se presiona enter.
    cy.get('#APjFqb').type('how to write a test in cypress{enter}');
    //Se verifica que se muestren los resultados de búsqueda.
    cy.get('.MjjYud').should('exist') 
    //Se verifica que los resultados mostrados coincidan con la búsqueda.
    .and('include.text', 'cypress', {matchCase: false})
    .and('include.text', 'test', {matchCase: false}); 
  })
})
