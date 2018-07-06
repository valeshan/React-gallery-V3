import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navigation from './components/LinkedComponents/Navigation';

import Search from './components/Search';
import Images from './components/Images';
import Tiger from './components/LinkedComponents/Tiger';
import Balloons from './components/LinkedComponents/Balloons';
import Computers from './components/LinkedComponents/Computers';
import Notfound from './components/Notfound';

import apiKey from './config/Config';

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
      this.setState({pics: res.photos.photo, loading: false, text: term})
    }).catch((error)=>{
      console.log(`There's been an error: ${error}`)
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
        {
          (this.state.text)?
          <div>
            <p className = 'results-title'> {this.state.text} </p>
            <Images  pics = {this.state.pics} loading = {this.state.loading}/>
          </div>
          :
          <h3> Please select or type what images you want to see. </h3>
        }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
