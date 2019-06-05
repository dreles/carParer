import React from 'react'; 
import List from './List';
import {connect} from 'react-redux'

class Card extends React.Component {

	renderCardBody(){
		if(Object.entries(this.props.car).length === 0 && this.props.car.constructor === Object){
			return(
				<div className="card-body">
					<h5 className="card-title">
						Please Select a car to compare
					</h5>
				</div>
			)
			
		}else{
			return(
				<div className="card-body">
		          <h5 className="card-title">{this.props.car.name}</h5>
		          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		        </div>
			)
		}
	}

	render() {

	
		
		return (
			
			<div className="card" style={{width:  "23rem"}}>
		        <img src={require('./images/pic03.jpg')} className="card-img-top" alt="..."/>
		        {this.renderCardBody()}
		        <button href="#" className="btn collapsed" data-toggle="collapse" data-target={`#list${this.props.number}`} aria-expanded="false"  aria-controls="collapseOne"><i className="fas fa-caret-down" ></i></button>

		        <div id={`list${this.props.number}`}className="collapse"><List idnumber={this.props.number}/></div>
		    </div>
		)
	}
}

const mapStateToProps = (state, props) => { 
	console.log(state)
	
	return ({
		car: props.number === 1 ? state.car.car1 : state.car.car2
	})
}

export default connect(mapStateToProps, {})(Card); 