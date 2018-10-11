import {
  Jumbotron,
  Row,
  Col,
  Input,
  Button,
  ButtonGroup,
  Form,
} from 'reactstrap'

export default class extends React.Component {
  state = {
    cargo: 0,
    depot: 0,
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

  handleDepotChange = event => {
    this.setState({ depot: event.target.value })
  }

  handleCargoChange = event => {
    this.setState({ cargo: event.target.value })
  }

  calculateTeleScore = () => this.state.cargo * 5 + this.state.depot * 2

  render() {
    return (
      <div>
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
                <Button onClick={() => this.onCargoIncrement(false)}>+1</Button>
                <Button onClick={() => this.onCargoIncrement(true)}>+2</Button>
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
                <Button onClick={() => this.onDepotIncrement(false)}>+1</Button>
                <Button onClick={() => this.onDepotIncrement(true)}>+2</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    )
  }
}
