/// <reference types="cypress" />

import * as targets from '../targets/targets'

const loginPageTitle = 'Testers Hotel'
const usernameTextField = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const submitBtn = '.btn'
const formLabel = 'Login'

function checkLoginPageTitle(cy){
    cy.title().should('eq', loginPageTitle)
}

function performLogin(cy, username, password, confirmationContent){
    cy.contains(formLabel)
    cy.get(usernameTextField).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(submitBtn).click()
    cy.contains(confirmationContent)
}

function checkFailedLogin(cy){
    cy.get('.error').should('exist')
}

module.exports = {
    checkLoginPageTitle,
    performLogin,
    checkFailedLogin
}