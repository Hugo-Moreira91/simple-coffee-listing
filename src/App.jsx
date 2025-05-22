import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './pages/routes';
import { Footer } from './components/footer';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
      font-family: var(--font-base);
      font-weight: var(--font-weight-medium);
      height: 100vh;
    }
`

export default App
