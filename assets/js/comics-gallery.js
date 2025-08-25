document.addEventListener('DOMContentLoaded', function () {
  const thumbnails = document.querySelectorAll('.comic-thumbnail');
  const lightbox = document.getElementById('comic-lightbox');
  const lightboxContent = document.getElementById('lightbox-content');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function () {
      const panelList = thumb.getAttribute('data-panels');
      if (!panelList) return;
      const panels = panelList.split(',');
      let panelsHtml = '';
      panels.forEach(panelPath => {
        panelsHtml += `<img src="${panelPath}" alt="Panel" />`;
      });
      lightboxContent.innerHTML = panelsHtml;
      lightbox.classList.add('active');
    });
  });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
});

function closeLightbox() {
  document.getElementById('comic-lightbox').classList.remove('active');
  document.getElementById('lightbox-content').innerHTML = '';
}