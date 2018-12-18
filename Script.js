function result() {
    var event = "What kind of event are you going to?";
    var eventType = prompt(event);
    var temp = "What temperature is it outside?";
    var tempFahr = prompt(temp);
    
    if (tempFahr < 54 && eventType === 'casual') {
        if (tempFahr < 54 && eventType === 'casual'){
        console.log('wear a coat and something comfy');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, wear a coat and something comfy.';}
        
    } else if (eventType === 'semi-formal'){
        if (tempFahr < 54 && eventType === 'semi-formal'){
        console.log('wear a coat and a polo');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, wear a coat and a polo.';}
    
    } else if (eventType === 'formal'){
        if (tempFahr < 54 && eventType === 'formal'){
        console.log('wear a coat and a suit');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, wear a coat and a suit.';}
    }
    
    /*============================================*/
    
    if (tempFahr > 54 && eventType === 'casual') {
        if (tempFahr > 54 && tempFahr <=70 && eventType === 'casual'){
        console.log('wear a jacket and something comfy');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, wear a jacket and something comfy.';}
        
    } else if (tempFahr > 54 && eventType === 'semi-formal'){
        if (tempFahr > 54 && tempFahr <=70 && eventType === 'semi-formal'){
        console.log('wear a jacket and a polo');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, wear a jacket and a polo.';}
    
    } else if (tempFahr > 54 && eventType === 'formal'){
        if (tempFahr > 54 && tempFahr <=70 && eventType === formal){
        console.log('wear a jacket and a suit');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, wear a jacket and a suit.';}
    }
    
    /*==============================================*/
    
    if (tempFahr >= 70 && eventType === 'casual') {
        if (tempFahr >= 70 && eventType === 'casual'){
        console.log('something comfy and no jacket');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, just wear something comfy and no jacket.';}
        
    } else if (tempFahr >= 70 && eventType === 'semi-formal'){
        if (eventType === 'semi-formal'){
        console.log('polo and no jacket');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, wear a polo and no jacket.';}
    
    } else if (tempFahr >= 70 && eventType === 'formal'){
        if (eventType === 'formal'){
        console.log('suit and no jacket');
        text = 'Since it is ' + tempFahr + ' degrees outside and you going to a ' + eventType + ' event, wear a suit and no jacket.';}
    }
    
        document.getElementById("res").innerHTML = text;
    }
