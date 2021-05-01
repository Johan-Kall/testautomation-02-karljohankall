/// <reference types="cypress" />

function backButton(cy){
    cy.get('[href="/"]').contains('Back').click()
    cy.percySnapshot()
}

function homeButton(cy){
    cy.get('[href="/"]').contains('Tester Hotel').click()
    cy.percySnapshot()
}

function goToCreateRoom(cy){
    cy.get('[href="/room/new"]').click()
    cy.percySnapshot()
}

function goToEditRoom(cy){
    cy.get('.action').last().click()
    cy.get('.menu').find('a').contains('Edit').click()
    cy.percySnapshot()
}

function deleteRoom(cy){
    cy.get('.action').last().click()
    cy.get('.menu').find('a').contains('Delete').click()
    cy.percySnapshot()
}

module.exports = {
    backButton,
    homeButton,
    goToCreateRoom,
    goToEditRoom,
    deleteRoom
}