const buttons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

const activeClasses = [
    'border-blue-400/30',
    'bg-blue-500/15',
    'text-blue-200',
];

const inactiveClasses = [
    'border-white/10',
    'bg-white/[0.04]',
    'text-slate-300',
];

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const target = button.dataset.page;

        buttons.forEach((btn) => {
            btn.classList.remove(...activeClasses);
            btn.classList.add(...inactiveClasses);
        });

        document
            .querySelectorAll(`.nav-btn[data-page="${target}"]`)
            .forEach((btn) => {
                btn.classList.remove(...inactiveClasses);
                btn.classList.add(...activeClasses);
            });

        pages.forEach((page) => {
            page.classList.add('hidden');
            page.classList.remove('active');
        });

        const targetPage = document.getElementById(target);

        if (targetPage) {
            targetPage.classList.remove('hidden');
            targetPage.classList.add('active');
        }
    });
});