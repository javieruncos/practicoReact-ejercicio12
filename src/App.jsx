import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import Formulario from './components/Formulario';
function App() {
  return (
    <Container className="App">
       <div className='text-center mt-4'>
       <h1>Noticias</h1>
       <hr />
       </div>
       <Formulario/>
    </Container>
  );
}

export default App;
