const fs = require('fs')
const path = require('path')
const nunjucks = require('nunjucks')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addWatchTarget("./src/css");

  const directoryPath = path.join(__dirname, '/src/_includes/components/')
  const components = fs.readdirSync(directoryPath)

   // generate a shortcode for each component in the /src/_includes/components folder
  const createShortcodes = (component) => {
    eleventyConfig.addNunjucksShortcode(component.split(".")[0], (props) => {
      const filePath = path.join(__dirname, `/src/_includes/components/${component}`)

      if(!fs.existsSync(filePath)) {
        return ""
      }

      const content = fs.readFileSync(filePath).toString()
      return nunjucks.renderString(content, {component: props})
      })
  }

  for(let i = 0; i < components.length; i++) {
    createShortcodes(components[i])
  }

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};