import React from 'react'; 
import BrandList from './BrandList'

class List extends React.Component { 	

	renderListElements = () => {
		const arr = Array.from(this.props.makes)
		return arr.map((make) => {
			return(
				<BrandList cars={this.props.cars} key={make} make={make} idnumber={this.props.idnumber}></BrandList>
			)
		})
	}

	
	
	render() { 
		
		return (
			<ul className="list-group">
			 	{this.renderListElements()}
			</ul>
		)
	}
}

export default List