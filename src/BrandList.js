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

	render(){
		const ferraris= [{
			type: "Ferrari",
			name: "458 Italia"
		
		},
		{
			type: "Ferrari",
			name: "488 GTB"
		},
		{
			type: "Ferrari",
			name: "812 Superfast"
		}]
		return(
				<li className="list-group-item">
				 	<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={`#collapseTwo${this.props.idnumber}`} aria-expanded="false" aria-controls="collapseTwo">
	         			 Ferrari
	        		</button>
	        		<div id={`collapseTwo${this.props.idnumber}`} className="collapse">
						<ul className="list-group list-group-flush">
							{this.renderList(ferraris)}
						</ul>
					</div>
        		</li>			
		)
	}
}

export default connect(function(){return{}}, {setCar})(BrandList); 