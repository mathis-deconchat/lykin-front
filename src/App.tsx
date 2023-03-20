import AppRouter from "./services/router";

function App() {
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + 'px');

  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  return (
    <>
      <div className="bg-gradient-to-t from-blue-200 via-gray-600 to-gray-900 h-screen min-w-screen ">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
