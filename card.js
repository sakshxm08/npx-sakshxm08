#!/usr/bin/env node

"use strict";

import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";
clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:saksham2211gambhir@gmail.com");

          console.log("\nDone, see you soon at inbox.\n");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Hasta la vista.\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green("                      Saksham Gambhir"),
  handle: chalk.white("@sakshxm08"),
  work: chalk.white("FrontEnd Developer"),
  college: `${chalk.white("ECE Student at")} ${chalk
    .hex("#2b82b2")
    .bold("Delhi Technological University")}`,
  github: chalk.gray("https://github.com/") + chalk.green("sakshxm08"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("sakshxm08"),
  web: chalk.cyan("https://sakshxm08.in"),
  npx: chalk.red("npx") + " " + chalk.white("sakshxm08"),

  labelWork: chalk.white.bold("       Work:"),
  labelCollege: chalk.white.bold("    College:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelCollege}  ${data.college}`,
    ``,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic(
      "I am currently looking for new opportunities, my inbox is"
    )}`,
    `${chalk.italic(
      "always open. Whether you have a question or just want to"
    )}`,
    `${chalk.italic("say hi, I will try my best to get back to you!")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "doubleSingle",
    borderColor: "green",
    title: data.handle,
    titleAlignment: "center",
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
