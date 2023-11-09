import styled from "styled-components"
import { Title } from "../Titulo"



const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    margin-top: 50px;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`

const Button = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: 2px;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
    border-radius: 20px;
`

const Desc = styled.p`
    max-width: 300px;
`

const Subtitle = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgLivro = styled.img`
    width: 100%;
    border-radius: 20px
`

function CardRecomend({ title, subtitle, desc, img }) {
    return (
        <Card>
            <div>
                <Title
                    size="16px"
                    cor="#EB9B00"
                    align="center"
                >{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Desc>{desc}</Desc>
            </div>
            <div>
                <ImgLivro src={img} />
                <Button>Saiba mais</Button>
            </div>
        </Card>
    )
}

export default CardRecomend