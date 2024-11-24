import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

function App() {
  return (
<BrowserRouter basename="/greatmongols-web/">
    <Routes>
      <Route path="/" element={<HomePage />}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
