import React from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import axios from 'axios'


export default function AskQuestionForm() {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('Category')
    const [question, setQuestion] = useState('')

    const handleNameChange = event => {
        setName(event.target.value);
    };

    function handleQuestionChange(event) {
        setQuestion(event.target.value)
    }

    function handleSelect(event) {
        setCategory(event)
    }

    function handleSubmitClick(event) {
        event.preventDefault()
        console.log(event.target)
        axios.post('api/questions', {
            name,
            category,
            question
        })
        setName("")
        setQuestion("")
        setCategory("Category")
    }
    return (
        <>
            <div className="form">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="Text" placeholder="Name" value={name} onChange={handleNameChange} />
                    </Form.Group>
                    <DropdownButton
                        title={category}
                        id="categoryDropdown"
                        value={category}
                        onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey="Appliances">Appliances</Dropdown.Item>
                        <Dropdown.Item eventKey="Auto">Auto</Dropdown.Item>
                        <Dropdown.Item eventKey="DIY">DIY</Dropdown.Item>
                        <Dropdown.Item eventKey="Electric">Electric</Dropdown.Item>
                        <Dropdown.Item eventKey="Finance">Finance</Dropdown.Item>
                        <Dropdown.Item eventKey="Home">Home</Dropdown.Item>
                        <Dropdown.Item eventKey="Insurance">Insurance</Dropdown.Item>
                        <Dropdown.Item eventKey="Miscellanious">Miscellaneous</Dropdown.Item>
                        <Dropdown.Item eventKey="Plumbing">Plumbing</Dropdown.Item>

                    </DropdownButton>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter your question:</Form.Label>
                        <Form.Control as="textarea" rows={5} value={question} placeholder="What's your question?" onChange={handleQuestionChange} />
                    </Form.Group>
                    <Button onClick={handleSubmitClick}>Submit</Button>
                </Form>
            </div>
        </>
    )
}