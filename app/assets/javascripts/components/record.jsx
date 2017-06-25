const Record = React.createClass({
  amountFormat: function(amount) {
    return '$ ' + Number(amount).toLocaleString();
  },

  handleDelete: function(e) {
    $.ajax({
      url: "records/" + this.props.record.id,
      method: 'DELETE',
      success: () => {
        this.props.removeRecordFromList(this.props.record);
      }
    })
  },

  render: function() {
    return (
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{this.amountFormat(this.props.record.amount)}</td>
        <td>
          <button className="glyphicon glyphicon-trash" onClick={this.handleDelete}></button>
          <button className="glyphicon glyphicon-edit"></button>
        </td>
      </tr>
    )
  }
});
