describe('Verificação de Título do Google', () => {
  it('Deve verificar se o título da página do Google existe', () => {
    // 1. Visite a página do Google
    cy.visit('https://www.google.com')

    // 2. Verifique se o título da página existe
    cy.title().should('exist')
  })
})