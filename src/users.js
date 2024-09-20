import React from 'react'; 
import axios from 'axios';

class Users extends React.Component { 
    constructor(props) {            
        super(props);     

        this.state = {
            Users: []  // Initializes an empty array for Users
        };
    }

    componentDidMount() { // Fetches users after the component is mounted
        axios.get('http://localhost:3200/users')
        .then(response => {
            this.setState({ Users: response.data }); // Updates the state with the fetched users
        })
        .catch(err => {
            console.log("Error fetching users:", err);
        });
    }

    render() {
        return (
            <div>
                <h1>Listing Users</h1>
                <p>Total Users: {this.state.Users.length}</p>
                <ul>
                    {this.state.Users.map(user => (  // Changed `Users` to `user` for clarity
                        <li key={user._id}>{user.name}</li> // Display the name of each user
                    ))}
                </ul> 
            </div>
        );
    }
}

export default Users;
