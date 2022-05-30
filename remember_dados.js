// ========================================================================================================================== 
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= PROJETE 2021 - EQUIPE 2301 - REMEMBER :) =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
// =-=-=-=-=-=-=-=-=-= ALUNOS: JULIANO, LINDSEY, MARINA, MIGUEL      ORIENTADORA: ANA LETÌCIA =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
// ==========================================================================================================================

// ---------------------------------------- COMPARTIMENTO 1 ---------------------------------------
    
    function comp1 () {                 // AO APERTAR NO BOTÃO SALVAR, CHAMA A FUNÇÃO
            
        var medicamento1 = document.querySelector('#txtmedicamento1');      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MEDICAMENTO
        var medic1 = String(medicamento1.value);                            // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING

        var hora1 = document.querySelector('#txthora1');                    // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DA HORA
        var minuto1 = document.querySelector('#txtminuto1');                // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MINUTO
        var hor1 = String(hora1.value);                                     // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
        var min1 = String(minuto1.value);                                   // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

        var dia1 = document.querySelector('#txtdia1');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO DIA
        var mes1 = document.querySelector('#txtmes1');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MÊS
        var d1 = String(dia1.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
        var m1 = String(mes1.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

            if (medic1.length==0 || hor1.length==0 || min1.length==0 || d1.length==0 || m1.length==0) {     // SE NÃO TIVER QUALQUER UMA DAS INFORMAÇÕES
                alert('Insira todos os dados!');                                                            // MOSTRA UM ALERTA 
            }
            else if (hor1>23 || min1>59 || hor1<0 || min1<0) {              // SENÃO, SE HORA FOR MAIOR QUE 23 OU MINUTO MAIOR QUE 59 OU AMBOS MENORES QUE 0
                alert('Insira um horário válido!');                         // MOSTRA UM ALERTA 
            }
            else if (d1>31 || m1>12 || d1<0 || m1<0) {                      // SENÃO, SE O DIA FOR MAIOR QUE 31 OU O MÊS MAIOR QUE 12 OU AMBOS MENORES QUE 0
                alert('Insira uma data válida!');                           // MOSTRA UM ALERTA 
            }
            else if ((d1==30 && m1==2) || (d1==31 && m1==2)) {              // SENÃO, SE A DATA FOR 30/02 OU 31/02
                alert('Insira uma data válida!');                           // MOSTRA UM ALERTA
            }
            else if ((d1==31 && m1==4) || (d1==31 && m1==6) || (d1==31 && m1==9) || (d1==31 && m1==11)) {   // SENÃO, SE A DATA FOR 31/04 OU 31/06 OU 31/09 OU 31/11
                alert('Insira uma data válida!');                                                           // MOSTRA UM ALERTA
            }
            else {                                                              // SENÃO
            let comp1 = [medic1, hor1, min1, d1, m1]                            // CRIA UM ARRAY PARA ARMNAZENAR TODOS OS VALORES
            firebase.database().ref().child('Informacoes_Comp1').set(comp1);    // SETA AS INFORMAÇÕES DA VARIÁVEL NO FIREBASE
            alert('Informações enviadas com sucesso!');                         // MOSTRA UM ALERTA INFORMANDO ÊXITO NO ENVIO
            }

    } // fim function 

// ------------------------------------ FIM COMPARTIMENTO 1 ---------------------------------------

// ---------------------------------------- COMPARTIMENTO 2 ---------------------------------------
    
function comp2 () { 
            
    var medicamento2 = document.querySelector('#txtmedicamento2');      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MEDICAMENTO
    var medic2 = String(medicamento2.value);                            // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING

    var hora2 = document.querySelector('#txthora2');                    // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DA HORA
    var minuto2 = document.querySelector('#txtminuto2');                // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MINUTO
    var hor2 = String(hora2.value);                                     // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var min2 = String(minuto2.value);                                   // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

    var dia2 = document.querySelector('#txtdia2');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO DIA
    var mes2 = document.querySelector('#txtmes2');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MÊS
    var d2 = String(dia2.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var m2 = String(mes2.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING

        if (medic2.length==0 || hor2.length==0 || min2.length==0 || d2.length==0 || m2.length==0) {     // SE NÃO TIVER QUALQUER UMA DAS INFORMAÇÕES
            alert('Insira todos os dados!');                                                            // MOSTRA UM ALERTA
        }
        else if (hor2>23 || min2>59 || hor2<0 || min2<0) {              // SENÃO, SE HORA FOR MAIOR QUE 23 OU MINUTO MAIOR QUE 59 OU AMBOS MENORES QUE 0
            alert('Insira um horário válido!');                         // MOSTRA UM ALERTA 
        }                                               
        else if (d2>31 || m2>12 || d2<0 || m2<0) {                      // SENÃO, SE O DIA FOR MAIOR QUE 31 OU O MÊS MAIOR QUE 12 OU AMBOS MENORES QUE 0
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA
        }
        else if ((d2==30 && m2==2) || (d2==31 && m2==2)) {              // SENÃO, SE A DATA FOR 30/02 OU 31/02
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA
        }
        else if ((d2==31 && m2==4) || (d2==31 && m2==6) || (d2==31 && m2==9) || (d2==31 && m2==11)) {   // SENÃO, SE A DATA FOR 31/04 OU 31/06 OU 31/09 OU 31/11
            alert('Insira uma data válida!');                                                           // MOSTRA UM ALERTA
        }
        else {                                                              // SENÃO
        let comp2 = [medic2, hor2, min2, d2, m2]                            // CRIA UM ARRAY PARA ARMNAZENAR TODOS OS VALORES
        firebase.database().ref().child('Informacoes_Comp2').set(comp2);    // SETA AS INFORMAÇÕES DA VARIÁVEL NO FIREBASE
        alert('Informações enviadas com sucesso!');                         // MOSTRA UM ALERTA INFORMANDO ÊXITO NO ENVIO
        }

    } // fim function 

// ------------------------------------ FIM COMPARTIMENTO 2 ---------------------------------------

// ---------------------------------------- COMPARTIMENTO 3 ---------------------------------------
    
function comp3 () { 
            
    var medicamento3 = document.querySelector('#txtmedicamento3');      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MEDICAMENTO
    var medic3 = String(medicamento3.value);                            // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING

    var hora3 = document.querySelector('#txthora3');                    // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DA HORA
    var minuto3 = document.querySelector('#txtminuto3');                // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MINUTO
    var hor3 = String(hora3.value);                                     // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var min3 = String(minuto3.value);                                   // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

    var dia3 = document.querySelector('#txtdia3');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO DIA
    var mes3 = document.querySelector('#txtmes3');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MÊS
    var d3 = String(dia3.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var m3 = String(mes3.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

        if (medic3.length==0 || hor3.length==0 || min3.length==0 || d3.length==0 || m3.length==0) {     // SE NÃO TIVER QUALQUER UMA DAS INFORMAÇÕES
            alert('Insira todos os dados!');                                                            // MOSTRA UM ALERTA
        }
        else if (hor3>23 || min3>59 || hor3<0 || min3<0) {              // SENÃO, SE HORA FOR MAIOR QUE 23 OU MINUTO MAIOR QUE 59 OU AMBOS MENORES QUE 0
            alert('Insira um horário válido!');                         // MOSTRA UM ALERTA 
        }
        else if (d3>31 || m3>12 || d3<0 || m3<0) {                      // SENÃO, SE O DIA FOR MAIOR QUE 31 OU O MÊS MAIOR QUE 12 OU AMBOS MENORES QUE 0
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA 
        }
        else if ((d3==30 && m3==2) || (d3==31 && m3==2)) {              // SENÃO, SE A DATA FOR 30/02 OU 31/02
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA
        }
        else if ((d3==31 && m3==4) || (d3==31 && m3==6) || (d3==31 && m3==9) || (d3==31 && m3==11)) {   // SENÃO, SE A DATA FOR 31/04 OU 31/06 OU 31/09 OU 31/11
            alert('Insira uma data válida!');                                                           // MOSTRA UM ALERTA
        }
        else {                                                              // SENÃO
        let comp3 = [medic3, hor3, min3, d3, m3]                            // CRIA UM ARRAY PARA ARMNAZENAR TODOS OS VALORES
        firebase.database().ref().child('Informacoes_Comp3').set(comp3);    // SETA AS INFORMAÇÕES DA VARIÁVEL NO FIREBASE
        alert('Informações enviadas com sucesso!');                         // MOSTRA UM ALERTA INFORMANDO ÊXITO NO ENVIO
        }

    } // fim function 

// ------------------------------------ FIM COMPARTIMENTO 3 ---------------------------------------

// ---------------------------------------- COMPARTIMENTO 4 ---------------------------------------
    
function comp4 () { 
            
    var medicamento4 = document.querySelector('#txtmedicamento4');      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MEDICAMENTO
    var medic4 = String(medicamento4.value);                            // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING

    var hora4 = document.querySelector('#txthora4');                    // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DA HORA
    var minuto4 = document.querySelector('#txtminuto4');                // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MINUTO
    var hor4 = String(hora4.value);                                     // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var min4 = String(minuto4.value);                                   // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

    var dia4 = document.querySelector('#txtdia4');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO DIA
    var mes4 = document.querySelector('#txtmes4');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MÊS
    var d4 = String(dia4.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var m4 = String(mes4.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

        if (medic4.length==0 || hor4.length==0 || min4.length==0 || d4.length==0 || m4.length==0) {     // SE NÃO TIVER QUALQUER UMA DAS INFORMAÇÕES
            alert('Insira todos os dados!');                                                            // MOSTRA UM ALERTA
        }
        else if (hor4>23 || min4>59 || hor4<0 || min4<0) {              // SENÃO, SE HORA FOR MAIOR QUE 23 OU MINUTO MAIOR QUE 59 OU AMBOS MENORES QUE 0
            alert('Insira um horário válido!');                         // MOSTRA UM ALERTA 
        }
        else if (d4>31 || m4>12 || d4<0 || m4<0) {                      // SENÃO, SE O DIA FOR MAIOR QUE 31 OU O MÊS MAIOR QUE 12 OU AMBOS MENORES QUE 0
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA 
        }
        else if ((d4==30 && m4==2) || (d4==31 && m4==2)) {              // SENÃO, SE A DATA FOR 30/02 OU 31/02
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA
        }
        else if ((d4==31 && m4==4) || (d4==31 && m4==6) || (d4==31 && m4==9) || (d4==31 && m1==11)) {   // SENÃO, SE A DATA FOR 31/04 OU 31/06 OU 31/09 OU 31/11
            alert('Insira uma data válida!');                                                           // MOSTRA UM ALERTA
        }
        else {                                                                  // SENÃO
        let comp4 = [medic4, hor4, min4, d4, m4]                                // CRIA UM ARRAY PARA ARMNAZENAR TODOS OS VALORES
        firebase.database().ref().child('Informacoes_Comp4').set(comp4);        // SETA AS INFORMAÇÕES DA VARIÁVEL NO FIREBASE
        alert('Informações enviadas com sucesso!');                             // MOSTRA UM ALERTA INFORMANDO ÊXITO NO ENVIO
        }

    } // fim function 

// ------------------------------------ FIM COMPARTIMENTO 4 ---------------------------------------


// ---------------------------------------- COMPARTIMENTO 5 ---------------------------------------
    
function comp5 () { 
            
    var medicamento5 = document.querySelector('#txtmedicamento5');      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MEDICAMENTO
    var medic5 = String(medicamento5.value);                            // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING

    var hora5 = document.querySelector('#txthora5');                    // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DA HORA
    var minuto5 = document.querySelector('#txtminuto5');                // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MINUTO
    var hor5 = String(hora5.value);                                     // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var min5 = String(minuto5.value);                                   // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

    var dia5 = document.querySelector('#txtdia5');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO DIA
    var mes5 = document.querySelector('#txtmes5');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MÊS
    var d5 = String(dia5.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var m5 = String(mes5.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

        if (medic5.length==0 || hor5.length==0 || min5.length==0 || d5.length==0 || m5.length==0) {     // SE NÃO TIVER QUALQUER UMA DAS INFORMAÇÕES
            alert('Insira todos os dados!');                                                            // MOSTRA UM ALERTA
        }
        else if (hor5>23 || min5>59 || hor5<0 || min5<0) {              // SENÃO, SE HORA FOR MAIOR QUE 23 OU MINUTO MAIOR QUE 59 OU AMBOS MENORES QUE 0
            alert('Insira um horário válido!');                         // MOSTRA UM ALERTA 
        }
        else if (d5>31 || m5>12 || d5<0 || m5<0) {                      // SENÃO, SE O DIA FOR MAIOR QUE 31 OU O MÊS MAIOR QUE 12 OU AMBOS MENORES QUE 0
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA 
        }
        else if ((d5==30 && m5==2) || (d5==31 && m5==2)) {
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA 
        }
        else if ((d5==31 && m5==4) || (d5==31 && m5==6) || (d5==31 && m5==9) || (d5==31 && m5==11)) {
            alert('Insira uma data válida!'); 
        }
        else {                                                                  // SENÃO
        let comp5 = [medic5, hor5, min5, d5, m5]                                // CRIA UM ARRAY PARA ARMNAZENAR TODOS OS VALORES
        firebase.database().ref().child('Informacoes_Comp5').set(comp5);        // SETA AS INFORMAÇÕES DA VARIÁVEL NO FIREBASE
        alert('Informações enviadas com sucesso!');                             // MOSTRA UM ALERTA INFORMANDO ÊXITO NO ENVIO
        }

    } // fim function 

// ------------------------------------ FIM COMPARTIMENTO 5 ---------------------------------------


// ---------------------------------------- COMPARTIMENTO 6 ---------------------------------------
    
function comp6 () { 
            
    var medicamento6 = document.querySelector('#txtmedicamento6');      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MEDICAMENTO
    var medic6 = String(medicamento6.value);                            // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING

    var hora6 = document.querySelector('#txthora6');                    // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DA HORA
    var minuto6 = document.querySelector('#txtminuto6');                // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MINUTO
    var hor6 = String(hora6.value);                                     // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var min6 = String(minuto6.value);                                   // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

    var dia6 = document.querySelector('#txtdia6');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO DIA
    var mes6 = document.querySelector('#txtmes6');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MÊS
    var d6 = String(dia6.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var m6 = String(mes6.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

        if (medic6.length==0 || hor6.length==0 || min6.length==0 || d6.length==0 || m6.length==0) {     // SE NÃO TIVER QUALQUER UMA DAS INFORMAÇÕES
            alert('Insira todos os dados!');                                                            // MOSTRA UM ALERTA
        }
        else if (hor6>23 || min6>59 || hor6<0 || min6<0) {              // SENÃO, SE HORA FOR MAIOR QUE 23 OU MINUTO MAIOR QUE 59 OU AMBOS MENORES QUE 0
            alert('Insira um horário válido!');                         // MOSTRA UM ALERTA 
        }
        else if (d6>31 || m6>12 || d6<0 || m6<0) {                      // SENÃO, SE O DIA FOR MAIOR QUE 31 OU O MÊS MAIOR QUE 12 OU AMBOS MENORES QUE 0
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA 
        }
        else if ((d6==30 && m6==2) || (d6==31 && m6==2)) {              // SENÃO, SE A DATA FOR 30/02 OU 31/02
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA 
        }
        else if ((d6==31 && m6==4) || (d6==31 && m6==6) || (d6==31 && m6==9) || (d6=31 && m6==11)) {   // SENÃO, SE A DATA FOR 31/04 OU 31/06 OU 31/09 OU 31/11
            alert('Insira uma data válida!');                                                          // MOSTRA UM ALERTA 
        }
        else {                                                                  // SENÃO
        let comp6 = [medic6, hor6, min6, d6, m6]                                // CRIA UM ARRAY PARA ARMNAZENAR TODOS OS VALORES
        firebase.database().ref().child('Informacoes_Comp6').set(comp6);        // SETA AS INFORMAÇÕES DA VARIÁVEL NO FIREBASE
        alert('Informações enviadas com sucesso!');                             // MOSTRA UM ALERTA INFORMANDO ÊXITO NO ENVIO
        }

    } // fim function 

// ------------------------------------ FIM COMPARTIMENTO 6 ---------------------------------------

// ---------------------------------------- COMPARTIMENTO 7 ---------------------------------------
    
function comp7 () { 
            
    var medicamento7 = document.querySelector('#txtmedicamento7');      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MEDICAMENTO
    var medic7 = String(medicamento7.value);                            // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING

    var hora7 = document.querySelector('#txthora7');                    // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DA HORA
    var minuto7 = document.querySelector('#txtminuto7');                // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MINUTO
    var hor7 = String(hora7.value);                                     // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var min7 = String(minuto7.value);                                   // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

    var dia7 = document.querySelector('#txtdia7');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO DIA
    var mes7 = document.querySelector('#txtmes7');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MÊS
    var d7 = String(dia7.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var m7 = String(mes7.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

        if (medic7.length==0 || hor7.length==0 || min7.length==0 || d7.length==0 || m7.length==0) {     // SE NÃO TIVER QUALQUER UMA DAS INFORMAÇÕES
            alert('Insira todos os dados!');                                                            // MOSTRA UM ALERTA
        }
        else if (hor7>23 || min7>59 || hor7<0 || min7<0) {              // SENÃO, SE HORA FOR MAIOR QUE 23 OU MINUTO MAIOR QUE 59 OU AMBOS MENORES QUE 0
            alert('Insira um horário válido!');                         // MOSTRA UM ALERTA 
        }
        else if (d7>31 || m7>12 || d7<0 || m7<0) {                      // SENÃO, SE O DIA FOR MAIOR QUE 31 OU O MÊS MAIOR QUE 12 OU AMBOS MENORES QUE 0
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA 
        }
        else if ((d7==30 && m7==2) || (d7==31 && m7==2)) {              // SENÃO, SE A DATA FOR 30/02 OU 31/02
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA 
        }
        else if ((d7==31 && m7==4) || (d7==31 && m7==6) || (d7==31 && m7==9) || (d7==31 && m7==11)) {   // SENÃO, SE A DATA FOR 31/04 OU 31/06 OU 31/09 OU 31/11
            alert('Insira uma data válida!');                                                           // MOSTRA UM ALERTA
        }
        else {                                                                  // SENÃO
        let comp7 = [medic7, hor7, min7, d7, m7]                                // CRIA UM ARRAY PARA ARMNAZENAR TODOS OS VALORES
        firebase.database().ref().child('Informacoes_Comp7').set(comp7);        // SETA AS INFORMAÇÕES DA VARIÁVEL NO FIREBASE
        alert('Informações enviadas com sucesso!');                             // MOSTRA UM ALERTA INFORMANDO ÊXITO NO ENVIO
        }

    } // fim function 

// ------------------------------------ FIM COMPARTIMENTO 7 ---------------------------------------

// ---------------------------------------- COMPARTIMENTO 8 ---------------------------------------
    
function comp8 () { 
            
    var medicamento8 = document.querySelector('#txtmedicamento8');      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MEDICAMENTO
    var medic8 = String(medicamento8.value);                            // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING

    var hora8 = document.querySelector('#txthora8');                    // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DA HORA
    var minuto8 = document.querySelector('#txtminuto8');                // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MINUTO
    var hor8 = String(hora8.value);                                     // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var min8 = String(minuto8.value);                                   // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

    var dia8 = document.querySelector('#txtdia8');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO DIA
    var mes8 = document.querySelector('#txtmes8');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MÊS
    var d8 = String(dia8.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var m8 = String(mes8.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

        if (medic8.length==0 || hor8.length==0 || min8.length==0 || d8.length==0 || m8.length==0) {     // SE NÃO TIVER QUALQUER UMA DAS INFORMAÇÕES
            alert('Insira todos os dados!');                                                            // MOSTRA UM ALERTA
        }
        else if (hor8>23 || min8>59 || hor8<0 || min8<0) {              // SENÃO, SE HORA FOR MAIOR QUE 23 OU MINUTO MAIOR QUE 59 OU AMBOS MENORES QUE 0
            alert('Insira um horário válido!');                         // MOSTRA UM ALERTA 
        }
        else if (d8>31 || m8>12 || d8<0 || m8<0) {                      // SENÃO, SE O DIA FOR MAIOR QUE 31 OU O MÊS MAIOR QUE 12 OU AMBOS MENORES QUE 0
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA 
        }
        else if ((d8==30 && m8==2) || (d8==31 && m8==2)) {              // SENÃO, SE A DATA FOR 30/02 OU 31/02
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA 
        }
        else if ((d8==31 && m8==4) || (d8==31 && m8==6) || (d8==31 && m8==9) || (d8==31 && m8==11)) {   // SENÃO, SE A DATA FOR 31/04 OU 31/06 OU 31/09 OU 31/11
            alert('Insira uma data válida!');                                                           // MOSTRA UM ALERTA
        }
        else {                                                                  // SENÃO
        let comp8 = [medic8, hor8, min8, d8, m8]                                // CRIA UM ARRAY PARA ARMNAZENAR TODOS OS VALORES
        firebase.database().ref().child('Informacoes_Comp8').set(comp8);        // SETA AS INFORMAÇÕES DA VARIÁVEL NO FIREBASE
        alert('Informações enviadas com sucesso!');                             // MOSTRA UM ALERTA INFORMANDO ÊXITO NO ENVIO
        }

    } // fim function 

// ------------------------------------ FIM COMPARTIMENTO 8 ---------------------------------------


// ---------------------------------------- COMPARTIMENTO 9 ---------------------------------------
    
function comp9 () { 
            
    var medicamento9 = document.querySelector('#txtmedicamento9');      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MEDICAMENTO
    var medic9 = String(medicamento9.value);                            // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING

    var hora9 = document.querySelector('#txthora9');                    // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DA HORA
    var minuto9 = document.querySelector('#txtminuto9');                // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MINUTO
    var hor9 = String(hora9.value);                                     // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var min9 = String(minuto9.value);                                   // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

    var dia9 = document.querySelector('#txtdia9');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO DIA
    var mes9 = document.querySelector('#txtmes9');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MÊS
    var d9 = String(dia9.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var m9 = String(mes9.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

        if (medic9.length==0 || hor9.length==0 || min9.length==0 || d9.length==0 || m9.length==0) {     // SE NÃO TIVER QUALQUER UMA DAS INFORMAÇÕES
            alert('Insira todos os dados!');
        }
        else if (hor9>23 || min9>59 || hor9<0 || min9<0) {              // SENÃO, SE HORA FOR MAIOR QUE 23 OU MINUTO MAIOR QUE 59 OU AMBOS MENORES QUE 0
            alert('Insira um horário válido!');                         // MOSTRA UM ALERTA 
        }
        else if (d9>31 || m9>12 || d9<0 || m9<0) {                      // SENÃO, SE O DIA FOR MAIOR QUE 31 OU O MÊS MAIOR QUE 12 OU AMBOS MENORES QUE 0
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA 
        }
        else if ((d9==30 && m9==2) || (d9==31 && m9==2)) {              // SENÃO, SE A DATA FOR 30/02 OU 31/02
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA 
        }
        else if ((d9==31 && m9==4) || (d9==31 && m9==6) || (d9==31 && m9==9) || (d9==31 && m9==11)) {   // SENÃO, SE A DATA FOR 31/04 OU 31/06 OU 31/09 OU 31/11
            alert('Insira uma data válida!');                                                           // MOSTRA UM ALERTA
        }
        else {                                                                  // SENÃO
        let comp9 = [medic9, hor9, min9, d9, m9]                                // CRIA UM ARRAY PARA ARMNAZENAR TODOS OS VALORES
        firebase.database().ref().child('Informacoes_Comp9').set(comp9);        // SETA AS INFORMAÇÕES DA VARIÁVEL NO FIREBASE
        alert('Informações enviadas com sucesso!');                             // MOSTRA UM ALERTA INFORMANDO ÊXITO NO ENVIO
        }

    } // fim function 

// ------------------------------------ FIM COMPARTIMENTO 9 ---------------------------------------

// ---------------------------------------- COMPARTIMENTO 10 ---------------------------------------
    
function comp10 () { 
            
    var medicamento10 = document.querySelector('#txtmedicamento10');      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MEDICAMENTO
    var medic10 = String(medicamento10.value);                            // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING

    var hora10 = document.querySelector('#txthora10');                    // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DA HORA
    var minuto10 = document.querySelector('#txtminuto10');                // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MINUTO
    var hor10 = String(hora10.value);                                     // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var min10 = String(minuto10.value);                                   // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

    var dia10 = document.querySelector('#txtdia10');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO DIA
    var mes10 = document.querySelector('#txtmes10');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MÊS
    var d10 = String(dia10.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var m10 = String(mes10.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

        if (medic10.length==0 || hor10.length==0 || min10.length==0 || d10.length==0 || m10.length==0) {     // SE NÃO TIVER QUALQUER UMA DAS INFORMAÇÕES
            alert('Insira todos os dados!');                                                                // MOSTRA UM ALERTA
        }
        else if (hor10>23 || min10>59 || hor10<0 || min10<0) {           // SENÃO, SE HORA FOR MAIOR QUE 23 OU MINUTO MAIOR QUE 59 OU AMBOS MENORES QUE 0
            alert('Insira um horário válido!');                          // MOSTRA UM ALERTA 
        }
        else if (d10>31 || m10>12 || d10<0 || m10<0) {                 // SENÃO, SE O DIA FOR MAIOR QUE 31 OU O MÊS MAIOR QUE 12 OU AMBOS MENORES QUE 0
            alert('Insira uma data válida!');                          // MOSTRA UM ALERTA 
        }
        else if ((d10==30 && m10==2) || (d10==31 && m10==2)) {         // SENÃO, SE O DIA FOR MAIOR QUE 31 OU O MÊS MAIOR QUE 12 OU AMBOS MENORES QUE 0
            alert('Insira uma data válida!');                          // MOSTRA UM ALERTA 
        }
        else if ((d10==31 && m10==4) || (d10==31 && m10==6) || (d10==31 && m10==9) || (d10==31 && m10==11)) {   // SENÃO, SE A DATA FOR 31/04 OU 31/06 OU 31/09 OU 31/11
            alert('Insira uma data válida!');                                                                   // MOSTRA UM ALERTA
        }
        else {                                                                  // SENÃO
        let comp10 = [medic10, hor10, min10, d10, m10]                          // CRIA UM ARRAY PARA ARMNAZENAR TODOS OS VALORES 
        firebase.database().ref().child('Informacoes_Comp_10').set(comp10);     // SETA AS INFORMAÇÕES DA VARIÁVEL NO FIREBASE
        alert('Informações enviadas com sucesso!');                             // MOSTRA UM ALERTA INFORMANDO ÊXITO NO ENVIO
        }

    } // fim function 

// ------------------------------------ FIM COMPARTIMENTO 10 ---------------------------------------

// ---------------------------------------- COMPARTIMENTO 11 ---------------------------------------
    
function comp11 () { 
            
    var medicamento11 = document.querySelector('#txtmedicamento11');      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MEDICAMENTO
    var medic11 = String(medicamento11.value);                            // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING

    var hora11 = document.querySelector('#txthora11');                    // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DA HORA
    var minuto11 = document.querySelector('#txtminuto11');                // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MINUTO
    var hor11 = String(hora11.value);                                     // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var min11 = String(minuto11.value);                                   // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

    var dia11 = document.querySelector('#txtdia11');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO DIA
    var mes11 = document.querySelector('#txtmes11');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MÊS
    var d11 = String(dia11.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var m11 = String(mes11.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

        if (medic11.length==0 || hor11.length==0 || min11.length==0 || d11.length==0 || m11.length==0) {     // SE NÃO TIVER QUALQUER UMA DAS INFORMAÇÕES
            alert('Insira todos os dados!');                                                                // MOSTRA UM ALERTA
        }
        else if (hor11>23 || min11>59 || hor11<0 || min11<0) {           // SENÃO, SE HORA FOR MAIOR QUE 23 OU MINUTO MAIOR QUE 59 OU AMBOS MENORES QUE 0
            alert('Insira um horário válido!');                          // MOSTRA UM ALERTA 
        }
        else if (d11>31 || m11>12 || d11<0 || m11<0) {                   // SENÃO, SE O DIA FOR MAIOR QUE 31 OU O MÊS MAIOR QUE 12 OU AMBOS MENORES QUE 0
            alert('Insira uma data válida!');                            // MOSTRA UM ALERTA 
        }
        else if ((d11==30 && m11==2) || (d11==31 && m11==2)) {           // SENÃO, SE A DATA FOR 30/02 OU 31/02
            alert('Insira uma data válida!');                            // MOSTRA UM ALERTA 
        }
        else if ((d11==31 && m11==4) || (d11==31 && m11==6) || (d11==31 && m11==9) || (d11==31 && m11==11)) {   // SENÃO, SE A DATA FOR 31/04 OU 31/06 OU 31/09 OU 31/11
            alert('Insira uma data válida!'); 
        }
        else {                                                                  // SENÃO
        let comp11 = [medic11, hor11, min11, d11, m11]                          // CRIA UM ARRAY PARA ARMNAZENAR TODOS OS VALORES 
        firebase.database().ref().child('Informacoes_Comp_11').set(comp11);     // SETA AS INFORMAÇÕES DA VARIÁVEL NO FIREBASE
        alert('Informações enviadas com sucesso!');                             // MOSTRA UM ALERTA INFORMANDO ÊXITO NO ENVIO
        }

    } // fim function 

// ------------------------------------ FIM COMPARTIMENTO 11 ---------------------------------------


// ---------------------------------------- COMPARTIMENTO 12 ---------------------------------------
    
function comp12 () { 
            
    var medicamento12 = document.querySelector('#txtmedicamento12');      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MEDICAMENTO
    var medic12 = String(medicamento12.value);                            // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING

    var hora12 = document.querySelector('#txthora12');                    // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DA HORA
    var minuto12 = document.querySelector('#txtminuto12');                // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MINUTO
    var hor12 = String(hora12.value);                                     // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var min12 = String(minuto12.value);                                   // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

    var dia12 = document.querySelector('#txtdia12');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO DIA
    var mes12 = document.querySelector('#txtmes12');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MÊS
    var d12 = String(dia12.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var m12 = String(mes12.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

        if (medic12.length==0 || hor12.length==0 || min12.length==0 || d12.length==0 || m12.length==0) {     // SE NÃO TIVER QUALQUER UMA DAS INFORMAÇÕES
            alert('Insira todos os dados!');                            // MOSTRA UM ALERTA                                                              // MOSTRA UM ALERTA
        }
        else if (hor12>23 || min12>59 || hor12<0 || min12<0) {           // SENÃO, SE HORA FOR MAIOR QUE 23 OU MINUTO MAIOR QUE 59 OU AMBOS MENORES QUE 0
            alert('Insira um horário válido!');                          // MOSTRA UM ALERTA 
        }
        else if (d12>31 || m12>12 || d12<0 || m12<0) {                   // SENÃO, SE O DIA FOR MAIOR QUE 31 OU O MÊS MAIOR QUE 12 OU AMBOS MENORES QUE 0
            alert('Insira uma data válida!');                            // MOSTRA UM ALERTA 
        }
        else if ((d12==30 && m12==2) || (d12==31 && m12==2)) {           // SENÃO, SE A DATA FOR 30/02 OU 31/02
            alert('Insira uma data válida!');                            // MOSTRA UM ALERTA 
        }
        else if ((d12==31 && m12==4) || (d12==31 && m12==6) || (d12==31 && m12==9) || (d12==31 && m12==11)) {
            alert('Insira uma data válida!'); 
        }
        else {                                                                  // SENÃO
        let comp12 = [medic12, hor12, min12, d12, m12]                          // CRIA UM ARRAY PARA ARMNAZENAR TODOS OS VALORES 
        firebase.database().ref().child('Informacoes_Comp_12').set(comp12);     // SETA AS INFORMAÇÕES DA VARIÁVEL NO FIREBASE
        alert('Informações enviadas com sucesso!');                             // MOSTRA UM ALERTA INFORMANDO ÊXITO NO ENVIO
        }

    } // fim function 

// ------------------------------------ FIM COMPARTIMENTO 12 ---------------------------------------

// ---------------------------------------- COMPARTIMENTO 13 ---------------------------------------
    
function comp13 () { 
            
    var medicamento13 = document.querySelector('#txtmedicamento13');      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MEDICAMENTO
    var medic13 = String(medicamento13.value);                            // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING

    var hora13 = document.querySelector('#txthora13');                    // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DA HORA
    var minuto13 = document.querySelector('#txtminuto13');                // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MINUTO
    var hor13 = String(hora13.value);                                     // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var min13 = String(minuto13.value);                                   // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

    var dia13 = document.querySelector('#txtdia13');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO DIA
    var mes13 = document.querySelector('#txtmes13');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MÊS
    var d13 = String(dia13.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var m13 = String(mes13.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

        if (medic13.length==0 || hor13.length==0 || min13.length==0 || d13.length==0 || m13.length==0) {     // SE NÃO TIVER QUALQUER UMA DAS INFORMAÇÕES
            alert('Insira todos os dados!');                                                                // MOSTRA UM ALERTA
        }
        else if (hor13>23 || min13>59 || hor13<0 || min13<0) {           // SENÃO, SE HORA FOR MAIOR QUE 23 OU MINUTO MAIOR QUE 59 OU AMBOS MENORES QUE 0
            alert('Insira um horário válido!');                          // MOSTRA UM ALERTA 
        }
        else if (d13>31 || m13>12 || d13<0 || m13<0) {                   // SENÃO, SE O DIA FOR MAIOR QUE 31 OU O MÊS MAIOR QUE 12 OU AMBOS MENORES QUE 0
            alert('Insira uma data válida!');                            // MOSTRA UM ALERTA 
        }
        else if ((d13==30 && m13==2) || (d13==31 && m13==2)) {           // SENÃO, SE A DATA FOR 30/02 OU 31/02
            alert('Insira uma data válida!');                            // MOSTRA UM ALERTA 
        }
        else if ((d13==31 && m13==4) || (d13==31 && m13==6) || (d13==31 && m13==9) || (d13==31 && m13==11)) {
            alert('Insira uma data válida!');                          // MOSTRA UM ALERTA 
        }
        else {                                                                  // SENÃO
        let comp13 = [medic13, hor13, min13, d13, m13]                          // CRIA UM ARRAY PARA ARMNAZENAR TODOS OS VALORES 
        firebase.database().ref().child('Informacoes_Comp_13').set(comp13);     // SETA AS INFORMAÇÕES DA VARIÁVEL NO FIREBASE
        alert('Informações enviadas com sucesso!');                             // MOSTRA UM ALERTA INFORMANDO ÊXITO NO ENVIO
        }

    } // fim function 

// ------------------------------------ FIM COMPARTIMENTO 13 ---------------------------------------

// ---------------------------------------- COMPARTIMENTO 14 ---------------------------------------
    
function comp14 () { 
            
    var medicamento14 = document.querySelector('#txtmedicamento14');      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MEDICAMENTO
    var medic14 = String(medicamento14.value);                            // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING

    var hora14 = document.querySelector('#txthora14');                    // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DA HORA
    var minuto14 = document.querySelector('#txtminuto14');                // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MINUTO
    var hor14 = String(hora14.value);                                     // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var min14 = String(minuto14.value);                                   // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

    var dia14 = document.querySelector('#txtdia14');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO DIA
    var mes14 = document.querySelector('#txtmes14');                      // CRIA VARIÁVEL PARA PEGAR INFORMAÇÃO DO MÊS
    var d14 = String(dia14.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 
    var m14 = String(mes14.value);                                        // CRIA VARIÁVEL PARA PEGAR O VALOR E CONVERTE PARA STRING 

        if (medic14.length==0 || hor14.length==0 || min14.length==0 || d14.length==0 || m14.length==0) {     // SE NÃO TIVER QUALQUER UMA DAS INFORMAÇÕES
            alert('Insira todos os dados!');                                                                // MOSTRA UM ALERTA
        }
    else if (hor14>23 || min14>59 || hor14<0 || min14<0) {              // SENÃO, SE HORA FOR MAIOR QUE 23 OU MINUTO MAIOR QUE 59 OU AMBOS MENORES QUE 0
            alert('Insira um horário válido!');                         // MOSTRA UM ALERTA 
        }
        else if (d14>31 || m14>12 || d14<0 || m14<0) {                  // SENÃO, SE O DIA FOR MAIOR QUE 31 OU O MÊS MAIOR QUE 12 OU AMBOS MENORES QUE 0
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA 
        }
    else if ((d14==30 && m14==2) || (d14==31 && m14==2)) {              // SENÃO, SE A DATA FOR 30/02 OU 31/02
            alert('Insira uma data válida!');                           // MOSTRA UM ALERTA 
        }
        else if ((d14==31 && m14==4) || (d14==31 && m14==6) || (d14==31 && m14==9) || (d14==31 && m14==11)) {   // SENÃO, SE A DATA FOR 31/04 OU 31/06 OU 31/09 OU 31/11
        alert('Insira uma data válida!');                                                                       // MOSTRA UM ALERTA
        }
        else {                                                                  // SENÃO
let comp14 = [medic14, hor14, min14, d14, m14]                                  // CRIA UM ARRAY PARA ARMNAZENAR TODOS OS VALORES
        firebase.database().ref().child('Informacoes_Comp_14').set(comp14);     // SETA AS INFORMAÇÕES DA VARIÁVEL NO FIREBASE
    alert('Informações enviadas com sucesso!');                                 // MOSTRA UM ALERTA INFORMANDO ÊXITO NO ENVIO
        }

        /* window.onload = inicioPagina;
        function inicioPagina(){
            anonimainicio();
            }
        var anonimainicio = function () {
            } //function inicio */

    } // fim function 

// ------------------------------------ FIM COMPARTIMENTO 14 ---------------------------------------

