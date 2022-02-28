import { Container } from "react-bootstrap";
import BudgetCard from "./components/Budget_card";
import Header from "./layout/Header";

function App() {
  return (
    <Container className="my-4">
      <Header />
      <div style={{ 
        display: "grid", 
        gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1rem", alignItems: "flex-start"
      }}>
         <BudgetCard name="Entertainment" amount={800} maxAmount={1000} />
         {/* <BudgetCard name="Uncategorized" showProgressBar={false} gray amount={800} /> */}
      </div>
    </Container>
  );
}

export default App;
