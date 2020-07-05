import React, { Component } from 'react';
import axios from 'axios'; // to send http request from front-end to back-end

export default class CreateUsers extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        console.log(user);

        axios.post('http://localhost:3000/users/add', user)
            .then(res => console.log(res.data))
            .then(response => { 
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            });

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div class="wrapper">
            <section class="about-section text-center" id="createUser">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <h3 class="text-white mb-4">Create new user</h3>
                            <p class="text-white-50">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Username: </label>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Create User" className="btn btn-primary" />
                                </div>
                            </form>
                            </p>
                        </div>
                    </div>
                    <img class="img-fluid" src="assets/img/ipad.png" alt="" />
            </section>
            </div>
            
        );
    }
}

