const entypo = require('./')
const node = entypo.getNode()

const head = document.getElementsByTagName('head')[0]
const style = document.createElement('style')

style.setAttribute('type', 'text/css')
style.textContent += `
  * { box-sizing: border-box }
  html {
    font-family: -apple-system, sans-serif;
    font-size: 14px;
  }
  body {
    background: #1e1e1e;
    color: #fff;
    display: flex;
    flex-flow: row wrap;
    padding: 0 10% 6em;
  }
  header {
    width: 100%;
    margin: 3em 0;
  }
  h1 {
    font-weight: 300;
  }
  h1 a {
    color: #fff;
  }
  a {
    color: gold;
    text-decoration: none;
  }
  .icon {
    display: flex;
    align-items: center;
    width: 16%;
    min-width: 240px;
    padding: .5em;
  }
  .icon svg {
    height: 2em;
    width: 2em;
    fill: #fff;
  }
  .icon span {
    padding-left: 1em;
  }
`
head.appendChild(style)

document.body.insertBefore(entypo.getNode(), document.body.firstChild)

document.body.innerHTML += `
  <header>
    <h1><a href="https://github.com/hypermodules/entypo">entypo</a></h1>
    <p>SVG sprite for the <a href="http://entypo.com">Entypo+</a> icon collection.</p>
    <p>
      <a href="https://github.com/hypermodules/entypo">
        <img title="repo" src="https://img.shields.io/badge/github-hypermodules%2Fentypo-blue.svg?style=flat-square" />
      </a>
      <a href="https://www.npmjs.com/package/entypo">
        <img title="version" src="https://img.shields.io/npm/v/entypo.svg?style=flat-square" />
      </a>
      <a href="https://travis-ci.org/hypermodules/entypo">
        <img title="build status" src="https://img.shields.io/travis/hypermodules/entypo.svg?style=flat-square" />
      </a>
      </a>
    </p>
  </header>
`

node.querySelectorAll('[id]').forEach(svg => {
  document.body.innerHTML += `
    <div class="icon">
      <svg><use xlink:href="#${svg.id}" /></svg>
      <span>${svg.id.replace('entypo-', '')}</span>
    </div>
  `
})
