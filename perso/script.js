let inputIso = document.getElementById("fps");
let isoValue = "24";

inputIso.addEventListener('input', updateValueIso);

let inputFps = document.getElementById("iso");
let fpsValue = "800";
inputFps.addEventListener('input', updateValueFps);

function updateValueFps(f) {
  fpsValue = f.target.value;
}

function updateValueIso(e) {
  isoValue = e.target.value;
}

function listboxresult() {

  function round(x,y) {
    return parseFloat(Number.parseFloat(x).toFixed(y));
  }

  let select = document.getElementById("listedata");
  let dataLightValue = select.options[select.selectedIndex].value;
  let dataLight = parseInt(dataLightValue, 10);
  let iso = parseInt(fpsValue, 10);
  let fps = parseInt(isoValue, 10);

  let e1 = dataLight * (1 ** 2);

  
  let e2 = round(e1/4, 0);
  let e3 = round(e1/9, 0);
  let e4 = round(e1/(4 ** 2), 0);
  let e5 = round(e1/25, 0);
  let e10 = round(e1/100, 0);
  let e20 = round(e1/(20 ** 2), 0);
  let e50 = round(e1/(50 ** 2),0);

  let val = [];
  let app = [];
  const dis = [1, 2, 3, 4, 5, 10, 20, 50];
  let lux = [e1, e2, e3, e4, e5, e10, e20, e50];
  let t = 1 / (fps * 2);





  for (let i = 0; i < lux.length; i++){
    let n = round(Math.sqrt(lux[i] * t * (iso/ 270)), 1); 
    val.push(n);
  }

  const all_diaph = [0, 0.3, 0.5, 0.7, 1.0, 1.1, 1.2, 1.4, 1.6, 1.7, 1.8,
                 2, 2.2, 2.4, 2.5, 2.8, 3.2, 3.3, 3.5, 4, 4.5, 4.8,
                 5, 5.6, 6.3, 6.7, 7.1, 8, 9, 9.5, 10, 11, 13,
                 14, 16, 18, 19, 20, 22, 25.3, 27, 28.7,
                 32, 38.5, 45, 54.5, 64];

  const conv = {
            0: "0",
            1: "1",
            1.4: "1.4",
            2: "2",
            2.8: "2.8",
            4: "4",
            5.6: "5.6",
            8: "8",
            11: "11",
            16: "16",
            22: "22",
            32: "32",
            45: "45",
            64: "64",
            "overex": "overex",

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


  for (let k = 0; k < val.length; k++) {
    
    let i = val[k];

        if (all_diaph.includes(i) == true){
            app.push(i);   
        }

        else if (i > 64.0) {
            app.push("overex");  
        }

        else {
            let j = 0;
            while ((j+1) < all_diaph.length) {
                if (all_diaph[j] < i && i < all_diaph[j + 1]) {
                  let m = ((all_diaph[j] + all_diaph[j + 1]) / 2);
                  if (i <= m) {
                    app.push(all_diaph[j]);
                  }
                  else {
                    app.push(all_diaph[j + 1]);
                  }
                  break;
                }
                else {
                  j++
                }
            }
        }
  }

  let litteral = []
  for (let h = 0; h < app.length; h++) {
    litteral[h] = conv[app[h]];
  } 
    
    document.getElementById("1").innerHTML = litteral[0];
    document.getElementById("2").innerHTML = litteral[1];
    document.getElementById("3").innerHTML = litteral[2];
    document.getElementById("5").innerHTML = litteral[3];
    document.getElementById("10").innerHTML = litteral[4];
    document.getElementById("20").innerHTML = litteral[5];
    document.getElementById("30").innerHTML = litteral[6];
    document.getElementById("50").innerHTML = litteral[7];

    
    document.getElementById("ecl1").innerHTML = lux[0] + " lx";
    document.getElementById("ecl2").innerHTML = lux[1] + " lx";
    document.getElementById("ecl3").innerHTML = lux[2] + " lx";
    document.getElementById("ecl5").innerHTML = lux[3] + " lx";
    document.getElementById("ecl10").innerHTML = lux[4] + " lx";
    document.getElementById("ecl20").innerHTML = lux[5] + " lx";
    document.getElementById("ecl30").innerHTML = lux[6] + " lx";
    document.getElementById("ecl50").innerHTML = lux[7] + " lx";
    
 
    
    

  }