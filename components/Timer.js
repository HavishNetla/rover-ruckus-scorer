import { Container, Progress, Button, ButtonGroup } from 'reactstrap'

function formatElasped(sec) {
  const minutes = Math.floor(sec / 60)
  const s = sec % 60
  const seconds = s.toFixed(0).padStart(2, '0')
  return `${minutes}:${seconds}`
}

export default class extends React.Component {
  state = { time: 0, interval: null }

  componentWillUnmount() {
    clearInterval(this.onPauseClick())
  }

  onPlayClick = () => {
    if (!this.state.interval) {
      this.setState({
        interval: setInterval(() => {
          this.setState({ time: (this.state.time += 0.1) })
        }, 100),
      })
    }
  }

  onPauseClick = () => {
    if (this.state.interval) clearInterval(this.state.interval)
    this.setState({ interval: null })
  }

  onClearClick = () => {
    if (this.state.interval) clearInterval(this.state.interval)

    this.setState({
      time: 0,
      interval: null,
    })
  }

  render() {
    return (
      <div>
        <Container style={{ marginTop: '3em' }}>
          <h3>Time {formatElasped(this.state.time)}</h3>
          <Progress
            value={(this.state.time / 150) * 100}
            style={{ height: '20px' }}
          />

          <ButtonGroup style={{ paddingTop: 10 }}>
            <Button color="primary" onClick={this.onPlayClick}>
              <i className="fas fa-play" />
            </Button>
            <Button color="primary" onClick={this.onPauseClick}>
              <i className="fas fa-pause" />
            </Button>
            <Button onClick={this.onClearClick}>Clear</Button>
          </ButtonGroup>
        </Container>
      </div>
    )
  }
}
