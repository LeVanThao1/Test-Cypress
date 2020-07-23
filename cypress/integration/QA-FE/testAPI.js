describe('API Testing', () => {
    
    Cypress.config('baseUrl', 'http://localhost:3001/api/v1')
    
    it('GET ALL', () => {
        cy.request('/users').then((response) => {
            cy.log(response)
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.listUser).to.have.length(18)
        })
    })

    it('GET BY ID', () => {
        cy.request('/users/5eedb6ec02fa8821a288bf7d').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.user).to.have.haveOwnProperty('_id', '5eedb6ec02fa8821a288bf7d')
        })
    })

    it('PUT - Update', () => {
        const item = {"fullname":"LE VAN THAO"}
        cy.request({method:'PUT', url:'/users/5eedb6ec02fa8821a288bf7d', body:item, failOnStatusCode: false}).its('status').should('eq', 401)
        cy.request('/users/5eedb6ec02fa8821a288bf7d').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.user).to.have.haveOwnProperty('fullname', 'LE VAN THAO')
        })
    })

    it('POST - Login', () => {
        const item = {"email":"yourlap@gmail.com","password": "yourlap@2020"}
        cy.request({method:'POST', url:'/login', body:item, failOnStatusCode: false}).then(response => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('message').eql('login successfully')
            expect(response.body).to.have.property('access_token')
        })
    })
})
