import {useEffect, useState} from "react";
import {useBudgetContext} from "../context/BudgetsContext";
import BudgetCard from "./Budget_Card";

export default function TotalCard({setShowAddExpensesModel, setBudgetId}) {
    const [expensesTotal, setExpensesTotal] = useState()
    const [budgetTotal, setBudgetTotal] = useState()
    const {budgets, expenses} = useBudgetContext()
    useEffect(() => {
        let amount = 0
        expenses.map(value => {
            if (value.amount)
                amount += value.amount
        })
        setExpensesTotal(amount)
        amount = 0
        budgets.map(value => {
            if (value.maxAmount)
                amount += value.maxAmount
        })
        setBudgetTotal(amount)
    }, [expenses, budgets])
    return budgetTotal ? <BudgetCard name="Total"
                                     setShowAddExpensesModel={setShowAddExpensesModel}
                                     setBudgetId={setBudgetId}
                                     maxAmount={budgetTotal}
                                     showButtons
                                     amount={expensesTotal}/> : null
}