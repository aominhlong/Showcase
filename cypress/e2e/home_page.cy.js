describe('Ani Planet Homepage', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://anime-api-showcase.herokuapp.com/api/v1/anime', {fixture : 'allData.json'})

        cy.visit('http://localhost:3000/')
    })

    it('Should load landing the homepage URL', () => {
        cy.url().should('eq', 'http://localhost:3000/');
    })

    it('should show all anime', () => {
        cy.get('.anime-container').children().should('have.length', 4)
    })

    it('should show the Anime of the day', () => {
        cy.get('.random-anime').contains('Anime Pick of the Day')
        cy.get('.random-anime').children().should('have.length', 7)
    })

    it('should filter anime based on search input', () => {
        cy.get('.search-bar').click().type('You')
        cy.get('.anime-container').children().should('have.length', 1)
    })

    it('should filter by popular animes', () => {
        cy.get('.popular-btn').click()
        cy.get('.anime-container').children(1).contains('Hunter x Hunter (2011)')
    })

    it('should change the url when clicking on a genre in the dropdown genre  menu', () => {
        cy.get('.dropdown-content').invoke('show')
        cy.get('.action').click({ force: true })

        cy.url().should('eq', 'http://localhost:3000/#action')
    })

    it('let users see which anime is added to their list', () => {
        cy.get('.anime-container').children(2).contains('Anime is in your watch list')
    })

    it('let users see which anime is not added to their watch list', () => {
        cy.get('.anime-container').children(1).contains('Anime is in your watch list')
    })

    it('should be able to see which anime is in their list', () => {
        cy.get('.my-watch-list-btn').click()
        cy.get('.anime-container').children().should('have.length', 2)
    })

    it('should allow users to remove an anime from their watch list', () => {
        cy.intercept('GET', 'https://anime-api-showcase.herokuapp.com/api/v1/anime', {fixture : 'deleteFixture.json'})

        cy.get('.my-watch-list-btn').click()
        cy.get('.Attack').click()
        cy.get('.anime-container').children().should('have.length', 1)
    })

    it('should allow users to add an anime to their watch list', () => {
        cy.intercept('POST', 'https://anime-api-showcase.herokuapp.com/api/v1/anime', {fixture : 'postFixture.json'})
        
        cy.get('.Hunter').click()
        cy.get('.my-watch-list-btn').click()
        cy.get('.anime-container').children().should('have.length', 3)
        cy.get('.anime-container').children(3).contains('Hunter x Hunter (2011)')
    })

    it('should show no results and a message if there are no search results', () => {
        cy.get('.search-bar').click().type('Bad')

        cy.get('.no-search-result').should('exist')
        cy.get('img').should('exist')
    })

    it('should take a user to an error screen if the url is bad', () => {
        cy.visit('http://localhost:3000/badURL')
        cy.get('.error-page-message').should('exist')
        cy.get('img').should('exist')
    })

    it('should take a user to back home if they click on the here text', () => {
        cy.visit('http://localhost:3000/badURL')
        cy.get('span').click()
        cy.get('.anime-container').children().should('have.length', 4)
    })

    it('should show an error message if the fetch call did not work', () => {
        cy.intercept('GET', 'https://anime-api-showcase.herokuapp.com/api/v1/anime',{
            statusCode: 404
        })
        cy.get('img').should('exist')
        cy.get('h1').should('have.text', `Error: 404! Please try again later.`)
    })    

    it('should show an error message if the fetch call did not work', () => {
        cy.intercept('POST', 'https://anime-api-showcase.herokuapp.com/api/v1/anime',{
            statusCode: 404
        })
        cy.get('.Your').click()
        cy.get('h1').should('have.text', `Error: 404! Please try again later`)
    }) 

    it('should show an error message if the fetch call did not work', () => {
        cy.intercept('DELETE', 'https://anime-api-showcase.herokuapp.com/api/v1/anime',{
            statusCode: 404
        })
        cy.get('.Attack').click()
        cy.get('h1').should('have.text', `Failed to remove anime. Please try again later.`)
    }) 

})

