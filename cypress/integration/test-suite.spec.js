/// <reference types="cypress" />

import * as loginFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as createRoomFuncs from '../pages/createRoomPage'
import * as roomFuncs from '../pages/roomPage'
import * as targets from '../targets/targets'
import faker from 'faker'

describe('Assignment 02 - Karl-Johan Käll', function(){
    beforeEach( ()=>{
        cy.visit(targets.base_url),
        loginFuncs.checkLoginPageTitle(cy)
    })

    it('Perform Valid login', function(){
        loginFuncs.performLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.performLogout(cy, 'Login')
    })

    it('Perform Invalid login', function(){
        loginFuncs.performLogin(cy, faker.internet.userName(), faker.internet.password(), 'Login')
        loginFuncs.checkFailedLogin(cy)
    })

    it('Check Room Page Links', function(){
        loginFuncs.performLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.goToRooms(cy)
        roomsFuncs.backButton(cy)
        dashboardFuncs.goToRooms(cy)
        roomsFuncs.homeButton(cy)
        dashboardFuncs.goToRooms(cy)
        roomsFuncs.goToCreateRoom(cy)
        createRoomFuncs.backButton(cy)
        roomsFuncs.goToCreateRoom(cy)
        createRoomFuncs.homeButton(cy)
        dashboardFuncs.performLogout(cy, 'Login')
    })

    it('Create Room', function(){
        loginFuncs.performLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.goToRooms(cy)
        roomsFuncs.goToCreateRoom(cy)
        createRoomFuncs.createRoom(cy)
        roomsFuncs.homeButton(cy)
        dashboardFuncs.performLogout(cy, 'Login')
    })

    it('Edit Room', function(){
        loginFuncs.performLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.goToRooms(cy)
        roomsFuncs.goToEditRoom(cy)
        roomFuncs.editRoom(cy)
        dashboardFuncs.performLogout(cy, 'Login')
    })

    it('Delete Room', function(){
        loginFuncs.performLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.goToRooms(cy)
        roomsFuncs.deleteRoom(cy)
        dashboardFuncs.performLogout(cy, 'Login')
    })
})