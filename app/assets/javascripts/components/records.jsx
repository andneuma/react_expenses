var Records = React.createClass({
  getInitialState: function() {
    return ({ records: this.props.data });
  },

  getDefaultProps: function() {
    return ({ records: [] });
  },

  sumOfExpenses: function() {
    return this.props.data.reduce(function(sum, x) {
      return(sum + x);
    });
  },

  addRecord: function(record) {
    this.setState({ record: this.state.records.push(record) });
  },

  removeRecord: function(record) {

  },

  render: function() {
    var records = this.props.data.map(function(record) {
      return <Record date={record.date} title={record.title} amount={record.amount} id={record.id} key={'record_' + record.id}/>
    });

    return (
      <div className="records">
        <h1 className="title">Records</h1>
        <table className="table table-bordered display">
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
        <RecordForm handleNewRecord={this.addRecord}/>
      </div>
    )
  }
})
