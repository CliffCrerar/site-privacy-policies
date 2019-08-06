import Layout from 'layout'
import { disclaimer } from 'markdown'
import MarkDownReader from 'static/md';
import { withRouter } from 'next/router';

const Disclaimer = () => {
    return <Layout>
        <div className="text-container">
            <MarkDownReader source={disclaimer} />
        </div>
    </Layout>
}

export default withRouter(Disclaimer);