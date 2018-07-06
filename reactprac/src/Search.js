import React, { Component } from 'react';

export default class Search extends Component {
  constructor(){
    super();
    this.state = {searchText: ''}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange(searchText){
    this.setState({searchText});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.props)
    this.props.handleTermChange(this.state.searchText);
  }


  render(){
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
        <input type = 'text' onChange = {e => this.onInputChange(e.target.value)} />
        <input type = 'submit' value = 'Submit' />
        </form>
      </div>
    )
  }

}
