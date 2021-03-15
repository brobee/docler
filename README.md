# Automation test POC for DOCLER

12 test cases has been implemented by Cypress test automation framework.

## Installing Cypress
To run this project, install cypress locally using npm:

```
npm install cypress --save-dev
```

Official cypress documentation: https://docs.cypress.io/guides/getting-started/installing-cypress.html

## Start POC test scripts

Clone the project and run the following command in the POC directory:
1. GUI mode
```
npx cypress open
```
This command opens the cypress runner. To start the test, click on Docler.feature file and a new chrome instance opens.

2. Headless mode with Electron 87 browser:
```
npx cypress run
```
This command runs all the test cases from the feature file.

3. Cucumber headless with tags:
```
./node_modules/.bin/cypress-tags run -e TAGS=@moderate
```
This command runs all '@moderate' tagged test scripts.
### Technical details:

- Page Object Model, 
- DRY, 
- atomic, isolated test steps,
- utility classes,
- non-hard coded constants and parameters
- easy to maintain
- easy to read and understand the business flows

###NOTE:
Page Object Model and feature files structure can be varied. I chose simplicity, one single feature file contains all the required test cases however it can be restructured - for instance - by page like homepage.feature, formpage.feature, errorpage.feature. In this case we can use more Cucumber advantages like scenario outline or Background.
