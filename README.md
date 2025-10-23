# Technical test for SQLI (Playwright + TypeScript)

EXERCISE 1: WEB AUTOMATION
You need to perform an automation consisting of:
Þ Search for the word "automation" on Google.
Þ Find the resulting Wikipedia link.
Þ Check the year in which the first automatic process was done.
Þ Take a screenshot of the Wikipedia page.


EXERCISE 2: DATA HANDLING IN APIS
In this link, you will find the documentation for the API of a pet store:
https://petstore.swagger.io/

Þ Create your user through an HTTP request and then retrieve its data by calling the
corresponding service.
Þ Collect, through an HTTP request, the JSON returned by the endpoint
/pet/findByStatus, and list, using a function, the names of the pets that have been
sold.
   o The output format should consist of the tuple {id, name}.
   o You can use the data structure of your preference.
Þ Create a class whose constructor requires the earlier data structure and implement a
method that can iterate through it to identify how many pets share the same name. 
   o Example output: {"William": 11, "Floyd": 2}. As output, we request the code
   (you can separate it into files as you prefer) and the results from the previous
   points.
   o Remember that you can use the language and technology of your choice, and
   any additional improvements will be well considered. 

## Getting Started

1. Make sure you have node.js installed. If no, please, visit https://nodejs.org/en/.

2. Install dependencies:
   ```bash
   npm install
   ```
3. Run test using the command:
   ```bash
   npx playwright test
   ```
4. Open test report:
   ```bash
   npx playwright show-report
   ```

## Project Structure
- `src/pages/` — Classes to manipulate with web pages for exercise 1
- `src/api/petstore` - Classes to manipulate with Petstore API
- `src/types` - New types for this project 
- `src/fixtures.ts` — Playwright fixtures
- `tests/` - File with automated test cases


Enjoy!