import React from "react";

function Table(props) {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" onClick={props.sortFirstName}>First Name</th>
                    <th scope="col" onClick={props.sortLastName}>Last Name</th>
                    <th scope="col" onClick={props.sortEmail}>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.state.sortedUsers.map((user) => {
                    return (
                        <tr key={user.login.uuid}>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    );
}

export default Table;