import { Busan, Chungbuk, Chungnam, Daegu, Daejeon, Gangwon, Gwangju, Gyeongbuk, Gyeonggi, Gyeongnam, Incheon, Jeju, Jeonbuk, Jeonnam, Sejong, Seoul, Ulsan } from "../../components/map"
import styled, {useTheme} from "styled-components"

type MapProps = {
    map: string
    background: string
}

const Korea = styled.g`
    & > polyline, path {
        fill: ${(props:MapProps)=>props.map};
        fill-opacity: 1;
        stroke:${(props:MapProps)=>props.background};
        stroke-opacity: 1;
        stroke-width:1.2;
        transition: fill .2s ease;
        cursor: pointer;
    }

    // & > polyline:hover, & > path:hover{
    //     fill:blue;
    // }
`

export default function MapContainer({children}: any){
    const theme: any = useTheme()

    return (
        <>
            <svg
                width="100%"
                height="90%"
                viewBox="0 0 800 1200"
            >
                <Korea map={theme.map} background={theme.background_dark}>
                    <Seoul key={1}></Seoul>
                    <Daegu key={2}></Daegu>
                    <Sejong key={3}></Sejong>
                    <Busan key={4}></Busan>
                    <Chungbuk key={5}></Chungbuk>
                    <Chungnam key={6}></Chungnam>
                    <Daejeon key={7}></Daejeon>
                    <Gangwon key={8}></Gangwon>
                    <Gyeongbuk key={9}></Gyeongbuk>
                    <Gyeonggi key={10}></Gyeonggi>
                    <Gyeongnam key={11}></Gyeongnam>
                    <Incheon key={12}></Incheon>
                    <Jeju key={13}></Jeju>
                    <Jeonbuk key={14}></Jeonbuk>
                    <Jeonnam key={15}></Jeonnam>
                    <Ulsan key={16}></Ulsan>
                    <Gwangju key={17}></Gwangju>

                </Korea>

            </svg>
        </>
    )
}