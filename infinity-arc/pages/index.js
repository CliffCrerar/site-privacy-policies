import Layout from 'layout'
import routingTable from 'static/routingtable'
import Link from 'next/link';
import MnextMarkdown from 'static/md';
import { privacyPrinciples } from '../markdown'
function Landing() {
  return (
    <Layout>
      {(function () {
        var amendRoutingTable = routingTable.slice(2).splice(0, 5)
        console.log('amendRoutingTable: ', amendRoutingTable);
        var Links = amendRoutingTable.map(link => {
          // console.log(link);
          return (
            <Link href={link.route} key={'route-' + link.route.replace('/', '')}>
              <a className="list-group-item list-group-item-action">{link.pageTitle}</a>
            </Link>
          )
        })
        return (
          <div className="list-group text-container">
            {Links}
          </div>)
      }())}
      <hr style={{margin:"15vh 0 15vh 0"}}></hr>
      <FrontPageMarkDown />
    </Layout>
  )
}

export default Landing;

function FrontPageMarkDown() {
  return (
    <React.Fragment>
      <h1 className="display-3 text-center mt-5 mb-5 pb5">Principles on Privacy</h1>
      <MnextMarkdown source={privacyPrinciples} />
    </React.Fragment>
  )
}