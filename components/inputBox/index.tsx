import styled, { useTheme } from "styled-components"
import {FaSearch} from "react-icons/fa"
import {useMediaQuery} from "react-responsive"

const Wrapper = styled.div`
    width: 80%;
    max-width: 500px;
    height: auto;
    position: relative;
    margin: 0 auto;
`

const Input = styled.input`
    width: 100%;
    padding: 13px 26px;
    box-sizing: border-box;
    border-radius: 9999px;
    outline: none;
    border: none;
    font-size: 18px;

    @media screen and (max-width: 500px) {
        font-size: 16px;
    }
`

const SearchIcon = styled.div`


`

const Icon = styled(FaSearch)`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 10px;
    right: 26px;
    
    @media screen and (max-width: 500px) {
        width: 20px;
        height: 20px;
    }
`

type Props = {
    onChange: (e:any)=>void
}

export default function InputBox(props: Props){

    const theme: any = useTheme()
    const Mobile = useMediaQuery({
        query: '(max-width: 500px)'
    })
    
    return (
        <Wrapper>
            <Input onChange={props.onChange} style={{background: theme.color_1, color: theme.color_4}} placeholder="지역명, 음식명, 메뉴명"></Input>
            <Icon style={{color: theme.color_4}}/>

        </Wrapper>
    )
}