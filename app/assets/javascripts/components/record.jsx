const Record = React.createClass({
  amountFormat: function(amount) {
    return '$ ' + Number(amount).toLocaleString()

  },

  render: function() {
    return (
      <tr data-id={this.props.id}>
        <td>{this.props.date}</td>
        <td>{this.props.title}</td>
        <td>{this.amountFormat(this.props.amount)}</td>
      </tr>
    )
  }
});
