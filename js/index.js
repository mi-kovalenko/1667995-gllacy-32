const navLinks = document.querySelectorAll('.navigation-right-link');

const btnFeedback = document.querySelector('.contacts-feedback');
const modalFeedback = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('.modal-close-button');


function clickHandler(popover) {
  document.querySelectorAll('.popover').forEach(p => p.classList.remove('open'));
  popover.classList.toggle('open');
}

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    const classSuffix = this.className.split(' ')[1];
    const popoverSelector = `.popover-${classSuffix}`;
    const popover = document.querySelector(popoverSelector);

    if (popover) {
      clickHandler(popover);
    }
  })
})

document.addEventListener('click', function(event) {
  if (!event.target.closest('.popover')) {
    document.querySelectorAll('.popover').forEach(p => p.classList.remove('open'));
  }
}, true);

btnFeedback.addEventListener('click', () => clickHandler(modalFeedback));
modalCloseBtn.addEventListener('click', () => clickHandler(modalFeedback));

