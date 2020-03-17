let restaurant = {
	name: 'Yakoyo Food Canteen',
	guestCapacity: 75, 
	guestCount: 0, 
	checkAvailability: function(partySize){
		let seatLeft = this.guestCapacity - this.guestCount
		return partySize <= seatLeft

	}, 
	seatParty: function(partySize){
		this.guestCount += partySize
	}, 
	removeParty: function(leavingPartySize){
		return this.guestCount -= leavingPartySize
	}
}


restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
console.log(restaurant.removeParty(5))
console.log(restaurant.checkAvailability(4))

