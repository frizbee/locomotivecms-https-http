/**
 * Do the changes based on host
 * "bursadev.shareinvestor.com" | "localhost:3000"
 */
var host = window.location.host;
var hosts = ['bursadev.shareinvestor.com','localhost:3000']

/**
 * If host in array of hosts
 * then do the modification
 * */
if(hosts.indexOf(host) >= 0) {
  let form = document.querySelector('#new_locomotive_account');
  let accountChangeForm = document.querySelector('.edit_account');
  if(form) {
    let new_action = form.action.replace(/^https:\/\//i, 'http://');
    form.action = new_action;
  }else if(accountChangeForm) {
    let new_action = accountChangeForm.action.replace(/^https:\/\//i, 'http://');
    accountChangeForm.action = new_action;
  }
}
