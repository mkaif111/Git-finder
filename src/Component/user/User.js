import React, { Component } from 'react'
import Useritem from './Useritem'

export class User extends Component {
   
    render() {
        return (
            // Key has to define for unique element here we use user.id which is unique. 
            <div style ={userStyle}>
                
                {this.props.users.map(user => (
                    <Useritem key={user.id} user ={user} />
                ))}
            </div>
        );
    }
}
const userStyle = {
    display : "grid",
    gridTemplateColumns : "repeat(3,1fr)",
    gridGap : "1rem"
}

export default User
