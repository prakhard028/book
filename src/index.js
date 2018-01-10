var React=require('react');
var ReactDOM = require('react-dom');




//creating a header on webpage in react will we done by creating react elment of type h1 having content to display eg(hello world)
/*//var data type and APP is react element name(variable name)
//h1(means header),null(designing here we can include CSS file),content to be displayed*/
//same can be done by JSX
//var APP=<h1>hello world</h1> this was using JSX format
var Component = function(){
  return(
    <h1> hello prakhar </h1>
  );
};
/*ReactDOM.render(APP,
document.getElementById('root')
);
//dom is used for web application, render to create , create react element*/

ReactDOM.render(
  <Component />,
document.getElementById('root')
);
