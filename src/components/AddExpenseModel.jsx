import {Button, Form, Modal} from "react-bootstrap";
import {UNCATEGORIZED, useBudgetContext} from "../context/BudgetsContext";
import {useRef} from "react";

export default function AddExpenseModel ({show, handelClose, defaultBudgetId}) {
    const {addExpenses, budgets} = useBudgetContext()
    const descriptionRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()
    return <>
        <Modal show={show} onHide={handelClose}>
            <Form onSubmit={handelSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="md-3" controlId="name">
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descriptionRef} type="text" required/>
                    </Form.Group>
                    <Form.Group className="md-4 mt-3" controlId="max">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control ref={amountRef} type="number" required min={0} step={1}/>
                    </Form.Group>
                    <Form.Group className="md-4 mt-3" controlId="max">
                        <Form.Label>Budget</Form.Label>
                        <Form.Select defaultValue={defaultBudgetId} ref={budgetIdRef}>
                            <option value={UNCATEGORIZED}>{UNCATEGORIZED}</option>
                            {budgets.map(budget => {
                                return <option key={budget.id} value={budget.id}>{budget.name}</option>
                            })}
                        </Form.Select>
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
        addExpenses({
            budgetId: budgetIdRef.current.value,
            name: descriptionRef.current.value,
            amount:parseFloat(amountRef.current.value)
        })
        handelClose()
    }
}