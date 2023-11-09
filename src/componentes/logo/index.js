import logo from '../../images/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div` //devemos referenciar o tipo de componente que vamos usar
display: flex;
font-size: 30px;
`

const LogoImg = styled.img` 

margin-right: 11px;
`



function Logo() {
    return (
        <LogoContainer>
            <LogoImg src={logo} alt='logo'></LogoImg>
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )

}

export default Logo