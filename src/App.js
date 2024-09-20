import React from 'react'; 
import axios from 'axios';

class Movies extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            Movies : []   // newly updated data will render without reload  // 1st
        }
    }

    componentDidMount() {          // in lifecylce it willn load after page loading in browser (3rd after render)
        axios.get('http://localhost:3200/movies')
        .then(response => {
            console.log(response.data)
            this.setState({             // setState to update state
                Movies : response.data
            })
        })
        .catch(err => {
            console.log(err)
         });
        
    }

    render() {
        return (
            <div>
                <h1> Listing Movies</h1>
                <p>{this.state.Movies.length}</p>             
                {console.log(" this.state ========")}
                <ul> 
                    {this.state.Movies.map(movie =>{
                        return <li key ={movie._id}>{movie.name}</li>
                    })}  
                </ul>
            </div>
        )
    }

}
// Bable converting js to react components ---- {.....}

export default Movies

