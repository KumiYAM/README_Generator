
   
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(licenseBadge) {
 // switch (license) {
   // case 'MIT':
   //licenseBadge = '![License]('
 // }
 //return`## ${license.licensebadge}`;

//};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {
 // return `## ${license.licenselink}`
//}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {
  //return `## ${license.data}`
//}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;
}

module.exports = generateMarkdown;