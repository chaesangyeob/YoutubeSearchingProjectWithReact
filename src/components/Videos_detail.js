// import React, { Component } from 'react';

// class Videos_detail extends Component {
    
//     render() {
//         if(this.props.video ==undefined) return `loading...`
//         const {video} = this.props
//         console.log(video)
//         const videoId =video.id.videoId;
//         const videoUrl = `https://www.youtube.com/embed/${videoId}`;
        
        
//         return (
//             <div>
//                 <div className ='embed-responsive embed-responsive-16by9'>
//                     <iframe className='embed-responsive-item' src={videoUrl} allowFullScreen />
//                 </div>
//                 <div className='detail'>
//                     <div>{video.snippet.title}</div>
//                     <div>{video.snippet.description}</div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Videos_detail;

import React, { Component } from 'react';

class Videos_detail extends Component {
    render() {
        const {video} = this.props;
        if(video===undefined) return `loading...`
        const videoId = video.id.videoId;
        const videoUrl = `https://www.youtube.com/embed/${videoId}`
    
        return (
            <div>
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe className="embed-responsive-item" src={videoUrl} allowFullScreen />
                </div>
                <li className='list-group-item'>
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>  
                </li>
            </div>
        );
    }
}

export default Videos_detail;