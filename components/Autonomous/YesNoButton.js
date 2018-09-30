import ToggleButton from '../ToggleButton'

export default () => (
  <ToggleButton
    values={['yes', 'no']}
    onChange={e => this.setState({ robot2Landing: 1 - e.selected })}
  />
)
