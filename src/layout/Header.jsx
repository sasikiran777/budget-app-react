import { Container, Row, Stack } from "react-bootstrap"

const Header = ({setShowAddBudgetModel, setShowAddExpensesModel}) => {
    return (
        <Stack direction="horizontal" className="mb-4" gap="2">
            <h1>Budgets</h1>
            <button onClick={() => setShowAddBudgetModel(true)} className="btn btn-primary ms-auto">Add Budget</button>
            <button onClick={() => setShowAddExpensesModel(true)} className="btn btn-outline-primary">Add Expense</button>
        </Stack>
    )
}

export default Header