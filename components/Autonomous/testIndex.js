import { Container, Row, Col } from 'reactstrap'
import Auto from './Auto'
import Tele from './Tele'
import EndGame from './EndGame'

export default class extends React.Component {
  state = {
    landing: 0,
    sampling: 0,
    depotClaiming: 0,
    crater: 0,

    cargo: 0,
    depot: 0,
  }

  render() {
    return (
      <div>
        <Container style={{ marginTop: '3em' }}>
          <Row style={{ textAlign: 'center' }}>
            <h1>Score:</h1>
          </Row>
          <Row>
            <Col>
              <h1>
                Autonomous: <Auto func={this.calculateAutoScore()} />
              </h1>
            </Col>
            <Col>
              <h1>Tele-Op: </h1>
            </Col>
            <Col>
              <h1>End Game:</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Auto />
            </Col>
            <Col>
              <Tele />
            </Col>
            <Col>
              <EndGame />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
