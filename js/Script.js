function result() {
    var makeText = (tempFahr, eventType, clothingEventType) =>
            'Since it is ' +
        tempFahr +
            ' degrees outside and you are going to a ' + 
        eventType +
        ' event, you should wear ' + 
        clothingEventType +
        ' and';
        
    var clothingEventType = {
      casual: 'something comfy',
      'semi-formal': 'a polo',
      formal: 'a suit'
    };
        
    var event = "Is the event casual, semi-formal, or formal?";
    var eventType = prompt(event);
    var temp = "What temperature is it outside?";
    var tempFahr = prompt(temp);
    let result = '';
        
        if (tempFahr < 54 && eventType.toLowerCase() === 'casual'){
        result = makeText(tempFahr, eventType, clothingEventType.casual) + ' a coat.';
        console.log(result);}
                else if (tempFahr < 54 && eventType.toLowerCase() === 'semi-formal'){
                        result = makeText(tempFahr, eventType, clothingEventType['semi-formal']) + ' a coat.';
                        console.log(result);}
                else if (tempFahr < 54 && eventType.toLowerCase() === 'formal'){
                        result = makeText(tempFahr, eventType, clothingEventType.formal) + ' a coat.';
                        console.log(result);}    
                else if (tempFahr >= 54 && tempFahr <=70 && eventType.toLowerCase() === 'casual'){
                        result = makeText(tempFahr, eventType, clothingEventType.casual) + ' a jacket.';
                        console.log(result);}
                else if (tempFahr >= 54 && tempFahr <=70 && eventType.toLowerCase() === 'semi-formal'){
                        result = makeText(tempFahr, eventType, clothingEventType['semi-formal']) + ' a jacket.';
                        console.log(result);}
                else if (tempFahr >= 54 && tempFahr <=70 && eventType.toLowerCase() === 'formal'){
                        result = makeText(tempFahr, eventType, clothingEventType.formal) + ' a jacket.';
                        console.log(result);}
                else if (tempFahr > 70 && eventType.toLowerCase() === 'casual'){
                        result = makeText(tempFahr, eventType, clothingEventType.casual) + ' no jacket.';
                        console.log(result);}
                else if (tempFahr > 70 && eventType.toLowerCase() === 'semi-formal'){
                        result = makeText(tempFahr, eventType, clothingEventType['semi-formal']) + ' no jacket.';
                        console.log(result);}
                else if (tempFahr > 70 && eventType.toLowerCase() === 'formal'){
                        result = makeText(tempFahr, eventType, clothingEventType.formal) + ' no jacket.';
                        console.log(result);}
        else {
                result = 'Try again';
                console.log(result);}
            
            
        document.getElementById("res").innerHTML = result;
    }
    