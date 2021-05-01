/// <reference types="cypress" />

const logoutBtn = '.user > .btn'

function performLogout(cy, confirmationContent){
    cy.get(logoutBtn).click()
    cy.contains(confirmationContent)
    cy.percySnapshot()
}

function goToRooms(cy){
    cy.get('[href="/rooms"]').click()
    cy.percySnapshot()
}

module.exports = {
   performLogout,
   goToRooms
}