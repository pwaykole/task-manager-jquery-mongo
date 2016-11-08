$(document).ready(function(){
	$('#add_category').submit(addCategory);
	$('#edit_category').submit(editCategory);

	$('#add_task').submit(addTask);
	$('#edit_task').submit(editTask);

	$('body').on('click', '.btn-edit-category', setCategory);
	$('body').on('click', '.btn-delete-category', deleteCategory);

	$('body').on('click', '.btn-edit-task', setTask);
	$('body').on('click', '.btn-delete-task', deleteTask);
});