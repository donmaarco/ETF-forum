/// <reference types="Cypress" />

describe('FON forum', function() {
  it('Visit the ETF forum website', function() {
    cy.visit('http://forum.etf.rs')

    //Click on login button
    cy.contains('Log In').click()

    //Should be on a new URL which includes

     //cy.url().should('include', 'http://forum.etf.rs/index.php?act=Login&CODE=00')

    
  /**
     * TC Login 001 - Positive test
     */
     // Get an input in username field, type into it and vetify that value has been updated

    cy.get('input[name=UserName]')
      .type('zxx00655')
      .should('have.value', 'zxx00655')

    // Get an input in password field, type into it and vetify that value has been updated 

      cy.get('input[name=PassWord]')
        .type('random')
        .should('have.value', 'random')
    
     //Click in submit button   
      cy.get('[name=submit]')
        .click()

      //Click on Log out button  
        cy.contains('Log Out')
        .click()   

        /**
     * TC Login 002 - Negative test - Invalid user name
     */
     // Get an input in username field, type into it and vetify that value has been updated

      //Click on login button
      cy.contains('Log In').click()

     // Get an input in username field, type into it and vetify that value has been updated 
     cy.get('input[name=UserName]')
        .type('1')
        .should('have.value', '1')

     // Get an input in password field, type into it and vetify that value has been updated 
     cy.get('input[name=PassWord]')
      .type('random')
      .should('have.value', 'random')

     //Click in submit button   
     cy.get('[name=submit]')
       .click()
     
     //Verify presence of warning message   
     cy.get('.tablepad')
     .should('have.text', 'Sorry, we could not find a member using those log in details.')
           

      
        /**
     * TC Login 003 - Negative test - Invalid password
     */

      //Click on login button
      cy.contains('Log In').click()

     // Get an input in username field, type into it and vetify that value has been updated 
     cy.get('input[name=UserName]')
        .type('zxx00655')
        .should('have.value', 'zxx00655')

     // Get an input in password field, type into it and vetify that value has been updated 
     cy.get('input[name=PassWord]')
      .type('x')
      .should('have.value', 'x')

     //Click in submit button   
     cy.get('[name=submit]')
       .click()
     
     //Verify presence of warning message   
     cy.get('.tablepad')
     .should('have.text', 'Sorry, the password was wrong. All passwords are case sensitive')

     
        /**
     * TC Login 004 - Negative test - Invalid user name and password
     */

      //Click on login button
      cy.contains('Log In').click()

     // Get an input in username field, type into it and vetify that value has been updated 
     cy.get('input[name=UserName]')
        .type('1')
        .should('have.value', '1')

     // Get an input in password field, type into it and vetify that value has been updated 
     cy.get('input[name=PassWord]')
      .type('1')
      .should('have.value', '1')

     //Click in submit button   
     cy.get('[name=submit]')
       .click()
     
     //Verify presence of warning message   
     cy.get('.tablepad')
     .should('contain.text', 'Sorry, we could not find a member using those log in details.')

     //END OF TEST

  
 

















       
  })
})
