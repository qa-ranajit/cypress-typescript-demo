import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
Given('I open the Cypress website', () => {
  cy.visit('https://www.cypress.io');
});
Then('The title should contain {string}', (title: string) => {
  cy.title().should('include', title);
});