import styled from "styled-components"
import Image from 'next/image'
import Svg from "../../public/Shinsegae_logo.svg"

const Wrapper = styled.div`
    max-width: 500px;
    width: 100%;
    height: 15%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    font-weight: bold;

`

const H1 = styled.div`
    margin-top:0.25rem;
    font-size: 30px;
    color: #303841;

    @media screen and (max-width: 500px) {
        font-size: 22px;
    }
`
const H2 = styled.div`
    font-size: 1rem;
`

const LogoWrapper = styled.div`
    width: 80px;
    height: auto;
`

export default function Title(props: any){
    return (
        <Wrapper>
            <div style={{display:"flex",flexDirection:"column"}}>
                <LogoWrapper>
                    <Image src={Svg}></Image>
                </LogoWrapper>
                <H1>정용진 회장의 맛집 List</H1>
            </div>
            
        </Wrapper>
    )
}