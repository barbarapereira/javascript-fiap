/**
 * Inverte o valor da operação
 * Leia um login e se o mesmo não for o administrador, exiba a msg
 * 'Sem poderes administrativo'
 */

let usuario = prompt('usuario')

if (!(usuario == 'admin')) {
  alert('Sem poderes administrativo')
}
else {
  alert('Olá adm');
}