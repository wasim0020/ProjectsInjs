const form = document.querySelector('form')

// when height declare here so the store in height is null;

form.addEventListener('submit',function (e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const message = document.querySelector('#message')
    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML = `Please Enter a valid input ${height}}`
    }else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = `Please Enter a valid input ${weight}}`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        //show the result
        result.innerHTML = `<span>${bmi}</span>`
        if(bmi<18.6){
            message.innerHTML = 'You are Under Weight'
        }else if (18.6<bmi>24.9){
            message.innerHTML = 'You are Normal Range'
        }else{
            message.innerHTML = 'You are Over weight'
        }
    }
})