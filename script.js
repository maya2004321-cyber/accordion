const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const content = item.querySelector('.accordion-content');
    const isOpen = content.classList.contains('open');

    document.querySelectorAll('.accordion-content').forEach(c => {
      c.classList.remove('open');
    });
    document.querySelectorAll('.accordion-header').forEach(h => {
      h.classList.remove('active');
    });

   
    if (!isOpen) {
      content.classList.add('open');
      header.classList.add('active');
    }
  });
});
