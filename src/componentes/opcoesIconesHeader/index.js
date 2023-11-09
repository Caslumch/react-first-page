// import './estilo.css'
import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import styled from 'styled-components'

const Icones = styled.ul` 
display: flex;
align-items: center;
`

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
  cursor: pointer;

`

const iconesOpt = [perfil, sacola]

function OpcoesHeaderIcones() {
  return (
    <Icones>
      {iconesOpt.map((x, index) => (
        <Icone key={index}><img src={x} alt='icone' ></img></Icone>
      ))}
    </Icones>
  )
}

export default OpcoesHeaderIcones