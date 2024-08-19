import { add } from './add.js';

const App = () => {
  const word1 = add("Hello ", "No-CRA React!");
  const word2 = add("챌린지반 ", "김진형");
  const apiUrl = process.env.APP_API_URL;

  return (
    <>
      <h1>챌린지반 CRA 없이 React 만들기 입니다.</h1>
      <div>
        {word1}<br />
        {word2}<br />
        address : {apiUrl}
      </div>
    </>
  )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)