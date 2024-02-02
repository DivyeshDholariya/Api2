import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';




function Comment() {
    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(function (response) {
                // handle success
                console.log(response.data);
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
                    <td>PostId</td>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Body</td>
                </tr>
                <hr />
                <tbody border={5}>
                    {
                        data.map((ele, index) => {
                            return (
                                <tr>
                                    <td>{ele.postId}</td>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.body}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Comment
