import { env } from "../config/env";

function App() {
  console.log("Environment:", env.appName);
  return (
    <div>
      
      <p>Environment: {env.appEnv}</p>
      
    </div>
  );
}

export default App;