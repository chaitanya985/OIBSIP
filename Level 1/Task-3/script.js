function convertTemp() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    
    let result;
    
    if (unitFrom === 'celsius' && unitTo === 'fahrenheit') {
      result = (inputTemp * 9/5) + 32;
    } else if (unitFrom === 'celsius' && unitTo === 'kelvin') {
      result = inputTemp + 273.15;
    } else if (unitFrom === 'fahrenheit' && unitTo === 'celsius') {
      result = (inputTemp - 32) * 5/9;
    } else if (unitFrom === 'fahrenheit' && unitTo === 'kelvin') {
      result = (inputTemp - 32) * 5/9 + 273.15;
    } else if (unitFrom === 'kelvin' && unitTo === 'celsius') {
      result = inputTemp - 273.15;
    } else if (unitFrom === 'kelvin' && unitTo === 'fahrenheit') {
      result = (inputTemp - 273.15) * 9/5 + 32;
    } else {
      result = inputTemp;
    }
    
    document.getElementById('result').innerText = `Converted Temperature: ${result.toFixed(2)} ${unitTo}`;
  }
  