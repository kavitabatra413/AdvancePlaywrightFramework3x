import { test, expect} from '@playwright/test';
import { request } from 'node:http';

//  Ping Request.
// Ping request help you to test if the server is up.
// Client -> Server to check if all well.

// HTTP GET -> https://restful-booker.herokuapp.com/ping

test('ping request - GET', async({ request})=>{
        const responseData = await request.get("https://restful-booker.herokuapp.com/ping");
        console.log(responseData);
        expect(responseData.status()).toBe(201);
});

/*command to run this test case in terminal
set BASE_URL=https://restful-booker.herokuapp.com && npx playwright test 01_basic_ping.spec.ts
Report generated: tta-report/report_20261106_121028.html
 npx playwright show-report
*/