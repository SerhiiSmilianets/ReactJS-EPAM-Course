import React from 'react'
import Counter from '../components/Counter'

describe('<Counter />', () => {
  beforeEach(() => {
    cy.mount(<Counter count = {5}/>); // replace with the actual path to your component
  });

  it('renders initial value provided in props', () => {
    cy.get('h1').should('contain', '5');
  });

  it('decrements the displayed value when "decrement" button is clicked', () => {
    cy.get('button').contains('-').click();
    cy.get('h1').should('contain', '4');
  });

  it('increments the displayed value when "increment" button is clicked', () => {
    cy.get('button').contains('+').click();
    cy.get('h1').should('contain', '6');
  });
});
