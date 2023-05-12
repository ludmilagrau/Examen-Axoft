/* 
8. Escribir un script que navegue a una página específica de una aplicación web,
seleccione un elemento de una lista desplegable y verifique que la selección se haya
realizado correctamente.
*/

describe('Ejercicio 8', () => {
  it('Seleccionando una lista desplegable', () => {
    //Se utiliza el comando de Login.
    cy.codedamnLogin('testeando', 'Prueba.1233'); 
    //Se coloca un margen de 6 segundos para que finalice de cargar la página.
    cy.wait(6000); 
    //Se hace click en el menú desplegable.
    cy.get('[d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"]').click(); 
    //Se hace click en la opción de Community Forum.
    cy.contains('Community Forum').click({force: true});
    //Se verifica que efectivamente nos haya redirigido a la pantalla de foro.
    cy.url().should('include', 'forum'); 
    //Se hace click en la opción de filtrar.
    cy.contains('Filter').click(); 
    //Se hace click en la lista desplegable de filtro por tipo.
    cy.get("[id='headlessui-listbox-button-:rm:']").click(); 
    //Se hace click en la primera opción.
    cy.get('li:first').click(); 
    //Se verifica que la primera opción contenga el atributo selected en true.
    cy.get('li:first').should('have.attr', 'aria-selected', 'true');
    })
  
})
