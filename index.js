//выбор древнего
import ancientsData from './data/ancients.js';

const azathoth = document.getElementById('Azathoth');
const cthulthu = document.getElementById('Cthulthu');
const iogSothoth = document.getElementById('IogSothoth');
const shubNiggurath = document.getElementById('ShubNiggurath');

azathoth.addEventListener('click', () => {
    azathoth.classList.add('active')
    cthulthu.classList.remove('active')
    iogSothoth.classList.remove('active')
    shubNiggurath.classList.remove('active')
    //window.location.reload();
})
cthulthu.addEventListener('click', () => {
    cthulthu.classList.add('active')
    iogSothoth.classList.remove('active')
    shubNiggurath.classList.remove('active')
    azathoth.classList.remove('active')
    //window.location.reload();
})
iogSothoth.addEventListener('click', () => {
    iogSothoth.classList.add('active')
    shubNiggurath.classList.remove('active')
    azathoth.classList.remove('active')
    cthulthu.classList.remove('active')
    //window.location.reload();
})
shubNiggurath.addEventListener('click', () => {
    shubNiggurath.classList.add('active')
    azathoth.classList.remove('active')
    cthulthu.classList.remove('active')
    iogSothoth.classList.remove('active')
    //window.location.reload();
})

function getAncients() {
        if (azathoth.classList.contains('active') == true) {
        //console.log(ancientsData[0]); 
        return ancientsData[0];  
    } else if (cthulthu.classList.contains('active') === true) {
        //console.log(ancientsData[1]);
        return ancientsData[1];
    } else if (iogSothoth.classList.contains('active') === true) {
        //console.log(ancientsData[2]);
        return ancientsData[2];
    } else if (shubNiggurath.classList.contains('active') === true) {
        //console.log(ancientsData[3]);
        return ancientsData[3];
    }
}

const shuffleButton = document.querySelector('.shuffle-button');
const deckContainer = document.querySelector('.deck-container');

import brownCards from './data/mythicCards/brown/index.js';
import blueCards from './data/mythicCards/blue/index.js';
import greenCards from './data/mythicCards/green/index.js';

//нажатие кнопки перетасовки колоды
shuffleButton.addEventListener('click', () => {
    const divState = document.createElement('div');
    divState.classList.add('current-state');
    deckContainer.append(divState);

    const divDeck = document.createElement('div');
    divDeck.classList.add('deck');
    divDeck.style.backgroundImage = "url('./assets/mythicCardBackground.png')";
    deckContainer.append(divDeck);

    shuffleButton.parentNode.removeChild(shuffleButton);

    const divStageOne = document.createElement('div');
    divStageOne.classList.add('stage-container');
    divState.append(divStageOne);

    const spanTextOne = document.createElement('span');
    spanTextOne.textContent = 'Первая стадия';
    spanTextOne.classList.add('stage-text');
    divStageOne.append(spanTextOne);

    const divDotsOne = document.createElement('div');
    divDotsOne.classList.add('dots-container');
    divStageOne.append(divDotsOne);

    const dotsGreenOneStage = document.createElement('div');
    dotsGreenOneStage.classList.add('dot');
    dotsGreenOneStage.classList.add('green');
    dotsGreenOneStage.textContent = getAncients().firstStage.greenCards;
    divDotsOne.append(dotsGreenOneStage);

    const dotsBrownOneStage = document.createElement('div');
    dotsBrownOneStage.classList.add('dot');
    dotsBrownOneStage.classList.add('brown');
    dotsBrownOneStage.textContent = getAncients().firstStage.brownCards;
    divDotsOne.append(dotsBrownOneStage);

    const dotsBlueOneStage = document.createElement('div');
    dotsBlueOneStage.classList.add('dot');
    dotsBlueOneStage.classList.add('blue');
    dotsBlueOneStage.textContent = getAncients().firstStage.blueCards;
    divDotsOne.append(dotsBlueOneStage);

    
    const divStageTwo = document.createElement('div');
    divStageTwo.classList.add('stage-container');
    divState.append(divStageTwo);

    const spanTextTwo = document.createElement('span');
    spanTextTwo.textContent = 'Вторая стадия';
    spanTextTwo.classList.add('stage-text');
    divStageTwo.append(spanTextTwo);

    const divDotsTwo = document.createElement('div');
    divDotsTwo.classList.add('dots-container');
    divStageTwo.append(divDotsTwo);

    const dotsGreenTwoStage = document.createElement('div');
    dotsGreenTwoStage.classList.add('dot');
    dotsGreenTwoStage.classList.add('green');
    dotsGreenTwoStage.textContent = getAncients().secondStage.greenCards;
    divDotsTwo.append(dotsGreenTwoStage);

    const dotsBrownTwoStage = document.createElement('div');
    dotsBrownTwoStage.classList.add('dot');
    dotsBrownTwoStage.classList.add('brown');
    dotsBrownTwoStage.textContent = getAncients().secondStage.brownCards;
    divDotsTwo.append(dotsBrownTwoStage);

    const dotsBlueTwoStage = document.createElement('div');
    dotsBlueTwoStage.classList.add('dot');
    dotsBlueTwoStage.classList.add('blue');
    dotsBlueTwoStage.textContent = getAncients().secondStage.blueCards;;
    divDotsTwo.append(dotsBlueTwoStage);

    const divStageThree = document.createElement('div');
    divStageThree.classList.add('stage-container');
    divState.append(divStageThree);

    const spanTextThree = document.createElement('span');
    spanTextThree.textContent = 'Третья стадия';
    spanTextThree.classList.add('stage-text');
    divStageThree.append(spanTextThree);

    const divDotsThree = document.createElement('div');
    divDotsThree.classList.add('dots-container');
    divStageThree.append(divDotsThree);

    const dotsGreenThreeStage = document.createElement('div');
    dotsGreenThreeStage.classList.add('dot');
    dotsGreenThreeStage.classList.add('green');
    dotsGreenThreeStage.textContent = getAncients().thirdStage.greenCards;
    divDotsThree.append(dotsGreenThreeStage);

    const dotsBrownThreeStage = document.createElement('div');
    dotsBrownThreeStage.classList.add('dot');
    dotsBrownThreeStage.classList.add('brown');
    dotsBrownThreeStage.textContent = getAncients().thirdStage.brownCards;
    divDotsThree.append(dotsBrownThreeStage);

    const dotsBlueThreeStage = document.createElement('div');
    dotsBlueThreeStage.classList.add('dot');
    dotsBlueThreeStage.classList.add('blue');
    dotsBlueThreeStage.textContent = getAncients().thirdStage.blueCards;
    divDotsThree.append(dotsBlueThreeStage);

    const lastCard = document.createElement('div');
    lastCard.classList.add('last-card');
    deckContainer.append(lastCard);


    //тасовка колоды
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
    shuffle(greenCards);
    shuffle(brownCards);
    shuffle(blueCards);
    //console.log(greenCards)
    
    function getRandomCard(array) {
        const index = Math.floor(Math.random()*array.length);
        return array.splice(index, 1);
    }
    function getCards(array, n) {
        let smallDeck = [];
        for (let i =0; i < n; i++) {
            smallDeck.push(...getRandomCard(array));
        }
        return smallDeck;
    }
    getCards(greenCards, 1);
    getCards(brownCards, 2);
    getCards(blueCards, 1);
    //console.log(getCards(blueCards, 1));
    
    const stageOne = new Array(...getCards(greenCards, getAncients().firstStage.greenCards),...getCards(brownCards, getAncients().firstStage.brownCards),...getCards(blueCards, getAncients().firstStage.blueCards));
    shuffle(stageOne);
    //console.log(stageOne);
    
    const stageTwo = new Array(...getCards(greenCards, getAncients().secondStage.greenCards),...getCards(brownCards, getAncients().secondStage.brownCards),...getCards(blueCards, getAncients().secondStage.blueCards));
    shuffle(stageTwo);
    //console.log(stageTwo);
    
    const stageThree = new Array(...getCards(greenCards, getAncients().thirdStage.greenCards),...getCards(brownCards, getAncients().thirdStage.brownCards),...getCards(blueCards, getAncients().thirdStage.blueCards));
    shuffle(stageThree);
    //console.log(stageThree);
    
    const finalDeck = [...stageOne,...stageTwo,...stageThree];
    console.log(finalDeck);
    
    
    divDeck.addEventListener('click', () => {
        console.log(finalDeck.length);
        if (finalDeck.length === 0) {
            return;
        }
        const finalCard = finalDeck.shift();
        console.log(finalCard);
        getCount();
        lastCard.style.backgroundImage = finalCard.cardFace;             
        if (finalDeck.length === 0) {
            lastCard.style.backgroundImage = "none";
            divDeck.style.pointerEvents = "none";
        }                  

        function getObject() {  
            const isStageOne = finalDeck.length >= (stageTwo.length+stageThree.length);
            const isStageTwo = finalDeck.length < (stageTwo.length+stageThree.length) && finalDeck.length >= stageThree.length;
            const isStageThree = finalDeck.length < stageThree.length && finalDeck.length >= 0;
            const isGreen = finalCard. color === 'green';
            const isBrown = finalCard. color === 'brown';
            const isBlue = finalCard. color === 'blue';
            
            return (isGreen) 
            ? (isStageOne ? dotsGreenOneStage : isStageTwo ? dotsGreenTwoStage : dotsGreenThreeStage)
            : (isBrown) 
            ? (isStageOne ? dotsBrownOneStage : isStageTwo ? dotsBrownTwoStage : dotsBrownThreeStage) 
            : (isStageOne ? dotsBlueOneStage : isStageTwo ? dotsBlueTwoStage : dotsBlueThreeStage)
        }

        function getCount() {
            getObject();
            let count = Number(getObject().innerHTML);
            count--;
            getObject().innerHTML = count;                                 
        }
    })
})


       
        // ================================================================
        /*if (finalDeck.length > (stageTwo.length+stageThree.length)) {
            spanTextOne.classList.add('done');
            const finalCard = finalDeck.shift();
            console.log(finalCard);
            lastCard.style.backgroundImage = finalCard.cardFace; 
            getCountOne();                      
             
            
            function getCountOne() {  
                let objectOnStage;
                switch (finalCard.color) {
                    case 'green':
                        objectOnStage = dotsGreenOneStage;
                    break;  
                    case 'brown':
                        objectOnStage = dotsBrownOneStage;
                    break;
                    case 'blue':
                        objectOnStage = dotsBlueOneStage;
                    break;
                }  
                let count = Number(objectOnStage.innerHTML);                                   
                    count--;
                    objectOnStage.innerHTML = count;

                spanTextOne.classList.add('done');           
            }

        } else if (finalDeck.length === 0) {
            lastCard.style.backgroundImage = "none";

        } else if (finalDeck.length <= (stageTwo.length+stageThree.length) && finalDeck.length > stageThree.length) {
            spanTextTwo.classList.add('done');
            const finalCard = finalDeck.shift();                     
            console.log(finalCard);
            lastCard.style.backgroundImage = finalCard.cardFace; 
            getCountTwo(); 
            
            function getCountTwo() {  
                let objectOnStage;
                switch (finalCard.color) {
                    case 'green':
                        objectOnStage = dotsGreenTwoStage;                        
                    break;  
                    case 'brown':
                        objectOnStage = dotsBrownTwoStage;                        
                    break;
                    case 'blue':
                        objectOnStage = dotsBlueTwoStage;                       
                    break;
                }
                let count = Number(objectOnStage.innerHTML);                                   
                    count--;
                    objectOnStage.innerHTML = count;
                 
                spanTextTwo.classList.add('done');             
            }  
        } else if (finalDeck.length <= stageThree.length && finalDeck.length > 0) {
            spanTextThree.classList.add('done');
            const finalCard = finalDeck.shift();                     
            console.log(finalCard);
            lastCard.style.backgroundImage = finalCard.cardFace; 
            getCountThree(); 
            
            function getCountThree() {  
                let objectOnStage;
                switch (finalCard.color) {
                    case 'green':
                        objectOnStage = dotsGreenThreeStage;
                    break;  
                    case 'brown':
                        objectOnStage = dotsBrownThreeStage;
                    break;
                    case 'blue':
                        objectOnStage = dotsBlueThreeStage;
                    break;
                } 
                let count = Number(objectOnStage.innerHTML);                                   
                    count--;
                    objectOnStage.innerHTML = count;
                
                spanTextThree.classList.add('done');            
            }    
        }  */  
    
   
 
                   

//===================================================================================

//&& finalDeck.length <= (stageTwo.length+stageThree.length + stageOne.length)

/* return (isStageOne)
        ? ( isGreen ? dotsGreenOneStage : isBrown ? dotsBrownOneStage : dotsBlueOneStage)
        : (isStageTwo) 
        ? (isGreen ? dotsGreenTwoStage : isBrown ? dotsBrownTwoStage : dotsBlueTwoStage)
        : (isGreen ? dotsGreenThreeStage : isBrown ? dotsBrownThreeStage : dotsBlueThreeStage)
        } */
