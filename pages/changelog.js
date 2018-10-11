import { Jumbotron, Container } from 'reactstrap'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <Container style={{ marginTop: '3em' }}>
      <Jumbotron>
        <h1 className="display-3">Change Log</h1>
        <p className="lead">
          These are all the cool changes that have been made so far
        </p>
        <hr className="my-2" />
        <p>v1.0.0 Scorer and Time Added</p>
      </Jumbotron>
    </Container>
  </Layout>
)
