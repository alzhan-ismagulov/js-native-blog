//Импортируем класс HeaderComponent
import { HeaderComponent } from './components/header.component'

//Импортируем класс NavigationComponent
import { NavigationComponent } from './components/navigation.component'

import { CreateComponent } from './components/create.component'
import { FavoriteComponent } from './components/favorite.component'
import { PostsComponent } from './components/posts.component'

//Создаём экземпляр header класса HeaderComponent
new HeaderComponent('header')

//Создаём новый компонент navigation
const navigation = new NavigationComponent('navigation')
const create = new CreateComponent('create')
const favorite = new FavoriteComponent('favorite')
const posts = new PostsComponent('posts')

//Регистрация вкладов
navigation.registerTabs([
  { name: 'create', component: create },
  { name: 'favorite', component: favorite },
  { name: 'posts', component: posts}
])