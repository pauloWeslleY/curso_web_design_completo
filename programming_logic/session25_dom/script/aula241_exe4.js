var $txtName = document.querySelector('#messageTxt');
var name_ = 'Joe';
var lastName = 'West';

document.querySelector('#messageTxt').value = `${name_} ${lastName}`;
// document.querySelector('#messageTxt').disabled = true;
document.querySelector('#messageTxt').readOnly = true;