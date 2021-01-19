import Homepage from '../pages/Homepage'
import Bio from '../pages/Bio'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'
import WordSearch from '../pages/WordSearchForm'

const paths = [

  {
    name: 'Homepage',
    path: '/',
    Component: Homepage,
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
    name: 'WordSearch',
    path: '/wordsearch',
    Component: WordSearch,
  },
  {
    name: 'Contact',
    path: '/contact',
    Component: Contact,
  },
]

export default paths
