const form = document.querySelector('#formulario');


form.addEventListener( 'submit' , e =>{
  e.preventDefault();
  
  const email = form['email'].value;
  const name = form['nombre'].value;
  const password = form['password'].value;


  
  console.log(password)
  console.log(email)
  console.log(name)

  if(name === ''){
    addError ('name' , 'Todos los campos son obligatorios');
  }else{
    removeError('name');
  }

  if ( email === '') {
		addError('email', 'Email is required');
	} else if (!isValid(email)) {
		addError('email', 'Email is not valid');
	} else {
		removeError('email');
	}

  if(password == ''){
    addError('password' , 'Todos los campos son obligatorios');
  }else{
    removeError('password');
  }


})

function addError(campo , mensaje ){
  const formControl = form[campo].parentNode;
  formControl.classList.add('error');
  formControl.classList.remove('success');


  const small = form[campo].parentNode.querySelector('small');
  small.innerText = mensaje;
  small.style.opacity = '1';
}

function removeError(campo){
  const formControl = form[campo].parentNode;
  formControl.classList.remove('error');
  formControl.classList.add('success');

  const small = form[campo].parentNode.querySelector('small');
  small.style.opacity = '0';
}



function isValid(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}