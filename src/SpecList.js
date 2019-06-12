import React from 'react'
import {connect} from 'react-redux'; 

class SpecList extends React.Component {

	formatMoney(n, c, d, t) {
	  	var c = isNaN(c = Math.abs(c)) ? 2 : c,
	    d = d == undefined ? "." : d,
	    t = t == undefined ? "," : t,
	    s = n < 0 ? "-" : "",
	    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
	    j = (j = i.length) > 3 ? j % 3 : 0;

	  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
	};
	
	render(){
		let car = this.props.car;
	
		return(
			<ul className="card-specs">
				{this.checkWinner("price")}
		        {this.checkWinner("speed")}
		        {this.checkWinner("torque")}
		        {this.checkWinner("sixty")}
		    </ul>
		); 
	}

	checkWinner(key){
		let car1 = this.props.car1;
		let car2 = this.props.car2; 
		let car = this.props.car;
		let winner = 0;

		switch(key){
			case "price":
				winner = Math.min(car1.price, car2.price);
				return car.price === winner ? <li className="winner">MSRP: ${this.formatMoney(car.price)}</li> : <li className="loser">MSRP: ${this.formatMoney(car.price)}</li>
			case "speed":
				winner = Math.max(car1.ts, car2.ts);
				return car.ts === winner ? <li className="winner">Top Speed: {car.ts} mph</li> : <li className="loser">Top Speed: {car.ts} mph</li>
			case "torque":
				winner = Math.max(car1.tq, car2.tq);
				return car.tq === winner ? <li className="winner">Torque: {car.tq} lb-feet</li> : <li className="loser">Torque: {car.tq} lb-ft</li>
			case "sixty":
				winner = Math.min(car1.sixty, car2.sixty);
				return car.sixty === winner ? <li className="winner">0-60: {car.sixty}s</li> : <li className="loser">0-60: {car.sixty}s</li>
			default:
				return "N/A"
		}
	}

}

const mapStateToProp = (state) => {
	const car1 = state.car.car1;
	const car2 = state.car.car2; 

	return {
		car1: car1,
		car2: car2
	}
}

export default connect(mapStateToProp, {})(SpecList); 