import Layout from 'layout'
import { codeOfConduct } from 'markdown'
import MarkDownReader from 'static/md';
import { withRouter } from 'next/router';
const CodeOfConduct = () =>{
    return <Layout>
            <div className="text-container">
                <MarkDownReader source={codeOfConduct} />
            </div>
    </Layout>
}

export default withRouter(CodeOfConduct);