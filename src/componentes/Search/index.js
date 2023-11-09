import Input from '../Input'
import styled from 'styled-components';
import { useState } from 'react';
import { livros } from './data'

const SearchContainer = styled.section`

background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
color: #FFF;
text-align: center;
padding: 85px 0;
height: 100%;
width : 100%;
position: relative;

`

const Title = styled.h2`
color: #FFF;
font-size: 36px;
text-align: center;
width: 100%;
`
const Subtitle = styled.h3`
font-size: 16px;
font-weight: 500;
margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }

`



function Pesquisa() {
    const [booksSearch, setBooksSearch] = useState([])

    const buscarPeloEnter = (evento) => {
        if (evento.key === 'Enter') {
            const textoDigitado = evento.target.value.toLowerCase();

            let resultadoPesquisa = livros.filter((livro) => livro.nome.toLowerCase().includes(textoDigitado));

            if (resultadoPesquisa.length === 0) {
                resultadoPesquisa = [
                    {
                        nome: `Nenhum livro com o nome ${textoDigitado} encontrado`,
                    },
                ];
            }

            setBooksSearch(resultadoPesquisa);
        }
    }

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input

                placeholder="Escreva sua próxima leitura"

                onBlur={(evento) => {
                    const textoDigitado = evento.target.value.toLowerCase();

                    let result = livros.filter((livro) => livro.nome.toLowerCase().includes(textoDigitado))
                    if (result.length === 0) {
                        result = [{
                            nome: `Nenhum livro com o nome ${textoDigitado} encontrado`
                        }]
                    }
                    setBooksSearch(result)
                }}
                onKeyDown={buscarPeloEnter}
            />
            <section>
                {booksSearch.map((livro, index) => (
                    <Resultado key={index}>
                        <p>{livro.nome}</p>
                        {livro.src && <img src={livro.src} alt={`Imagem`} />}
                    </Resultado>
                ))}
            </section>
        </SearchContainer>
    );
}

export default Pesquisa