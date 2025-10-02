/// <reference types="cypress" />

describe('LambdaTest Selenium Playground - Input Form Submit', () => {
    beforeEach(() => {
        // Emulate Samsung Note 9 viewport
        cy.viewport('samsung-note9');
        cy.visit('https://www.lambdatest.com/selenium-playground');
    });

    it('should validate accessibility and submit form successfully', () => {
        // Click Input Form Submit
        cy.contains('Input Form Submit').click();

        // Inject axe for accessibility check
        cy.injectAxe();

        // Fill form fields
        cy.get('#name').type('John Doe');
        cy.get('#inputEmail4').type('john.doe@example.com');
        cy.get('#inputPassword4').type('Password@123');
        cy.get('#company').type('LambdaTest');
        cy.get('#websitename').type('https://lambdatest.com');
        cy.get('#inputCity').type('San Francisco');
        cy.get('#inputAddress1').type('123 Main Street');
        cy.get('#inputAddress2').type('Suite 100');
        cy.get('#inputState').type('California');
        cy.get('#inputZip').type('94107');
        cy.get("select[name='country']").select('United States');

        // Submit form
        cy.contains('Submit').click();

        // Verify success message
        cy.contains('Thanks for contacting us, we will get back to you shortly.')
            .should('be.visible');

        // Run Lighthouse performance audit
        cy.lighthouse({
            url: 'https://www.lambdatest.com/selenium-playground',
            thresholds: {
                performance: false,
                accessibility: true,
                'best-practices': false,
                seo: false,
            },
        });

    });
});
