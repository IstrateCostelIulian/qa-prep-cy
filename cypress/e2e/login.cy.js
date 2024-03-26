describe('login', () => {
  it('passes', () => {
    cy.visit('https://practice.expandtesting.com/login')
	cy.contains('Login Page').should('exist');
  })
})