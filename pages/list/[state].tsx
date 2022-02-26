import ListLayout from "../../components/layout/list"
import dynamic from 'next/dynamic'
// import ListContainer from "../../containers/list/ListContainer"

const ListContainer = dynamic(
  () => import("../../containers/list/ListContainer"),
  { ssr: false }
)

export default function List(props: any){

    return (
        <>
            <ListLayout>
                <ListContainer state={props.state}></ListContainer>
            </ListLayout>
        </>
    )
}