import {Button, Form, Modal, Stack} from "react-bootstrap";
import {UNCATEGORIZED, useBudgetContext} from "../context/BudgetsContext";
import {currencyFormatter} from "../utils/utils";

export default function ViewExpenses ({budgetId, handelClose}) {
    const {deleteBudget, budgets, deleteExpenses, getBudgetExpenses} = useBudgetContext()
    const budget = budgetId === UNCATEGORIZED ? { name: UNCATEGORIZED, id: UNCATEGORIZED } : budgets.find(value => value.id === budgetId)
    return <>
        <Modal show={budgetId != null} onHide={handelClose}>
                <Modal.Header closeButton>
                    <Stack direction="horizontal" gap={2}>
                        <div className="fs-4">Expenses - {budget?.name}</div>
                        {budgetId !== UNCATEGORIZED && <Button onClick={() => {
                            deleteBudget(budget.id)
                            handelClose()
                        }} variant="outline-danger">Delete</Button>}
                    </Stack>
                </Modal.Header>
                <Modal.Body>
                    <Stack direction="vertical" gap={3}>
                        {
                            getBudgetExpenses(budgetId).map(value => {
                                return <Stack direction="horizontal" gap={2} key={value.id}>
                                    <div className="me-auto fs-4">{value.name}</div>
                                    <div className="fs-5">{currencyFormatter.format(value.amount)}</div>
                                    <Button size="sm" onClick={() => deleteExpenses(value.id)} variant="outline-danger">&times;</Button>
                                </Stack>
                            })
                        }
                    </Stack>
                </Modal.Body>
        </Modal>
    </>
}