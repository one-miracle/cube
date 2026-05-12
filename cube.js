const themes = {
    dark: {
        '--color-bg': '#0f1923',
        '--block-color': '#2a9db5',
        '--block-color-mid': '#1a7a8a',
        '--block-color-end': '#c8e6ea',
    },
    light: {
        '--color-bg': '#f5f0e8',
        '--block-color': '#1a4a4a',
        '--block-color-mid': '#c8a96e',
        '--block-color-end': '#2d6b5e',
    },
};

const root = document.documentElement;

function applyTheme(theme) {
    for (const [k, v] of Object.entries(themes[theme])) root.style.setProperty(k, v);
    root.dataset.theme = theme;
}

let current = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
applyTheme(current);

document.querySelector('.theme-toggle').addEventListener('click', () => {
    current = current === 'dark' ? 'light' : 'dark';
    applyTheme(current);
});
