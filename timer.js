
    const memoryGame = document.querySelector('.memory-game');
    const timerClock = document.querySelector('#timer');
    const rulesGame = document.querySelector('.rules');
    const startGame = document.querySelector('.start-game');
    const stopGame = document.querySelector('.stop-game');
    const restartGame = document.querySelector('.restart-game');

    const hour = document.getElementById('hour');
    const mins = document.getElementById('mins');
    const secs = document.getElementById('secs');
    let S = '00', M = '00', H = '00';

(function(){



    startGame.addEventListener('click', function(){
            memoryGame.style.display = 'flex'
            timerClock.style.display = 'flex'
            rulesGame.style.display = 'none'
            window.timerId = window.setInterval(function(){
                S = +S +1;
                if( S < 10 ) { S = '0' + S; }
                if( S == 60 ) {
                  S = '00';
                  M = +M + 1;
                  if( M < 10 ) { M = '0' + M; }
                  if( M == 60 ) {
                    M = '00';
                    H = +H + 1;
                    if( H < 10 ) { H = '0' + H; }
                  }
                }
                secs.innerText = S;
                mins.innerText = M;
                hour.innerText = H;
              },1000);

    })
    stopGame.addEventListener('click', function(){
            window.clearInterval(timerId);
    })
    restartGame.addEventListener('click', function(){
        memoryGame.style.display = 'none'
          timerClock.style.display = 'none'
          rulesGame.style.display = 'block'
          location.reload();
    })
    
    })();