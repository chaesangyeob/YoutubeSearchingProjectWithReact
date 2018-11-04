// import React, { Component } from 'react';

// class Video_list_items extends Component {
//     render() {
//         const {videos} = this.props;
//         const imgUrl = videos.snippet.thumbnails.default.url;
//         const imgTitle = videos.snippet.title;

//         console.log(videos)
//         return (
//             <div>
//                 <li className='list-group-item'>
//                     <div className='video-list media'>
//                         <div className='media-left'>
//                             <img className='media-object' src={imgUrl} />
//                         </div>

//                         <div className='media-body'>
//                             <div className='media-heading'>{imgTitle}</div>
//                         </div>
//                     </div>
//                 </li>
//             </div>
//         );
//     }
// }

// export default Video_list_items;

// import React, { Component } from 'react';

// class Video_list_items extends Component {
//     render() {
//         const {videos} = this.props;
//         if(videos == undefined) {
//             return <div>rendering...</div>
//         }
//         const imgUrl = videos.snippet.thumbnails.default.url;
//         const vidoeTitle = videos.snippet.title;
//         console.log(videos)

//         return (
//             <div>
//                 <li className='list-group-item'>
//                     <div className='media'>
//                         <img className='align-self-start mr-3' src={imgUrl} />
//                         <div className='media-body'>
//                             {vidoeTitle}
//                         </div>
//                     </div>
//                 </li>
//             </div>
//         );
//     }
// }

// export default Video_list_items;

// import React, { Component } from 'react';

// class Video_list_items extends Component {
//     handleClick = (e) => {
//         const {onSelected,video} = this.props;
//         onSelected(video)
//     }

//     render() {
//         const {video} = this.props;
//         const imgUrL = video.snippet.thumbnails.default.url;
//         const imgTitle =video.snippet.title;

//         return (
//             <div>
//                 <li className='list-group-item' onClick={this.handleClick}>
//                     <div className='media'>
//                         <img className='align-self-start mr-3' src={imgUrL}  />
//                         <div className='media-body'>
//                             {imgTitle}
//                         </div>
//                     </div>
//                 </li>
//             </div>
//         );
//     }
// }

// export default Video_list_items;

import React, { Component } from 'react';


class Video_list_items extends Component {
    handleSelect = (e)=>{
        const {selected,video} = this.props;
        selected(video)
    }

    render() {
        const {video} = this.props;
        const imgUrl = video.snippet.thumbnails.default.url;
        const imgTitle = video.snippet.title;
        
        return (
            <div>
                <li className='list-group-item' onClick={this.handleSelect}>
                    <div className='media'>
                        <img className='align-self-start mr-3' src={imgUrl} alt='picture' />
                        <div className='media-body'>
                        {imgTitle}
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}

export default Video_list_items;