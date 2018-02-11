var tracks = [] 
tracks.push({
	id: 1, 
	title: 'First track',
	duration: 7,
}) 

tracks.push({ 
	id: 2, 
	title: 'Best track', 
	duration: 12, 
}) 

tracks.push({ 
	id: 3, 
	title: 'New track', 
	duration: 23, 
}) 

var tracksContainer = document.getElementById('tracks') 

var i, row, cell1, cell2, cell3, cell4

for(i = 0; < tracksContainer.length; i++) { 
	row = tracksContainer.insertRow(i) 
	cell1 = row.insertCell(0)
	cell1 = row.insertCell(1)
	cell1 = row.insertCell(2)
	cell1 = row.insertCell(3)

	cell1.innerHTML = tracks[i].id 
	cell2.innerHTML = tracks[i].title
	cell1.innerHTML = tracks[i].duration

} 
