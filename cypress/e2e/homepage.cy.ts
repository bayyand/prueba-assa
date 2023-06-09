describe("Navitagion", () => {
    it("should navigate to the tasks page", () => {
        // Start from the index page
        cy.visit("http://localhost:3000/");

        // Find a link with an href attribute containing "tasks" and click it
        cy.get('a[href*="tasks"]').click();

        // The new url should include "/tasks"
        cy.url().should("include", "/tasks");
    });
    it("should navigate to the list page", () => {
        // Start from the index page
        cy.visit("http://localhost:3000/");

        // Find a link with an href attribute containing "tasks" and click it
        cy.get('a[href*="list"]').click();

        // The new url should include "/tasks"
        cy.url().should("include", "/list");
    });
});
