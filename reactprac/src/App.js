import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navigation from './LinkedComponents/Navigation';

import Search from './Search';
import Images from './Images';
import Tiger from './LinkedComponents/Tiger';
import Balloons from './LinkedComponents/Balloons';
import Computers from './LinkedComponents/Computers';
import Notfound from './Notfound';

import apiKey from './Config/config';

const apikey = apiKey;

class App extends Component {
  constructor(){
    super();
    this.state = {
      pics: [],
      text : '',
      loading: true
    }
  }


  handleTermChange(term){
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&content_type=1&tags=${term}&per_page=32&format=json&nojsoncallback=1`

    fetch(url).then(response=> {
       return response.json();
    }).then(res => {
      this.setState({pics: res.photos.photo, loading: false})
      console.log(res.photos)
    })
  }

  handleText(text){
    return this.handleTermChange(text);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
        <Navigation />
        <Switch>
          <Route exact path = '/' render = {() => <Search handleTermChange = {this.handleTermChange.bind(this)} />} />
          <Route path = '/tiger' render = {() => <Tiger handleText = {this.handleText('tiger')} />} />
          <Route path = '/balloons' render = {() => <Balloons handleText = {this.handleText('balloons')} />} />
          <Route path = '/computers' render = {() => <Computers handleText = {this.handleText('computers')} />} />
          <Route path = '/:topic' render = {() => <Search handleTermChange = {this.handleTermChange.bind(this)}/>} />
          <Route component = {Notfound} />
        </Switch>
        <Images pics = {this.state.pics} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
