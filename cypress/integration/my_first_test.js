/// <reference types = "cypress" />


it('google test', function(){

    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Automation tutorial{enter}')



})