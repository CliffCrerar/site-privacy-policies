import Layout from 'layout';
import MarkDownReader from 'static/md';
import { withRouter } from 'next/router';
import md1 from '../markdown/privacy-policy.md'
const Privacy = () =>{
    return(
    <Layout>
        <div className="text-container">
            <MarkDownReader source={md1}/>
        </div>
    </Layout>
    )
}

// 2    
export default withRouter(Privacy);