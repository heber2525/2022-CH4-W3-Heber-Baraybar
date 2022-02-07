function app() {
  // React.createElement
  function Avatar() {
    return <p>'Hola Mundo'</p>;
  }
  ReactDOM.render(Avatar(), document.querySelector('.avatar'));
}

document.addEventListener('DOMContentLoaded', app);
