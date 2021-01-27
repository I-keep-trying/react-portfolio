import Homepage from '../pages/Homepage'
import Bio from '../pages/Bio'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'
import WordSearch from '../pages/WordSearchForm'
import Error from '../pages/Error'
import GithubIcon from '../components/Logo/GithubIcon'
import ThemeToggle from '../components/Header'

const paths = [
  {
    icon: '',
    name: 'Homepage',
    path: '/',
    Component: Homepage,
  },
  {
    icon: '',
    name: 'Bio',
    path: '/bio',
    Component: Bio,
  },

  {
    icon: '',
    name: 'Resume',
    path: '/resume',
    Component: Resume,
  },
  {
    icon: '',
    name: 'WordSearch',
    path: '/wordsearch',
    Component: WordSearch,
  },
  {
    icon: '',
    name: 'Contact',
    path: '/contact',
    Component: Contact,
  },

/*   {
    icon: <GithubIcon />,
    name: '',
    path: '/contact',
    Component: Contact,
  }, */
/*   {
    icon: <ThemeToggle />,
    name: '',
    path: '',
    Component: Contact,
  }, */
]

export default paths
