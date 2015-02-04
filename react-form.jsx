var MAX_CHARS=20;

var Form = React.createClass({
  getInitialState: function() {
    return { text: '' };
  },
  
  handleChange: function(event) {
    this.setState({text: event.target.value});
  },
  
  remaining: function() {
    return MAX_CHARS - this.state.text.length;
  },
  
  render: function() {
    return (
      <form>
        <label>Text:</label>
        <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
        <p>{this.remaining()} chars to go</p>
      </form>
    )
  }
});

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<Form />, document.body);
  });
}
