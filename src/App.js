import * as Imports from "./assets/importFile";

function App() {
  return (
    <Imports.BrowserRouter>
      <Imports.Routes>
        <Imports.Route
          path="/"
          element={
            <div className="container">
              <Imports.Nav />
              <Imports.Introduction />
              <Imports.About />
              <Imports.Projects />
              <Imports.Experience />
              <Imports.Contact />
            </div>
          }
        />
        <Imports.Route
          path="/projectdetails/:id"
          element={<Imports.ProjectsDetailsScreen />}
        />
        <Imports.Route path="*" element={<Imports.NotFoundPage />} />
      </Imports.Routes>
    </Imports.BrowserRouter>
  );
}

export default App;
