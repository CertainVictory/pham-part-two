function result() {
    var event = "Is the event casual, semi-formal, or formal?";
    var eventType = prompt(event);
    var temp = "What temperature is it outside?";
    var tempFahr = prompt(temp);
    
    if (tempFahr < 54 && eventType === 'casual' || eventType === 'Casual') {
        if (tempFahr < 54 && eventType === 'casual' || eventType === 'Casual'){
        console.log('Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear something comfy and coat.');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear something comfy and coat.';}
        
    } else if (eventType === 'semi-formal' || eventType === 'Semi-formal'){
        if (tempFahr < 54 && eventType === 'semi-formal' || eventType === 'Semi-formal'){
        console.log('Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear a polo and coat.');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear a polo and coat.';}
    
    } else if (eventType === 'formal' || eventType === 'Formal'){
        if (tempFahr < 54 && eventType === 'formal' || eventType === 'Formal'){
        console.log('Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear a suit and coat.');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear a suit and coat.';}
    }
  
    /*============================================*/
    
    if (tempFahr >= 54 && eventType === 'casual' || eventType === 'Casual') {
        if (tempFahr >= 54 && tempFahr <=70 && eventType === 'casual' || eventType === 'Casual'){
        console.log('Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear something comfy and jacket.');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear something comfy and jacket.';}
        
    } else if (tempFahr >= 54 && eventType === 'semi-formal' || eventType === 'Semi-formal'){
        if (tempFahr >= 54 && tempFahr <=70 && eventType === 'semi-formal' || eventType === 'Semi-formal'){
        console.log('Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear a polo and jacket.');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear a polo and jacket.';}
    
    } else if (tempFahr >= 54 && eventType === 'formal' || eventType === 'Formal'){
        if (tempFahr >= 54 && tempFahr <=70 && eventType === 'formal' || eventType === 'Formal'){
        console.log('Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear a suit and jacket.');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear a suit and jacket.';}
    }
    
    /*==============================================*/
    
    if (tempFahr >= 70 && eventType === 'casual' || eventType === 'Casual') {
        if (tempFahr > 70 && eventType === 'casual' || eventType === 'Casual'){
        console.log('Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear no jacket and something comfy.');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear no jacket and something comfy.';}
        
    } else if (tempFahr > 70 && eventType === 'semi-formal' || eventType === 'Semi-formal'){
        if (eventType === 'semi-formal' || eventType === 'Semi-formal'){
        console.log('Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear a polo and no jacket.');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear a polo and no jacket.';}
    
    } else if (tempFahr > 70 && eventType === 'formal' || eventType === 'Formal'){
        if (eventType === 'formal' || eventType === 'Formal'){
        console.log('Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear a suit and no jacket.');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, you should wear a suit and no jacket.';}
    }
    
        document.getElementById("res").innerHTML = text;
    }
