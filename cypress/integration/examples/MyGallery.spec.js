/// <reference types ="cypress" />
describe ('Gallery app test', function() {
    beforeEach(function(){
        cy.visit( 'https://gallery-app.vivifyideas.com/')
        cy.get ('.ml-auto > :nth-child(1) > .nav-link').click()
        cy.get ('#email').type('test.injoker60@gmail.com')
        cy.get ('#password').type('Test1234')
        cy.get ('.btn').should('be.visible').click()
    })
    
    it ('Created gallery', function (){
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(1) > h2 > .box-title').click().wait(2000)
    })
    
    it('Searching for non existant gallery', function(){
        cy.get('.form-control[placeholder="Search..."]').type('noexist')
        cy.get('.input-group-append > .btn').click()
        cy.get('h4').contains('No galleries found').should('be.visible')
    })
    
    
    
    


})