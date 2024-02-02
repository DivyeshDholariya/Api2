import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function Users() {
    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                console.log(response);
                setdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    })

    return (
        <div>
            <Table striped="columns" variant='light '>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>Phone</td>
                    <td>Website</td>
                    <td>Company</td>


                </tr>
                <hr />
                <tbody border={5}>
                    {
                        data.map((ele, index) => {
                            return (
                                <tr>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.username}</td>
                                    <td>{ele.email}</td>
                                    <td>
                                        <table>
                                            <tr>
                                                <td>{ele.address.street}</td>
                                                <td>{ele.address.suite}</td>
                                                <td>{ele.address.city}</td>
                                                <td>{ele.address.zipcode}</td>
                                                <td>
                                                    <table>
                                                        <tr>
                                                            <td>{ele.address.geo.lat}</td>
                                                            <td>{ele.address.geo.lng}</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>{ele.phone}</td>
                                    <td>{ele.website}</td>
                                    <td>
                                        <table>
                                        <tr>
                                            <td>
                                                <td>{ele.company.name}</td>
                                                <td>{ele.company.catchPhrase}</td>
                                                <td>{ele.company.bs}</td>
                                            </td>
                                        </tr>
                                        </table>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Users;
