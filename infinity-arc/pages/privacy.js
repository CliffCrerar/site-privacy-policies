import Layout from 'layout';
import MnextMarkdown from 'static/md.js';
import md from 'component/privacy.md'

const Privacy = () =>{
    return(
    <Layout>
        <MnextMarkdown src={md}/>
    </Layout>)
}

export default Privacy;