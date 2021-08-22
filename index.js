// NEEDED TO RUN
// [Inquirer package](https://www.npmjs.com/package/inquirer)
const generateMD = require("./utils/generateMD.js")
const inquirer = require("inquirer")
const fs = require("fs")

// QUESTIONS ARRAY
const questions = [
    {
        // NAME 🌷
        type: "input",
        message: "Enter your name.",
        name: "uname",
    },
    {
        // EMAIL ADDRESS 🌷🗨
        type: "input",
        message: "Enter your email address.",
        name: "uemail",
    },
    {
        // GITHUB ALIAS / USERNAME 🌷🗨
        type: "input",
        message: "Enter your GitHub username / alias.",
        name: "ualias",
    },
    {
        // GITHUB REPO NAME 🌷
        type: "input",
        message: "Enter the desired name of your project repository. (Must match GitHub, if existing)",
        name: "urepo",
    },
    {
        // PROJECT TITLE 🌷
        type: "input",
        message: "Enter the title of your project.",
        name: "uproj",
    },   
    {   // PROJECT SCREENSHOTS 🌷
        type: "input",
		name: "usshots",
		message: "Add screenshot? (Try using full RAW link from hosted image on GitHub)",
	},
    {
        // PROJECT DESCRIPTION 🌷📌
        type: "input",
        message: "Describe your project.",
        name: "udescript",
    },
    {
        // PROJECT INSTALLATION 🌷🛠
        type: "input",
        message: "Add project installation notes here.",
        name: "uinstall",
    },
    {
        // PROJECT USAGE 🌷💻
        type: "input",
        message: "Describe how to use your project.",
        name: "uuse",
    },
    {
        // PROJECT TECH 🌷🖥
        type: "input",
        message: "List technologies used for your project.",
        name: "utech",
    },
    {
        // PROJECT TESTING 🌷🧷
        type: "input",
        message: "Add project testing notes here.",
        name: "utest",
    },
    {
        // PROJECT CONTRIBUTION 🌷🤝
        type: "input",
        message: "How can someone contribute to your project?",
        name: "ucontrib",
    },
    {
        // PROJECT LICENSING 🌷🧾
        type: "checkbox",
        message: "Select license type. Press space to submit.",
        name: "uli",
        choices: [ 'Apache', 'Common-Development-and Distribution', 'GNU-General-Public', 'MIT', 'Mozilla-Public', 'None' ],
    },
];

// WRITE THAT README FILE
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log("✨ README generated ✨");
    });
}

// FUNCTION - INITIALIZE THAT APP
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput);
        writeToFile("README.md", generateMD(userInput));
    });
};

// INITIALIZE THAT APP
init();
