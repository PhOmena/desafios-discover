/* ==========================Font========================== */

@font-face {
    font-family: 'robotoregular';
    src: url(../fonts/roboto-regular-webfont.woff) format('woff');
    font-weight: normal;
    font-style: normal;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", "robotoregular", sans-serif;
}

body {
    min-height: 100vh;
    background: var(--bg-primary);
}

nav {
    position: fixed;
    width: 60px;
    height: 100%;
    background: var(--bg-secondary);
    transition: .5s;
    overflow: hidden;
}

nav.active {
    width: 300px;
}

nav ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

nav ul li {
    list-style: none;
    width: 100%;
    position: relative;

}

nav ul li a:hover {
    color: var(--bg-primary);
}

nav ul li:hover a::before {
    background-color: var(--bg-active);
    width: 100%;
}

nav ul li a {
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--cl-text);
    transition: .2s;
}

nav ul li a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    transition: .2s;
}

nav ul li a .icon {
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
}

nav ul li a .title {
    position: relative;
    font-size: .85em;
}

nav ul li a .icon * {
    font-size: 1.1em;
}

nav ul li a.toggle {
    border-bottom: 3px solid var(--bg-primary);
}

.toggle {
    cursor: pointer;
}

header {
    display: none;
}

@media (max-width: 768px) {
    header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 60px;
        background: var(--bg-secondary);
        color: var(--cl-text);
    }

    header a {
        color: var(--cl-text)
    }

    nav {
        left: -60px;
    }

    nav.active {
        left: 0;
        width: 100%;
    }

    nav ul li a.toggle {
        display: none;
    }
}

:root {
    --bg-primary: #41444b;
    --bg-secondary: #52575d;
    --bg-active: #fddb3a;
    --cl-text: #f6f4e6;
}