"use strict";
const btn = document.querySelector('.row');
const task = document.querySelector('.task');
const list = document.querySelector('.tasks-list');
const list2 = document.createElement('ul');
const list3 = document.createElement('ul');
list2.classList.add('tasks-list');
document.querySelector('.todo-list').append(list2, list3)
list3.classList.add('tasks-list');
btn.addEventListener('click', add);
btn.addEventListener('keydown', add);
document.getElementById('sel').onchange = changeTask;

task.onblur = (event) => {
	if (task.value === '') {
		btn.removeEventListener('click', add)
	} else {
		btn.addEventListener('click', add);
	}
}
function add(event) {
	if (event.target.className === 'add' || event.code === 'Enter' && task.value) {
		list.insertAdjacentHTML('afterbegin', `
		<li>${task.value}<div class="my-btns"><button class="clear">x</button><button class="ready">✓</button></div></li>
		`)
		task.value = '';
		task.blur();
	}
	document.querySelector('.clear').onclick = function () {
		list2.innerHTML += `<li>${this.parentElement.parentElement.textContent.slice(0, -2)}</li>`;
		this.parentElement.parentElement.remove();
	}
	document.querySelector('.ready').onclick = function () {
		list3.innerHTML += `<li>${this.parentElement.parentElement.textContent.slice(0, -2)}</li>`;
		this.parentElement.parentElement.remove();
	}
}
function changeTask(event) {
	if (this.value === 'активные') {
		list.classList.add('selected');
	} else {
		list.classList.remove('selected');
	}
	if (this.value === 'завершенные') {
		list3.classList.add('selected');
		Array.from(list3.children).forEach(child => {
			child.style.color = 'green';
		});
	} else {
		list3.classList.remove('selected');
	}
	if (this.value === 'удаленные') {
		list2.classList.add('selected');
		Array.from(list2.children).forEach(child => {
			child.classList.add('remover');
		});
	} else {
		list2.classList.remove('selected');
	}
}



