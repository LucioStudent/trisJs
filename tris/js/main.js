
        var bottoni = ["", "", "", "", "", "", "", "", ""];
        var giocatore = 'X';
        var finita = false;
        var turni = 9;
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        function restart () {
            bottoni = ["", "", "", "", "", "", "", "", ""];
            giocatore = 'X';
            finita = false;
            turni=9;
            for(var i = 1; i<=9; i++){
                document.getElementById(('txt'+i)).innerHTML = '';
            }
        }
        function controllo() {
            turni--;
            for (var i = 0; i <= 7; i++) {
                const winCondition = winningConditions[i];
                var a = bottoni[winCondition[0]];
                var b = bottoni[winCondition[1]];
                var c = bottoni[winCondition[2]];
                if (a === '' || b === '' || c === '') {
                    continue;
                }
                if (a === b && b === c) {
                    finita = true;
                    break
                }
            }

            if (finita) {
                document.getElementById("stato").innerHTML = 'vince ' + giocatore;
                return;
            }


            if (turni == 0) {
                document.getElementById("stato").innerHTML = 'pareggio';
                finita = true;
                return;
            }

            if (!finita) {
                document.getElementById("stato").innerHTML = 'turno di ' + ((giocatore == 'X') ? 'O' : 'X');
                return;
            }
        }
        function b1() {
            var txt = document.getElementById("txt1");
            if (bottoni[0] === "" && !finita) {
                txt.innerHTML = giocatore;
                bottoni[0] = giocatore;
                controllo();
                giocatore = (giocatore == 'X') ? 'O' : 'X';
            }


        };
        function b2() {
            var txt = document.getElementById("txt2");
            if (bottoni[1] === "" && !finita) {
                txt.innerHTML = giocatore;
                bottoni[1] = giocatore;
                controllo();
                giocatore = (giocatore == 'X') ? 'O' : 'X';
            }

        };
        function b3() {
            var txt = document.getElementById("txt3");
            if (bottoni[2] === "" && !finita) {
                txt.innerHTML = giocatore;
                bottoni[2] = giocatore;
                controllo();
                giocatore = (giocatore == 'X') ? 'O' : 'X';
            }

        };
        function b4() {
            var txt = document.getElementById("txt4");
            if (bottoni[3] === "" && !finita) {
                txt.innerHTML = giocatore;
                bottoni[3] = giocatore;
                controllo();
                giocatore = (giocatore == 'X') ? 'O' : 'X';
            }

        };
        function b5() {
            var txt = document.getElementById("txt5");
            if (bottoni[4] === "" && !finita) {
                txt.innerHTML = giocatore;
                bottoni[4] = giocatore;
                controllo();
                giocatore = (giocatore == 'X') ? 'O' : 'X';
            }

        };
        function b6() {
            var txt = document.getElementById("txt6");
            if (bottoni[5] === "" && !finita) {
                txt.innerHTML = giocatore;
                bottoni[5] = giocatore;
                controllo();
                giocatore = (giocatore == 'X') ? 'O' : 'X';
            }

        };
        function b7() {
            var txt = document.getElementById("txt7");
            if (bottoni[6] === "" && !finita) {
                txt.innerHTML = giocatore;
                bottoni[6] = giocatore;
                controllo();
                giocatore = (giocatore == 'X') ? 'O' : 'X';
            }

        };
        function b8() {
            var txt = document.getElementById("txt8");
            if (bottoni[7] === "" && !finita) {
                txt.innerHTML = giocatore;
                bottoni[7] = giocatore;
                controllo();
                giocatore = (giocatore == 'X') ? 'O' : 'X';
            }

        };
        function b9() {
            var txt = document.getElementById("txt9");
            if (bottoni[8] === "" && !finita) {
                txt.innerHTML = giocatore;
                bottoni[8] = giocatore;
                controllo();
                giocatore = (giocatore == 'X') ? 'O' : 'X';
            }


        };