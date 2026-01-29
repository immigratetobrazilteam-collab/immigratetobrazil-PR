/** PR JS - Curitiba - Modern-progressive with blue tones */
const STATE_CONFIG = {
  stateCode: 'pr',
  capital: 'Curitiba',
  formspreeUrl: 'https://formspree.io/f/xprqbddb',
  colors: { primary: '#1e90ff', secondary: '#4169e1', accent: '#87ceeb' },
  animations: {"enabled": true, "header": {"type": "araucariaSlide", "duration": "0.7s", "easing": "ease-out", "delay": "0s"}, "sections": {"type": "southernReveal", "duration": "1s", "easing": "ease-in-out", "stagger": "0.15s"}, "hero": {"type": "forestParallax", "speed": 0.5, "direction": "vertical"}, "cards": {"type": "pineFloat", "evergreen": true, "gentle": true}, "images": {"type": "mistReveal", "fog": true, "duration": "1.1s"}},
  interactions: {"hover": "pine-sway", "scroll": "forest-flow", "transitions": "southern-ease", "click": "pine-cone-drop"},
  premiumEffects: ["araucaria-gradient", "mist-overlay", "forest-shadows", "pine-silhouettes"]
};

const SECTIONS = ["pr-index-section--map", "pr-index-section-frequently-asked-questions-about-living-in-", "pr-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
