// import React, { Component } from 'react';

// class SearchBar extends Component {
//     state = {
//         word:''
//     }

//     handleChange =(e) => {
//         this.setState({
//             word:e.target.value
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <input value={this.state.word} placeholder='검색' onChange={this.handleChange} />
//                 {this.state.word}
//             </div>
//         );
//     }
// }

// export default SearchBar;

// import React, { Component } from 'react';

// class SearchBar extends Component {
//     state= {
//         word:''
//     }

//     handleChange = (e) => {
//         this.setState({
//             word:e.target.value
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <input value={this.state.word} placeholder="search..." onChange={this.handleChange} />
//                 {this.state.word}
//             </div>
//         );
//     }
// }

// export default SearchBar;

// import React, { Component } from 'react';

// class SearchBar extends Component {
//     state= {
//         word:''
//     }

//     handleChange= (e) =>{
       
//         this.setState({
//             word:e.target.value
//         })
//         const {onSearch} =this.props;
      
//         onSearch(e.target.value)
//     }
//     render() {
//         return (
//             <div className='input-group mb'>
//                 <input value={this.state.word} placeholder='search...' onChange={this.handleChange} className='form-control' />
//             </div>
//         );
//     }
// }

// export default SearchBar;

import React, { Component } from 'react';

class SearchBar extends Component {
    state= {
        word:''
    }

    handleChange= (e) =>{
       
        this.setState({
            word:e.target.value
        })
      
    }

    handleSubmit= (e) => {
        e.preventDefault();
        const {onSearch} = this.props;
        
        onSearch(this.state.word);
    }
    render() {
        return (
            <div className='input-group mb'>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input value={this.state.word} placeholder='search...' onChange={this.handleChange} />
                        <button className='btn btn-primary'>search</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;