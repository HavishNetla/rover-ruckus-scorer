import { Jumbotron, Row, Col } from 'reactstrap'
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

  calculateAutoScore = () =>
    this.state.robot1Landing * 30 +
    this.state.robot2Landing * 30 +
    this.state.sampling * 25 +
    this.state.depotClaiming * 15 +
    this.state.robot1crater * 10 +
    this.state.robot2crater * 10

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Autonomous: {this.calculateAutoScore()}</h1>

          <Row style={{ textAlign: 'center' }}>
            <Col>
              <h4>Landing</h4>
            </Col>
            <Col>
              <h4>Sampling</h4>
            </Col>
          </Row>
          <Row style={{ textAlign: 'center' }}>
            <Col>
              <ToggleButton
                values={['0', '1', '2']}
                onChange={e => this.setState({ robot1Landing: e.selected })}
              />
            </Col>
            <Col>
              <ToggleButton
                values={['0', '1', '2']}
                onChange={e => this.setState({ sampling: e.selected })}
              />
            </Col>
          </Row>

          <Row style={{ textAlign: 'center' }}>
            <Col style={{ marginTop: '3em' }}>
              <h4>Alliance Depot Claiming</h4>
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
              <h4>Crater Parking</h4>
            </Col>
          </Row>
          <Row style={{ textAlign: 'center' }}>
            <Col>
              <ToggleButton
                values={['0', '1', '2']}
                onChange={e => this.setState({ robot1crater: e.selected })}
              />
            </Col>
          </Row>
        </Jumbotron>
      </div>
    )
  }
}
