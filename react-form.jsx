var Form = React.createClass({
  getInitialState: function() {
    return { text: '' };
  },
  
  handleChange: function(event) {
    this.setState({text: event.target.value});
  },
  
  render: function() {
    return (
      <form>
        <label>Text:</label>
        <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
      </form>
    )
  }
});

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<Form />, document.body);
  });
}
