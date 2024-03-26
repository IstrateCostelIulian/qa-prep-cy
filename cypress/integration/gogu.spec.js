describe('Example Test Suite', () => {
  it('Visits the example page and clicks a button', () => {
    cy.visit('https://google.com') // Change URL to your website URL

    // Write your test logic here
    cy.get('button').click() // Clicking a button
  })
})