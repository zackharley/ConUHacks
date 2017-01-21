var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
require("../styles/styletest.css");

var Home = React.createClass({
	render: function () {
		return (
			<div className='jumbotron col-sm-12 text-center' style={transparentBg}>  
				<h1 className='test'>Github Battle</h1>
				<p className='lead'> Fancy Motto </p>
			
				<Link to='/playerOne'>
					<button type='button' className='btn btn-lg btn-success'> Get Started</button>
				</Link>
			</div>
		)
	}

});

module.exports = Home;