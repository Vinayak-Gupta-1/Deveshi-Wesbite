import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Home from './components/Home/home.jsx'
import Gallery from './components/Gallery/gallery.jsx'
import FAQs from './components/FAQs/faqs.jsx'
import Mobile from './components/Mobile/mobile.jsx'
import { isMobile } from 'react-device-detect';

function App() {

  const pages = (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/FAQs" component={FAQs} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )

  return (

    <div>
      {
        isMobile ? (
          <Mobile />
        ) : (
          pages
        )
      }
    </div>
  );
}

export default App;
