import {Button, Form, Modal} from "react-bootstrap";
import {useBudgetContext} from "../context/BudgetsContext";
import {useRef} from "react";

export default function AddBudgetModel ({show, handelClose}) {
    const {addBudget} = useBudgetContext()
    const nameRef = useRef()
    const maxAmountRef = useRef()
    return <>
        <Modal show={show} onHide={handelClose}>
            <Form onSubmit={handelSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="md-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" required/>
                    </Form.Group>
                    <Form.Group className="md-4 mt-3" controlId="max">
                        <Form.Label>Max Spending</Form.Label>
                        <Form.Control ref={maxAmountRef} type="number" required min={0} step={1}/>
                    </Form.Group>
                    <div className="d-flex justify-content-end mt-3">
                        <Button type="submit" variant="primary">Add</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    </>

    function handelSubmit (e) {
        e.preventDefault()
        addBudget({
            name: nameRef.current.value, maxAmount: parseFloat(maxAmountRef.current.value)
        })
        handelClose()
    }
}