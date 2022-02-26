import ListLayout from "../../components/layout/list"
import ListContainer from "../../containers/list/ListContainer"

export default function List(props: any){

    return (
        <>
            <ListLayout>
                <ListContainer state={props.state}></ListContainer>
            </ListLayout>
        </>
    )
}

export async function getServerSideProps(context: any) {

    return {
        props:{
            state: context.params.state
        }
    }
  }