
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('shoot button should work', ()=>{
            cy.get('go-button').should('be.visible');
        });
    });
});