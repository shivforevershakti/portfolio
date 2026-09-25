
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Contact } from './components/Contact/Contact'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
