import {Container} from "react-bootstrap";
import BudgetCard from "./components/Budget_card";
import Header from "./layout/Header";
import AddBudgetModel from "./components/AddBudgetModel";
import {useEffect, useState} from "react";
import {UNCATEGORIZED, useBudgetContext} from "./context/BudgetsContext";
import AddExpenseModel from "./components/AddExpenseModel";
import UncategorizedCard from "./components/UncategorizedCard";
import TotalCard from "./components/TotalCard";
import ViewExpenses from "./components/ViewExpenses";

function App() {
    const [showAddBudgetModel, setShowAddBudgetModel] = useState(false)
    const [showAddExpensesModel, setShowAddExpensesModel] = useState(false)
    const [expensesBudgetId, setExpensesBudgetId] = useState(null)
    const [budgetId, setBudgetId] = useState()
    const {budgets, getBudgetExpenses} = useBudgetContext()
    return <>
        <Container className="my-4">
            <Header setShowAddBudgetModel={setShowAddBudgetModel}
                    setShowAddExpensesModel={setShowAddExpensesModel}/>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1rem", alignItems: "flex-start"
            }}>
                {
                    budgets.map(budget => {
                        if (budget.id !== UNCATEGORIZED) {
                            const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
                            return <BudgetCard name={budget.name}
                                               key={budget.id}
                                               budgetId={budget.id}
                                               setShowAddExpensesModel={setShowAddExpensesModel}
                                               setBudgetId={setBudgetId}
                                               setExpensesBudgetId={setExpensesBudgetId}
                                               amount={amount}
                                               maxAmount={budget.maxAmount}/>
                        }
                    })
                }
                <UncategorizedCard setShowAddExpensesModel={setShowAddExpensesModel}
                                   setExpensesBudgetId={setExpensesBudgetId}
                                   setBudgetId={setBudgetId}/>
                <TotalCard/>
            </div>
        </Container>
        <AddBudgetModel show={showAddBudgetModel} handelClose={() => {
            setShowAddBudgetModel(false)
        }}/>
        <AddExpenseModel show={showAddExpensesModel} defaultBudgetId={budgetId} handelClose={() => {
            setBudgetId(null)
            setShowAddExpensesModel(false)
        }}/>
        <ViewExpenses budgetId={expensesBudgetId} handelClose={() => {
            setExpensesBudgetId(null)
        }}/>
    </>
}

export default App;
