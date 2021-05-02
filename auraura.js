

//GEO API KEY: 6ae74bb2d4254e5f9857eeba04c39959
// Get lat and long of all locations.
//Put into array called coordinates 
//location is name of area.
window.onload=async function sendApiRequest(){
    let response = await fetch('http://api.auroras.live/v1/?type=locations');
   
    var data = await response.json();
    var IdArray = [];
    var NamesArray=[];
    //get the vaalues from the JSON
    for (var properties in data) {
        if (Object.prototype.hasOwnProperty.call(data, properties)) {
            var latitude=data[properties].lat;
            var Longitude= data[properties].long;
            //coordinates array of lat and long values
            var coordinates= [latitude , Longitude];
            //append to url for city name
            var locationName = data[properties].description;
            var location = data[properties].id;
 
        }
         //PUSH ALL CITIES TO ARRAY
        //ARRAY OF IDS:
        IdArray.push(location);
         //ARRAY of Names
        NamesArray.push(locationName);  
    }

//LOOP THROUGH ARRAY AND MAKE <OPTIONS>
    var select = document.getElementById("selectLocation"); 
    for(i=0; i<IdArray.length; i++){
        var opt =IdArray[i];
        var el = document.createElement("option");
        el.textContent = NamesArray[i];
        el.value = NamesArray[i];
        select.appendChild(el);
        }
}
 //ON SUBMIT BUTTON SEND VALUE and APPEND TO GET REQUEST AND LOAD CAM.
 var formHandle = document.forms.myForm;
 formHandle.onsubmit = getValOfOption;
    function getValOfOption(){
        var dropMenuVal = document.getElementById("selectLocation").value;

        console.log(dropMenuVal); 
                
            var apikey = '6ae74bb2d4254e5f9857eeba04c39959';
        

            var api_url = 'https://api.opencagedata.com/geocode/v1/json'

            var request_url = api_url
            + '?'
            + 'key=' + apikey
            + '&q=' + encodeURIComponent(dropMenuVal)
            + '&pretty=1'
            + '&no_annotations=1';

            // see full list of required and optional parameters:
            // https://opencagedata.com/api#forward

            var request = new XMLHttpRequest();
            request.open('GET', request_url, true);

            request.onload = function() {
            // see full list of possible response codes:
            // https://opencagedata.com/api#codes

           
            if (request.status === 200){ 
                // Success!
                var data = JSON.parse(request.responseText);
                alert(data.results[0].formatted); // print the location
                

            } else if (request.status <= 500){ 
                // We reached our target server, but it returned an error
                                    
                console.log("unable to geocode! Response code: " + request.status);
                var data = JSON.parse(request.responseText);
                console.log('error msg: ' + data.status.message);
            } else {
                console.log("server error");
            }
            };

            request.onerror = function() {
            // There was a connection error of some sort
            console.log("unable to connect to server");        
            };

            request.send();  // make the request

            return false;
    }

//LOCATION:



//Add value to drop down
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createattribute

