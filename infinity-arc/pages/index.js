import Layout from 'layout'
import routingTable from 'static/routingtable'
import Link from 'next/link'
function Landing() {
  return (
    <Layout>
      {(function () {
        var amendRoutingTable = routingTable.slice(2);
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
    </Layout>
  )
}

export default Landing;