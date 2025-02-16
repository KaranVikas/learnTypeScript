import Button from "./components/Button";

function App() {
  return (
    <>
      <div>
        <Button
          label="Click"
          onClick={() => console.log("Clicked")}
          disabled={false}
        ></Button>
      </div>
    </>
  );
}

export default App;
