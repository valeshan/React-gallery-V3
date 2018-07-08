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
      loading: true,
      tigerPics: [],
      balloonsPics: [],
      computersPics: []
    }
  }

  componentDidMount(){
    this.handleTermChange('tiger');
    this.handleTermChange('balloons');
    this.handleTermChange('computers');
  }


//Search API with argument value from search component
  handleTermChange(term){
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&content_type=1&tags=${term}&per_page=32&format=json&nojsoncallback=1`
    fetch(url).then(response=> {
       return response.json();
    }).then(res => {
      if (term === 'tiger'){
      this.setState({tigerPics: res.photos.photo})
    } else if (term === 'computers'){
      this.setState({computersPics: res.photos.photo})
    } else if (term === 'balloons'){
      this.setState({balloonsPics: res.photos.photo})
    } else{
      this.setState({pics: res.photos.photo, loading: false, text: term})
    }

    }).catch((error)=>{
      console.log(`There's been an error: ${error}`)
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
        <Navigation />
        <Switch>
          <Route exact path = '/' render = {() => <Search handleTermChange = {this.handleTermChange.bind(this)} />} />
          <Route path = '/tiger' render = {() => <Tiger pics = {this.state.tigerPics} />} />
          <Route path = '/balloons' render = {() => <Balloons pics = {this.state.balloonsPics} />} />
          <Route path = '/computers' render = {() => <Computers pics = {this.state.computersPics} />} />
          <Route path = '/:topic' render = {() => <Search handleTermChange = {this.handleTermChange.bind(this)}/>} />
          <Route component = {Notfound} />
        </Switch>
        {
          (this.state.text)?
          <div>
            <h3 className = 'results-title'> {this.state.text} </h3>
            <Images  pics = {this.state.pics} loading = {this.state.loading}/>
          </div>
          :
          <h3 className = 'screen-text'> Please select or type what images you want to see. </h3>
        }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
