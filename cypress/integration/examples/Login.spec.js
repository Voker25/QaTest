
/// <reference types ="cypress" />
describe ('Gallery app test', function() {
    it ('Gallery app Login with valid data', function(){
        cy.visit( 'https://gallery-app.vivifyideas.com/')
        cy.get ('.ml-auto > :nth-child(1) > .nav-link').click()
        cy.get ('#email').type('test.injoker60@gmail.com')
        cy.get ('#password').type('Test1234')
        cy.get ('.btn').should('be.visible').click()
    })

    it ('Gallery app Login with invalid username', function(){
        cy.visit( 'https://gallery-app.vivifyideas.com/')
        cy.get ('.ml-auto > :nth-child(1) > .nav-link').click()
        cy.get ('#email').type('test.injoker60@gmail.com')
        cy.get ('#password').type('Test1234')
        cy.get ('.btn').should('be.visible').click()
    })

    it ('Gallery app Login with invalid password', function(){
        cy.visit( 'https://gallery-app.vivifyideas.com/')
        cy.get ('.ml-auto > :nth-child(1) > .nav-link').click()
        cy.get ('#email').type('test.injoker60@gmail.com')
        cy.get ('#password').type('Test1234')
        cy.get ('.btn').should('be.visible').click()
    })

})
