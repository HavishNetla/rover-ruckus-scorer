import { Jumbotron, Container, Row, Col } from 'reactstrap'
import ToggleButton from '../ToggleButton'

export default class extends React.Component {
  state = {
    robot1Landing: 0,
    robot2Landing: 0,
    sampling: 0,
    depotClaiming: 0,
    robot1crater: 0,
    robot2crater: 0,
  }

  calculateScore = () =>
    this.state.robot1Landing * 30 +
    this.state.robot2Landing * 30 +
    this.state.sampling * 25 +
    this.state.depotClaiming * 15 +
    this.state.robot1crater * 10 +
    this.state.robot2crater * 10

  render() {
    return (
      <div>
        <Container style={{ marginTop: '3em' }}>
          <h1>Autonomous: {this.calculateScore()}</h1>

          <Jumbotron>
            <Row style={{ textAlign: 'center' }}>
              <Col>
                <h2>Landing</h2>
              </Col>
            </Row>
            <Row style={{ textAlign: 'center' }}>
              <Col>
                <h4>Robot 1</h4>
              </Col>
              <Col>
                <h4>Robot 2</h4>
              </Col>
            </Row>
            <Row style={{ textAlign: 'center' }}>
              <Col>
                <ToggleButton
                  values={['Yes', 'No']}
                  onChange={e =>
                    this.setState({ robot1Landing: 1 - e.selected })
                  }
                />
              </Col>
              <Col>
                <ToggleButton
                  values={['Yes', 'No']}
                  onChange={e =>
                    this.setState({ robot2Landing: 1 - e.selected })
                  }
                />
              </Col>
            </Row>

            <Row style={{ textAlign: 'center' }}>
              <Col style={{ marginTop: '3em' }}>
                <h2>Sampling</h2>
              </Col>
            </Row>
            <Row style={{ textAlign: 'center' }}>
              <Col>
                <ToggleButton
                  values={['0', '1', '2']}
                  onChange={e => this.setState({ sampling: e.selected })}
                />
              </Col>
            </Row>

            <Row style={{ textAlign: 'center' }}>
              <Col style={{ marginTop: '3em' }}>
                <h2>Alliance Depot Claiming</h2>
              </Col>
            </Row>
            <Row style={{ textAlign: 'center' }}>
              <Col>
                <ToggleButton
                  values={['0', '1', '2']}
                  onChange={e => this.setState({ depotClaiming: e.selected })}
                />
              </Col>
            </Row>

            <Row style={{ textAlign: 'center', marginTop: '3em' }}>
              <Col>
                <h2>Crater Parking</h2>
              </Col>
            </Row>
            <Row style={{ textAlign: 'center' }}>
              <Col>
                <h4>Robot 1</h4>
              </Col>
              <Col>
                <h4>Robot 2</h4>
              </Col>
            </Row>
            <Row style={{ textAlign: 'center' }}>
              <Col>
                <ToggleButton
                  values={['Yes', 'No']}
                  onChange={e =>
                    this.setState({ robot1crater: 1 - e.selected })
                  }
                />
              </Col>
              <Col>
                <ToggleButton
                  values={['Yes', 'No']}
                  onChange={e =>
                    this.setState({ robot2crater: 1 - e.selected })
                  }
                />
              </Col>
            </Row>
          </Jumbotron>
        </Container>
      </div>
    )
  }
}
