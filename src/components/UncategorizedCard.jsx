import {useEffect, useState} from "react";
import {UNCATEGORIZED, useBudgetContext} from "../context/BudgetsContext";
import BudgetCard from "./Budget_Card";

export default function UncategorizedCard ({setShowAddExpensesModel, setBudgetId, setExpensesBudgetId}) {
    const [unCatTotal, setUnCatTotal] = useState()
    const {expenses, getBudgetExpenses} = useBudgetContext()
    useEffect(() => {
        setUnCatTotal(getBudgetExpenses(UNCATEGORIZED).reduce((total, expense) => total + expense.amount, 0))
    }, [expenses])
    return unCatTotal ? <BudgetCard name="Uncategorized"
                                    budgetId={UNCATEGORIZED}
                                    setShowAddExpensesModel={setShowAddExpensesModel}
                                    setBudgetId={setBudgetId}
                                    setExpensesBudgetId={setExpensesBudgetId}
                                    showProgressBar={false}
                                    gray
                                    amount={unCatTotal} /> : null
}