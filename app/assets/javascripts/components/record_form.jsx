var RecordForm = React.createClass({
  getInitialState: function() {
    return {
      title: this.props.title || '',
      amount: this.props.amount || '',
      date: this.props.date || ''
    };
  },

  handleChange: function(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  },

  inputValid: function() {
    return this.state.title && this.state.amount && this.state.date
  },

  handleSubmit: function(e) {
    var self = this;

    e.preventDefault();
    $.ajax({
      url: '',
      data: {
        records: this.state
      },
      method: 'POST',
      success: function(data) {
        self.props.handleNewRecord(data);
        self.setState(self.getInitialState()); // Refresh state
      }
    })
  },

  render: function() {
    return (
      <form className="record-form form-inline" key={this.props.key}>
        <div className="form-group">
          <input type="text" className="form-control" value={this.state.title} placeholder="Title" name="title" onChange={this.handleChange}></input>
          <input type="text" className="form-control" value={this.state.amount} placeholder="Amount" name="amount" onChange={this.handleChange}></input>
          <input type="text" className="form-control" value={this.state.date} placeholder="Date" name="date" onChange={this.handleChange}></input>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} disabled={!this.inputValid()}>Submit</button>
        </div>
      </form>
    )
  }
});
