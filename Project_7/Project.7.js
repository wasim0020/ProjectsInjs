const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5d86ced666mshce9fadc255ec406p124ebbjsn1ec4579ff61a',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

let temperture;

try {
	const response = await fetch(url, options);
	const result = await response.json();
    console.log(result);
	const wheather = result.current.condition.text;
    const temp = result.current.temp_c;
    const location1 = result.location.country;
    const cityname = result.location.name;
    temperture = [wheather,temp,location1,cityname];
    console.log(temperture);
} catch (error) {
	console.error(error);
}
console.log(temperture);
const change = document.querySelector('#change');
change.innerHTML = temperture
















// const WheatherData = new Promise(function(reslove,reject){
//     const validapi = true;
//     if(validapi){
//         reject('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13')
//     }else{
//         reject('Error is occur api does not work currantly')
//     }
// })

// WheatherData.then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log('Error',error);
// }).finally(function(work){
//     console.log("Prome is complete",work);
// })