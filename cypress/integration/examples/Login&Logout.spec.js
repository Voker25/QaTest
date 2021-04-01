/// <reference types ="cypress" />
describe ('Gallery app test', function() {
    
        beforeEach(function(){
        cy.visit( 'https://gallery-app.vivifyideas.com/')
        cy.get ('.ml-auto > :nth-child(1) > .nav-link').click()
        cy.get ('#email').type('test.injoker60@gmail.com')
        cy.get ('#password').type('Test1234')
        cy.get ('.btn').should('be.visible').click()
        cy.url().should('eq','https://gallery-app.vivifyideas.com/')
    })

    it("Logout test", function(){
        cy.get('.nav-item').contains('Logout').click()
        cy.url().should('eq','https://gallery-app.vivifyideas.com/login')
    })
})