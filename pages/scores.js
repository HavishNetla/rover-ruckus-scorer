import { Alert, Container, Button, Jumbotron, Table } from 'reactstrap'
import converter from 'json-2-csv'
import moment from 'moment'
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import DownloadLink from 'react-download-link'

import Layout from '../components/Layout'

ReactChartkick.addAdapter(Chart)

const scoreData = [
  { name: 'Score', data: {} },
  { name: 'Auto', data: {} },
  { name: 'Tele', data: {} },
  { name: 'End', data: {} },
]
export default class extends React.Component {
  state = {
    score: [],
  }

  componentDidMount() {
    const storedNames = localStorage.getItem('Score')
    if (storedNames !== '') {
      const parsedData = JSON.parse(storedNames)
      console.log(JSON.stringify(parsedData))
      this.setState({ score: parsedData })

      parsedData.map(({ score, autoScore, teleScore, endScore, date }) => {
        const formatedDate = moment([date], 'MMM Do YYYY h:mm:ss').format(
          'YYYY-MM-DD h:mm:ss',
        )

        scoreData[0].data[formatedDate] = score
        scoreData[1].data[formatedDate] = autoScore
        scoreData[2].data[formatedDate] = teleScore
        scoreData[3].data[formatedDate] = endScore
      })
      console.log(JSON.stringify(scoreData))
    }
  }

  onClearClick = () => {
    this.setState({ score: [] })
    localStorage.setItem('Score', '')
  }

  onCSVgenerate = () => {
    const json2csvCallback = function(err, csv) {
      if (err) throw err
      const csvFile = csv
      console.log(csv)
      return (
        <DownloadLink filename="myfile.csv" exportFile={() => csvFile}>
          Save to disk
        </DownloadLink>
      )
    }
    converter.json2csv(this.state.score, json2csvCallback)
    return <p>asd</p>
  }

  render() {
    return (
      <Layout>
        <Container style={{ marginTop: '3em' }}>
          <Alert color="danger">
            Clearing browse history removes all scores
          </Alert>

          <Jumbotron>
            <LineChart discrete data={scoreData} />

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
