import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom"
import Dashboard from "./component/dashboard";
import PlaceOrder from "./component/placeOrder";
import { Provider } from 'react-redux';
import store from './redux_store/store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard />} ></Route>
          <Route exact path='/placeOrder' element={<PlaceOrder />} ></Route>
        </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
