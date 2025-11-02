import Header from '../Header/Header';
import '../../styles/globals.css';
import Main from '../Main/Main';
import { Container } from './Home.styled';

function Home() {
  return (
    <>
      <Container>
        <Header></Header>
        <Main></Main>
      </Container>
    </>
  );
}

export default Home;
