import {Container} from "react-bootstrap";
import BudgetCard from "./components/Budget_card";
import Header from "./layout/Header";
import AddBudgetModel from "./components/AddBudgetModel";
import {useState} from "react";
import {useBudgetContext} from "./context/BudgetsContext";

function App() {
    const [showAddBudgetModel, setShowAddBudgetModel] = useState(false)
    const { budgets } = useBudgetContext()
    return (
        <>
            <Container className="my-4">
                <Header setShowAddBudgetModel={setShowAddBudgetModel}/>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "1rem", alignItems: "flex-start"
                }}>
                    {
                        budgets.map(budget => {
                            return <BudgetCard name={budget.name} key={budget.id} amount={1} maxAmount={budget.maxAmount}/>
                        })
                    }
                    {/* <BudgetCard name="Uncategorized" showProgressBar={false} gray amount={800} /> */}
                </div>
            </Container>
            <AddBudgetModel show={showAddBudgetModel} handelClose={() => {
                setShowAddBudgetModel(false)
            }}/>
        </>
    );
}

export default App;
