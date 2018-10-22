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

  generateCSV = () => {
    const replacer = (key, value) => (value === null ? '' : value) // Specify how you want to handle null values here
    const header = Object.keys(this.state.score[0])
    let csv = this.state.score.map(row =>
      header
        .map(fieldName => JSON.stringify(row[fieldName], replacer))
        .join(','),
    )
    csv.unshift(header.join(','))
    csv = csv.join('\r\n')

    console.log(csv)
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
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {this.state.score.map(({ score, date }) => (
                  <tr>
                    <td>{date}</td>
                    <td>{score}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Jumbotron>
        </Container>
        <Button onClick={this.generateCSV()}>asd</Button>
      </Layout>
    )
  }
}
