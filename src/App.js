import { Provider } from 'react-redux'
import SearchBar from './components/SearchBar'
import MainContainer from './components/MainContainer'
import store from './store'



function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <SearchBar />
          <MainContainer />
      </div>
    </Provider>
  );
}

export default App;