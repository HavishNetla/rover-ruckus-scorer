import { Button, ButtonGroup } from 'reactstrap'

export default class extends React.Component {
  state = { selected: null }

  click = i => {
    this.setState({ selected: i })
    if (this.props.onChange) this.props.onChange({ selected: i })
  }

  render() {
    return (
      <div>
        <ButtonGroup>
          {this.props.values.map((x, i) => (
            <Button
              color={this.state.selected === i ? 'primary' : 'secondary'}
              onClick={() => this.click(i)}
            >
              {x}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    )
  }
}
