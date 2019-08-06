import Layout from 'layout'
import routingTable from 'static/routingtable'
import Link from 'next/link';
import MnextMarkdown from 'static/md';
function Landing() {
  return (
    <Layout>
      {(function () {
        var amendRoutingTable = routingTable.slice(2).splice(0,7)
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
      <FrontPageMarkDown />
    </Layout>
  )
}

export default Landing;

function FrontPageMarkDown() {
  return (
    <React.Fragment>
      <h1 className="display-3 text-center mt-5 mb-5 pb5">Principles on Privacy</h1>
      <MnextMarkdown source={`
>We build privacy that works for everyone. It’s a responsibility that comes with creating products and services that are free and accessible for all. This is especially important as technology progresses and privacy needs evolve. We look to these principles to guide our products, our processes and our people in keeping our users’ data private, safe and secure.

### 1. Respect our users. Respect their privacy.
We believe that these ideas are inseparable. Together, they represent a single, core belief that has influenced everything that we’ve made since day one, and everything that we’ll make moving forward. When people use our products they trust us with their information, and it’s our job to do right by them. This means always being thoughtful about what data we use, how we use it and how we protect it.

### 2. Be clear about what data we collect and why.
To help people make informed decisions about how they use Google products, we make it easy to understand what data we collect, how it’s used and why. Being transparent means making this information readily available, understandable and actionable.

### 3. Never sell our users’ personal information to anyone.
We use data to make Google products such as Search and Maps as useful as possible. We also use data to serve more relevant ads. While these ads help fund our services and make them free for everyone, it’s important to clarify that our users’ personal information is simply not for sale.

### 4. Make it easy for people to control their privacy.
When it comes to privacy, we know one size doesn’t fit all. Every Google Account is built with on/off data controls, so that our users can choose the privacy settings that are right for them. And as technology evolves, our privacy controls evolve as well, ensuring that privacy is always an individual choice that belongs to the user.

### 5. Empower people to review, move or delete their data.
We believe that every user should have access to the personal information they’ve shared with us – anytime and for any reason. That’s why we continue to make it easier for people to access and review their data, download and move it to another service if they want or delete it entirely.

### 6. Build the strongest security technologies in to our products.
Respecting the privacy of our users means protecting the data that they trust us with. To keep every Google product and service secure for our users, we engineer and employ one of the most advanced security infrastructures in the world. This means constantly strengthening our built-in security technologies to detect and protect against evolving online threats, before they ever reach our users.

### 7. Lead by example to advance online security for all.
Keeping users safe online doesn’t stop with Google – it extends to the whole Internet. Google was the first company to create many of the security standards we all use today, and we continue to innovate new security technologies that can be used by everyone. We share our security learning, experiences and tools with partners, organisations and competitors around the world, because Internet-wide security demands industry-wide collaboration.
 `} />
 </React.Fragment>
 )
}