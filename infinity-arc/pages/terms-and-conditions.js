import Layout from 'layout'
import { termsAndConditions } from 'markdown'
import MarkDownReader from 'static/md';
import { withRouter } from 'next/router';

const TermsConditions = () => {
    return <Layout>
        <div className="text-container">
            <MarkDownReader source={termsAndConditions} />
        </div>
    </Layout>
}

export default withRouter(TermsConditions);