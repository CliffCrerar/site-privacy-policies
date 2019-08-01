import Layout from 'layout';
import MarkDownReader from 'static/md';
import { withRouter } from 'next/router';
import md1 from '../markdown/privacy.md'
const Privacy = () =>{
    return(
    <Layout>
        <MarkDownReader source={md1}/>
    </Layout>
    )
}

// 2    
export default withRouter(Privacy);