import './components/CalculatorScore';
import { CalculateScore } from './components/CalculatorScore';

function App() {
  return (
    <div>
      <CalculateScore Name={"Steeve"}
      School={"DNV Public School"}
      Total={284}
      goal={3}
      />
    </div>
  );
}

export default App;
