

function calculate() {
    let result = 53526.69129;
    const idade = document.getElementById('idade_input').value;
    const exp = document.getElementById('xp_input').value;
    const stack = document.getElementById('stack_input').value;
    const sistema = document.getElementById('so_input').value;
    const tamanho = document.getElementById('org_input').value;
    const genero = document.getElementById('gender_input').value;
    const salario = document.getElementById('bmi')
    console.log({ idade, exp, stack, sistema, tamanho, genero });

    result += exp * 2746.042535;

    if (!(idade && exp && stack && sistema && tamanho && genero)) {
        alert('Preencher todos os campos');
    } else {

        switch (idade) {
            case "a":
                result += 19224.66395;
                break;
            case "b":
                result += 29513.74145;
                break;
            case "c":
                result += 35982.6319;
                break;
            case "d":
                result += 24710.47978;
                break;
            case "e":
                result += 22800.80605;

                break;
            case "f":
                break;
        }
        switch (stack) {
            case "f":
                result += -10878.02758;
                break;
            case "b":
                result += 2240.94037789587;
                break;
            case "fs":
                break;
        }
        switch (sistema) {
            case "win":
                result += -29810.3986;
                break;
            case "lnx":
                result += -21820.18387;
                break;
            case "ios":
                result += -1510.151673;
                break;
            case "bsd":
                break;
        }
        switch (tamanho) {
            case "a":
                result += -32940.456;
                break;
            case "b":
                result += -24384.54077;
                break;
            case "c":
                result += -18687.10537;
                break;
            case "d":
                result += -15121.60189;
                break;
            case "e":
                break;
        }
        switch (genero) {
            case "f":
                result += 1259.924946;
                break;
            case "m":
                break;
        }
        console.log(result);
        salario.textContent = '$ ' + result.toFixed(2) + ' dólares por ano';
    }

};
