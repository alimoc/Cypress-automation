/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

const firstName = faker.name.firstName()
const lastName = faker.name.lastName()
const email = faker.internet.email()
const phone = faker.phone.number('+40 7## ### ###')


describe('Test the requirements...', () => {
  it('Get through the job application flow', () => {
    cy.visit('/')
    cy.scrollTo('bottom')// It seems that scrolling to the bottom of the page does not gets rid of the warning
    cy.contains('Accept all').click()

    cy.log('Apply the required filters')
    cy.get('.search-filters .search-filters__group-heading button').eq(0).click()
    cy.get('.search-filters__group-items').contains('Romania').click()

    cy.log('Select the Test Engineer job')
    //I will do a workaorund in order to open the role description in the same tab
    cy.get('.search-results__item a').eq(0)
      .invoke('removeAttr', 'target')
      .should('not.have.attr', 'target')
    cy.get('.search-results__item a').eq(0).click()

    cy.log('Fill the form...')
    cy.get('#candidate_first_name').click().type(`${firstName}`)
    cy.get('#candidate_last_name').click().type(`${lastName}`)
    cy.get('#candidate_email').click().type(`${email}`)
    cy.get('#candidate_phone').click().type(`${phone}`)

    cy.log('Upload a resume...')
    cy.get('#resume').selectFile('cypress/fixtures/resume.pdf')

    cy.log('Submit application')
    cy.get('[name="_job_application_form"]').click()
  })
})