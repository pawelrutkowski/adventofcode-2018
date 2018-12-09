var inputElement = document.getElementById("input_data");
inputElement.addEventListener("change", readFile, false);

function readFile() {
  const file = this.files[0];
  var reader = new FileReader();
  reader.onload = onLoad
  reader.readAsText(file);
}

function onLoad(e) {
    const contents = e.target.result;

    var lines = contents.split('\n');
    window.lines = lines

    const result = getResult(lines)

    document.getElementById('result').innerHTML = result
}


// main part of the exercise
function getResult(input, startValue = 0){
    let balance = startValue
    let sequences = [0]
    let isResult = true
    let result = null

    while(isResult){
        for (let index = 0; index < input.length; index++) {
            const value = input[index];
            if(value.length > 0){
                balance += Number(value)
                if(sequences.includes(balance)){
                    isResult = false
                    result = balance
                    break
                }else {
                    sequences.push(balance)
                }
            }
        }
    }
    return result
}