import Nav from '../components/Nav'

const Layout = ({ children }) => (
  <div>
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0"
      />

      <script src="https://cdn.auth0.com/js/auth0/9.5.1/auth0.min.js" />

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossOrigin="anonymous"
      />
    </head>
    <Nav />

    <div>{children}</div>
  </div>
)
export default Layout
