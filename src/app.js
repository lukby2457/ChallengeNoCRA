import { add } from './add.js';

const App = () => {
  const word = add("Hello ", "World");
  return (
    <>
      <h1>챌린지반 CRA 없이 React 만들기 입니다.</h1>
      <div>
        {word}
      </div>
    </>
  )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)