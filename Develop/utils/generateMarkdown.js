// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "The MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "The GPL License") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === "Apache License") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "GNU License") {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${data.description}
  # Table of Contents
  1.[Installation](#installation)
  <br>
  2.[Usage](#usage)
  <br>
  3.[License](#license)
  <br>
  4.[Contribution](#contribution)
  <br>
  5.[Tests](#tests)
  <br>
  6.[Questions](#questions)
  <br>

  ## Installation
  ${data.installation} 
  ## Usage
  ${data.usage}
  ## License 
  ${data.license}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}
  * GitHub : http://www.github.com/${data.git}
  * E - mail : ${data.email}`;
}

module.exports = generateMarkdown;
