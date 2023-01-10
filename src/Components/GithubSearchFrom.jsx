import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
const GithubSearchFrom = () => {
    const [user, setUser] = useState("");
    const [Data, setData] = useState(user);
    const formHandler = (e) => {
        e.preventDefault();
        setData(user)
       
    }
    return (
        <div>
            <Form onSubmit={formHandler}>
                <ul>
                    <li className='inputFeild'> <Form.Control type="text" value={user} placeholder="Search Github Profile " onChange={(e) => setUser(e.target.value)} />
                    </li>
                    <li className='button'>
                        <Button type='submit' variant="success" >Search</Button>
                    </li>
                </ul>
            </Form>
           {
            Data &&  <h1 style={{textAlign:"center"}}>{Data} Thank you for approching ! Working on it.</h1>
           }
         
        </div>
    )
}

export default GithubSearchFrom
