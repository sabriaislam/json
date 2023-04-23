let contentGridElement = document.getElementById('contentGrid');

let characterList = [
	{
		name: "Joel",
		playedBy: "Played by: Pedro Pascal",
		age: "Age: 52",
		description: "Description: Joel is a hardened middle-aged survivor who is tormented by the trauma of his past. He is tasked with smuggling a young girl, Ellie, out of a quarantine zone and across the United States.",
		image: "joel.jpeg"
	},
	{
		name: "Ellie",
		playedBy: "Played by: Bella Ramsey",
		age: "Age: 14",
		description: "Description: Ellie is a 14-year-old girl who displays much defiance and anger but has a private need for kinship and belonging. She is immune to the Cordyceps infection and may be the key to creating a vaccine.",
		image: "ellie.jpeg"
	},
	{
		name: "Tommy",
		playedBy: "Played by: Gabriel Luna",
		age: "Age: 45",
		description: "Description: Tommy is Joel's younger brother and a former soldier who maintains idealism in his hope for a better world. ",
		image: "tommy.jpeg"
	},
	{
		name: "Marlene",
		playedBy: "Played by: Merle Dandridge",
		age: "Age: mid-40s",
		description: "Description: Marlene is the final antagonist of season 1. She is the leader of the Fireflies.",
		image: "marlene.jpeg"
	},
	{
		name: "Tess",
		playedBy: "Played by: Anna Torv",
		age: "Age: late 30s to early 40s",
		description: "Description: Tess arrived at FEDRA quarantine zone in Boston during season 1 and became known for her reputation in the black market smuggling and trading operations, causing other smugglers to avoid her.",
		image: "tess.jpeg"
	},
	{
		name: "Bill",
		playedBy: "Played by: Nick Offerman",
		age: "Age: late 40s",
		description: "Description: Bill was a survivalist who lived alone in an isolated town after the Cordycep outbreak with his lover Frank.",
		image: "bill.jpeg"
	},
];

for (var i = 0; i < characterList.length; i++) {
	createElementCharacter(characterList[i]);
}


function createElementCharacter(incomingJSON){

	let newContentElement = document.createElement("DIV");
  	newContentElement.classList.add('contentItem');
  	
  	let newContentHeading = document.createElement("H3");
  	newContentHeading.classList.add('contentTitle')
  	newContentHeading.innerText = incomingJSON['name'];
  	newContentElement.appendChild(newContentHeading);

  	let newContentImage = document.createElement("IMG");
  	newContentImage.classList.add("characterImage");
  	newContentImage.src = incomingJSON["image"];
  	newContentElement.appendChild(newContentImage);

	let newContentPlayedBy = document.createElement('p');
  	newContentPlayedBy.classList.add("characterPlayedBy");
  	newContentPlayedBy.innerText = incomingJSON["playedBy"];
  	newContentElement.appendChild(newContentPlayedBy);

  	let newContentAge = document.createElement('p');
  	newContentAge.classList.add("characterAage");
  	newContentAge.innerText = incomingJSON["age"];
  	newContentElement.appendChild(newContentAge);

  	let newContentDescription = document.createElement('p');
  	newContentDescription.classList.add("characterBlurb");
  	newContentDescription.innerText = incomingJSON["description"];
  	newContentElement.appendChild(newContentDescription);

  	contentGridElement.appendChild(newContentElement);
}


