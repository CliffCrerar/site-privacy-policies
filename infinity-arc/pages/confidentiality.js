import Layout from 'layout'
import { confidentialityPolicy } from 'markdown'
import MarkDownReader from 'static/md';
import { withRouter } from 'next/router';

const Confidentiality = () => {
    return <Layout>
        <div className="text-container">
            <MarkDownReader source={confidentialityPolicy} />
        </div>
    </Layout>
}

export default withRouter(Confidentiality);