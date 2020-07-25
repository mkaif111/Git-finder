import React, { Component } from 'react'

export class Useritem extends Component {

    state = {
        login: "defunkt",
        id: 2,
        node_id: "MDQ6VXNlcjI=",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/defunkt",
        html_url: "https://github.com/defunkt",
    };

    render() {
        // name in var in const should same as props , order is not mandatory
        const {login,avatar_url,html_url} = this.props.user;

        return (
            <div className="card text-center ">

                <img 
                    src={avatar_url}
                    alt={login}
                    style={{width:"60px"}}
                    className="round-img">
                </img>

                <h3>
                    {login}
                </h3>

                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
                </div>
            </div>
        )
    }
}

export default Useritem
