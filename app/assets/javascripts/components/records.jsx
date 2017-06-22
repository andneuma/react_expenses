var Records = React.createClass({
  getInitialstate: function() {
    return ({ records: this.props.data });
  },

  getDefaultProps: function() {
    return ({ records: [] });
  },

  render: function() {
    var records = this.props.data.map(function(record) {
      return <Record date={record.date} title={record.title} amount={record.amount} />
    });

    return (
      <div className="records">
        <h1 className="title">Records</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {records}
          </tbody>
        </table>
      </div>
    )
  }
})
