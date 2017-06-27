const entypo = require('./')
const node = entypo.getNode()

document.body.insertBefore(entypo.getNode(), document.body.firstChild)

node.querySelectorAll('[id]').forEach(svg => {
  document.body.innerHTML += `
    <div class="icon">
      <svg><use xlink:href="#${svg.id}" /></svg>
      <span>${svg.id.replace('entypo-', '')}</span>
    </div>
  `
})
