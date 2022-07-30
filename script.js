

'use-strict'


let mode = false;
let arrWords;
let sportRaw = 'athletics spectator sport competition game racing gymnastics sportsman soccer rugby union association  football down field offside cycling tennis polo team hockey football skating professional sport  referee league game team sport archery sport professional basketball foul bobsled olympic champion chess badminton position riding Medal track trophy card umpire winner lose finals whistle blow player sets cup';
let socialRaw =  'favourite downvote twitter facebook network linkedin google viral marketing google event website reach telegraph Follower Like Share Tweet Comment Viral Trend DM Feed Mention Reply Traffic Thread Filter TikTok Snapchat WhatsApp Instagram Retweet Block Meme Skit YouTube  Post Upload Content Video Picture Space Group chat Forum Live Stream Bookmark Profile Status Discord Emoji Fan Fleet Friend Handle Influencer Mention Mute Pin Snap Sticker Selfie WeChat Vlog Verified hashtag shareable social trend media post unfollow';
const sportFilter = sportRaw.split(' ').filter(currWord => (currWord != '')).map(currWord => (currWord.replace(currWord[0], currWord[0].toLocaleUpperCase())))
const sport = sportFilter;
// console.log(sport)
const social = socialRaw.split(' ');
const arrCat = {
    Medical: ['Blood', 'Hospital', 'Medicine', 'Theatre', 'Treatment', 'Drug', 'Diet', 'Clinic', 'Patient', 'Doctor', 'Ward'],
    sport,
    social
};
const catReligion = document.querySelector('.religion');
const catSports = document.querySelector('.sports');
const catMedical = document.querySelector('.medical');
const catsocialMedia = document.querySelector('.socialMedia');

let word1 = 'Mayor'
const container = document.querySelector('.container');
let score = document.querySelector('.Score');
const rearrangeBtn = document.querySelector('.reArrange');
let header =  document.querySelector('.word');
rearrangeBtn.classList.add('btn2');
let arrSingleWrd1;
let arrSingleWrd;
const reset = document.querySelector('.reset');
reset.classList.add('hide')
const btn = document.querySelector('.btn')
let noAttempts = document.querySelector('.attemptsV');
let highscore = document.querySelector('.HighScore');
const newWord = document.querySelector('.newWord');
const tilesCon = document.querySelector('.tiles')
const mainInput = document.querySelector('.input')
// header.classList.contains('bt ')
catsocialMedia.addEventListener('click', function(){
    mode = true;
    arrWords = arrCat.social;
    // document.querySelector('.word').classList.remove('btnWrong')
    // document.querySelector('.word').classList.remove('btnCorrect');
    // document.querySelector('.word').textContent = '';
    document.querySelector('.input').value = '';
    document.querySelector('.btn').classList.remove('hide');
    document.querySelector('.Score').textContent = 0;
    document.querySelector('.notifier').textContent ='';
    document.querySelector('.attemptsV').textContent = 5;
    document.querySelector('.tryAgain').classList.add('hide');
    catsocialMedia.classList.add('btnDesign');  
    catMedical.classList.remove('btnDesign');
    catSports.classList.remove('btnDesign'); 
    tilesCon.innerHTML = ''
})
catMedical.addEventListener('click', function(){
    mode = true;
    arrWords = arrCat.Medical;
    document.querySelector('.input').value = '';
    document.querySelector('.btn').classList.remove('hide');
    document.querySelector('.Score').textContent = 0;
    document.querySelector('.notifier').textContent ='';
    document.querySelector('.attemptsV').textContent = 5;
    document.querySelector('.tryAgain').classList.add('hide');
    catMedical.classList.add('btnDesign');
    catSports.classList.remove('btnDesign');
    catsocialMedia.classList.remove('btnDesign');  
    tilesCon.innerHTML = ''
})

catSports.addEventListener('click', function(){
    mode = true;
    arrWords = arrCat.sport;
    document.querySelector('.input').value = '';
    document.querySelector('.btn').classList.remove('hide');
    document.querySelector('.Score').textContent = 0;
    document.querySelector('.notifier').textContent ='';
    document.querySelector('.attemptsV').textContent = 5;
    document.querySelector('.tryAgain').classList.add('hide');
    catSports.classList.add('btnDesign');
    catMedical.classList.remove('btnDesign');
    catsocialMedia.classList.remove('btnDesign');  
    tilesCon.innerHTML = ''
})


btn.addEventListener('click', function (){
    if (mode === false){
        document.querySelector('.notifier').textContent ='Please Select a Category'
    } else if(mode === true){
        document.querySelector('.tiles').innerHTML = '';
    const randomize = Math.trunc(Math.random()*arrWords.length);
     arrSingleWrd1 = arrWords[randomize]
        arrSingleWrd = arrSingleWrd1.replace(arrSingleWrd1[0], arrSingleWrd1[0].toUpperCase())

    const arrWrdSplit = arrSingleWrd.split('')
    let rearrange = arrWrdSplit.sort(function(a, b) {return 0.5 - Math.random()});
    console.log(rearrange);
    rearrange.forEach(mov => {
        const tiles = document.createElement('div')
       tiles.classList.add('tiles');
       tiles.innerHTML = `<div class="item">${mov.toLowerCase()}</div>`;
       document.querySelector('.tiles').appendChild(tiles);
       console.log(tiles)
       const items = Array.from(document.querySelectorAll('.tiles'))
       console.log(items)
       items.map(item => item.style.opacity = '100');
       mainInput.placeholder = 'Enter word';
    }
        )
    // forEach()
    // document.querySelector('.word').textContent = randomized;
   btn.classList.add('hide');
    document.querySelector('.notifier').textContent ='';
   
}
})

const rearrangeFunc = function (){
    let inputRaw = document.querySelector('.input').value;
    console.log(inputRaw[0])
    let input =inputRaw.replace(inputRaw[0], inputRaw[0].toLocaleUpperCase())
  console.log(arrSingleWrd)
    if (input === ''){
        document.querySelector('.notifier').textContent ='Enter a word⛔'
    } else{
      if(input === arrSingleWrd){
          console.log('correct')
          score.textContent++;
          document.querySelector('.input').value = '';
          btn.classList.remove('hide')
          document.querySelector('.notifier').textContent ='✅'
          document.querySelectorAll('.item').forEach(mov => mov.classList.add('btnCorrect'));
          document.querySelector('.hint').classList.add('hide');
           document.querySelector('.hintBtn').classList.add('hide');
           let noAttempts = document.querySelector('.attemptsV');
           noAttempts.textContent = 5;
           mainInput.placeholder = '';
          if( Number(score.textContent) > Number(highscore.textContent)){
            let highscore = document.querySelector('.HighScore');
             highscore.textContent++;
          }
      } else {
          document.querySelectorAll('.item').forEach( mov => mov.classList.add('btnWrong'))
          console.log(document.querySelector('.item').textContent)
        document.querySelector('.item').classList.add('btnWrong');
          let noAttempts = document.querySelector('.attemptsV');
          noAttempts.textContent--;
          document.querySelector('.notifier').textContent ='❌'
          console.log(noAttempts.textContent)
          document.querySelector('.tryAgain').classList.remove('hide');
          document.querySelector('.tryAgain').addEventListener('click', function(){
            document.querySelector('.notifier').textContent ='';
            document.querySelectorAll('.item').forEach(mov => mov.classList.remove('btnWrong'))
            document.querySelector('.input').value = '';
            document.querySelector('.tryAgain').classList.add('hide');
            if (Number(noAttempts.textContent) === 2){
                let hintBtn = document.querySelector('.hintBtn');
                document.querySelector('.hintBtn').classList.remove('hide');
                hintBtn.addEventListener('click', function(){
                    if (hintBtn.classList.contains('hide')){
                    document.querySelector('.hintBtn').classList.remove('hide');
                document.querySelector('.hint').classList.remove('hide');
            }
            if(Number(noAttempts.textContent) <= 1){
                document.querySelector('.hintBtn').classList.remove('hide');
            }
                document.querySelector('.hintBtn').classList.add('hide');
                    document.querySelector('.hint').textContent = `-${arrSingleWrd.slice('', 3)}-`
                })
                
            }
        })
        if(Number(noAttempts.textContent) === 0){
              document.querySelector('.hint').classList.add('hide');
              score.textContent--;
              noAttempts.textContent = 5;
              document.querySelector('.input').value = ''
              document.querySelector('.notifier').textContent ='';
              document.querySelector('.tryAgain').classList.add('hide');
              document.querySelector('.btn').classList.remove('hide');
              if(Number(score.textContent) === 0 || Number(score.textContent) < 0){
                document.querySelector('.attemptsV').textContent = 5;
                  document.querySelector('.Score').textContent = 0;
                  console.log(highscore);
              }
          }
            
        
    }
}
}
rearrangeBtn.addEventListener('click', rearrangeFunc)
document.addEventListener('keydown', function(e){
        if(e.key === 'Enter'){
            rearrangeFunc();
        }
})

 

reset.classList.remove('hide')
reset.addEventListener('click', function(){
    tilesCon.innerHTML = '';
    document.querySelector('.input').value = '';
    document.querySelector('.btn').classList.remove('hide');
    document.querySelector('.Score').textContent = 0;
    document.querySelector('.HighScore').textContent = 0;
    document.querySelector('.notifier').textContent ='';
    document.querySelector('.attemptsV').textContent = 5;
    catsocialMedia.classList.remove('btnDesign');
    catSports.classList.remove('btnDesign');
    catMedical.classList.remove('btnDesign');
    mode = false;
    mainInput.placeholder = '';
})
