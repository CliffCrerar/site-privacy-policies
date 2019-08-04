import Head from 'next/head';
const AppHead = () => (
    <Head>
        <title>Infinity Arc terms and policies</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link href="https://fonts.googleapis.com/css?family=Audiowide&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/png" href={require('static/urls').favicon} />
        <link rel="stylesheet" href="static/bootstrap.min.css" />
        <link rel="stylesheet" href="static/css/global.css" />
        <link href="https://fonts.googleapis.com/css?family=Orbitron&display=swap" rel="stylesheet"></link>
    </Head>
)

export default AppHead;