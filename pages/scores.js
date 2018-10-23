import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Container,
  Button,
  CardSubtitle,
  Jumbotron,
  Table,
} from 'reactstrap'
import Layout from '../components/Layout'

const scores = []
export default class extends React.Component {
  state = {
    score: [],
  }

  componentDidMount() {
    const storedNames = localStorage.getItem('Score')
    console.log(storedNames)
    if (storedNames !== '') {
      this.setState({ score: JSON.parse(storedNames) })
    }
  }

  onClearClick = () => {
    this.setState({ score: [] })
    localStorage.setItem('Score', '')
  }

  render() {
    return (
      <Layout>
        <Container style={{ marginTop: '3em' }}>
          <Jumbotron>
            <div style={{ marginBottom: '2em', textAlign: 'center' }}>
              <h1>Scores</h1>
              <Button color="danger" size="xs" onClick={this.onClearClick}>
                Clear Scores
              </Button>
            </div>
            <Table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Tele-Op Score</th>
                  <th>Auto Score</th>
                  <th>End Game Score</th>
                  <th>Total Score</th>
                </tr>
              </thead>
              <tbody>
                {this.state.score.map(
                  ({ date, autoScore, teleScore, endScore, score }) => (
                    <tr>
                      <td>{date}</td>

                      <td>{autoScore}</td>
                      <td>{teleScore}</td>
                      <td>{endScore}</td>
                      <td>
                        <strong>{score}</strong>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </Table>
          </Jumbotron>
        </Container>
      </Layout>
    )
  }
}
