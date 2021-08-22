// YEAR FOR COPYRIGHTING DATA
let year = new Date().getFullYear();

// GENERATE MARKDOWN
// ADD SCREENSHOTS
function generateMD(data) {   
    // README:
    return `# ${data.uproj} #

## Repository ##

${data.urepo}

## Screenshots ##

<img src="${data.usshots}">

## Table of Contents ##

* [Description](#Description-)
* [Installation](#Installation-)
* [Usage](#Usage-)
* [Tech](#Tech-)
* [Testing](#Testing-)
* [Contribution](#Contribution-)
* [Licensing](#Licensing-)
* [Contact](#Contact-)

## Description 📌 ##

${data.udescript}

## Installation 🛠 ##

${data.uinstall}

## Usage 💻 ##

${data.uuse}

## Tech 🖥 ##

${data.utech}

## Testing 🧷 ##

${data.utest}

## Contribution 🤝 ##

${data.ucontrib}

## Licensing 🧾 ##

[![license](https://img.shields.io/badge/license${data.uli}-hotpink)](https://shields.io)

Copyright &copy; ${year}

## Contact 🗨 ##
### For Questions: ###

${data.ualias}: (https://github.com/${data.ualias})

${data.uemail}


This README was generated with 🌼🌿🌷 and 🤍 by ${data.uname}.`;
}

// GENERATE THAT MARKDOWN
module.exports = generateMD;
