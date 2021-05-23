import React, { Component } from "react";
import API from "../../utils/API";
import Search from "../Search";
import Table from "../Table";

class Users extends Component {
    state = { 
        search: "",
        users: [],
        sortedUsers: [],        
    };
    componentDidMount() {
        API.getUsers()
        .then((res) => this.setState({
            users: res.data.results,
            sortedUsers: res.data.results,
        }))
        .catch(err => console.log(err));
    };
    handleInputChange = (e) => {
        const value = e.target.value;
        this.setState({ search: value });
        this.sortUsers(value.toLowerCase().trim());
    };
    handleFormSubmit = e => {
        e.preventDefault();
    };
    sortUsers = (input) => {
        if (input) {
            this.setState({
                sortedUsers: this.state.users.filter((user) => {
                    return (
                        user.name.first.toLowerCase().includes(input) ||
                        user.name.last.toLowerCase().includes(input)
                    );
                }),
            });
        } else {
            this.setState({ sortedUsers: this.state.users })
        }
    };
    sortFirstName = (e) => {
        this.setState({
            sortedUsers: this.state.sortedUsers.sort(
                (userA, userB) => {
                    if (userA.name.first < userB.name.first) {
                        return -1
                    } else if (userA.name.first > userB.name.first) {
                        return 1
                    } else {
                        return 0
                    }
                }
            )
        })
    };
    sortLastName = (e) => {
        this.setState({
            sortedUsers: this.state.sortedUsers.sort(
                (userA, userB) => {
                    if (userA.name.last < userB.name.last) {
                        return -1
                    } else if (userA.name.last > userB.name.last) {
                        return 1
                    } else {
                        return 0
                    }
                }
            )
        })
    };
    sortEmail = (e) => {
        this.setState({
            sortedUsers: this.state.sortedUsers.sort(
                (userA, userB) => {
                    if (userA.email < userB.email) {
                        return -1
                    } else if (userA.email > userB.email) {
                        return 1
                    } else {
                        return 0
                    }
                }
            )
        })
    };
    render() {
        return (
            <div className="container">
                <Search
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <Table 
                    state={this.state}
                    sortUsers={this.sortUsers}
                    sortFirstName={this.sortFirstName}
                    sortLastName={this.sortLastName}
                    sortEmail={this.sortEmail}
                />
            </div>
        )
    }
}
export default Users;