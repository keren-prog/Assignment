import {useMyContext} from './context';

function Home () {
    const {sub} = useMyContext();
    
    console.log(sub(30,6))

    return(
        <> 
        <h3> This is a Home Component</h3>
        </>
    )
}
export default Home;