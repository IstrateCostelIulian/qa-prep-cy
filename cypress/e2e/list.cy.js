describe('list generator', () => {
  it('passes', () => {
    cy.visit('https://24toolbox.com/html-list-generator/')
	cy.contains('HTML List Generator Tool').should('exist');
  })
})