import Layout from 'layout'
import { cookiesPolicy } from 'markdown'
import MarkDownReader from 'static/md';
import { withRouter } from 'next/router';

const Cookies = () => {
    return <Layout>
        <div className="text-container">
            <MarkDownReader source={cookiesPolicy} />
        </div>
    </Layout>
}

export default withRouter(Cookies);