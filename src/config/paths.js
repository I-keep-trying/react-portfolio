import Homepage from '../pages/Homepage'
import Bio from '../pages/Bio'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'
import SearchForm from '../pages/WordSearchForm'

const paths = [
  {
    name: 'Homepage',
    path: '/',
    Component: Homepage,
  },
  {
    name: 'Word Search',
    path: '/wordsearch',
    Component: SearchForm,
  },
  {
    name: 'Bio',
    path: '/bio',
    Component: Bio,
  },

  {
    name: 'Resume',
    path: '/resume',
    Component: Resume,
  },
  {
    name: 'Contact',
    path: '/contact',
    Component: Contact,
  },
]

export default paths
