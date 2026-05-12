const root = document.documentElement;
const btn = document.querySelector('.theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

const darkVars = {
    '--color-bg': '#0f1923',
    '--block-color': '#2a9db5',
    '--block-color-mid': '#1a7a8a',
    '--block-color-end': '#c8e6ea',
};
const lightVars = {
    '--color-bg': '#f5f0e8',
    '--block-color': '#1a4a4a',
    '--block-color-mid': '#c8a96e',
    '--block-color-end': '#2d6b5e',
};

function applyTheme(theme) {
    const vars = theme === 'light' ? lightVars : darkVars;
    for (const [k, v] of Object.entries(vars)) root.style.setProperty(k, v);
    root.dataset.theme = theme;
}

let current = prefersDark.matches ? 'dark' : 'light';
applyTheme(current);

btn.addEventListener('click', () => {
    current = current === 'dark' ? 'light' : 'dark';
    applyTheme(current);
});
