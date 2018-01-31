// TODO
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {acquired: false};
  }
  onListItemClick() {
    this.setState({acquired: !this.state.acquired});
    console.log('mouse over', this);
  }
  render() {
    var style = {
      font-weight: this.state.acquired ? 'bold' : 'normal'
    };
    
    return (<li style={style} onClick={this.onListItemClick.bind(this)}>
      {this.props.item}</li>);
  }
} 


var GroceryList = (props) => (
  <ul>
    {props.items.map( item => <GroceryListItem item={item} />)}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Apples', 'Bananas', 'Kiwis', 'Oranges']} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
