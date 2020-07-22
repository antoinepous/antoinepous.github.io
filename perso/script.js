var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        
    }
};


request.onload = function() {
    var data = request.response;  
};

const inputIso = document.getElementById("fps");
const inputFps = document.getElementById("iso")
const fps = ""
const iso = ""

inputIso.addEventListener('input', updateValue);

function updateValue(e) {
iso = e.target.value;
    }

inputFps.addEventListener('input', updateValue);

function updateValue(e) {
fps = e.target.value;
}

function listboxresult() {
    var spanresult=document.getElementById("result");
    spanresult.value="";

    let e1 = spanresult * (1 ** 2);
    let e2 = round(e1 / 4);
    let e3 = round(e1 / 9);
    let e4 = round(e1 / (4 ** 2));
    let e5 = round(e1 / 25);
    let e10 = round(e1 / 100);
    let e20 = round(e1 / (20 ** 2));
    let e50 = round(e1 / (50 ** 2));

    let val = [];
    let app = [];
    const dis = [1, 2, 3, 4, 5, 10, 20, 50];
    let lux = [e1, e2, e3, e4, e5, e10, e20, e50];
    let t = 1 / (fps * 2);
    for (let valeur_lux in lux){
        let n = sqrt(valeur_lux * t * (iso/ 270));
        val.push(round(n, 1));
    }

    const all_diaph = [0.0, 0.3, 0.5, 0.7, 1.0, 1.1, 1.2, 1.4, 1.6, 1.7, 1.8,
                 2.0, 2.2, 2.4, 2.5, 2.8, 3.2, 3.3, 3.5, 4.0, 4.5, 4.8,
                 5.0, 5.6, 6.3, 6.7, 7.1, 8.0, 9.0, 9.5, 10.0, 11.0, 13.0,
                 14.0, 16.0, 18.0, 19.0, 20.0, 22.0, 25.3, 27.0, 28.7,
                 32.0, 38.5, 45.0, 54.5, 64.0];

    for (let i in val) {

        if (i in all_diaph){
            app.push(i);
        }

        else if (i > 64.0) {
            app.push("surex");
        }

        else {
            let j = 0;
            while (j + 1 < all_diaph.length) {
                if (all_diaph[j] < i < all_diaph[j + 1]) {
                    let m = ((all_diaph[j] + all_diaph[j + 1]) / 2);
                    if (i <= m) {
                        app.push(all_diaph[j]);
                    }
                    else if (i > m) {
                        app.push(all_diaph[j + 1]);
                    }
                }
                    break
                else {
                    j = j + 1
                }
            }
        }
        }

    const conv = {0.0: "0",
            1.0: "1",
            1.4: "1.4",
            2.0: "2",
            2.8: "2.8",
            4.0: "4",
            5.6: "5.6",
            8.0: "8",
            11.0: "11",
            16.0: "16",
            22.0: "22",
            32.0: "32",
            45.0: "45",
            64.0: "64",
            "surex": "surex",

            0.5: "0 + 1/2",
            1.2: "1 + 1/2",
            1.7: "1.4 + 1/2",
            2.4: "2 + 1/2",
            3.3: "2.8 + 1/2",
            4.8: "4 + 1/2",
            6.7: "5.6 + 1/2",
            9.5: "8 + 1/2",
            19.0: "16 + 1/2",
            27.0: "22 + 1/2",
            38.5: "32 + 1/2",
            54.5: "45 + 1/2",

            0.3: "0 + 1/3",
            1.1: "1 + 1/3",
            1.6: "1.4 + 1/3",
            2.2: "2 + 1/3",
            3.2: "2.8 + 1/3",
            4.5: "4 + 1/3",
            6.3: "5.6 + 1/3",
            9.0: "8 + 1/3",
            13.0: "11 + 1/3",
            18.0: "16 + 1/3",
            25.3: "22 + 1/3",

            0.7: "1 - 1/3",
            1.8: "2 - 1/3",
            2.5: "2.8 - 1/3",
            3.5: "4 - 1/3",
            5.0: "5.6 - 1/3",
            7.1: "8 - 1/3",
            10.0: "11 - 1/3",
            14.0: "16 - 1/3",
            20.0: "22 - 1/3",
            28.7: "32 - 1/3",
            };

    document.getElementById("result").innerHTML=app;

}



</script>