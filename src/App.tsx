import { Route } from 'react-router-dom'
//  pages are import
import { Reviews } from './Component/Reviews/Reviews'
import { Answer } from './Component/Answer/Answer'
import Home from './Component/Home/Home'
import Shop from './Component/Shop/Shop'
import BLog from './Component/Blog/BLog'

import './App.css'

const App = () => {

  return (
    <div className="App">
      <Route path={"/"} render={() => <Home />} />
      <Route path={"/shop"} render={() => <Shop />} />
      <Route path={"/answer"} render={() => <Answer />} />
      <Route path={'/reviews'} render={() => <Reviews />} />
      <Route path={'/blog'} render={() => <BLog />} />
      <div>
      </div>

      {/* <Shop2Sharp /> */}
    </div>
  );
}

export default App
