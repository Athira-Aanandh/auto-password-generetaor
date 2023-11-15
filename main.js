const passwordInput = document.getElementById('password')
const copyButton = document.getElementById('copy-image')
const upperVariables = 'ABCDEFGHIJKLMNOPQURSUVWXYZ';
const lowerVariables = 'abcdefghijklmnopqrstuvwxyz'
const numberVar = '0123456789'
const specialVar = '!@#$%&*'
const passwordLength=3
var counter=0;
var passwords=''


function generatePassword() {
    while(counter<passwordLength)
    {
        passwords+=upperVariables.charAt(Math.floor(Math.random()*upperVariables.length))
        passwords+=specialVar.charAt(Math.floor(Math.random()*specialVar.length))
        passwords+=lowerVariables.charAt(Math.floor(Math.random()*lowerVariables.length))
        passwords+=numberVar.charAt(Math.floor(Math.random()*numberVar.length))
        counter+=1;
    }
    passwordInput.value=passwords
}
function copyPassword(){
    passwordInput.select()
    navigator.clipboard.writeText(passwordInput.value)
    alert('password copied')
}