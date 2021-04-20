//Импортируем класс HeaderComponent
import { HeaderComponent } from './components/header.component'

//Импортируем класс NavigationComponent
import { NavigationComponent } from './components/navigation.component'

//Создаём экземпляр header класса HeaderComponent
new HeaderComponent('header')

//Создаём новый компонент navigation
const navigation = new NavigationComponent('navigation')