//Импортируем класс Component
import { Component } from "../core/component";

//Создаём и делаем доступным для экспорта класс NavigationComponent
export class NavigationComponent extends Component{
  //Создаём конструктор класса NavigationComponent
  constructor(id) {
    //Используем конструктор родительского класса Component
    super(id)
  }

  init() {
    //Отслеживаем клик по вкладке
    this.$el.addEventListener('click', tabClickHandler.bind(this))
  }
}

//Функция управления вкладками
function tabClickHandler(event) {
  //Убираем дефолтное поведение добавляющее "#" при клике на ссылку вкладки
  event.preventDefault()
  //Отслеживаем, был ли клик по вкладке для удаления класса active
  if (event.target.classList.contains('tab')) {
    //выбираем все вкладки
    Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
      //Удаляем у вкладок, класс active делая её неактивной
      tab.classList.remove('active')
    })
    //Добавляем к вкладке, на которую мы кликнули класс active делая её активной
    event.target.classList.add('active')
  }
}