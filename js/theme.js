document.addEventListener('DOMContentLoaded', function () {
	var btn = document.getElementById('theme-toggle');
	if (!btn) return;
	btn.addEventListener('click', function () {
		var current = document.documentElement.getAttribute('data-theme');
		var next = current === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', next);
		try {
			localStorage.setItem('theme', next);
		} catch (e) {}
	});
});

document.addEventListener('DOMContentLoaded', function () {
	var moreBtn = document.getElementById('news-more-btn');
	var list = document.getElementById('news-items');
	if (!moreBtn || !list) return;
	var hiddenCount = list.querySelectorAll('.news-extra').length;
	if (!hiddenCount) return;
	var moreLabel = '+ ' + hiddenCount + ' more';
	moreBtn.textContent = moreLabel;
	moreBtn.addEventListener('click', function () {
		var expanded = list.classList.toggle('expanded');
		moreBtn.textContent = expanded ? 'Show less' : moreLabel;
		moreBtn.setAttribute('aria-expanded', expanded);
	});
});
