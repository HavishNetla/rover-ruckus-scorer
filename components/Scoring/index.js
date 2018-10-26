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
import moment from 'moment'
import ToggleButton from '../ToggleButton'

let scores = [] /* eslint-disable-line */
const test1 = {
  scores: [{ score: 10, time: '10.18.19' }, { score: 100, time: '10.18.19' }],
}

export default class extends React.Component {
  state = {
    landing: 0,
    sampling: 0,
    depotClaiming: 0,
    crater: 0,

    cargo: 0,
    depot: 0,

    latch: 0,
    robot1Park: 0,
    robot2Park: 0,
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

  onClearClick = () => {
    window.location.reload() // OOF
  }

  onSaveClick = () => {
    const storedNames = localStorage.getItem('Score')

    if (storedNames !== '') {
      scores = JSON.parse(storedNames)
    }
    const time = moment().format('MMM Do YYYY h:mm:ss') // October 18th 2018, 6:40:39 pm

    const object = {
      date: time,
      score: this.calculateFinalScore(),
      autoScore: this.calculateAutoScore(),
      teleScore: this.calculateTeleScore(),
      endScore: this.calculateEndGameScore(),
    }
    scores.push(object)
    const stringify = JSON.stringify(scores)
    localStorage.setItem('Score', stringify)
  }

  onKeyPress = event => {
    if (event.which === 13 /* Enter */) {
      event.preventDefault()
    }
  }

  calculateAutoScore = () =>
    this.state.landing * 30 +
    this.state.sampling * 25 +
    this.state.depotClaiming * 15 +
    this.state.crater * 10

  calculateTeleScore = () => this.state.cargo * 5 + this.state.depot * 2

  calculateEndGameScore = () =>
    this.state.latch * 50 + this.state.robot1Park + this.state.robot2Park

  calculateFinalScore = () =>
    this.calculateAutoScore() +
    this.calculateTeleScore() +
    this.calculateEndGameScore()

  handleDepotChange = event => {
    if (event.target.value < 0) {
      this.setState({ depot: 0 })
    } else {
      this.setState({ depot: event.target.value || 0 })
    }
  }

  handleCargoChange = event => {
    if (event.target.value < 0) {
      this.setState({ cargo: 0 })
    } else {
      this.setState({ cargo: event.target.value || 0 })
    }
  }

  render() {
    return (
      <div>
        <div
          style={{
            paddingBottom: 15,
            paddingTop: 15,
            backgroundColor: '#cecece',
            textAlign: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 2,
          }}
        >
          <h1
            style={{
              borderRadius: '0.3rem',
            }}
          >
            Score:{' '}
            {this.calculateAutoScore() +
              this.calculateTeleScore() +
              this.calculateEndGameScore()}
          </h1>
          <Button color="danger" size="xs" onClick={this.onClearClick}>
            Clear
          </Button>
          <Button
            style={{ marginLeft: '1em' }}
            color="success  "
            size="xs"
            onClick={this.onSaveClick}
          >
            Save
          </Button>
        </div>

        <Container style={{ marginTop: '3em' }}>
          <Row>
            <Col
              style={{
                display: 'table-cell',
              }}
            >
              <Jumbotron style={{ minWidth: 280 }}>
                <Row style={{ textAlign: 'center', marginBottom: '3em' }}>
                  <Col>
                    <h2>Autonomous: {this.calculateAutoScore()} </h2>
                  </Col>
                </Row>
                <Row style={{ textAlign: 'center' }}>
                  <Col>
                    <h4>Landing</h4>
                    <ToggleButton
                      values={['0', '1', '2']}
                      onChange={e => this.setState({ landing: e.selected })}
                    />
                  </Col>
                  <Col>
                    <h4>Sampling</h4>
                    <ToggleButton
                      values={['0', '1', '2']}
                      onChange={e => this.setState({ sampling: e.selected })}
                    />
                  </Col>
                </Row>

                <Row style={{ textAlign: 'center' }}>
                  <Col style={{ marginTop: '3em' }}>
                    <h4>Alliance Depot Claiming</h4>
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
                    <ToggleButton
                      values={['0', '1', '2']}
                      onChange={e => this.setState({ crater: e.selected })}
                    />
                  </Col>
                </Row>
              </Jumbotron>
            </Col>

            <Col
              style={{
                display: 'table-cell',
              }}
            >
              <Jumbotron style={{ minWidth: 280 }}>
                <Row style={{ textAlign: 'center', marginBottom: '3em' }}>
                  <Col>
                    <h2>Tele-Op: {this.calculateTeleScore()} </h2>
                  </Col>
                </Row>
                <Row style={{ textAlign: 'center' }}>
                  <Col>
                    <h4>Minerals in Cargo Hold</h4>
                    <Form>
                      <Input
                        type="number"
                        value={this.state.cargo}
                        cargo={this.state.cargo}
                        onChange={this.handleCargoChange}
                        onKeyPress={this.onKeyPress}
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
                    <Input
                      type="number"
                      value={this.state.depot}
                      cargo={this.state.depot}
                      onChange={this.handleDepotChange}
                      onKeyPress={this.onKeyPress}
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

            <Col
              style={{
                display: 'table-cell',
              }}
            >
              <Jumbotron style={{ minWidth: 280 }}>
                <Row style={{ textAlign: 'center', marginBottom: '3em' }}>
                  <Col>
                    <h2>End Game: {this.calculateEndGameScore()} </h2>
                  </Col>
                </Row>
                <Row style={{ textAlign: 'center' }}>
                  <Col>
                    <h4>Latched Robots</h4>
                    <ToggleButton
                      values={['0', '1', '2']}
                      onChange={e => this.setState({ latch: e.selected })}
                    />
                  </Col>
                </Row>
                <Row style={{ textAlign: 'center' }}>
                  <Col style={{ marginTop: '3em' }}>
                    <h4>Parked Robots</h4>
                  </Col>
                </Row>
                <Row style={{ textAlign: 'center' }}>
                  <Col>
                    <h6>Robot 1</h6>
                    <ToggleButton
                      values={['Not Parked', 'In', 'Fully In']}
                      onChange={e => {
                        if (e.selected === 0) {
                          this.setState({ robot1Park: 0 })
                        } else if (e.selected === 1) {
                          this.setState({ robot1Park: 15 })
                        } else if (e.selected === 2) {
                          this.setState({ robot1Park: 25 })
                        } else {
                          this.setState({ robot1Park: 0 })
                        }
                      }}
                    />
                  </Col>
                </Row>
                <Row style={{ textAlign: 'center', paddingTop: 20 }}>
                  <Col>
                    <h6>Robot 2</h6>
                    <ToggleButton
                      values={['Not Parked', 'In', 'Fully In']}
                      onChange={e => {
                        if (e.selected === 0) {
                          this.setState({ robot2Park: 0 })
                        } else if (e.selected === 1) {
                          this.setState({ robot2Park: 15 })
                        } else if (e.selected === 2) {
                          this.setState({ robot2Park: 25 })
                        } else {
                          this.setState({ robot2Park: 0 })
                        }
                      }}
                    />
                  </Col>
                </Row>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
