console.log('Content script loaded!');

// Inject the external script
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/gh/zeeshanhasnain7/ui4@5.0/content.js';
document.head.appendChild(script);
