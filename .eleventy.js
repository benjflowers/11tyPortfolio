const fs = require('fs')
const path = require('path')
const nunjucks = require('nunjucks')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addWatchTarget("./src/css");

  // read contents of component directory
  const filesFrom = (directoryPath) => {
    return path.join(__dirname, directoryPath)
  }

  // const directoryPath = path.join(__dirname, )
  const components = fs.readdirSync(filesFrom('/src/_includes/components/'))

  // Creates a short code that can be used with nunjucks
  // component: string - file name read from the components const
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

  // Iterate through each component in the array and create the shortcode for it
  for(let i = 0; i < components.length; i++) {
    createShortcodes(components[i])
  }

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    tempalteFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "public",
      include: "includes",
    },
  };
};
