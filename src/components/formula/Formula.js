import {ExcelComponent} from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })
  }

  toHTML() {
    return `
      <div class="info">F(x)</div>
      <div class="input" contenteditable="true" spellcheck="false"></div>
    `
  }

  onInput(event) {
    console.log('onInput Formula: ', event.target.textContent.trim())
  }
  onClick() {

  }
}