import { Container, Row, Stack } from "react-bootstrap"

const Header = () => {
    return (
        <Stack direction="horizontal" className="mb-4" gap="2">
            <h1>Budgets</h1>
            <button className="btn btn-primary ms-auto">Add Budget</button>
            <button className="btn btn-outline-primary">Add Expense</button>
        </Stack>
    )
}

export default Header