import { test, expect } from '@playwright/test';
import { logger } from '@utils/logger';

//  Ping Request.
// Ping request help you to test if the server is up.
// Client -> Server to check if all well.

// HTTP GET -> https://restful-booker.herokuapp.com/ping

test('TC#1 @p0 - POST : Verify that create booking is working fine.', async ({ request }) => {

        // HTTP -> POST
        // URL => https://restful-booker.herokuapp.com/booking
        // PAYLOAD / request body /. Body / data -> json file or js object
        // headers  - content-type json
        // auth ?

        const payload = {
                firstname: 'Jim',
                lastname: 'Brown',
                totalprice: 111,
                depositpaid: true,
                bookingdates: {
                        checkin: '2018-01-01',
                        checkout: '2019-01-01',
                },
                additionalneeds: 'Breakfast',
        }
        logger.info(`Payload is set: ${JSON.stringify(payload)}`);


        const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
        };
        logger.info(`Header is set: ${JSON.stringify(headers)}`);

        const responseData = await request.post('https://restful-booker.herokuapp.com/booking', {
                headers,
                data: payload,
        });

        expect(responseData.status()).toBe(200);
        const data = await responseData.json();
        logger.info(`Response is set: ${JSON.stringify(data)}`);
        expect(data.bookingid).toBeTruthy();
        expect(data.booking.firstname).toBe(payload.firstname);
        expect(data.booking.lastname).toBe(payload.lastname);
        expect(data.booking.bookingdates.checkin).toBe(payload.bookingdates.checkin);
        logger.info(`Created booking id: ${data.bookingid}`);

});

/*
Code	Meaning
request.post()	Sends an HTTP POST request
'/booking'	API endpoint path
headers	Contains request headers
data: payload	Request body (booking details)
responseData	Stores the API response
Base URL: https://restful-booker.herokuapp.com
Endpoint path: /booking
Complete URL: https://restful-booker.herokuapp.com/booking
An endpoint is a specific URL exposed by an API through which a client can perform an operation. The HTTP method (GET, POST, PUT, DELETE) determines the operation.
For example, /booking can support multiple HTTP methods:
- GET /booking – Get booking IDs.
- POST /booking – Create a booking.
- GET /booking/{id} – Get booking details.
- PUT /booking/{id} – Update a booking.
- DELETE /booking/{id} – Delete a booking.
responseData contains the HTTP response received from the API.
.json() reads the response body and parses the JSON data.
data now contains a JavaScript object that you can access and manipulate.
JSON.stringify(data) converts that object into a string.
logger.info() writes that string into your log file or console.
The server automatically generates a unique booking ID after successfully creating the booking.
*/

/*command to run this test case in terminal
set BASE_URL=https://restful-booker.herokuapp.com && npx playwright test 02_post_operation.spec.ts
OR tell GHCP. drag both files
*/

/*
line	Displays test execution in terminal
html	Generates Playwright HTML report
./src/utils/CustomReporter.ts	Executes your custom reporter
*/