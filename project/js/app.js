var app = React.createElement('div', {},
  React.createElement('h1', {}, "Hi, I'm header inside div"),
  React.createElement('ul', {},
    React.createElement('li', {},
      React.createElement('h2', {}, "Hi, I'm list item inside list inside div")
    ),
    React.createElement('li', {},
      React.createElement('h2', {}, "Hi, I'm list item inside list inside div")
    )
  )
);

ReactDOM.render(
  React.createElement('h1', null, 'Hello, world!'),
  document.getElementById('app')
);