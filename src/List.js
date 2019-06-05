import React from 'react'; 
import BrandList from './BrandList'

class List extends React.Component { 	
	
	render() { 
		
		
		return (
			<ul className="list-group">
			
        		<BrandList idnumber={this.props.idnumber}></BrandList>

			 <li className="list-group-item">Lamborghini</li>
			 <li className="list-group-item">Porsche</li>
			 <li className="list-group-item active">Maclaren</li>
				
			</ul>

			
		)
	}
}

export default List