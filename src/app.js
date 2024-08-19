import { add } from './add.js';

const App = () => {
  const word = add("Hello ", "No-CRA React!");
  const apiUrl = process.env.APP_API_URL;

  return (
    <>
      <h1>챌린지반 CRA 없이 React 만들기 입니다.</h1>
      <div>
        {word}<br />
        address : {apiUrl}
      </div>
    </>
  )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)