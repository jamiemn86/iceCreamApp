import Container from 'react-bootstrap/Container';
import OrderEntry from './pages/entry/OrderEntry';
import ConfirmationButton from './pages/entry/ConfirmationButton';

function App() {
  return (
    <Container>
      <OrderEntry />
      <ConfirmationButton />
    </Container>
  );
}

export default App;
