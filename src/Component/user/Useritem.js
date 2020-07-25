import React, { Component } from 'react'

export class Useritem extends Component {

    constructor(){
        // super to make this class parent otherwise many class run same time and all constructor conflict
        super();
        this.state = {
            login: "defunkt",
            id: 2,
            node_id: "MDQ6VXNlcjI=",
            avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/defunkt",
            html_url: "https://github.com/defunkt",
        };
    }
    render() {
        return (
            <div className="card text-center " style={{width:"200px",marginLeft:"1rem"}} >

                <img 
                    src={this.state.avatar_url}
                    alt={this.state.login}
                    style={{width:"60px"}}
                    className="round-img">
                </img>

                <h3>
                    {this.state.login}
                </h3>

                <div>
                    <a href={this.state.html_url} className="btn btn-dark btn-sm my-1">More</a>
                </div>
            </div>
        )
    }
}

export default Useritem
