import "./App.css";
import Heading from "./Components/Heading";
import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import { Route, Switch } from "react-router-dom";
import { ContextProvider } from "./context/Globalcontext";

function App() {
  return (
    <>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <ContextProvider>
            <Heading />

            <Switch>
              <Route path="/" component={Tasklist} exact />
              <Route path="/add" component={Taskform} />
            </Switch>
          </ContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;
