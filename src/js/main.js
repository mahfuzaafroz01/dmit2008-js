var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var symbol = document.querySelector('.symbol');
var high = document.querySelector('.high');
var low = document.querySelector('.low');
var currency = document.querySelector('.currency');
var country = document.querySelector('.country');

//add eventlistener to licten to the click event
    button.addEventListener('click',function(){

    var result = [];
    var input = inputValue.value.trim();
    symbol.innerHTML=""; 
    document.querySelector('.error').innerHTML= "";
    
        if(input==''){
            document.querySelector('.error').innerHTML= "Please provide some data to begin"; //error message for empty input
        }else
        {

            fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${input}&apikey=OPKMD7LR52YE6CVB`)//api key added to get data
                .then(response => response.json()) //sending response to get json data
                .then(data => 
                {
                    if(Object.keys(data).length==0){
                        document.querySelector('.error').innerHTML= "Results not found under this search";
                    }else{
                            result = {...data}
            
                            console.log(result)
                            //console.log(result.AssetType);
                            symbol.innerHTML = result.Symbol;
                            high.innerHTML = result['52WeekHigh'];
                            low.innerHTML = result['52WeekLow'];
                            currency.innerHTML = result['Currency'];
                            country.innerHTML = result['Country'];
                    }
   
}) 

.catch(err=> console.log(err)) // an alert for user to enter proper search data
    }
    

})

