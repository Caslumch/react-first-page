import { livros } from './data'
import styled from 'styled-components'
import { Title } from '../Titulo'
import CardRecomend from '../CardRecomend'
import imgBook from '../../images/livro2.png'

const Container = styled.section`
background-color: #EBECEE;
padding-bottom: 20px;
display: flex;
flex-direction: column;
`

const Image = styled.img`
cursor:pointer;
`
const NovosLivrosContainer = styled.div`
    margin-top: 50px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


function UltimosLancamentos() {
    return (
        // this is section 
        <Container>
            <Title
                cor="#EB9B00"
                size="30px"
                align="center"
            > Últimos Lançamentos</Title>
            {/* <Title > Últimos Lançamentos</Title> */}

            <NovosLivrosContainer>
                {/* aqui a baixo eu realizo o map de livros */}
                {livros.map(livro => (
                    <Image src={livro.src} alt={`imagem do livro ${livro.nome}`}></Image>
                ))}
            </NovosLivrosContainer>
            <CardRecomend
                title="Talvez você se interesse por"
                subtitle="Angular 11"
                desc="Construindo uma aplicação com a plataforma Google"
                img={imgBook}
            />
        </Container>
    )
}

export default UltimosLancamentos

// o styled ele estiliza as classes, e eu apenas a chamo 

