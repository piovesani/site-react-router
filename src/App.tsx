import { MainRoutes } from './routes/MainRoutes';
import './App.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>Titulo do site</h1>
      </header>
      <hr />
      <div className='container'>
        <MainRoutes/>
      </div>
      <hr />
      <footer>
        Todos os direitos reservados
      </footer>
    </div>
  );
}

export default App;
