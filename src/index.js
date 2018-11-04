// import _ from 'lodash';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom'; 
// import SearchBar from './components/search_bar';
// import YTSearch from 'youtube-api-search';
// import VideoList from './components/video_list';
// import VideoDetail from './components/video_detail';





// const API_KEY = 'AIzaSyBEYYanIzB0Wf3M9hvTtKLh3xyX8XyFzUU';




// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             videos:[],
//             seletedVideo:null
//         };
//       this.videoSearch('eminem')
//     }
//     videoSearch(term) {
//         YTSearch({
//             key:API_KEY,
//             term:term
//         }, (videos)=> {
//             this.setState({
//                 videos,
//                 seletedVideo:videos[0]
//             })
//         });
//     }

//     render() {
//         const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
//         return (
//             <div>
//                 <SearchBar onSearchTermChange={videoSearch} />
//                 <VideoDetail video={this.state.seletedVideo} />
//                 <VideoList 
//                     videos={this.state.videos}
//                     onVideoSelect={seletedVideo => this.setState({seletedVideo})}
//                     />
//             </div>

//         );
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )


// import _ from 'lodash';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom'; 
// import YTSearch from 'youtube-api-search' ;

// import SearchBar from './components/SearchBar';
// import Video_list from './Video_list';



// const API_KEY = 'AIzaSyBEYYanIzB0Wf3M9hvTtKLh3xyX8XyFzUU';




// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             videos: []
//         }

//         YTSearch({
//             key:API_KEY,
//             word:'eminem'
//         }, (data) => {
//             this.setState({
//                 videos:data
//             })
//         })
//     }




//     render() {
//         return (
//             <div>
//              <SearchBar />
//              {console.log(this.state.videos)}
//              <Video_list videos={this.state.videos} />
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom'; 
// import YTSearch from 'youtube-api-search';

// import SearchBar from './components/SearchBar';
// import Video_list from './Video_list';
// import Videos_detail from './components/Videos_detail';







// const API_KEY = 'AIzaSyBEYYanIzB0Wf3M9hvTtKLh3xyX8XyFzUU';




// class App extends Component {
//   constructor(props) {
//       super(props);
//       this.state={
//           videos:[],
//           selectedVideo: undefined
//       }; 
//     //   this.handleSelectedVideo = this.handleSelectedVideo.bind(this)

//       YTSearch({key:API_KEY, searchWord:'eminem'},(data)=>{
//           this.setState({
//               videos:data,
//               selectedVideo:data[0]
//           })
//       })

//   }

//   handleSelectedVideo = (selectedVideoData) => {
//       console.log(selectedVideoData)
//       this.setState({
//           selectedVideo:selectedVideoData
//       })
//   }

//     render() {
//         return (
//             <div>
//                 <SearchBar />
//                 <Videos_detail video={this.state.selectedVideo}  />
//                 <Video_list videos={this.state.videos} onSelected={this.handleSelectedVideo} />
//             </div>

//         );
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )


import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import Video_list from './Video_list';
import Videos_detail from './components/Videos_detail';


const API_KEY = 'AIzaSyBEYYanIzB0Wf3M9hvTtKLh3xyX8XyFzUU';


class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            videos:[],
            selectedVideo :undefined
        }
     this.handleSearch('eminem');
    }

    handleSelect = (video) => {
        this.setState({
            selectedVideo:video
        })
    }

    handleSearch = (term) =>{
       
        YTSearch({key:API_KEY, term:term},(videoDatas)=>{
            this.setState({
                videos:videoDatas,
                selectedVideo:videoDatas[0]
            })
        })
    }

    render() {

        return (
            <div>
              <SearchBar onSearch={this.handleSearch} />
              <Videos_detail video={this.state.selectedVideo} />
              <Video_list videos={this.state.videos} selected={this.handleSelect} />
            </div>

        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)