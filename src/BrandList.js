import React from 'react'; 
import {setCar} from './actions/carActions'; 
import {connect} from 'react-redux'

class BrandList extends React.Component { 

	selectCar = (model) => {

		this.props.setCar(this.props.idnumber, model)
	}

	renderList(make){
		return make.map((model) => {
			return(
				<li key={model.name} className="list-group-item">
					<button onClick={ () => {this.selectCar(model) }} className="btn"> {model.name} </button>
				</li>
			)
		})
	}

	filterCars = (make) => {
		let cars = this.props.cars.filter((car) => {
			return car.make === make 
		})
		return cars
	}

	render(){
		
		let cars = this.filterCars(this.props.make)
	
		return(
				<li className="list-group-item">
				 	<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={`#collapseTwo${this.props.make}${this.props.idnumber}`} aria-expanded="false" aria-controls="collapseTwo">
	         			 {this.props.make}
	        		</button>
	        		<div id={`collapseTwo${this.props.make}${this.props.idnumber}`} className="collapse">
						<ul className="list-group list-group-flush">
							{this.renderList(cars)}
						</ul>
					</div>
        		</li>			
		)
	}
}

export default connect(function(){return{}}, {setCar})(BrandList); 