// Custom theme toggle: cycle between light and dark only (no auto mode)
document.addEventListener('DOMContentLoaded', function() {
    const themes = ['light', 'dark'];
    const themeSwitches = document.querySelectorAll('.theme-switch');
    if (!themeSwitches.length) return;

    function setTheme(theme) {
        document.body.setAttribute('theme', theme);
        document.body.setAttribute('cfg-theme', theme);
        window.localStorage?.setItem('theme', theme);
    }

    if (!themes.includes(document.body.getAttribute('cfg-theme'))) {
        setTheme(document.body.getAttribute('theme') === 'dark' ? 'dark' : 'light');
    }

    themeSwitches.forEach(function(themeSwitch) {
        // Remove the old LoveIt click listener by cloning each switch
        const newThemeSwitch = themeSwitch.cloneNode(true);
        themeSwitch.parentNode.replaceChild(newThemeSwitch, themeSwitch);

        newThemeSwitch.addEventListener('click', function(e) {
            e.preventDefault();
            const cfgTheme = document.body.getAttribute('cfg-theme');
            const currentIndex = themes.indexOf(cfgTheme) === -1 ? 0 : themes.indexOf(cfgTheme);
            setTheme(themes[(currentIndex + 1) % themes.length]);
        });
    });
});
