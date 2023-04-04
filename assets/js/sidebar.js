const trigger = document.querySelector('.sidebar-trigger');
const layout = document.querySelector('.layout')
if (trigger && layout) {
	trigger.addEventListener('click', () => {
		layout.classList.toggle('mini');
	})
}
