import {
  Jumbotron,
  Container,
  Row,
  Col,
  Input,
  Button,
  ButtonGroup,
  Form,
} from 'reactstrap'
import ToggleButton from '../ToggleButton'

export default class extends React.Component {
  state = {
    robot1Landing: 0,
    robot2Landing: 0,
    sampling: 0,
    depotClaiming: 0,
    robot1crater: 0,
    robot2crater: 0,

    cargoMinerals: 0,
    depotMinerals: 0,

    cargo: 0,
    depot: 0,
  }

  calculateAutoScore = () =>
    this.state.robot1Landing * 30 +
    this.state.robot2Landing * 30 +
    this.state.sampling * 25 +
    this.state.depotClaiming * 15 +
    this.state.robot1crater * 10 +
    this.state.robot2crater * 10

  calculateTeleScore = () => this.state.cargo * 5 + this.state.depot * 2

  handleDepotChange = event => {
    this.setState({ depot: event.target.value })
  }

  onDepotIncrement = plus2 => {
    if (plus2 === true) {
      this.setState({
        depot: (this.state.depot = parseInt(this.state.depot) + 2),
      })
    } else if (plus2 === false) {
      this.setState({
        depot: (this.state.depot = parseInt(this.state.depot) + 1),
      })
    }
  }

  handleCargoChange = event => {
    this.setState({ cargo: event.target.value })
  }

  onCargoIncrement = plus2 => {
    if (plus2 === true) {
      this.setState({
        cargo: (this.state.cargo = parseInt(this.state.cargo) + 2),
      })
    } else if (plus2 === false) {
      this.setState({
        cargo: (this.state.cargo = parseInt(this.state.cargo) + 1),
      })
    }
  }

  render() {
    const { cargo } = this.state

    return (
      <div>
        <Container style={{ marginTop: '3em' }}>
          <Row style={{ textAlign: 'center' }}>
            <h1>
              Score: {this.calculateAutoScore() + this.calculateTeleScore()}
            </h1>
          </Row>
          <Row>
            <Col>
              <h1>Autonomous: {this.calculateAutoScore()}</h1>
            </Col>
            <Col>
              <h1>Tele-Op: {this.calculateTeleScore()}</h1>
            </Col>
            <Col>
              <h1>End Game: {this.calculateAutoScore()}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Jumbotron>
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
                      onChange={e =>
                        this.setState({ robot1Landing: e.selected })
                      }
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
                      onChange={e =>
                        this.setState({ depotClaiming: e.selected })
                      }
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
                      onChange={e =>
                        this.setState({ robot1crater: e.selected })
                      }
                    />
                  </Col>
                </Row>
              </Jumbotron>
            </Col>
            <Col>
              <Jumbotron>
                <Row style={{ textAlign: 'center' }}>
                  <Col>
                    <h4>Minerals in Cargo Hold</h4>
                  </Col>
                </Row>
                <Row style={{ textAlign: 'center' }}>
                  <Col>
                    <Form>
                      <Input
                        type="number"
                        value={this.state.cargo}
                        cargo={this.state.cargo}
                        onChange={this.handleCargoChange}
                      />
                    </Form>
                    <ButtonGroup>
                      <Button onClick={() => this.onCargoIncrement(false)}>
                        +1
                      </Button>
                      <Button onClick={() => this.onCargoIncrement(true)}>
                        +2
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
                <Row style={{ textAlign: 'center', marginTop: '3em' }}>
                  <Col>
                    <h4>Minerals in Depot</h4>
                  </Col>
                </Row>
                <Row style={{ textAlign: 'center' }}>
                  <Col>
                    <Input
                      type="number"
                      value={this.state.depot}
                      cargo={this.state.depot}
                      onChange={this.handleDepotChange}
                    />
                    <ButtonGroup>
                      <Button onClick={() => this.onDepotIncrement(false)}>
                        +1
                      </Button>
                      <Button onClick={() => this.onDepotIncrement(true)}>
                        +2
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </Jumbotron>
            </Col>

            <Col>
              <Jumbotron>End Game</Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
