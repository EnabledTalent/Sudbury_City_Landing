// Smooth scroll for "How it works" and any anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Role cards: working tabs (Job Seekers / Employers / Service Providers)
(function () {
  var roleTabs = document.querySelectorAll('.role-tab');
  var panels = document.querySelectorAll('.role-panel');
  var prevBtn = document.querySelector('.carousel-prev');
  var nextBtn = document.querySelector('.carousel-next');

  function getActiveTrack() {
    return document.querySelector('.role-panel.active .role-cards-track');
  }

  function updateCarouselButtons() {
    var track = getActiveTrack();
    if (!track || !prevBtn || !nextBtn) return;
    var atStart = track.scrollLeft <= 1;
    var atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 1;
    prevBtn.disabled = atStart;
    nextBtn.disabled = atEnd;
  }

  roleTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var tabId = this.getAttribute('data-tab');
      roleTabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
      panels.forEach(function (panel) {
        var isActive = panel.id === 'panel-' + tabId;
        panel.classList.toggle('active', isActive);
        panel.hidden = !isActive;
      });
      updateCarouselButtons();
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      var track = getActiveTrack();
      if (track) {
        var cardWidth = track.querySelector('.role-card')?.offsetWidth || 320;
        track.scrollBy({ left: -(cardWidth + 20), behavior: 'smooth' });
      }
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      var track = getActiveTrack();
      if (track) {
        var cardWidth = track.querySelector('.role-card')?.offsetWidth || 320;
        track.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
      }
    });
  }

  document.querySelectorAll('.role-cards-track').forEach(function (track) {
    track.addEventListener('scroll', function () {
      updateCarouselButtons();
    });
  });

  updateCarouselButtons();
})();

// Seamless section: role selection buttons
(function () {
  var roleBtns = document.querySelectorAll('.seamless-role-btn');
  roleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      roleBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');
    });
  });
})();
