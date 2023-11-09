// import './App.css';
import Header from './componentes/Header/index-Header';
import Styled from 'styled-components'
import Search from './componentes/Search';
import UltimosLancamentos from './componentes/UltimosLancamentos';

const AppComponent = Styled.div`
  width: 100vw;
  height: 100vh;
  position: relative; /* Adicione esta linha para definir o contexto de empilhamento */
}`;

const SearchComponent = Styled.div`
  position: relative; /* Adicione esta linha para definir o contexto de empilhamento */
  z-index: 2; /* Adicione esta linha para garantir que a Search fique acima */
`;

const UltimosLancamentosComponent = Styled.div`
  position: relative; /* Adicione esta linha para definir o contexto de empilhamento */
  z-index: 1; /* Adicione esta linha para definir uma ordem menor para UltimosLancamentos */
`;

function App() {
  return (
    <AppComponent>
      <Header />
      <SearchComponent>
        <Search/>
      </SearchComponent>
      <UltimosLancamentosComponent>
        <UltimosLancamentos/>
      </UltimosLancamentosComponent>
    </AppComponent>
  );
}

export default App;
