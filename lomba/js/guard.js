document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[href]');
  if (!a || a.target === '_blank' || a.hasAttribute('download') || e.ctrlKey || e.metaKey || e.shiftKey || e.button) return;

  var href = a.getAttribute('href');
  if (/beranda\.html/.test(href)) {
    a.setAttribute('href', href.replace('beranda.html', 'index.html'));
  }

  var url = new URL(a.href, location.href);
  if (url.hash && url.hash !== location.hash) return;

  var sama = function (u) {
    return u.protocol + '//' + u.host + u.pathname.replace(/index\.html$/, '') + u.search;
  };
  if (sama(url) === sama(location)) e.preventDefault();
}, true);
