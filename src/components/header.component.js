//Импорт класса Component
import { Component } from '../core/component'

//Создаём и делаем класс HeaderComponent доступным
export class HeaderComponent extends Component {
  //Создаём конструктор класса HeaderComponent
  constructor(id) {
    //Используем конструктор материнского класса Component
    super(id)
  }

  init() {
    //Если в LocalStorage есть что-то с признаком "visited", то мы не показываем компонент "header"
    if (localStorage.getItem('visited')) {
      this.hide()
    }
    //Получаем кнопку
    const btn = this.$el.querySelector('.js-header-start')
    //Добавляем функционал к кнопке
    btn.addEventListener('click', buttonHandler.bind(this))
  }
}

//Создаём функцию для закрытия панели кнопкой
function buttonHandler() {
  //Если нажимаем кнопку, то в localStorage попадает значение "visited"
  localStorage.setItem('visited', JSON.stringify(true))
  //Используем функцию hide для этого объекта
  this.hide()
}