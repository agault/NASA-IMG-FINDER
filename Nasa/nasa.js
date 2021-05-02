//event listener for pic on click of pic of day
var searchButton = document.getElementById('search').addEventListener("click", sendApiRequest);
//FETCH DATA FROM API FOR PIC OF DAY
async function sendApiRequest(){
    let API_KEY = "0rN6KLGCEGYRZ3FELKNuiwhnQQ4tsWlMMP9nUWG5";
    let response = await fetch(`https://api.nasa.gov/planetary/apod/?api_key=${API_KEY}`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    useApiData(data)
}
//USE API DATA FOR PIC OF DAY
function useApiData(data){
document.getElementById('description').innerHTML = data.explanation;
document.getElementById('title').innerHTML += data.title;
console.log(data.explanation);
document.getElementById('image').innerHTML +=`<img class="card-img-top" src="${data.url}">`;
}
//SEARCH BY DATE
var inputButton=document.getElementById('getDateValue');
inputButton.onclick=sendApiRequestForDate;
//FETCH DATA BASED ON date
async function sendApiRequestForDate(){
    var inputDate =document.getElementById('searchDate').value;
    let API_KEY = "0rN6KLGCEGYRZ3FELKNuiwhnQQ4tsWlMMP9nUWG5";
    //https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=1995-06-16
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${inputDate}`);
    let response2 = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${inputDate}&api_key=${API_KEY}`);
    let dataD = await response.json();
    let dataD2 = await response2.json();

    useApiDataDate(dataD)
    useApiDataD2(dataD2)
}
//USE API DATA BY DATE ANDfunction 
function useApiDataDate(dataD){
//document.getElementById('description').innerHTML = dataD.explanation;
//document.getElementById('title').innerHTML += dataD.title;
console.log(dataD.explanation);
document.getElementById('imageDate').innerHTML +=`<img class="marsIMG" src="${dataD.url}">`;
}

function useApiDataD2(dataD2){
    for (var photos in dataD2) {
        var list = "";
        if (Object.prototype.hasOwnProperty.call(dataD2, photos)) {
            var photo=dataD2[photos];
            console.log(photo[2])
            for(i=0; i<=photo.length; i++){
                list = photo[i];
                console.log(list)
                
                document.getElementById('imageDate').innerHTML +=`<img class="marsIMG" src="${list.img_src}">`;
            }


        } 
    }
   
    }
