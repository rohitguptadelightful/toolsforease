import './App.css';
import { NavBar, Footer, CardItems } from './components';
import { Container, Row } from 'react-bootstrap';
import { WebApps, APIs } from './data/Data';

function App() {
  return (
    <div className="App">
      <NavBar bg="dark" expand="lg" />
      <Container className='main'>
        <h2 className='heading mt-4'>WebApps</h2>
        <Container>
          <Row className='m-4'>
            {WebApps.map((webapp) => {
              return <CardItems
                title={webapp.title}
                discription={webapp.discription}
                image={webapp.image}
                key={webapp.key}
                url={webapp.url}
              />
            })}
          </Row>
        </Container>

        <hr />

        <h2 className='heading mt-4'>APIs</h2>
        <Container>
          <Row className='m-4'>
            {APIs.map((api) => {
              return <CardItems
                title={api.title}
                discription={api.discription}
                image={api.image}
                key={api.key}
                url={api.url}
              />
            })}
          </Row>
        </Container>
      </Container>
      <Footer bg="dark" expand="lg" className="mt-6" />
    </div>
  );
}

export default App;
