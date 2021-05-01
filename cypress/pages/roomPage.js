/// <reference types="cypress" />

import faker from 'faker'

function backButton(cy){
    cy.get('[href="/rooms"]').click()
    cy.percySnapshot()
}

function homeButton(cy){
    cy.get('[href="/"]').click()
    cy.percySnapshot()
}

function editRoom(cy){
    cy.percySnapshot('Edit Room')
    cy.get(':nth-child(3) > select').select('double')
    let roomNum = faker.datatype.number(9999)
    cy.get(':nth-child(4) > input').type(roomNum)
    cy.get(':nth-child(5) > input').type(faker.datatype.number(4))
    cy.get('.checkbox').click()
    cy.get(':nth-child(7) > input').type(faker.datatype.number({min:1000, max:3000}))
    cy.get(':nth-child(8) > select').select(['Balcony', 'Penthouse'])
    cy.get('.blue').contains('Save').click()
    cy.get('.rooms').contains(roomNum)
}

module.exports = {
    backButton,
    homeButton,
    editRoom
}