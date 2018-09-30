import { Jumbotron, Button, Container, Row, Col } from 'reactstrap'
import Layout from '../components/Layout'
import Timer from '../components/Timer'
import Autonomous from '../components/Autonomous'

export default () => (
  <Layout>
    <Timer />
    <Autonomous />
  </Layout>
)
