document.addEventListener('DOMContentLoaded', (e) => {
  const articleContainers = document.querySelectorAll('div.article')
  console.log(articleContainers)

  for(let i = 0; i < articleContainers.length; i++) {
    articleContainers[i].addEventListener('click', (e) => {
      e.target.querySelector('a').click();
    })
  }
})

