
let journal = [
{events: ["work", "touched tree", "pizza",
"running", "television"],
squirrel: false},
{events: ["work", "ice cream", "cauliflower",
"lasagna", "touched tree", "brushed teeth"],
squirrel: false},
{events: ["weekend", "cycling", "break", "peanuts",
"beer"],
squirrel: true},
/* and so on... */
];
// function journalEvents(journal) {
// 	let events = [];
// 	for (let entry of journal) {
// 		for (let event of entry.events) {
// 			if (!events.includes(event)) {
// 				events.push(event);
// 			}
// 		}
// 	}
// 	return events;
// }

function journalEvents(journal){
	let events = []
	for(let entry of journal){
		for(let event of entry.events){
			if(!events.includes(event)){
				events.push(event)
			}
		}
	}
	return events
}
console.log(journalEvents(journal));