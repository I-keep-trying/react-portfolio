import Homepage from '../pages/Homepage'
import Bio from '../pages/Bio'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'
import WordSearch from '../pages/WordSearchForm'

const paths = [
  {
    name: 'Homepage',
    path: '/',
    exact: true,
    component: Homepage,
  },
  {
    name: 'Bio',
    path: '/bio',
    exact: true,
    component: Bio,
  },
  {
    name: 'Contact',
    path: '/contact',
    exact: true,
    component: Contact,
  },
  {
    name: 'Resume',
    path: '/resume',
    exact: true,
    component: Resume,
  },
  {
    name: 'WordSearch',
    path: '/wordsearch',
    exact: true,
    component: WordSearch,
  },
]

export default paths
