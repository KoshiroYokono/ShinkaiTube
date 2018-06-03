import React, { Component } from 'react';
import './App.css';
import YSearch from 'youtube-api-search';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import List from './components/Video/List/List';
import Video from './components/Video/Video';

const YOUTUBE_API_KEY = 'AIzaSyDb0nAxLpS7IM6nudQIMIiPXkAcf7hZcU8'


class App extends Component {

   state = { videos: [], selectedVideo: null }

   componentDidMount() {
      YSearch({ key: YOUTUBE_API_KEY, term: '魚 深海'}, (data) => {
         this.setState({videos: data, selectedVideo: data[2]});
      });
   }

   onVideoClickedHandler = (video) => {
      this.setState({ selectedVideo: video })
   }

   onKeywordChangedHandler = (keyword) => {
      let newTerm = '深海' + keyword;
      if(keyword === '') {
         newTerm = '魚 深海';
      }

      YSearch({ key: YOUTUBE_API_KEY, term: newTerm}, (data) => {
         this.setState({ videos: data, selectedVideo: data[0]})
      });
   }

  render() {
    return (
      <div className="App">
         <Header onKeywordChanged={this.onKeywordChangedHandler}/>
         <Body>
            <Video video={this.state.selectedVideo}/>
            <List videos={this.state.videos} onVideoClicked={this.onVideoClickedHandler} selectedVideo={this.state.selectedVideo}/>
         </Body>
      </div>
    );
  }
}

export default App;

// 指定のタイミング
// props...コンポーネント作成時
// state...コンポーネント作成後
