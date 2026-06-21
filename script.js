/* Floating Buttonizer Logic */
const floatMainBtn = document.getElementById('floatMainBtn');
const floatBtns = document.getElementById('floatBtns');
const floatTooltip = document.getElementById('floatTooltip');

if (floatMainBtn && floatBtns) {
  floatMainBtn.addEventListener('click', () => {
    floatBtns.classList.toggle('open');
    // Hide tooltip once user interacts
    if (floatTooltip) floatTooltip.style.display = 'none';
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!floatBtns.contains(e.target)) {
      floatBtns.classList.remove('open');
    }
  });
}
