var Form = React.createClass({
  getInitialState: function() {
    return { text: '' };
  },
  
  render: function() {
    return (
      <form>
        <label>Text:</label>
        <input type="text" name="text" value={this.state.text}/>
      </form>
    )
  }
});

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<Form />, document.body);
  });
}
