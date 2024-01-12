let homeButton = document.querySelector('#home'),
navBar = document.querySelector('nav'),
homeWrapper = document.querySelector('.home-wrapper'),
mobile = window.matchMedia('(max-width: 767px)'),
desktop = window.matchMedia('(min-width: 768px)'),
containerContact = document.querySelector('.to-contact'),
toContact = document.querySelector('.right-side'),
head = document.getElementsByTagName('HEAD')[0],
link = document.createElement('link'),
menu = document.querySelector('.menu');

export {homeButton, navBar, mobile, desktop, menu, homeWrapper, toContact, head, link, containerContact}