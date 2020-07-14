import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubscribers = []
    this.prepare()
  }

  // Настраивает наш компанент до init
  prepare() {}

  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }

  // Уведомляет слушателей про событие Event
  $emit(event, ...args) {
    const unsub = this.emitter.emit(event, ...args)
    this.unsubscribers.push(unsub)
  }

  // Подписывает на событие
  $on(event, fn) {
    this.emitter.subscribe(event, fn)
  }

  // Инициализирует компонент, добавляем DOM слушателей
  init() {
    this.initDOMListeners()
  }

  // Удаляет компонент, Чистит слушателей
  desrtoy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}