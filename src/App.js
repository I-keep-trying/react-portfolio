import React from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Bio from './components/Bio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Homepage from './components/Homepage'
import Error from './components/Error'
import Footer from './components/Footer'
import Container from './components/Container'
import SearchForm from './components/WordSearchForm'
import { ToastContainer, Slide } from 'react-toastify'
import './ReactToastify.css'

const App = (props) => {
  console.log('props', props)
  const { shevy } = props
  console.log('shevy', shevy)
  return (
    <div className="App">
      <Header />
      <ToastContainer
        pauseOnFocusLoss={false}
        autoClose={2000}
        transition={Slide}
      />
      <div className="main-container">
        <Switch>
          <Route path="/bio" component={() => <Bio shevy={shevy} />} />
          <Route path="/wordsearch" component={SearchForm} />

          <Route path="/resume" component={Resume} />
          <Route path="/videos" component={Container} />

          <Route path="/contact" component={Contact} />

          <Route exact path="/" component={Homepage} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </div>
  )
}

export default App
