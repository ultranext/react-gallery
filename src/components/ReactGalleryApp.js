'use strict';

var React = require('react/addons');
//var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.scss');
var imageDatas = require('../data/imagesData.json');
//var imageURL = require('../images/yeoman.png');
imagesDatas = genImageURL(imageDatas);
function genImageURL(imageDataArr){

	for(var i = 0; i< imageDataArr.length; i++){

		var singleImageData = imageDataArr[i];
		singleImageData.imageURL =  require('../iamges/singleImageData.fileName');
		imageDataArr[i] = singleImageData;

	}
	return imageDataArr;
}

var ReactGalleryApp = React.createClass({
  render: function() {
    return (
      <section className="stage">
      		<section className="img-sec"></section>
      		<nav className="controller-nav"></nav>
      </section>
    );
  }
});
React.render(<ReactGalleryApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ReactGalleryApp;
