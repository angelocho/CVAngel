// Custom theme toggle: cycle between light and dark only (no auto mode)
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.querySelector('.theme-switch');
    if (!themeSwitch) return;

    // Remove the old click listener by cloning the element
    const newThemeSwitch = themeSwitch.cloneNode(true);
    themeSwitch.parentNode.replaceChild(newThemeSwitch, themeSwitch);

    // Add new custom click listener
    newThemeSwitch.addEventListener('click', function(e) {
        e.preventDefault();
        const cfgTheme = document.body.getAttribute('cfg-theme');
        const themes = ['light', 'dark'];
        const currentIndex = themes.indexOf(cfgTheme) === -1 ? 0 : themes.indexOf(cfgTheme);
        const newTheme = themes[(currentIndex + 1) % themes.length];

        document.body.setAttribute('theme', newTheme);
        document.body.setAttribute('cfg-theme', newTheme);
        window.localStorage?.setItem('theme', newTheme);
    });
});
