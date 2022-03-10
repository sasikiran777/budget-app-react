import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utils/utils";
import {useEffect} from "react";

export default function BudgetCard({ name, amount, maxAmount, gray, showProgressBar = true, setShowAddExpensesModel, setBudgetId, budgetId, showButtons, setExpensesBudgetId }) {
    const classNames = []
    if (amount > maxAmount) {
        classNames.push('bg-danger', 'bg-opacity-10')
    } else if (gray) {
        classNames.push('bg-light')
    }
    function openExpenseModel() {
        setBudgetId(budgetId)
        setShowAddExpensesModel(true)
    }
    function openExpenseBudgetModel (budgetId) {
        setExpensesBudgetId(budgetId)
    }
    return (
    <Card>
        <Card.Body className={classNames.join(" ")}>
            <Card.Title className="d-flex justify-content-between 
            align-items-baseline fw-normal mb-3">
                <div className="me-2">
                    { name }
                </div>
                <div className="d-flex align-items-baseline ms-1">
                    { currencyFormatter.format(amount) }
                    { maxAmount && 
                        <span className="text-muted fs-6 ms-1">
                            / { currencyFormatter.format(maxAmount) }
                        </span>
                    }
                </div>
            </Card.Title>
            { showProgressBar && <ProgressBar className="rounded-pill"
                    variant={getProgressBarVariant(amount, maxAmount)} 
                    min={0} max={maxAmount}
                    now={amount}
                />
            }
            {
                !showButtons && <Stack direction="horizontal" gap={2} className="mt-4">
                    <Button variant="outline-primary" onClick={openExpenseModel} className="ms-auto">Add Expenses</Button>
                    <Button variant="outline-success" onClick={() => openExpenseBudgetModel(budgetId)}>View Expenses</Button>
                </Stack>
            }
        </Card.Body>
    </Card>
  )
}

function getProgressBarVariant(amount, maxAmount) {
    let ratio = amount / maxAmount
    if (ratio >= 1) return "danger" 
    if (ratio >= 0.75) return "warning"
    return "primary" 
}