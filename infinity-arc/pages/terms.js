import Layout from 'layout'
import { termsOfUse } from 'markdown'
import MarkDownReader from 'static/md';
import { withRouter } from 'next/router';

const TermsOfUse = () => {
    return (
        <Layout>
            <div className="text-container">
                <MarkDownReader source={termsOfUse} />
            </div>
        </Layout>
    );
}

export default withRouter(TermsOfUse);