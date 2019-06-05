import {SET_CAR_1, SET_CAR_2} from './types'; 

export const setCar = (cardNum, car) => {
	if(cardNum === 1){
		return ({
			type: SET_CAR_1,
			payload: car
		})
		
	}else{
		return ({
			type: SET_CAR_2,
			payload: car
		})
	}
} 