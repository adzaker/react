import React from 'react';
import PropTypes from "prop-types";

const dataSource = [
  {firstName: "John", lastName: "Doe", active: false},
  {firstName: "Mary", lastName: "Moe", active: false},
  {firstName: "Peter", lastName: "Noname", active: true}
]

class GridRecord extends React.Component {
  render(){
    let {record} = this.props;
    return <tr>
      <th>{record.firstName}</th>
      <th><input type="text" onChange={this.props.changeLastName} value={record.lastName}/></th>
      <th><input type="checkbox" checked={record.active} onChange={this.props.toggleActive}/></th>
    </tr>
  }
}

GridRecord.defaultProps = {
  record: {firstName: "N/A", lastName: "N/A", active: false}
};

GridRecord.propTypes = {
  record: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
  })
};

export default class GridComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      records:[]
    }
  }
  componentDidMount() {
    this.refs.filterInput && this.refs.filterInput.focus();
    this.setState({
      records:dataSource
    })
  }

  toggleActive(index){
    let {records} = this.state;
    records[index].active = !records[index].active;
    this.setState({
      records:records
    })
  }

  changeLastName(index, e){
    let {records} = this.state;
    records[index].lastName = e.target.value;
    this.setState({
      records:records
    })
  }

  handleFilterChange(e){
    let value = e.target.value,
      records = dataSource.filter((record) => record.firstName.toUpperCase().includes(value.toUpperCase()));
    this.setState({
      records:records
    });
  }

  render(){
    return (
      <div className="m-5">
        <input type="text" ref="filterInput" placeholder="Filter by first name" className="mb-3" onChange={this.handleFilterChange.bind(this)} />
        <table className="table table-condensed">
          <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.records.map((record, index)=>{
              return <GridRecord record={record} key={index} toggleActive={this.toggleActive.bind(this, index)} changeLastName={this.changeLastName.bind(this, index)}/>
            })
          }
          </tbody>
        </table>
        <div>{this.props.children &&
        React.cloneElement(this.props.children, { records: this.state.records })}</div>
      </div>
    )
  }
}
