import { useState } from 'react'
import './App.css'
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';

const App = () => {
  const [stack, setStack] = useState([]);

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList />  {/* add here! */}
        <BurgerStack />
      </section>
    </main>
  );
};


export default App;
