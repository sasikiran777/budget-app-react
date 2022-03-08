import React, {useContext, useState} from "react";
import {v4} from 'uuid'
import useLocalStorage from "../hooks/useLocalStorage";

const BudgetsContext = React.createContext()

export function useBudgetContext () {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudget] = useLocalStorage('budgets', [])
    const [expenses, setExpenses] = useLocalStorage('expenses', [])
    function getBudgetExpenses(budgetId) {
        return expenses.filter(value => value.budgetId = budgetId)
    }
    function addExpenses({budgetId, name, amount}) {
        setExpenses(prevState => {
            return [...prevState, {id: v4(), budgetId, name, amount}]
        })
    }
    function addBudget({name, maxAmount}) {
        if (budgets.find(value => value.name === name))
            return budgets
        setBudget(prevState => {
            return [...prevState, {id: v4(), name, maxAmount}]
        })
    }
    function deleteExpenses(id) {
        setExpenses(prevState => {
            return prevState.filter(value => {
                return value.id !== id
            })
        })
    }
    function deleteBudget(id) {
        // TODO: Deal with expenses
        setBudget(prevState => {
            return prevState.filter(value => {
                return value.id !== id
            })
        })
    }
    return <BudgetsContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpenses,
        addBudget,
        deleteExpenses,
        deleteBudget
    }}>{children}</BudgetsContext.Provider>
}