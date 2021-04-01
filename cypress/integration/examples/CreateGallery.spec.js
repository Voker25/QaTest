
/// <reference types ="cypress" />
describe ('Gallery app test', function() {

    beforeEach(function(){
    
        cy.visit( 'https://gallery-app.vivifyideas.com/')
        cy.get ('.ml-auto > :nth-child(1) > .nav-link').click()
        cy.get ('#email').type('test.injoker60@gmail.com')
        cy.get ('#password').type('Test1234')
        cy.get ('.btn').should('be.visible').click()
    
})

    it ('Create gallery', function(){
        cy.get(".mr-auto > :nth-child(3) > .nav-link").click()
        cy.get('#title').type('test1')
        cy.get('#description').type('testest')
        cy.get('.input-group > .form-control').type("https://preview.redd.it/rrml8yxhl7q61.jpg?width=640&crop=smart&auto=webp&s=c7d1a55c9df52c7b9d344e6a65a1c3f17c0ae719")
        cy.get('form > :nth-child(4)').click()
    })
    
    it ('Create gallery with empty title', function(){
        cy.get(".mr-auto > :nth-child(3) > .nav-link").click()
        cy.get('#description').type('testest')
        cy.get('.input-group > .form-control').type("https://preview.redd.it/rrml8yxhl7q61.jpg?width=640&crop=smart&auto=webp&s=c7d1a55c9df52c7b9d344e6a65a1c3f17c0ae719")
        cy.get('form > :nth-child(4)').click()
        cy.url().should('not.eq', 'https://gallery-app.vivifyideas.com/')
    })

    it ('Create gallery with empty ivalid image url', function(){
        cy.get(".mr-auto > :nth-child(3) > .nav-link").click()
        cy.get('#title').type('test3')
        cy.get('#description').type('testest')
        cy.get('.input-group > .form-control').type("https://www.youtube.com/watch?v=HW9l9-4SqI4")
        cy.get('form > :nth-child(4)').click()
        cy.url().should('not.eq', 'https://gallery-app.vivifyideas.com/')
        cy.get('.alert').should('be.visible')
    })
})