/* global describe, it, cy */

describe('Petgram', function () {
  it('Visits home page', function () {
    cy.visit('/')
  })

  it('Navigates to a category and show photos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Clicks on the navbar to go home path', function() {
    cy.visit('/pet/1')

    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('Takes unregistered users to login/register forms when favs clicked', function() {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
