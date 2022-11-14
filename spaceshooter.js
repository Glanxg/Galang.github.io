var jet = document.getElementById("jet");
var board = document.getElementById("board");
const spacebar = 32;
const kiri = 65;
const kanan = 68;

function mulai() {
  window.addEventListener("keydown", (e) => {
    var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
    if (e.key == "ArrowLeft" && left > 0) {
      jet.style.left = left - 10 + "px";
    } else if (e.key == "ArrowRight" && left <= 460) {
      jet.style.left = left + 10 + "px";
    }

    if (e.key == spacebar || e.keyCode == 32) {
      //TOMBOL MENEMBAK

      var bullet = document.createElement("div");
      bullet.classList.add("bullets");
      board.appendChild(bullet);

      var movebullet = setInterval(() => {
        var rocks = document.getElementsByClassName("rocks");

        for (var i = 0; i < rocks.length; i++) {
          var rock = rocks[i];
          if (rock != undefined) {
            var rockbound = rock.getBoundingClientRect();
            var bulletbound = bullet.getBoundingClientRect();

            if (
              bulletbound.left >= rockbound.left &&
              bulletbound.right <= rockbound.right &&
              bulletbound.top <= rockbound.top &&
              bulletbound.bottom <= rockbound.bottom 
            ) {
              rock.parentElement.removeChild(rock);

              let score = (document.getElementById("points").innerHTML =
                parseInt(document.getElementById("points").innerHTML) + 1);
              let scores = (document.getElementById("high-score").innerHTML =
                parseInt(document.getElementById("points").innerHTML) + 0);
              // ini nah lang
              if (score > 3) {
                var moverocks = setInterval(() => {
                  var rocks = document.getElementsByClassName("rocks");
                  let gameOver = document.getElementById("gameOver");
                  let btn = document.getElementById("btn");
                  let go = document.getElementById("go-card");
                  let board = document.getElementById("board");
                  let skor = document.getElementById("points");
                  if (rocks != undefined) {
                    for (var i = 0; i < rocks.length; i++) {
                      var rock = rocks[i];
                      var rocktop = parseInt(
                        window.getComputedStyle(rock).getPropertyValue("top")
                      ); // OBSTACLE KEBAWAH

                      if (rocktop >= 475) {
                        // alert("Game Over"); // TEXT GAME OVER
                        gameOver.style.display = "block";
                        btn.style.display = "block";
                        go.style.display = "block";
                        board.style.display = "none";
                        skor.style.display = "none";

                        clearInterval(moverocks);
                        // window.location.reload();
                      }

                      rock.style.top = rocktop + 10 + "px"; //MEMPERLAMBAT/MEMPERCEPAT OBSTCLE

                      // if ()
                    }
                  }
                }, 1000000);
              }
            }
          }
        }
        var bulletbottom = parseInt(
          window.getComputedStyle(bullet).getPropertyValue("bottom")
        );

        if (bulletbottom >= 500) {
          clearInterval(movebullet);
        }
        //membatasi bullet di frame

        bullet.style.left = left + "px";
        bullet.style.bottom = bulletbottom + 3 + "px";
      });
    }
  });

  var generaterocks = setInterval(() => {
    // MULAI GAME
    var rock = document.createElement("div");
    rock.classList.add("rocks");

    var rockleft = parseInt(
      window.getComputedStyle(rock).getPropertyValue("left")
    );

    rock.style.left = Math.floor(Math.random() * 450) + "px";

    board.appendChild(rock);
  }, 1500); //MEMPERBANYAK/MENGURANGI OBSTCLE

  var moverocks = setInterval(() => {
    var rocks = document.getElementsByClassName("rocks");
    let gameOver = document.getElementById("gameOver");
    let btn = document.getElementById("btn");
    let go = document.getElementById("go-card");
    let board = document.getElementById("board");
    let score = document.getElementById("points");
    if (rocks != undefined) {
      for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i];
        var rocktop = parseInt(
          window.getComputedStyle(rock).getPropertyValue("top")
        ); // OBSTACLE KEBAWAH

        if (rocktop >= 475) {
          gameOver.style.display = "block";
          btn.style.display = "block";
          clearInterval(moverocks);
          go.style.display = "block";
          board.style.display = "none";
          score.style.display = "none";
          // window.location.reload();
        }

        rock.style.top = rocktop + 10 + "px"; //MEMPERLAMBAT/MEMPERCEPAT OBSTCLE

        // if ()
      }
    }
  }, 450);

  let card = document.getElementById("card");
  let canva = document.getElementById("board");
  let score = document.getElementById("points");
  let gameOver = document.getElementById("gameOver");
  let btn = document.getElementById("btn");
  if (canva.style.display == "none") {
    canva.style.display = "block";
    card.style.display = "none";
    gameOver.style.display = "none";
    btn.style.display = "none";
    score.style.display = "block";
  } else {
    canva.style.display = "none";
  }
}

const mainLagi = () => {
  window.location.reload();
};
