/* 
9. Escribir un script que verifique que se pueda completar y enviar un formulario en
una página web.
10. Escribir un script que verifique que un mensaje de error se muestre cuando se
intenta enviar un formulario con campos obligatorios vacíos.
*/

describe('Ejercicios 9 y 10', () => {
  beforeEach(() => {
    //Se inicia sesión.
    cy.codedamnLogin('testeando', 'Prueba.1233');
    //Se setea una espera de 6 segundos para que termine de cargar la web.
    cy.wait(6000);
    //Se hace click en el ícono de usuario para abrir el menú.
    cy.get('.aspect-1').click();
    //Se hace click en la opción de Get Help.
    cy.get('[href="/contact"]').click();
    //Se verifica que nos redirija a la sección de Contacto.
    cy.url().should('contain', 'contact');
    //Se setea una espera de 6 segundos para que aparezca el pop-up del chat.
    cy.wait(6000);
    //Se hace click en el boton para cerrar el pop-up del chat.
    cy.get('.cc-imbb').click();
    //Se tipea el asunto del formulario.
    cy.dataId('contact-form-subject-input').type('perfect website');
  })
  
  it('Ejercicio 9, completando el formulario', () => {
    //Se tipea el mensaje del formulario.
    cy.dataId('contact-form-message-input').type('keep up the good work :)');
    //Se selecciona el boton de Submit.
    cy.dataId('contact-form-submit-btn').click();
    //Se verifica que el span de confirmación de envío del formulario se muestre.
    cy.contains('Your message is received.').should('exist');
    })
  
  it('Ejercicio 10, validando error en formulario vacío', () => {
    //Se hace click en el boton de Submit sin completar el mensaje del formulario.
    cy.dataId('contact-form-submit-btn').click();
    //Se verifica que aparezca mensaje de error.
    cy.get('.go4109123758').should('exist');
  })  
})