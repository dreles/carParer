import React from 'react'; 

class Card extends React.Component {

	render() {
		return (
			<div className="card" style={{width:  "23rem"}}>
		        <img src={require('./images/pic03.jpg')} className="card-img-top" alt="..."/>
		        <div className="card-body">
		          <h5 className="card-title">Ferrari - 458 Italia</h5>
		          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		          <button href="#" className="btn" data-toggle="collapse" data-target="#collapseOne"><i className="fas fa-caret-down"></i></button>
		          <div id="collapseOne">hello</div>
		        </div>
		    </div>
		)
	}
}

export default Card; 