import {SET_CAR_1, SET_CAR_2 } from '../actions/types'; 

const initialState = {
	car1: {},
	car2: {}
}

function bestCopyEver(src) {
  return Object.assign({}, src);
}

let copy = {}

export default function(state = initialState, action){
	switch(action.type) {
		case SET_CAR_1:
			copy = bestCopyEver(state)
			copy.car1 = action.payload
			return copy
		case SET_CAR_2:
			copy = bestCopyEver(state)
			copy.car2 = action.payload
			return copy
		default:
			return state
	}
}