var Records = React.createClass({
  getInitialState: function() {
    return {records: this.props.records};
  },

  getDefaultProps: function() {
    return {records: []};
  },

  updateRecords: function(newCollection) {
  },

  addRecord: function(record) {
    records = this.state.records.slice();
    records.push(record);
    this.setState({records: newCollection});
  },

  removeRecordFromList: function(record) {
    records = this.state.records.slice();
    index = records.indexOf(record);
    records.splice(index, 1);
    this.setState({records: newCollection});
  },

  render: function() {
    var records = this.state.records.map((record) => {
      return <Record
        record={record}
        key={'record_' + record.id}
        removeRecordFromList={this.removeRecordFromList}
      />
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
              <th>Action</th>
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
