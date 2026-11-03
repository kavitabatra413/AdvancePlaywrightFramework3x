
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/OrangeHrms_loginPage';
import { DashBoard } from '../pages/OrangeHrm_DashBoard_page';
import {AddEmployee } from '../pages/OrangeHRMS_AddEmployee';


type MyFixture = {
    loginPage: LoginPage;
    Dashboard: DashBoard;
    employee: AddEmployee;
};

export const test = base.extend<MyFixture>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    Dashboard: async ({ page }, use) => {
        await use(new DashBoard(page));
    },

    employee: async ({ page }, use) => {
        await use(new AddEmployee(page));
    }
});

export { expect };

/*
base is the original Playwright test object.extend() allows us to create custom fixtures.
type MyFixture → Creates a custom TypeScript type.
loginPage → Name of the fixture.
LoginPage → Class/type of that fixture.
use is a function that passes our initialized fixture to the test.
test is Extended Playwright test object
{ test } It imports the test function from the @playwright/test package so that you can write and execute test cases.
Playwright custom fixture that creates an object of the DashBoard page class and makes it available to your test.
page: Playwright's built-in fixture. It provides the browser page.
*/