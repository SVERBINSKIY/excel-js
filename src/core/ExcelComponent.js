import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.subscribe = options.subscribe || []
    this.store = options.store
    this.unsubscribers = []
    this.storeSub = null
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

  $dispatch(action) {
    this.store.dispatch(action)
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
  // Приходят только изменения по тем полям, на которые мы подписались.
  storeChanges() {}

  isWatching(key) {
    return this.subscribe.includes(key)
  }
}