import React from 'react'; 
import List from './List';
import SpecList from './SpecList';
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
			let car = this.props.car
			return(
				
				<div className="card-body">
		          <h5 className="card-title">{car.name}</h5>
		          <SpecList car={car}/>
		        </div>
			)
		}
	}

	getBrands = () => {
		let arr = []
		const cars = (this.props.cars)
		cars.map((car) => {
			arr.push(car.make)
			return null
		})
		return (new Set(arr))
	}


	render() {

		return (
			<div className="card" style={{width:  "23rem"}}>
		        {this.props.car.img ? <img src={this.props.car.img} className="card-img-top" alt="..."/> : <div></div>}

		        {this.renderCardBody()}

		        <button href="#" className="btn collapsed" data-toggle="collapse" data-target={`#list${this.props.number}`} aria-expanded="false"  aria-controls="collapseOne"><i className="fas fa-caret-down" ></i></button>

		        <div id={`list${this.props.number}`}className="collapse"><List cars={this.props.cars} makes={this.getBrands()} idnumber={this.props.number}/></div>
		    </div>
		)
	}

}

const mapStateToProps = (state, props) => { 
	
	return ({

		car: props.number === 1 ? state.car.car1 : state.car.car2

	})
}

export default connect(mapStateToProps, {})(Card); 