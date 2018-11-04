// import React, { Component } from 'react';
// import Video_list_items from './components/Video_list_items';


// class Video_list extends Component {
//     render() {
//         const {videos} = this.props;
//         const listItems = videos.map(datasFromYoutube=> {
//             const items = <Video_list_items videos={datasFromYoutube} key={datasFromYoutube.id.videoId} />
//             return items
//         });

//         return (
//             <div>
//                 <ul className='list-group col-md-4'>
//                     {listItems}
//                 </ul>
//             </div>
//         );
//     }
// }

// export default Video_list;

// import React, { Component } from 'react';
// import Video_list_items from './components/Video_list_items';


// class Video_list extends Component {
   
//     render() {
//         const {videos} = this.props;
//         const {onSelected} = this.props;
//         const videosList = videos.map(video => {
//             const videoItem = <Video_list_items video={video} key={video.id.videoId} onSelected={onSelected} />
//             return videoItem
//         })
//         return (
//             <div>
//                 <ul className='list-group col-md-6'>
//                     {videosList}
//                 </ul>          
//             </div>
//         );
//     }
// }

// export default Video_list;

import React, { Component } from 'react';
import Video_list_items from './components/Video_list_items';

class Video_list extends Component {
    
    render() {
        const {videos,selected} = this.props;
     
        const videoLists = videos.map(video => {
            const videoList = <Video_list_items video={video} key={video.id.videoId} selected={selected} />
            return videoList
        })

        return (
            <div>
               <ul className='list-group col-md-6' >{videoLists}</ul> 
            </div>
        );
    }
}

export default Video_list;