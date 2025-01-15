import DisplayColors from "./pages/DisplayColors";

function App() {
  return (
    <div className="container p-4 bg-slate-400">
      <h1>Here is title of page</h1>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <DisplayColors />
      </div>
    </div>
  );
}

export default App;
