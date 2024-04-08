import * as Imports from "../assets/importFile";

function NotFoundPage() {
  return (
    <div className="error-page">
      <Imports.Nav></Imports.Nav>
      <span className="subtle-highlight">
        <h1>
          <span className="highlight">404</span> - This page is unavailable
        </h1>
      </span>
    </div>
  );
}

export default NotFoundPage;
