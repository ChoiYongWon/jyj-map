import Layout from "../components/layout"
import MapContainer from "../containers/map/MapContainer"

export default function Home({children}: any){
    return (
        <>
        <Layout>
            <MapContainer></MapContainer>
        </Layout>
        </>
    )
}