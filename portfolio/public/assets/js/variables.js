let burgerButton = document.querySelector('.burgerButton'),
toggleButton = document.querySelector('.themeToggleButton'),
homeButton = document.querySelector('#home'),
divContainer = document.createElement('div'),
navBar = document.querySelector('nav'),
homeWrapper = document.querySelector('.home-wrapper'),
mobile = window.matchMedia('(max-width: 767px)'),
desktop = window.matchMedia('(min-width: 768px)'),
containerContact = document.querySelector('.to-contact'),
toContact = document.querySelector('.right-side'),
logoGithub = document.querySelector('.logo-contact'),
pictureDarkTheme = document.querySelector('picture'),
head = document.getElementsByTagName('HEAD')[0],
link = document.createElement('link'),
menu = document.querySelector('.menu');

export {burgerButton, toggleButton,homeButton, divContainer, navBar, mobile, desktop, menu, homeWrapper, toContact, logoGithub, pictureDarkTheme, head, link, containerContact}