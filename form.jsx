var App = React.createClass({

  getInitialState: function () {
    return {
      lists: [],
    };
  },

  deleteItemHandel: function (index) {
      const lists = this.state.lists;
      lists.splice(index, 1);
      this.setState({lists});
  },

  addItemHandel: function () {
    if (this.refs.text.checked) {
      this.state.lists.push(
        <div>
          <input type="text"/>
          <button type="button"> X</button>
        </div>
      );
    }
    if (this.refs.date.checked) {
      this.state.lists.push(
        <div>
          <input type="date"/>
          <button type="button"> X</button>
        </div>
      );
    }
    this.setState({lists: this.state.lists});
  },

  render: function () {
    return <div>
      <div>
        <button type="button">预览</button>
      </div>
      <input type="radio" name="options" ref="text"/>文本
      <input type="radio" name="options" ref="date"/>日期
      <button type="button" onClick={this.addItemHandel}> +</button>
      <div onClick={this.deleteItemHandel}>{this.state.lists}</div>
    </div>
  }
});

ReactDOM.render(<App />, document.getElementById("container"));