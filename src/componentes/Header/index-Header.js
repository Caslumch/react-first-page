import Logo from '../logo'
import OpcoesHeader from '../opcoesHeader'
import OpcoesHeaderIcones from '../opcoesIconesHeader'
// import './estilo-Header.css'
import Styled from 'styled-components'

const HeaderContainer = Styled.header`
    justify-content: center;
    display: flex;
    background-color: #fff;
}
`
function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <OpcoesHeaderIcones />
        </HeaderContainer>
    )
}

export default Header