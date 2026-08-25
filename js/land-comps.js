(function () {
  var btn = document.getElementById('comps-toggle');
  var rows = document.querySelectorAll('.comp-row-extra');
  if (!btn || !rows.length) return;

  var expanded = false;

  btn.addEventListener('click', function () {
    expanded = !expanded;
    rows.forEach(function (row) {
      row.style.display = expanded ? 'table-row' : 'none';
    });
    btn.textContent = expanded ? 'See Less' : 'See More';
  });
})();
