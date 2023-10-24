import { investors } from './mockup/investors.js'

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const formPassword = document.getElementById('password').value
  const formEmail = document.getElementById('email').value
  const formCheck = document.getElementById('termcheck').checked
  
  const validate = termsValidate(formCheck)

  if(validate) {
    const foundUser = investors.find(user => user.password === formPassword && user.email === formEmail)

    if(!!foundUser ) {
      window.location.href = 'dados.html'
    } else {
      alert('E-mal ou senha incorreta')
    }
  }
})


function termsValidate(check) {
  if(!check) {
    alert('É necessário aceitar os termos de uso e política de privacidade')
  }

  return check
}
