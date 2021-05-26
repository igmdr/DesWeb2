import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header.js';
import CommentsProvider from './context/CommentsProvider';
import Routes from './routes';

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <CommentsProvider>
            <Routes/>
          </CommentsProvider>
        </BrowserRouter>
      </div>
  );

}

export default App;
