import styled, { useTheme } from "styled-components"

const Wrapper = styled.div`
    max-width: 500px;
    width: 80%;
    min-height: 12%;
    box-sizing: border-box;
    display: flex;
    margin: 0 auto;
    align-items: flex-end;
    font-weight: bold;
    margin-bottom: 25px;

    @media screen and (max-width: 500px) {
        margin-bottom: 20px;

    }
`

const H1 = styled.div`
    font-size: 30px;
    color: #303841;

    @media screen and (max-width: 500px) {
        font-size: 24px;
    }
`

type Props = {
    name: string
}

export default function Title(props: Props){

    const theme: any = useTheme()

    return (
        <Wrapper>
                <H1 style={{color: theme.color_1}}>{props.name} 맛집</H1>
            
        </Wrapper>
    )
}