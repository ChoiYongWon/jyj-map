import Layout from "../components/layout"
import MapContainer from "../containers/map/MapContainer"
import Title from "../components/title_home"

export default function Home({children}: any){
    return (
        <>
        <Layout>
            <Title/>
            <MapContainer></MapContainer>
        </Layout>
        </>
    )
}