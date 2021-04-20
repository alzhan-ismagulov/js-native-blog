//Создаём и делаем класс Component доступным
export class Component {
  //Создаём конструктор класса Component
  constructor(id) {
    //Получаем элемент по id
    this.$el = document.getElementById(id)
    //Инициализируем
    this.init()
  }

  init() { }
  
  //Создаём функцию по скрытию элемента
  hide() {
    //Добавляем к классу тэг css "hide"
    this.$el.classList.add('hide')
  }

  //Создаём функцию по раскрытию элемента
  show() {
    //Удаляем к классу тэг css "hide"
    this.$el.classList.remove('hide')
  }
}