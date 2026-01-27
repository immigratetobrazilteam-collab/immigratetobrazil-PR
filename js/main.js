
// Master JS for State: PR - Persona: Pine Forest Settler
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 700;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const pr_index_section_immigrate_to_paran = document.getElementById('pr-index-section-immigrate-to-paran');
  if (pr_index_section_immigrate_to_paran) {
    gsap.fromTo('#pr-index-section-immigrate-to-paran', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_form_immigrate_to_paran = document.getElementById('pr-index-form-immigrate-to-paran');
  if (pr_index_form_immigrate_to_paran) {
    gsap.from('#pr-index-form-immigrate-to-paran input, #pr-index-form-immigrate-to-paran textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_section_state_vibe = document.getElementById('pr-index-section-state-vibe');
  if (pr_index_section_state_vibe) {
    gsap.fromTo('#pr-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_section_quick_facts_snapshot = document.getElementById('pr-index-section-quick-facts-snapshot');
  if (pr_index_section_quick_facts_snapshot) {
    gsap.fromTo('#pr-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_section_paran_map = document.getElementById('pr-index-section-paran-map');
  if (pr_index_section_paran_map) {
    gsap.fromTo('#pr-index-section-paran-map', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_section_cost_of_living_paran = document.getElementById('pr-index-section-cost-of-living-paran');
  if (pr_index_section_cost_of_living_paran) {
    gsap.fromTo('#pr-index-section-cost-of-living-paran', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_section_government_context = document.getElementById('pr-index-section-government-context');
  if (pr_index_section_government_context) {
    gsap.fromTo('#pr-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_hero_immigration_notes = document.getElementById('pr-index-hero-immigration-notes');
  if (pr_index_hero_immigration_notes) {
    gsap.fromTo('#pr-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_list_common_applicant_profiles = document.getElementById('pr-index-list-common-applicant-profiles');
  if (pr_index_list_common_applicant_profiles) {
    gsap.from('#pr-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_list_economic_drivers = document.getElementById('pr-index-list-economic-drivers');
  if (pr_index_list_economic_drivers) {
    gsap.from('#pr-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_section_demographics = document.getElementById('pr-index-section-demographics');
  if (pr_index_section_demographics) {
    gsap.fromTo('#pr-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_section_regional_challenges = document.getElementById('pr-index-section-regional-challenges');
  if (pr_index_section_regional_challenges) {
    gsap.fromTo('#pr-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_section_regional_opportunities = document.getElementById('pr-index-section-regional-opportunities');
  if (pr_index_section_regional_opportunities) {
    gsap.fromTo('#pr-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_section_culture_daily_life = document.getElementById('pr-index-section-culture-daily-life');
  if (pr_index_section_culture_daily_life) {
    gsap.fromTo('#pr-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_list_local_language_expressions = document.getElementById('pr-index-list-local-language-expressions');
  if (pr_index_list_local_language_expressions) {
    gsap.from('#pr-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_list_food_cuisine = document.getElementById('pr-index-list-food-cuisine');
  if (pr_index_list_food_cuisine) {
    gsap.from('#pr-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_list_festivals_traditions = document.getElementById('pr-index-list-festivals-traditions');
  if (pr_index_list_festivals_traditions) {
    gsap.from('#pr-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_list_music_artistic_expression = document.getElementById('pr-index-list-music-artistic-expression');
  if (pr_index_list_music_artistic_expression) {
    gsap.from('#pr-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_list_sports_recreation = document.getElementById('pr-index-list-sports-recreation');
  if (pr_index_list_sports_recreation) {
    gsap.from('#pr-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_list_landmarks_historical_sites = document.getElementById('pr-index-list-landmarks-historical-sites');
  if (pr_index_list_landmarks_historical_sites) {
    gsap.from('#pr-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_list_natural_features = document.getElementById('pr-index-list-natural-features');
  if (pr_index_list_natural_features) {
    gsap.from('#pr-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_list_parks_protected_areas = document.getElementById('pr-index-list-parks-protected-areas');
  if (pr_index_list_parks_protected_areas) {
    gsap.from('#pr-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_list_museums_cultural_institutions = document.getElementById('pr-index-list-museums-cultural-institutions');
  if (pr_index_list_museums_cultural_institutions) {
    gsap.from('#pr-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_section_image_gallery = document.getElementById('pr-index-section-image-gallery');
  if (pr_index_section_image_gallery) {
    gsap.fromTo('#pr-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_section_useful_government_links = document.getElementById('pr-index-section-useful-government-links');
  if (pr_index_section_useful_government_links) {
    gsap.fromTo('#pr-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_hero_federal_police_immigration_links = document.getElementById('pr-index-hero-federal-police-immigration-links');
  if (pr_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#pr-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_section_external_references = document.getElementById('pr-index-section-external-references');
  if (pr_index_section_external_references) {
    gsap.fromTo('#pr-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_list_immigration_services_overview = document.getElementById('pr-index-list-immigration-services-overview');
  if (pr_index_list_immigration_services_overview) {
    gsap.from('#pr-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_section_why_immigrate_here = document.getElementById('pr-index-section-why-immigrate-here');
  if (pr_index_section_why_immigrate_here) {
    gsap.fromTo('#pr-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_section_legal_guidance_disclaimers = document.getElementById('pr-index-section-legal-guidance-disclaimers');
  if (pr_index_section_legal_guidance_disclaimers) {
    gsap.fromTo('#pr-index-section-legal-guidance-disclaimers', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_list_travel_services = document.getElementById('pr-index-list-travel-services');
  if (pr_index_list_travel_services) {
    gsap.from('#pr-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_list_how_the_process_works = document.getElementById('pr-index-list-how-the-process-works');
  if (pr_index_list_how_the_process_works) {
    gsap.from('#pr-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_index_section__frequently_asked_questions_about_living_in_paran_ = document.getElementById('pr-index-section--frequently-asked-questions-about-living-in-paran-');
  if (pr_index_section__frequently_asked_questions_about_living_in_paran_) {
    gsap.fromTo('#pr-index-section--frequently-asked-questions-about-living-in-paran-', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_contactcta_section_get_started_in_paran = document.getElementById('pr-contactcta-section-get-started-in-paran');
  if (pr_contactcta_section_get_started_in_paran) {
    gsap.fromTo('#pr-contactcta-section-get-started-in-paran', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('pr-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (pr_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#pr-renouncingcitizenship-form-renounce-brazilian-citizenship input, #pr-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_list_quick_facts = document.getElementById('pr-renouncingcitizenship-list-quick-facts');
  if (pr_renouncingcitizenship_list_quick_facts) {
    gsap.from('#pr-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('pr-renouncingcitizenship-list-common-challenges-applicants-face');
  if (pr_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#pr-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('pr-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (pr_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#pr-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_section_renunciation_overview = document.getElementById('pr-renouncingcitizenship-section-renunciation-overview');
  if (pr_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#pr-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_form_who_is_this_for = document.getElementById('pr-renouncingcitizenship-form-who-is-this-for');
  if (pr_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#pr-renouncingcitizenship-form-who-is-this-for input, #pr-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_list_required_documents = document.getElementById('pr-renouncingcitizenship-list-required-documents');
  if (pr_renouncingcitizenship_list_required_documents) {
    gsap.from('#pr-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_list_process = document.getElementById('pr-renouncingcitizenship-list-process');
  if (pr_renouncingcitizenship_list_process) {
    gsap.from('#pr-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_section_timelines_deadlines = document.getElementById('pr-renouncingcitizenship-section-timelines-deadlines');
  if (pr_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#pr-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_section_fees_costs = document.getElementById('pr-renouncingcitizenship-section-fees-costs');
  if (pr_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#pr-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('pr-renouncingcitizenship-list-risks-common-mistakes');
  if (pr_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#pr-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('pr-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (pr_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_section_paran_specific_context = document.getElementById('pr-renouncingcitizenship-section-paran-specific-context');
  if (pr_renouncingcitizenship_section_paran_specific_context) {
    gsap.fromTo('#pr-renouncingcitizenship-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_section_what_our_clients_say = document.getElementById('pr-renouncingcitizenship-section-what-our-clients-say');
  if (pr_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#pr-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('pr-renouncingcitizenship-section-frequently-asked-questions');
  if (pr_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#pr-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_section_international_support = document.getElementById('pr-renouncingcitizenship-section-international-support');
  if (pr_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#pr-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_list_our_credentials = document.getElementById('pr-renouncingcitizenship-list-our-credentials');
  if (pr_renouncingcitizenship_list_our_credentials) {
    gsap.from('#pr-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_list_related_services = document.getElementById('pr-renouncingcitizenship-list-related-services');
  if (pr_renouncingcitizenship_list_related_services) {
    gsap.from('#pr-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('pr-renouncingcitizenship-section-youre-in-good-hands');
  if (pr_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#pr-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_renouncingcitizenship_section_21 = document.getElementById('pr-renouncingcitizenship-section-21');
  if (pr_renouncingcitizenship_section_21) {
    gsap.fromTo('#pr-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('pr-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (pr_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#pr-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #pr-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_list_quick_facts = document.getElementById('pr-provisional-list-quick-facts');
  if (pr_provisional_list_quick_facts) {
    gsap.from('#pr-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_list_common_challenges_applicants_face = document.getElementById('pr-provisional-list-common-challenges-applicants-face');
  if (pr_provisional_list_common_challenges_applicants_face) {
    gsap.from('#pr-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_list_how_we_solve_these_challenges = document.getElementById('pr-provisional-list-how-we-solve-these-challenges');
  if (pr_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#pr-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_section_naturalisation_overview = document.getElementById('pr-provisional-section-naturalisation-overview');
  if (pr_provisional_section_naturalisation_overview) {
    gsap.fromTo('#pr-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_form_who_is_this_naturalisation_for = document.getElementById('pr-provisional-form-who-is-this-naturalisation-for');
  if (pr_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#pr-provisional-form-who-is-this-naturalisation-for input, #pr-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_list_required_documents = document.getElementById('pr-provisional-list-required-documents');
  if (pr_provisional_list_required_documents) {
    gsap.from('#pr-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_list_application_process = document.getElementById('pr-provisional-list-application-process');
  if (pr_provisional_list_application_process) {
    gsap.from('#pr-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_section_timelines_deadlines = document.getElementById('pr-provisional-section-timelines-deadlines');
  if (pr_provisional_section_timelines_deadlines) {
    gsap.fromTo('#pr-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_section_fees_costs = document.getElementById('pr-provisional-section-fees-costs');
  if (pr_provisional_section_fees_costs) {
    gsap.fromTo('#pr-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_list_risks_common_mistakes = document.getElementById('pr-provisional-list-risks-common-mistakes');
  if (pr_provisional_list_risks_common_mistakes) {
    gsap.from('#pr-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_section_diy_vs_professional_assistance = document.getElementById('pr-provisional-section-diy-vs-professional-assistance');
  if (pr_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_section_paran_specific_context = document.getElementById('pr-provisional-section-paran-specific-context');
  if (pr_provisional_section_paran_specific_context) {
    gsap.fromTo('#pr-provisional-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_section_what_our_clients_say = document.getElementById('pr-provisional-section-what-our-clients-say');
  if (pr_provisional_section_what_our_clients_say) {
    gsap.fromTo('#pr-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_section_frequently_asked_questions = document.getElementById('pr-provisional-section-frequently-asked-questions');
  if (pr_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#pr-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_section_international_support = document.getElementById('pr-provisional-section-international-support');
  if (pr_provisional_section_international_support) {
    gsap.fromTo('#pr-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_list_our_credentials = document.getElementById('pr-provisional-list-our-credentials');
  if (pr_provisional_list_our_credentials) {
    gsap.from('#pr-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_list_related_services = document.getElementById('pr-provisional-list-related-services');
  if (pr_provisional_list_related_services) {
    gsap.from('#pr-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_section_youre_in_good_hands = document.getElementById('pr-provisional-section-youre-in-good-hands');
  if (pr_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#pr-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_provisional_section_21 = document.getElementById('pr-provisional-section-21');
  if (pr_provisional_section_21) {
    gsap.fromTo('#pr-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('pr-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (pr_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#pr-special-form-special-naturalisation-in-brazil-for-particular-cases input, #pr-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_list_quick_facts = document.getElementById('pr-special-list-quick-facts');
  if (pr_special_list_quick_facts) {
    gsap.from('#pr-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_list_common_challenges_applicants_face = document.getElementById('pr-special-list-common-challenges-applicants-face');
  if (pr_special_list_common_challenges_applicants_face) {
    gsap.from('#pr-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_list_how_we_solve_these_challenges = document.getElementById('pr-special-list-how-we-solve-these-challenges');
  if (pr_special_list_how_we_solve_these_challenges) {
    gsap.from('#pr-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_section_naturalisation_overview = document.getElementById('pr-special-section-naturalisation-overview');
  if (pr_special_section_naturalisation_overview) {
    gsap.fromTo('#pr-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_form_who_is_this_naturalisation_for = document.getElementById('pr-special-form-who-is-this-naturalisation-for');
  if (pr_special_form_who_is_this_naturalisation_for) {
    gsap.from('#pr-special-form-who-is-this-naturalisation-for input, #pr-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_list_required_documents = document.getElementById('pr-special-list-required-documents');
  if (pr_special_list_required_documents) {
    gsap.from('#pr-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_list_application_process = document.getElementById('pr-special-list-application-process');
  if (pr_special_list_application_process) {
    gsap.from('#pr-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_section_timelines_deadlines = document.getElementById('pr-special-section-timelines-deadlines');
  if (pr_special_section_timelines_deadlines) {
    gsap.fromTo('#pr-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_section_fees_costs = document.getElementById('pr-special-section-fees-costs');
  if (pr_special_section_fees_costs) {
    gsap.fromTo('#pr-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_list_risks_common_mistakes = document.getElementById('pr-special-list-risks-common-mistakes');
  if (pr_special_list_risks_common_mistakes) {
    gsap.from('#pr-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_section_diy_vs_professional_assistance = document.getElementById('pr-special-section-diy-vs-professional-assistance');
  if (pr_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_section_paran_specific_context = document.getElementById('pr-special-section-paran-specific-context');
  if (pr_special_section_paran_specific_context) {
    gsap.fromTo('#pr-special-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_section_what_our_clients_say = document.getElementById('pr-special-section-what-our-clients-say');
  if (pr_special_section_what_our_clients_say) {
    gsap.fromTo('#pr-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_section_frequently_asked_questions = document.getElementById('pr-special-section-frequently-asked-questions');
  if (pr_special_section_frequently_asked_questions) {
    gsap.fromTo('#pr-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_section_international_support = document.getElementById('pr-special-section-international-support');
  if (pr_special_section_international_support) {
    gsap.fromTo('#pr-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_list_our_credentials = document.getElementById('pr-special-list-our-credentials');
  if (pr_special_list_our_credentials) {
    gsap.from('#pr-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_list_related_services = document.getElementById('pr-special-list-related-services');
  if (pr_special_list_related_services) {
    gsap.from('#pr-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_section_youre_in_good_hands = document.getElementById('pr-special-section-youre-in-good-hands');
  if (pr_special_section_youre_in_good_hands) {
    gsap.fromTo('#pr-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_special_section_21 = document.getElementById('pr-special-section-21');
  if (pr_special_section_21) {
    gsap.fromTo('#pr-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('pr-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (pr_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#pr-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #pr-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_list_quick_facts = document.getElementById('pr-ordinary-list-quick-facts');
  if (pr_ordinary_list_quick_facts) {
    gsap.from('#pr-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_list_common_challenges_applicants_face = document.getElementById('pr-ordinary-list-common-challenges-applicants-face');
  if (pr_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#pr-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_list_how_we_solve_these_challenges = document.getElementById('pr-ordinary-list-how-we-solve-these-challenges');
  if (pr_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#pr-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_section_naturalisation_overview = document.getElementById('pr-ordinary-section-naturalisation-overview');
  if (pr_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#pr-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_form_who_is_this_naturalisation_for = document.getElementById('pr-ordinary-form-who-is-this-naturalisation-for');
  if (pr_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#pr-ordinary-form-who-is-this-naturalisation-for input, #pr-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_list_required_documents = document.getElementById('pr-ordinary-list-required-documents');
  if (pr_ordinary_list_required_documents) {
    gsap.from('#pr-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_list_application_process = document.getElementById('pr-ordinary-list-application-process');
  if (pr_ordinary_list_application_process) {
    gsap.from('#pr-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_section_timelines_deadlines = document.getElementById('pr-ordinary-section-timelines-deadlines');
  if (pr_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#pr-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_section_fees_costs = document.getElementById('pr-ordinary-section-fees-costs');
  if (pr_ordinary_section_fees_costs) {
    gsap.fromTo('#pr-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_list_risks_common_mistakes = document.getElementById('pr-ordinary-list-risks-common-mistakes');
  if (pr_ordinary_list_risks_common_mistakes) {
    gsap.from('#pr-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_section_diy_vs_professional_assistance = document.getElementById('pr-ordinary-section-diy-vs-professional-assistance');
  if (pr_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_section_paran_specific_context = document.getElementById('pr-ordinary-section-paran-specific-context');
  if (pr_ordinary_section_paran_specific_context) {
    gsap.fromTo('#pr-ordinary-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_section_what_our_clients_say = document.getElementById('pr-ordinary-section-what-our-clients-say');
  if (pr_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#pr-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_section_frequently_asked_questions = document.getElementById('pr-ordinary-section-frequently-asked-questions');
  if (pr_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#pr-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_section_international_support = document.getElementById('pr-ordinary-section-international-support');
  if (pr_ordinary_section_international_support) {
    gsap.fromTo('#pr-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_list_our_credentials = document.getElementById('pr-ordinary-list-our-credentials');
  if (pr_ordinary_list_our_credentials) {
    gsap.from('#pr-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_list_related_services = document.getElementById('pr-ordinary-list-related-services');
  if (pr_ordinary_list_related_services) {
    gsap.from('#pr-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_section_youre_in_good_hands = document.getElementById('pr-ordinary-section-youre-in-good-hands');
  if (pr_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#pr-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_ordinary_section_21 = document.getElementById('pr-ordinary-section-21');
  if (pr_ordinary_section_21) {
    gsap.fromTo('#pr-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('pr-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (pr_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#pr-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #pr-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_list_quick_facts = document.getElementById('pr-extraordinary-list-quick-facts');
  if (pr_extraordinary_list_quick_facts) {
    gsap.from('#pr-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_list_common_challenges_applicants_face = document.getElementById('pr-extraordinary-list-common-challenges-applicants-face');
  if (pr_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#pr-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_list_how_we_solve_these_challenges = document.getElementById('pr-extraordinary-list-how-we-solve-these-challenges');
  if (pr_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#pr-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_section_naturalisation_overview = document.getElementById('pr-extraordinary-section-naturalisation-overview');
  if (pr_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#pr-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('pr-extraordinary-form-who-is-this-naturalisation-for');
  if (pr_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#pr-extraordinary-form-who-is-this-naturalisation-for input, #pr-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_list_required_documents = document.getElementById('pr-extraordinary-list-required-documents');
  if (pr_extraordinary_list_required_documents) {
    gsap.from('#pr-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_list_application_process = document.getElementById('pr-extraordinary-list-application-process');
  if (pr_extraordinary_list_application_process) {
    gsap.from('#pr-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_section_timelines_deadlines = document.getElementById('pr-extraordinary-section-timelines-deadlines');
  if (pr_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#pr-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_section_fees_costs = document.getElementById('pr-extraordinary-section-fees-costs');
  if (pr_extraordinary_section_fees_costs) {
    gsap.fromTo('#pr-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_list_risks_common_mistakes = document.getElementById('pr-extraordinary-list-risks-common-mistakes');
  if (pr_extraordinary_list_risks_common_mistakes) {
    gsap.from('#pr-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_section_diy_vs_professional_assistance = document.getElementById('pr-extraordinary-section-diy-vs-professional-assistance');
  if (pr_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_section_paran_specific_context = document.getElementById('pr-extraordinary-section-paran-specific-context');
  if (pr_extraordinary_section_paran_specific_context) {
    gsap.fromTo('#pr-extraordinary-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_section_what_our_clients_say = document.getElementById('pr-extraordinary-section-what-our-clients-say');
  if (pr_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#pr-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_section_frequently_asked_questions = document.getElementById('pr-extraordinary-section-frequently-asked-questions');
  if (pr_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#pr-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_section_international_support = document.getElementById('pr-extraordinary-section-international-support');
  if (pr_extraordinary_section_international_support) {
    gsap.fromTo('#pr-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_list_our_credentials = document.getElementById('pr-extraordinary-list-our-credentials');
  if (pr_extraordinary_list_our_credentials) {
    gsap.from('#pr-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_list_related_services = document.getElementById('pr-extraordinary-list-related-services');
  if (pr_extraordinary_list_related_services) {
    gsap.from('#pr-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_section_youre_in_good_hands = document.getElementById('pr-extraordinary-section-youre-in-good-hands');
  if (pr_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#pr-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extraordinary_section_21 = document.getElementById('pr-extraordinary-section-21');
  if (pr_extraordinary_section_21) {
    gsap.fromTo('#pr-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('pr-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (pr_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#pr-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #pr-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_list_quick_facts = document.getElementById('pr-reacquisitioncitizenship-list-quick-facts');
  if (pr_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#pr-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('pr-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (pr_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#pr-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('pr-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (pr_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#pr-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('pr-reacquisitioncitizenship-section-reacquisition-overview');
  if (pr_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#pr-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('pr-reacquisitioncitizenship-form-who-is-this-for');
  if (pr_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#pr-reacquisitioncitizenship-form-who-is-this-for input, #pr-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_list_required_documents = document.getElementById('pr-reacquisitioncitizenship-list-required-documents');
  if (pr_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#pr-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_list_process = document.getElementById('pr-reacquisitioncitizenship-list-process');
  if (pr_reacquisitioncitizenship_list_process) {
    gsap.from('#pr-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('pr-reacquisitioncitizenship-section-timelines-deadlines');
  if (pr_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#pr-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_section_fees_costs = document.getElementById('pr-reacquisitioncitizenship-section-fees-costs');
  if (pr_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#pr-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('pr-reacquisitioncitizenship-list-risks-common-mistakes');
  if (pr_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#pr-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('pr-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (pr_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_section_paran_specific_context = document.getElementById('pr-reacquisitioncitizenship-section-paran-specific-context');
  if (pr_reacquisitioncitizenship_section_paran_specific_context) {
    gsap.fromTo('#pr-reacquisitioncitizenship-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('pr-reacquisitioncitizenship-section-what-our-clients-say');
  if (pr_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#pr-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('pr-reacquisitioncitizenship-section-frequently-asked-questions');
  if (pr_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#pr-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_section_international_support = document.getElementById('pr-reacquisitioncitizenship-section-international-support');
  if (pr_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#pr-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_list_our_credentials = document.getElementById('pr-reacquisitioncitizenship-list-our-credentials');
  if (pr_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#pr-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_list_related_services = document.getElementById('pr-reacquisitioncitizenship-list-related-services');
  if (pr_reacquisitioncitizenship_list_related_services) {
    gsap.from('#pr-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('pr-reacquisitioncitizenship-section-youre-in-good-hands');
  if (pr_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#pr-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_reacquisitioncitizenship_section_21 = document.getElementById('pr-reacquisitioncitizenship-section-21');
  if (pr_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#pr-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('pr-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (pr_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#pr-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #pr-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_list_quick_facts = document.getElementById('pr-scientificresearch-list-quick-facts');
  if (pr_scientificresearch_list_quick_facts) {
    gsap.from('#pr-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_list_common_challenges_applicants_face = document.getElementById('pr-scientificresearch-list-common-challenges-applicants-face');
  if (pr_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#pr-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('pr-scientificresearch-list-how-we-solve-these-challenges');
  if (pr_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#pr-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_section_residency_overview = document.getElementById('pr-scientificresearch-section-residency-overview');
  if (pr_scientificresearch_section_residency_overview) {
    gsap.fromTo('#pr-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_form_who_is_this_residency_for = document.getElementById('pr-scientificresearch-form-who-is-this-residency-for');
  if (pr_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#pr-scientificresearch-form-who-is-this-residency-for input, #pr-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_list_required_documents = document.getElementById('pr-scientificresearch-list-required-documents');
  if (pr_scientificresearch_list_required_documents) {
    gsap.from('#pr-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_list_application_process = document.getElementById('pr-scientificresearch-list-application-process');
  if (pr_scientificresearch_list_application_process) {
    gsap.from('#pr-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_section_timelines_deadlines = document.getElementById('pr-scientificresearch-section-timelines-deadlines');
  if (pr_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#pr-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_section_fees_costs = document.getElementById('pr-scientificresearch-section-fees-costs');
  if (pr_scientificresearch_section_fees_costs) {
    gsap.fromTo('#pr-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_list_risks_common_mistakes = document.getElementById('pr-scientificresearch-list-risks-common-mistakes');
  if (pr_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#pr-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('pr-scientificresearch-section-diy-vs-professional-assistance');
  if (pr_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_section_paran_specific_context = document.getElementById('pr-scientificresearch-section-paran-specific-context');
  if (pr_scientificresearch_section_paran_specific_context) {
    gsap.fromTo('#pr-scientificresearch-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_section_what_our_clients_say = document.getElementById('pr-scientificresearch-section-what-our-clients-say');
  if (pr_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#pr-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_section_frequently_asked_questions = document.getElementById('pr-scientificresearch-section-frequently-asked-questions');
  if (pr_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#pr-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_section_international_support = document.getElementById('pr-scientificresearch-section-international-support');
  if (pr_scientificresearch_section_international_support) {
    gsap.fromTo('#pr-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_list_our_credentials = document.getElementById('pr-scientificresearch-list-our-credentials');
  if (pr_scientificresearch_list_our_credentials) {
    gsap.from('#pr-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_list_related_services = document.getElementById('pr-scientificresearch-list-related-services');
  if (pr_scientificresearch_list_related_services) {
    gsap.from('#pr-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_section_youre_in_good_hands = document.getElementById('pr-scientificresearch-section-youre-in-good-hands');
  if (pr_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#pr-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_scientificresearch_section_21 = document.getElementById('pr-scientificresearch-section-21');
  if (pr_scientificresearch_section_21) {
    gsap.fromTo('#pr-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_form_study_in_brazil_with_study_residency = document.getElementById('pr-study-form-study-in-brazil-with-study-residency');
  if (pr_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#pr-study-form-study-in-brazil-with-study-residency input, #pr-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_list_quick_facts = document.getElementById('pr-study-list-quick-facts');
  if (pr_study_list_quick_facts) {
    gsap.from('#pr-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_list_common_challenges_applicants_face = document.getElementById('pr-study-list-common-challenges-applicants-face');
  if (pr_study_list_common_challenges_applicants_face) {
    gsap.from('#pr-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_list_how_we_solve_these_challenges = document.getElementById('pr-study-list-how-we-solve-these-challenges');
  if (pr_study_list_how_we_solve_these_challenges) {
    gsap.from('#pr-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_section_residency_overview = document.getElementById('pr-study-section-residency-overview');
  if (pr_study_section_residency_overview) {
    gsap.fromTo('#pr-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_form_who_is_this_residency_for = document.getElementById('pr-study-form-who-is-this-residency-for');
  if (pr_study_form_who_is_this_residency_for) {
    gsap.from('#pr-study-form-who-is-this-residency-for input, #pr-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_list_required_documents = document.getElementById('pr-study-list-required-documents');
  if (pr_study_list_required_documents) {
    gsap.from('#pr-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_list_application_process = document.getElementById('pr-study-list-application-process');
  if (pr_study_list_application_process) {
    gsap.from('#pr-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_section_timelines_deadlines = document.getElementById('pr-study-section-timelines-deadlines');
  if (pr_study_section_timelines_deadlines) {
    gsap.fromTo('#pr-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_section_fees_costs = document.getElementById('pr-study-section-fees-costs');
  if (pr_study_section_fees_costs) {
    gsap.fromTo('#pr-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_list_risks_common_mistakes = document.getElementById('pr-study-list-risks-common-mistakes');
  if (pr_study_list_risks_common_mistakes) {
    gsap.from('#pr-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_section_diy_vs_professional_assistance = document.getElementById('pr-study-section-diy-vs-professional-assistance');
  if (pr_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_section_paran_specific_context = document.getElementById('pr-study-section-paran-specific-context');
  if (pr_study_section_paran_specific_context) {
    gsap.fromTo('#pr-study-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_section_what_our_clients_say = document.getElementById('pr-study-section-what-our-clients-say');
  if (pr_study_section_what_our_clients_say) {
    gsap.fromTo('#pr-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_section_frequently_asked_questions = document.getElementById('pr-study-section-frequently-asked-questions');
  if (pr_study_section_frequently_asked_questions) {
    gsap.fromTo('#pr-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_section_international_support = document.getElementById('pr-study-section-international-support');
  if (pr_study_section_international_support) {
    gsap.fromTo('#pr-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_list_our_credentials = document.getElementById('pr-study-list-our-credentials');
  if (pr_study_list_our_credentials) {
    gsap.from('#pr-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_list_related_services = document.getElementById('pr-study-list-related-services');
  if (pr_study_list_related_services) {
    gsap.from('#pr-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_section_youre_in_good_hands = document.getElementById('pr-study-section-youre-in-good-hands');
  if (pr_study_section_youre_in_good_hands) {
    gsap.fromTo('#pr-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_study_section_21 = document.getElementById('pr-study-section-21');
  if (pr_study_section_21) {
    gsap.fromTo('#pr-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('pr-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (pr_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#pr-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #pr-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_list_quick_facts = document.getElementById('pr-educationalexchange-list-quick-facts');
  if (pr_educationalexchange_list_quick_facts) {
    gsap.from('#pr-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_list_common_challenges_applicants_face = document.getElementById('pr-educationalexchange-list-common-challenges-applicants-face');
  if (pr_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#pr-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('pr-educationalexchange-list-how-we-solve-these-challenges');
  if (pr_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#pr-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_section_residency_overview = document.getElementById('pr-educationalexchange-section-residency-overview');
  if (pr_educationalexchange_section_residency_overview) {
    gsap.fromTo('#pr-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_form_who_is_this_residency_for = document.getElementById('pr-educationalexchange-form-who-is-this-residency-for');
  if (pr_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#pr-educationalexchange-form-who-is-this-residency-for input, #pr-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_list_required_documents = document.getElementById('pr-educationalexchange-list-required-documents');
  if (pr_educationalexchange_list_required_documents) {
    gsap.from('#pr-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_list_application_process = document.getElementById('pr-educationalexchange-list-application-process');
  if (pr_educationalexchange_list_application_process) {
    gsap.from('#pr-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_section_timelines_deadlines = document.getElementById('pr-educationalexchange-section-timelines-deadlines');
  if (pr_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#pr-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_section_fees_costs = document.getElementById('pr-educationalexchange-section-fees-costs');
  if (pr_educationalexchange_section_fees_costs) {
    gsap.fromTo('#pr-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_list_risks_common_mistakes = document.getElementById('pr-educationalexchange-list-risks-common-mistakes');
  if (pr_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#pr-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('pr-educationalexchange-section-diy-vs-professional-assistance');
  if (pr_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_section_paran_specific_context = document.getElementById('pr-educationalexchange-section-paran-specific-context');
  if (pr_educationalexchange_section_paran_specific_context) {
    gsap.fromTo('#pr-educationalexchange-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_section_what_our_clients_say = document.getElementById('pr-educationalexchange-section-what-our-clients-say');
  if (pr_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#pr-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_section_frequently_asked_questions = document.getElementById('pr-educationalexchange-section-frequently-asked-questions');
  if (pr_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#pr-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_section_international_support = document.getElementById('pr-educationalexchange-section-international-support');
  if (pr_educationalexchange_section_international_support) {
    gsap.fromTo('#pr-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_list_our_credentials = document.getElementById('pr-educationalexchange-list-our-credentials');
  if (pr_educationalexchange_list_our_credentials) {
    gsap.from('#pr-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_list_related_services = document.getElementById('pr-educationalexchange-list-related-services');
  if (pr_educationalexchange_list_related_services) {
    gsap.from('#pr-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_section_youre_in_good_hands = document.getElementById('pr-educationalexchange-section-youre-in-good-hands');
  if (pr_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#pr-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_educationalexchange_section_21 = document.getElementById('pr-educationalexchange-section-21');
  if (pr_educationalexchange_section_21) {
    gsap.fromTo('#pr-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('pr-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (pr_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#pr-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #pr-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_list_quick_facts = document.getElementById('pr-humanitarian-list-quick-facts');
  if (pr_humanitarian_list_quick_facts) {
    gsap.from('#pr-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_list_common_challenges_applicants_face = document.getElementById('pr-humanitarian-list-common-challenges-applicants-face');
  if (pr_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#pr-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_list_how_we_solve_these_challenges = document.getElementById('pr-humanitarian-list-how-we-solve-these-challenges');
  if (pr_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#pr-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_section_residency_overview = document.getElementById('pr-humanitarian-section-residency-overview');
  if (pr_humanitarian_section_residency_overview) {
    gsap.fromTo('#pr-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_form_who_is_this_residency_for = document.getElementById('pr-humanitarian-form-who-is-this-residency-for');
  if (pr_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#pr-humanitarian-form-who-is-this-residency-for input, #pr-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_list_required_documents = document.getElementById('pr-humanitarian-list-required-documents');
  if (pr_humanitarian_list_required_documents) {
    gsap.from('#pr-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_list_application_process = document.getElementById('pr-humanitarian-list-application-process');
  if (pr_humanitarian_list_application_process) {
    gsap.from('#pr-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_section_timelines_deadlines = document.getElementById('pr-humanitarian-section-timelines-deadlines');
  if (pr_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#pr-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_section_fees_costs = document.getElementById('pr-humanitarian-section-fees-costs');
  if (pr_humanitarian_section_fees_costs) {
    gsap.fromTo('#pr-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_list_risks_common_mistakes = document.getElementById('pr-humanitarian-list-risks-common-mistakes');
  if (pr_humanitarian_list_risks_common_mistakes) {
    gsap.from('#pr-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_section_diy_vs_professional_assistance = document.getElementById('pr-humanitarian-section-diy-vs-professional-assistance');
  if (pr_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_section_paran_specific_context = document.getElementById('pr-humanitarian-section-paran-specific-context');
  if (pr_humanitarian_section_paran_specific_context) {
    gsap.fromTo('#pr-humanitarian-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_section_what_our_clients_say = document.getElementById('pr-humanitarian-section-what-our-clients-say');
  if (pr_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#pr-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_section_frequently_asked_questions = document.getElementById('pr-humanitarian-section-frequently-asked-questions');
  if (pr_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#pr-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_section_international_support = document.getElementById('pr-humanitarian-section-international-support');
  if (pr_humanitarian_section_international_support) {
    gsap.fromTo('#pr-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_list_our_credentials = document.getElementById('pr-humanitarian-list-our-credentials');
  if (pr_humanitarian_list_our_credentials) {
    gsap.from('#pr-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_list_related_services = document.getElementById('pr-humanitarian-list-related-services');
  if (pr_humanitarian_list_related_services) {
    gsap.from('#pr-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_section_youre_in_good_hands = document.getElementById('pr-humanitarian-section-youre-in-good-hands');
  if (pr_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#pr-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_humanitarian_section_21 = document.getElementById('pr-humanitarian-section-21');
  if (pr_humanitarian_section_21) {
    gsap.fromTo('#pr-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('pr-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (pr_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#pr-digitalnomad-form-digital-nomad-residency-in-brazil input, #pr-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_list_quick_facts = document.getElementById('pr-digitalnomad-list-quick-facts');
  if (pr_digitalnomad_list_quick_facts) {
    gsap.from('#pr-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_list_common_challenges_applicants_face = document.getElementById('pr-digitalnomad-list-common-challenges-applicants-face');
  if (pr_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#pr-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('pr-digitalnomad-list-how-we-solve-these-challenges');
  if (pr_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#pr-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_section_residency_overview = document.getElementById('pr-digitalnomad-section-residency-overview');
  if (pr_digitalnomad_section_residency_overview) {
    gsap.fromTo('#pr-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_form_who_is_this_residency_for = document.getElementById('pr-digitalnomad-form-who-is-this-residency-for');
  if (pr_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#pr-digitalnomad-form-who-is-this-residency-for input, #pr-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_list_required_documents = document.getElementById('pr-digitalnomad-list-required-documents');
  if (pr_digitalnomad_list_required_documents) {
    gsap.from('#pr-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_list_application_process = document.getElementById('pr-digitalnomad-list-application-process');
  if (pr_digitalnomad_list_application_process) {
    gsap.from('#pr-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_section_timelines_deadlines = document.getElementById('pr-digitalnomad-section-timelines-deadlines');
  if (pr_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#pr-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_section_fees_costs = document.getElementById('pr-digitalnomad-section-fees-costs');
  if (pr_digitalnomad_section_fees_costs) {
    gsap.fromTo('#pr-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_list_risks_common_mistakes = document.getElementById('pr-digitalnomad-list-risks-common-mistakes');
  if (pr_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#pr-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('pr-digitalnomad-section-diy-vs-professional-assistance');
  if (pr_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_section_paran_specific_context = document.getElementById('pr-digitalnomad-section-paran-specific-context');
  if (pr_digitalnomad_section_paran_specific_context) {
    gsap.fromTo('#pr-digitalnomad-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_section_what_our_clients_say = document.getElementById('pr-digitalnomad-section-what-our-clients-say');
  if (pr_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#pr-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_section_frequently_asked_questions = document.getElementById('pr-digitalnomad-section-frequently-asked-questions');
  if (pr_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#pr-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_section_international_support = document.getElementById('pr-digitalnomad-section-international-support');
  if (pr_digitalnomad_section_international_support) {
    gsap.fromTo('#pr-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_list_our_credentials = document.getElementById('pr-digitalnomad-list-our-credentials');
  if (pr_digitalnomad_list_our_credentials) {
    gsap.from('#pr-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_list_related_services = document.getElementById('pr-digitalnomad-list-related-services');
  if (pr_digitalnomad_list_related_services) {
    gsap.from('#pr-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_section_youre_in_good_hands = document.getElementById('pr-digitalnomad-section-youre-in-good-hands');
  if (pr_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#pr-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_digitalnomad_section_21 = document.getElementById('pr-digitalnomad-section-21');
  if (pr_digitalnomad_section_21) {
    gsap.fromTo('#pr-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('pr-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (pr_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#pr-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #pr-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_list_quick_facts = document.getElementById('pr-familyreunion-list-quick-facts');
  if (pr_familyreunion_list_quick_facts) {
    gsap.from('#pr-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_list_common_challenges_applicants_face = document.getElementById('pr-familyreunion-list-common-challenges-applicants-face');
  if (pr_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#pr-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_list_how_we_solve_these_challenges = document.getElementById('pr-familyreunion-list-how-we-solve-these-challenges');
  if (pr_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#pr-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_section_residency_overview = document.getElementById('pr-familyreunion-section-residency-overview');
  if (pr_familyreunion_section_residency_overview) {
    gsap.fromTo('#pr-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_form_who_is_this_residency_for = document.getElementById('pr-familyreunion-form-who-is-this-residency-for');
  if (pr_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#pr-familyreunion-form-who-is-this-residency-for input, #pr-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_list_required_documents = document.getElementById('pr-familyreunion-list-required-documents');
  if (pr_familyreunion_list_required_documents) {
    gsap.from('#pr-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_list_application_process = document.getElementById('pr-familyreunion-list-application-process');
  if (pr_familyreunion_list_application_process) {
    gsap.from('#pr-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_section_timelines_deadlines = document.getElementById('pr-familyreunion-section-timelines-deadlines');
  if (pr_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#pr-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_section_fees_costs = document.getElementById('pr-familyreunion-section-fees-costs');
  if (pr_familyreunion_section_fees_costs) {
    gsap.fromTo('#pr-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_list_risks_common_mistakes = document.getElementById('pr-familyreunion-list-risks-common-mistakes');
  if (pr_familyreunion_list_risks_common_mistakes) {
    gsap.from('#pr-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_section_diy_vs_professional_assistance = document.getElementById('pr-familyreunion-section-diy-vs-professional-assistance');
  if (pr_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_section_paran_specific_context = document.getElementById('pr-familyreunion-section-paran-specific-context');
  if (pr_familyreunion_section_paran_specific_context) {
    gsap.fromTo('#pr-familyreunion-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_section_what_our_clients_say = document.getElementById('pr-familyreunion-section-what-our-clients-say');
  if (pr_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#pr-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_section_frequently_asked_questions = document.getElementById('pr-familyreunion-section-frequently-asked-questions');
  if (pr_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#pr-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_section_international_support = document.getElementById('pr-familyreunion-section-international-support');
  if (pr_familyreunion_section_international_support) {
    gsap.fromTo('#pr-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_list_our_credentials = document.getElementById('pr-familyreunion-list-our-credentials');
  if (pr_familyreunion_list_our_credentials) {
    gsap.from('#pr-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_list_related_services = document.getElementById('pr-familyreunion-list-related-services');
  if (pr_familyreunion_list_related_services) {
    gsap.from('#pr-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_section_youre_in_good_hands = document.getElementById('pr-familyreunion-section-youre-in-good-hands');
  if (pr_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#pr-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_familyreunion_section_21 = document.getElementById('pr-familyreunion-section-21');
  if (pr_familyreunion_section_21) {
    gsap.fromTo('#pr-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('pr-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (pr_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#pr-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #pr-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_list_quick_facts = document.getElementById('pr-mercosul-list-quick-facts');
  if (pr_mercosul_list_quick_facts) {
    gsap.from('#pr-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_list_common_challenges_applicants_face = document.getElementById('pr-mercosul-list-common-challenges-applicants-face');
  if (pr_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#pr-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_list_how_we_solve_these_challenges = document.getElementById('pr-mercosul-list-how-we-solve-these-challenges');
  if (pr_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#pr-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_section_residency_overview = document.getElementById('pr-mercosul-section-residency-overview');
  if (pr_mercosul_section_residency_overview) {
    gsap.fromTo('#pr-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_form_who_is_this_residency_for = document.getElementById('pr-mercosul-form-who-is-this-residency-for');
  if (pr_mercosul_form_who_is_this_residency_for) {
    gsap.from('#pr-mercosul-form-who-is-this-residency-for input, #pr-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_list_required_documents = document.getElementById('pr-mercosul-list-required-documents');
  if (pr_mercosul_list_required_documents) {
    gsap.from('#pr-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_list_application_process = document.getElementById('pr-mercosul-list-application-process');
  if (pr_mercosul_list_application_process) {
    gsap.from('#pr-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_section_timelines_deadlines = document.getElementById('pr-mercosul-section-timelines-deadlines');
  if (pr_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#pr-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_section_fees_costs = document.getElementById('pr-mercosul-section-fees-costs');
  if (pr_mercosul_section_fees_costs) {
    gsap.fromTo('#pr-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_list_risks_common_mistakes = document.getElementById('pr-mercosul-list-risks-common-mistakes');
  if (pr_mercosul_list_risks_common_mistakes) {
    gsap.from('#pr-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_section_diy_vs_professional_assistance = document.getElementById('pr-mercosul-section-diy-vs-professional-assistance');
  if (pr_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_section_paran_specific_context = document.getElementById('pr-mercosul-section-paran-specific-context');
  if (pr_mercosul_section_paran_specific_context) {
    gsap.fromTo('#pr-mercosul-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_section_what_our_clients_say = document.getElementById('pr-mercosul-section-what-our-clients-say');
  if (pr_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#pr-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_section_frequently_asked_questions = document.getElementById('pr-mercosul-section-frequently-asked-questions');
  if (pr_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#pr-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_section_international_support = document.getElementById('pr-mercosul-section-international-support');
  if (pr_mercosul_section_international_support) {
    gsap.fromTo('#pr-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_list_our_credentials = document.getElementById('pr-mercosul-list-our-credentials');
  if (pr_mercosul_list_our_credentials) {
    gsap.from('#pr-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_list_related_services = document.getElementById('pr-mercosul-list-related-services');
  if (pr_mercosul_list_related_services) {
    gsap.from('#pr-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_section_youre_in_good_hands = document.getElementById('pr-mercosul-section-youre-in-good-hands');
  if (pr_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#pr-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_mercosul_section_21 = document.getElementById('pr-mercosul-section-21');
  if (pr_mercosul_section_21) {
    gsap.fromTo('#pr-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('pr-retiree-form-retire-in-brazil-with-retiree-residency');
  if (pr_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#pr-retiree-form-retire-in-brazil-with-retiree-residency input, #pr-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_list_quick_facts = document.getElementById('pr-retiree-list-quick-facts');
  if (pr_retiree_list_quick_facts) {
    gsap.from('#pr-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_list_common_challenges_applicants_face = document.getElementById('pr-retiree-list-common-challenges-applicants-face');
  if (pr_retiree_list_common_challenges_applicants_face) {
    gsap.from('#pr-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_list_how_we_solve_these_challenges = document.getElementById('pr-retiree-list-how-we-solve-these-challenges');
  if (pr_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#pr-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_section_residency_overview = document.getElementById('pr-retiree-section-residency-overview');
  if (pr_retiree_section_residency_overview) {
    gsap.fromTo('#pr-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_form_who_is_this_residency_for = document.getElementById('pr-retiree-form-who-is-this-residency-for');
  if (pr_retiree_form_who_is_this_residency_for) {
    gsap.from('#pr-retiree-form-who-is-this-residency-for input, #pr-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_list_required_documents = document.getElementById('pr-retiree-list-required-documents');
  if (pr_retiree_list_required_documents) {
    gsap.from('#pr-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_list_application_process = document.getElementById('pr-retiree-list-application-process');
  if (pr_retiree_list_application_process) {
    gsap.from('#pr-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_section_timelines_deadlines = document.getElementById('pr-retiree-section-timelines-deadlines');
  if (pr_retiree_section_timelines_deadlines) {
    gsap.fromTo('#pr-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_section_fees_costs = document.getElementById('pr-retiree-section-fees-costs');
  if (pr_retiree_section_fees_costs) {
    gsap.fromTo('#pr-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_list_risks_common_mistakes = document.getElementById('pr-retiree-list-risks-common-mistakes');
  if (pr_retiree_list_risks_common_mistakes) {
    gsap.from('#pr-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_section_diy_vs_professional_assistance = document.getElementById('pr-retiree-section-diy-vs-professional-assistance');
  if (pr_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_section_paran_specific_context = document.getElementById('pr-retiree-section-paran-specific-context');
  if (pr_retiree_section_paran_specific_context) {
    gsap.fromTo('#pr-retiree-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_section_what_our_clients_say = document.getElementById('pr-retiree-section-what-our-clients-say');
  if (pr_retiree_section_what_our_clients_say) {
    gsap.fromTo('#pr-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_section_frequently_asked_questions = document.getElementById('pr-retiree-section-frequently-asked-questions');
  if (pr_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#pr-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_section_international_support = document.getElementById('pr-retiree-section-international-support');
  if (pr_retiree_section_international_support) {
    gsap.fromTo('#pr-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_list_our_credentials = document.getElementById('pr-retiree-list-our-credentials');
  if (pr_retiree_list_our_credentials) {
    gsap.from('#pr-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_list_related_services = document.getElementById('pr-retiree-list-related-services');
  if (pr_retiree_list_related_services) {
    gsap.from('#pr-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_section_youre_in_good_hands = document.getElementById('pr-retiree-section-youre-in-good-hands');
  if (pr_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#pr-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_retiree_section_21 = document.getElementById('pr-retiree-section-21');
  if (pr_retiree_section_21) {
    gsap.fromTo('#pr-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('pr-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (pr_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#pr-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #pr-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_list_quick_facts = document.getElementById('pr-volunteer-list-quick-facts');
  if (pr_volunteer_list_quick_facts) {
    gsap.from('#pr-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_list_common_challenges_applicants_face = document.getElementById('pr-volunteer-list-common-challenges-applicants-face');
  if (pr_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#pr-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_list_how_we_solve_these_challenges = document.getElementById('pr-volunteer-list-how-we-solve-these-challenges');
  if (pr_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#pr-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_section_residency_overview = document.getElementById('pr-volunteer-section-residency-overview');
  if (pr_volunteer_section_residency_overview) {
    gsap.fromTo('#pr-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_form_who_is_this_residency_for = document.getElementById('pr-volunteer-form-who-is-this-residency-for');
  if (pr_volunteer_form_who_is_this_residency_for) {
    gsap.from('#pr-volunteer-form-who-is-this-residency-for input, #pr-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_list_required_documents = document.getElementById('pr-volunteer-list-required-documents');
  if (pr_volunteer_list_required_documents) {
    gsap.from('#pr-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_list_application_process = document.getElementById('pr-volunteer-list-application-process');
  if (pr_volunteer_list_application_process) {
    gsap.from('#pr-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_section_timelines_deadlines = document.getElementById('pr-volunteer-section-timelines-deadlines');
  if (pr_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#pr-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_section_fees_costs = document.getElementById('pr-volunteer-section-fees-costs');
  if (pr_volunteer_section_fees_costs) {
    gsap.fromTo('#pr-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_list_risks_common_mistakes = document.getElementById('pr-volunteer-list-risks-common-mistakes');
  if (pr_volunteer_list_risks_common_mistakes) {
    gsap.from('#pr-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_section_diy_vs_professional_assistance = document.getElementById('pr-volunteer-section-diy-vs-professional-assistance');
  if (pr_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_section_paran_specific_context = document.getElementById('pr-volunteer-section-paran-specific-context');
  if (pr_volunteer_section_paran_specific_context) {
    gsap.fromTo('#pr-volunteer-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_section_what_our_clients_say = document.getElementById('pr-volunteer-section-what-our-clients-say');
  if (pr_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#pr-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_section_frequently_asked_questions = document.getElementById('pr-volunteer-section-frequently-asked-questions');
  if (pr_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#pr-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_section_international_support = document.getElementById('pr-volunteer-section-international-support');
  if (pr_volunteer_section_international_support) {
    gsap.fromTo('#pr-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_list_our_credentials = document.getElementById('pr-volunteer-list-our-credentials');
  if (pr_volunteer_list_our_credentials) {
    gsap.from('#pr-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_list_related_services = document.getElementById('pr-volunteer-list-related-services');
  if (pr_volunteer_list_related_services) {
    gsap.from('#pr-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_section_youre_in_good_hands = document.getElementById('pr-volunteer-section-youre-in-good-hands');
  if (pr_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#pr-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_volunteer_section_21 = document.getElementById('pr-volunteer-section-21');
  if (pr_volunteer_section_21) {
    gsap.fromTo('#pr-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('pr-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (pr_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#pr-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #pr-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_list_quick_facts = document.getElementById('pr-skilledworker-list-quick-facts');
  if (pr_skilledworker_list_quick_facts) {
    gsap.from('#pr-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_list_common_challenges_applicants_face = document.getElementById('pr-skilledworker-list-common-challenges-applicants-face');
  if (pr_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#pr-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_list_how_we_solve_these_challenges = document.getElementById('pr-skilledworker-list-how-we-solve-these-challenges');
  if (pr_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#pr-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_section_residency_overview = document.getElementById('pr-skilledworker-section-residency-overview');
  if (pr_skilledworker_section_residency_overview) {
    gsap.fromTo('#pr-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_form_who_is_this_residency_for = document.getElementById('pr-skilledworker-form-who-is-this-residency-for');
  if (pr_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#pr-skilledworker-form-who-is-this-residency-for input, #pr-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_list_required_documents = document.getElementById('pr-skilledworker-list-required-documents');
  if (pr_skilledworker_list_required_documents) {
    gsap.from('#pr-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_list_application_process = document.getElementById('pr-skilledworker-list-application-process');
  if (pr_skilledworker_list_application_process) {
    gsap.from('#pr-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_section_timelines_deadlines = document.getElementById('pr-skilledworker-section-timelines-deadlines');
  if (pr_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#pr-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_section_fees_costs = document.getElementById('pr-skilledworker-section-fees-costs');
  if (pr_skilledworker_section_fees_costs) {
    gsap.fromTo('#pr-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_list_risks_common_mistakes = document.getElementById('pr-skilledworker-list-risks-common-mistakes');
  if (pr_skilledworker_list_risks_common_mistakes) {
    gsap.from('#pr-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_section_diy_vs_professional_assistance = document.getElementById('pr-skilledworker-section-diy-vs-professional-assistance');
  if (pr_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_section_paran_specific_context = document.getElementById('pr-skilledworker-section-paran-specific-context');
  if (pr_skilledworker_section_paran_specific_context) {
    gsap.fromTo('#pr-skilledworker-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_section_what_our_clients_say = document.getElementById('pr-skilledworker-section-what-our-clients-say');
  if (pr_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#pr-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_section_frequently_asked_questions = document.getElementById('pr-skilledworker-section-frequently-asked-questions');
  if (pr_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#pr-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_section_international_support = document.getElementById('pr-skilledworker-section-international-support');
  if (pr_skilledworker_section_international_support) {
    gsap.fromTo('#pr-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_list_our_credentials = document.getElementById('pr-skilledworker-list-our-credentials');
  if (pr_skilledworker_list_our_credentials) {
    gsap.from('#pr-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_list_related_services = document.getElementById('pr-skilledworker-list-related-services');
  if (pr_skilledworker_list_related_services) {
    gsap.from('#pr-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_section_youre_in_good_hands = document.getElementById('pr-skilledworker-section-youre-in-good-hands');
  if (pr_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#pr-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_skilledworker_section_21 = document.getElementById('pr-skilledworker-section-21');
  if (pr_skilledworker_section_21) {
    gsap.fromTo('#pr-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('pr-religious-form-religious-residency-in-brazil-for-missions');
  if (pr_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#pr-religious-form-religious-residency-in-brazil-for-missions input, #pr-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_list_quick_facts = document.getElementById('pr-religious-list-quick-facts');
  if (pr_religious_list_quick_facts) {
    gsap.from('#pr-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_list_common_challenges_applicants_face = document.getElementById('pr-religious-list-common-challenges-applicants-face');
  if (pr_religious_list_common_challenges_applicants_face) {
    gsap.from('#pr-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_list_how_we_solve_these_challenges = document.getElementById('pr-religious-list-how-we-solve-these-challenges');
  if (pr_religious_list_how_we_solve_these_challenges) {
    gsap.from('#pr-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_section_residency_overview = document.getElementById('pr-religious-section-residency-overview');
  if (pr_religious_section_residency_overview) {
    gsap.fromTo('#pr-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_form_who_is_this_residency_for = document.getElementById('pr-religious-form-who-is-this-residency-for');
  if (pr_religious_form_who_is_this_residency_for) {
    gsap.from('#pr-religious-form-who-is-this-residency-for input, #pr-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_list_required_documents = document.getElementById('pr-religious-list-required-documents');
  if (pr_religious_list_required_documents) {
    gsap.from('#pr-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_list_application_process = document.getElementById('pr-religious-list-application-process');
  if (pr_religious_list_application_process) {
    gsap.from('#pr-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_section_timelines_deadlines = document.getElementById('pr-religious-section-timelines-deadlines');
  if (pr_religious_section_timelines_deadlines) {
    gsap.fromTo('#pr-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_section_fees_costs = document.getElementById('pr-religious-section-fees-costs');
  if (pr_religious_section_fees_costs) {
    gsap.fromTo('#pr-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_list_risks_common_mistakes = document.getElementById('pr-religious-list-risks-common-mistakes');
  if (pr_religious_list_risks_common_mistakes) {
    gsap.from('#pr-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_section_diy_vs_professional_assistance = document.getElementById('pr-religious-section-diy-vs-professional-assistance');
  if (pr_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_section_paran_specific_context = document.getElementById('pr-religious-section-paran-specific-context');
  if (pr_religious_section_paran_specific_context) {
    gsap.fromTo('#pr-religious-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_section_what_our_clients_say = document.getElementById('pr-religious-section-what-our-clients-say');
  if (pr_religious_section_what_our_clients_say) {
    gsap.fromTo('#pr-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_section_frequently_asked_questions = document.getElementById('pr-religious-section-frequently-asked-questions');
  if (pr_religious_section_frequently_asked_questions) {
    gsap.fromTo('#pr-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_section_international_support = document.getElementById('pr-religious-section-international-support');
  if (pr_religious_section_international_support) {
    gsap.fromTo('#pr-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_list_our_credentials = document.getElementById('pr-religious-list-our-credentials');
  if (pr_religious_list_our_credentials) {
    gsap.from('#pr-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_list_related_services = document.getElementById('pr-religious-list-related-services');
  if (pr_religious_list_related_services) {
    gsap.from('#pr-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_section_youre_in_good_hands = document.getElementById('pr-religious-section-youre-in-good-hands');
  if (pr_religious_section_youre_in_good_hands) {
    gsap.fromTo('#pr-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_religious_section_21 = document.getElementById('pr-religious-section-21');
  if (pr_religious_section_21) {
    gsap.fromTo('#pr-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('pr-investor-form-gain-residency-in-brazil-through-investment');
  if (pr_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#pr-investor-form-gain-residency-in-brazil-through-investment input, #pr-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_list_quick_facts = document.getElementById('pr-investor-list-quick-facts');
  if (pr_investor_list_quick_facts) {
    gsap.from('#pr-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_list_common_challenges_applicants_face = document.getElementById('pr-investor-list-common-challenges-applicants-face');
  if (pr_investor_list_common_challenges_applicants_face) {
    gsap.from('#pr-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_list_how_we_solve_these_challenges = document.getElementById('pr-investor-list-how-we-solve-these-challenges');
  if (pr_investor_list_how_we_solve_these_challenges) {
    gsap.from('#pr-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_section_residency_overview = document.getElementById('pr-investor-section-residency-overview');
  if (pr_investor_section_residency_overview) {
    gsap.fromTo('#pr-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_form_who_is_this_residency_for = document.getElementById('pr-investor-form-who-is-this-residency-for');
  if (pr_investor_form_who_is_this_residency_for) {
    gsap.from('#pr-investor-form-who-is-this-residency-for input, #pr-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_list_required_documents = document.getElementById('pr-investor-list-required-documents');
  if (pr_investor_list_required_documents) {
    gsap.from('#pr-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_list_application_process = document.getElementById('pr-investor-list-application-process');
  if (pr_investor_list_application_process) {
    gsap.from('#pr-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_section_timelines_deadlines = document.getElementById('pr-investor-section-timelines-deadlines');
  if (pr_investor_section_timelines_deadlines) {
    gsap.fromTo('#pr-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_section_fees_costs = document.getElementById('pr-investor-section-fees-costs');
  if (pr_investor_section_fees_costs) {
    gsap.fromTo('#pr-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_list_risks_common_mistakes = document.getElementById('pr-investor-list-risks-common-mistakes');
  if (pr_investor_list_risks_common_mistakes) {
    gsap.from('#pr-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_section_diy_vs_professional_assistance = document.getElementById('pr-investor-section-diy-vs-professional-assistance');
  if (pr_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_section_paran_specific_context = document.getElementById('pr-investor-section-paran-specific-context');
  if (pr_investor_section_paran_specific_context) {
    gsap.fromTo('#pr-investor-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_section_what_our_clients_say = document.getElementById('pr-investor-section-what-our-clients-say');
  if (pr_investor_section_what_our_clients_say) {
    gsap.fromTo('#pr-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_section_frequently_asked_questions = document.getElementById('pr-investor-section-frequently-asked-questions');
  if (pr_investor_section_frequently_asked_questions) {
    gsap.fromTo('#pr-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_section_international_support = document.getElementById('pr-investor-section-international-support');
  if (pr_investor_section_international_support) {
    gsap.fromTo('#pr-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_list_our_credentials = document.getElementById('pr-investor-list-our-credentials');
  if (pr_investor_list_our_credentials) {
    gsap.from('#pr-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_list_related_services = document.getElementById('pr-investor-list-related-services');
  if (pr_investor_list_related_services) {
    gsap.from('#pr-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_section_youre_in_good_hands = document.getElementById('pr-investor-section-youre-in-good-hands');
  if (pr_investor_section_youre_in_good_hands) {
    gsap.fromTo('#pr-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_investor_section_21 = document.getElementById('pr-investor-section-21');
  if (pr_investor_section_21) {
    gsap.fromTo('#pr-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('pr-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (pr_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#pr-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #pr-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_list_quick_facts = document.getElementById('pr-healthtreatment-list-quick-facts');
  if (pr_healthtreatment_list_quick_facts) {
    gsap.from('#pr-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_list_common_challenges_applicants_face = document.getElementById('pr-healthtreatment-list-common-challenges-applicants-face');
  if (pr_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#pr-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('pr-healthtreatment-list-how-we-solve-these-challenges');
  if (pr_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#pr-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_section_residency_overview = document.getElementById('pr-healthtreatment-section-residency-overview');
  if (pr_healthtreatment_section_residency_overview) {
    gsap.fromTo('#pr-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_form_who_is_this_residency_for = document.getElementById('pr-healthtreatment-form-who-is-this-residency-for');
  if (pr_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#pr-healthtreatment-form-who-is-this-residency-for input, #pr-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_list_required_documents = document.getElementById('pr-healthtreatment-list-required-documents');
  if (pr_healthtreatment_list_required_documents) {
    gsap.from('#pr-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_list_application_process = document.getElementById('pr-healthtreatment-list-application-process');
  if (pr_healthtreatment_list_application_process) {
    gsap.from('#pr-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_section_timelines_deadlines = document.getElementById('pr-healthtreatment-section-timelines-deadlines');
  if (pr_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#pr-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_section_fees_costs = document.getElementById('pr-healthtreatment-section-fees-costs');
  if (pr_healthtreatment_section_fees_costs) {
    gsap.fromTo('#pr-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_list_risks_common_mistakes = document.getElementById('pr-healthtreatment-list-risks-common-mistakes');
  if (pr_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#pr-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('pr-healthtreatment-section-diy-vs-professional-assistance');
  if (pr_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_section_paran_specific_context = document.getElementById('pr-healthtreatment-section-paran-specific-context');
  if (pr_healthtreatment_section_paran_specific_context) {
    gsap.fromTo('#pr-healthtreatment-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_section_what_our_clients_say = document.getElementById('pr-healthtreatment-section-what-our-clients-say');
  if (pr_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#pr-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_section_frequently_asked_questions = document.getElementById('pr-healthtreatment-section-frequently-asked-questions');
  if (pr_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#pr-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_section_international_support = document.getElementById('pr-healthtreatment-section-international-support');
  if (pr_healthtreatment_section_international_support) {
    gsap.fromTo('#pr-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_list_our_credentials = document.getElementById('pr-healthtreatment-list-our-credentials');
  if (pr_healthtreatment_list_our_credentials) {
    gsap.from('#pr-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_list_related_services = document.getElementById('pr-healthtreatment-list-related-services');
  if (pr_healthtreatment_list_related_services) {
    gsap.from('#pr-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_section_youre_in_good_hands = document.getElementById('pr-healthtreatment-section-youre-in-good-hands');
  if (pr_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#pr-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_healthtreatment_section_21 = document.getElementById('pr-healthtreatment-section-21');
  if (pr_healthtreatment_section_21) {
    gsap.fromTo('#pr-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('pr-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (pr_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#pr-cplp-form-residency-for-cplp-citizens-in-brazil input, #pr-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_list_quick_facts = document.getElementById('pr-cplp-list-quick-facts');
  if (pr_cplp_list_quick_facts) {
    gsap.from('#pr-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_list_common_challenges_applicants_face = document.getElementById('pr-cplp-list-common-challenges-applicants-face');
  if (pr_cplp_list_common_challenges_applicants_face) {
    gsap.from('#pr-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_list_how_we_solve_these_challenges = document.getElementById('pr-cplp-list-how-we-solve-these-challenges');
  if (pr_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#pr-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_section_residency_overview = document.getElementById('pr-cplp-section-residency-overview');
  if (pr_cplp_section_residency_overview) {
    gsap.fromTo('#pr-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_form_who_is_this_residency_for = document.getElementById('pr-cplp-form-who-is-this-residency-for');
  if (pr_cplp_form_who_is_this_residency_for) {
    gsap.from('#pr-cplp-form-who-is-this-residency-for input, #pr-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_list_required_documents = document.getElementById('pr-cplp-list-required-documents');
  if (pr_cplp_list_required_documents) {
    gsap.from('#pr-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_list_application_process = document.getElementById('pr-cplp-list-application-process');
  if (pr_cplp_list_application_process) {
    gsap.from('#pr-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_section_timelines_deadlines = document.getElementById('pr-cplp-section-timelines-deadlines');
  if (pr_cplp_section_timelines_deadlines) {
    gsap.fromTo('#pr-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_section_fees_costs = document.getElementById('pr-cplp-section-fees-costs');
  if (pr_cplp_section_fees_costs) {
    gsap.fromTo('#pr-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_list_risks_common_mistakes = document.getElementById('pr-cplp-list-risks-common-mistakes');
  if (pr_cplp_list_risks_common_mistakes) {
    gsap.from('#pr-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_section_diy_vs_professional_assistance = document.getElementById('pr-cplp-section-diy-vs-professional-assistance');
  if (pr_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_section_paran_specific_context = document.getElementById('pr-cplp-section-paran-specific-context');
  if (pr_cplp_section_paran_specific_context) {
    gsap.fromTo('#pr-cplp-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_section_what_our_clients_say = document.getElementById('pr-cplp-section-what-our-clients-say');
  if (pr_cplp_section_what_our_clients_say) {
    gsap.fromTo('#pr-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_section_frequently_asked_questions = document.getElementById('pr-cplp-section-frequently-asked-questions');
  if (pr_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#pr-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_section_international_support = document.getElementById('pr-cplp-section-international-support');
  if (pr_cplp_section_international_support) {
    gsap.fromTo('#pr-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_list_our_credentials = document.getElementById('pr-cplp-list-our-credentials');
  if (pr_cplp_list_our_credentials) {
    gsap.from('#pr-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_list_related_services = document.getElementById('pr-cplp-list-related-services');
  if (pr_cplp_list_related_services) {
    gsap.from('#pr-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_section_youre_in_good_hands = document.getElementById('pr-cplp-section-youre-in-good-hands');
  if (pr_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#pr-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_cplp_section_21 = document.getElementById('pr-cplp-section-21');
  if (pr_cplp_section_21) {
    gsap.fromTo('#pr-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('pr-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (pr_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#pr-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #pr-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_list_quick_facts = document.getElementById('pr-youthexchange-list-quick-facts');
  if (pr_youthexchange_list_quick_facts) {
    gsap.from('#pr-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_list_common_challenges_applicants_face = document.getElementById('pr-youthexchange-list-common-challenges-applicants-face');
  if (pr_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#pr-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_list_how_we_solve_these_challenges = document.getElementById('pr-youthexchange-list-how-we-solve-these-challenges');
  if (pr_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#pr-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_section_residency_overview = document.getElementById('pr-youthexchange-section-residency-overview');
  if (pr_youthexchange_section_residency_overview) {
    gsap.fromTo('#pr-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_form_who_is_this_residency_for = document.getElementById('pr-youthexchange-form-who-is-this-residency-for');
  if (pr_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#pr-youthexchange-form-who-is-this-residency-for input, #pr-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_list_required_documents = document.getElementById('pr-youthexchange-list-required-documents');
  if (pr_youthexchange_list_required_documents) {
    gsap.from('#pr-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_list_application_process = document.getElementById('pr-youthexchange-list-application-process');
  if (pr_youthexchange_list_application_process) {
    gsap.from('#pr-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_section_timelines_deadlines = document.getElementById('pr-youthexchange-section-timelines-deadlines');
  if (pr_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#pr-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_section_fees_costs = document.getElementById('pr-youthexchange-section-fees-costs');
  if (pr_youthexchange_section_fees_costs) {
    gsap.fromTo('#pr-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_list_risks_common_mistakes = document.getElementById('pr-youthexchange-list-risks-common-mistakes');
  if (pr_youthexchange_list_risks_common_mistakes) {
    gsap.from('#pr-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_section_diy_vs_professional_assistance = document.getElementById('pr-youthexchange-section-diy-vs-professional-assistance');
  if (pr_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_section_paran_specific_context = document.getElementById('pr-youthexchange-section-paran-specific-context');
  if (pr_youthexchange_section_paran_specific_context) {
    gsap.fromTo('#pr-youthexchange-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_section_what_our_clients_say = document.getElementById('pr-youthexchange-section-what-our-clients-say');
  if (pr_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#pr-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_section_frequently_asked_questions = document.getElementById('pr-youthexchange-section-frequently-asked-questions');
  if (pr_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#pr-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_section_international_support = document.getElementById('pr-youthexchange-section-international-support');
  if (pr_youthexchange_section_international_support) {
    gsap.fromTo('#pr-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_list_our_credentials = document.getElementById('pr-youthexchange-list-our-credentials');
  if (pr_youthexchange_list_our_credentials) {
    gsap.from('#pr-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_list_related_services = document.getElementById('pr-youthexchange-list-related-services');
  if (pr_youthexchange_list_related_services) {
    gsap.from('#pr-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_section_youre_in_good_hands = document.getElementById('pr-youthexchange-section-youre-in-good-hands');
  if (pr_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#pr-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_youthexchange_section_21 = document.getElementById('pr-youthexchange-section-21');
  if (pr_youthexchange_section_21) {
    gsap.fromTo('#pr-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('pr-work-form-work-and-reside-in-brazil-with-work-residency');
  if (pr_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#pr-work-form-work-and-reside-in-brazil-with-work-residency input, #pr-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_list_quick_facts = document.getElementById('pr-work-list-quick-facts');
  if (pr_work_list_quick_facts) {
    gsap.from('#pr-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_list_common_challenges_applicants_face = document.getElementById('pr-work-list-common-challenges-applicants-face');
  if (pr_work_list_common_challenges_applicants_face) {
    gsap.from('#pr-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_list_how_we_solve_these_challenges = document.getElementById('pr-work-list-how-we-solve-these-challenges');
  if (pr_work_list_how_we_solve_these_challenges) {
    gsap.from('#pr-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_section_residency_overview = document.getElementById('pr-work-section-residency-overview');
  if (pr_work_section_residency_overview) {
    gsap.fromTo('#pr-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_form_who_is_this_residency_for = document.getElementById('pr-work-form-who-is-this-residency-for');
  if (pr_work_form_who_is_this_residency_for) {
    gsap.from('#pr-work-form-who-is-this-residency-for input, #pr-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_list_required_documents = document.getElementById('pr-work-list-required-documents');
  if (pr_work_list_required_documents) {
    gsap.from('#pr-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_list_application_process = document.getElementById('pr-work-list-application-process');
  if (pr_work_list_application_process) {
    gsap.from('#pr-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_section_timelines_deadlines = document.getElementById('pr-work-section-timelines-deadlines');
  if (pr_work_section_timelines_deadlines) {
    gsap.fromTo('#pr-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_section_fees_costs = document.getElementById('pr-work-section-fees-costs');
  if (pr_work_section_fees_costs) {
    gsap.fromTo('#pr-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_list_risks_common_mistakes = document.getElementById('pr-work-list-risks-common-mistakes');
  if (pr_work_list_risks_common_mistakes) {
    gsap.from('#pr-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_section_diy_vs_professional_assistance = document.getElementById('pr-work-section-diy-vs-professional-assistance');
  if (pr_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_section_paran_specific_context = document.getElementById('pr-work-section-paran-specific-context');
  if (pr_work_section_paran_specific_context) {
    gsap.fromTo('#pr-work-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_section_what_our_clients_say = document.getElementById('pr-work-section-what-our-clients-say');
  if (pr_work_section_what_our_clients_say) {
    gsap.fromTo('#pr-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_section_frequently_asked_questions = document.getElementById('pr-work-section-frequently-asked-questions');
  if (pr_work_section_frequently_asked_questions) {
    gsap.fromTo('#pr-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_section_international_support = document.getElementById('pr-work-section-international-support');
  if (pr_work_section_international_support) {
    gsap.fromTo('#pr-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_list_our_credentials = document.getElementById('pr-work-list-our-credentials');
  if (pr_work_list_our_credentials) {
    gsap.from('#pr-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_list_related_services = document.getElementById('pr-work-list-related-services');
  if (pr_work_list_related_services) {
    gsap.from('#pr-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_section_youre_in_good_hands = document.getElementById('pr-work-section-youre-in-good-hands');
  if (pr_work_section_youre_in_good_hands) {
    gsap.fromTo('#pr-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_work_section_21 = document.getElementById('pr-work-section-21');
  if (pr_work_section_21) {
    gsap.fromTo('#pr-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('pr-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (pr_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#pr-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #pr-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_list_quick_facts = document.getElementById('pr-startup-list-quick-facts');
  if (pr_startup_list_quick_facts) {
    gsap.from('#pr-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_list_common_challenges_applicants_face = document.getElementById('pr-startup-list-common-challenges-applicants-face');
  if (pr_startup_list_common_challenges_applicants_face) {
    gsap.from('#pr-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_list_how_we_solve_these_challenges = document.getElementById('pr-startup-list-how-we-solve-these-challenges');
  if (pr_startup_list_how_we_solve_these_challenges) {
    gsap.from('#pr-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_section_visa_overview = document.getElementById('pr-startup-section-visa-overview');
  if (pr_startup_section_visa_overview) {
    gsap.fromTo('#pr-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_form_who_is_this_visa_for = document.getElementById('pr-startup-form-who-is-this-visa-for');
  if (pr_startup_form_who_is_this_visa_for) {
    gsap.from('#pr-startup-form-who-is-this-visa-for input, #pr-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_list_required_documents = document.getElementById('pr-startup-list-required-documents');
  if (pr_startup_list_required_documents) {
    gsap.from('#pr-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_list_application_process = document.getElementById('pr-startup-list-application-process');
  if (pr_startup_list_application_process) {
    gsap.from('#pr-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_section_timelines_deadlines = document.getElementById('pr-startup-section-timelines-deadlines');
  if (pr_startup_section_timelines_deadlines) {
    gsap.fromTo('#pr-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_section_fees_costs = document.getElementById('pr-startup-section-fees-costs');
  if (pr_startup_section_fees_costs) {
    gsap.fromTo('#pr-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_list_risks_common_mistakes = document.getElementById('pr-startup-list-risks-common-mistakes');
  if (pr_startup_list_risks_common_mistakes) {
    gsap.from('#pr-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_section_diy_vs_professional_assistance = document.getElementById('pr-startup-section-diy-vs-professional-assistance');
  if (pr_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_section_paran_specific_context = document.getElementById('pr-startup-section-paran-specific-context');
  if (pr_startup_section_paran_specific_context) {
    gsap.fromTo('#pr-startup-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_section_what_our_clients_say = document.getElementById('pr-startup-section-what-our-clients-say');
  if (pr_startup_section_what_our_clients_say) {
    gsap.fromTo('#pr-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_section_frequently_asked_questions = document.getElementById('pr-startup-section-frequently-asked-questions');
  if (pr_startup_section_frequently_asked_questions) {
    gsap.fromTo('#pr-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_section_international_support = document.getElementById('pr-startup-section-international-support');
  if (pr_startup_section_international_support) {
    gsap.fromTo('#pr-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_list_our_credentials = document.getElementById('pr-startup-list-our-credentials');
  if (pr_startup_list_our_credentials) {
    gsap.from('#pr-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_list_related_services = document.getElementById('pr-startup-list-related-services');
  if (pr_startup_list_related_services) {
    gsap.from('#pr-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_section_youre_in_good_hands = document.getElementById('pr-startup-section-youre-in-good-hands');
  if (pr_startup_section_youre_in_good_hands) {
    gsap.fromTo('#pr-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_startup_section_21 = document.getElementById('pr-startup-section-21');
  if (pr_startup_section_21) {
    gsap.fromTo('#pr-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('pr-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (pr_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#pr-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #pr-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_list_quick_facts = document.getElementById('pr-family-list-quick-facts');
  if (pr_family_list_quick_facts) {
    gsap.from('#pr-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_list_common_challenges_applicants_face = document.getElementById('pr-family-list-common-challenges-applicants-face');
  if (pr_family_list_common_challenges_applicants_face) {
    gsap.from('#pr-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_list_how_we_solve_these_challenges = document.getElementById('pr-family-list-how-we-solve-these-challenges');
  if (pr_family_list_how_we_solve_these_challenges) {
    gsap.from('#pr-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_section_visa_overview = document.getElementById('pr-family-section-visa-overview');
  if (pr_family_section_visa_overview) {
    gsap.fromTo('#pr-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_form_who_is_this_visa_for = document.getElementById('pr-family-form-who-is-this-visa-for');
  if (pr_family_form_who_is_this_visa_for) {
    gsap.from('#pr-family-form-who-is-this-visa-for input, #pr-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_list_required_documents = document.getElementById('pr-family-list-required-documents');
  if (pr_family_list_required_documents) {
    gsap.from('#pr-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_list_application_process = document.getElementById('pr-family-list-application-process');
  if (pr_family_list_application_process) {
    gsap.from('#pr-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_section_timelines_deadlines = document.getElementById('pr-family-section-timelines-deadlines');
  if (pr_family_section_timelines_deadlines) {
    gsap.fromTo('#pr-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_section_fees_costs = document.getElementById('pr-family-section-fees-costs');
  if (pr_family_section_fees_costs) {
    gsap.fromTo('#pr-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_list_risks_common_mistakes = document.getElementById('pr-family-list-risks-common-mistakes');
  if (pr_family_list_risks_common_mistakes) {
    gsap.from('#pr-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_section_diy_vs_professional_assistance = document.getElementById('pr-family-section-diy-vs-professional-assistance');
  if (pr_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_section_paran_specific_context = document.getElementById('pr-family-section-paran-specific-context');
  if (pr_family_section_paran_specific_context) {
    gsap.fromTo('#pr-family-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_section_what_our_clients_say = document.getElementById('pr-family-section-what-our-clients-say');
  if (pr_family_section_what_our_clients_say) {
    gsap.fromTo('#pr-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_section_frequently_asked_questions = document.getElementById('pr-family-section-frequently-asked-questions');
  if (pr_family_section_frequently_asked_questions) {
    gsap.fromTo('#pr-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_section_international_support = document.getElementById('pr-family-section-international-support');
  if (pr_family_section_international_support) {
    gsap.fromTo('#pr-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_list_our_credentials = document.getElementById('pr-family-list-our-credentials');
  if (pr_family_list_our_credentials) {
    gsap.from('#pr-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_list_related_services = document.getElementById('pr-family-list-related-services');
  if (pr_family_list_related_services) {
    gsap.from('#pr-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_section_youre_in_good_hands = document.getElementById('pr-family-section-youre-in-good-hands');
  if (pr_family_section_youre_in_good_hands) {
    gsap.fromTo('#pr-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_family_section_21 = document.getElementById('pr-family-section-21');
  if (pr_family_section_21) {
    gsap.fromTo('#pr-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('pr-sports-form-compete-in-brazil-with-the-sports-visa');
  if (pr_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#pr-sports-form-compete-in-brazil-with-the-sports-visa input, #pr-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_list_quick_facts = document.getElementById('pr-sports-list-quick-facts');
  if (pr_sports_list_quick_facts) {
    gsap.from('#pr-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_list_common_challenges_applicants_face = document.getElementById('pr-sports-list-common-challenges-applicants-face');
  if (pr_sports_list_common_challenges_applicants_face) {
    gsap.from('#pr-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_list_how_we_solve_these_challenges = document.getElementById('pr-sports-list-how-we-solve-these-challenges');
  if (pr_sports_list_how_we_solve_these_challenges) {
    gsap.from('#pr-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_section_visa_overview = document.getElementById('pr-sports-section-visa-overview');
  if (pr_sports_section_visa_overview) {
    gsap.fromTo('#pr-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_form_who_is_this_visa_for = document.getElementById('pr-sports-form-who-is-this-visa-for');
  if (pr_sports_form_who_is_this_visa_for) {
    gsap.from('#pr-sports-form-who-is-this-visa-for input, #pr-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_list_required_documents = document.getElementById('pr-sports-list-required-documents');
  if (pr_sports_list_required_documents) {
    gsap.from('#pr-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_list_application_process = document.getElementById('pr-sports-list-application-process');
  if (pr_sports_list_application_process) {
    gsap.from('#pr-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_section_timelines_deadlines = document.getElementById('pr-sports-section-timelines-deadlines');
  if (pr_sports_section_timelines_deadlines) {
    gsap.fromTo('#pr-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_section_fees_costs = document.getElementById('pr-sports-section-fees-costs');
  if (pr_sports_section_fees_costs) {
    gsap.fromTo('#pr-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_list_risks_common_mistakes = document.getElementById('pr-sports-list-risks-common-mistakes');
  if (pr_sports_list_risks_common_mistakes) {
    gsap.from('#pr-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_section_diy_vs_professional_assistance = document.getElementById('pr-sports-section-diy-vs-professional-assistance');
  if (pr_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_section_paran_specific_context = document.getElementById('pr-sports-section-paran-specific-context');
  if (pr_sports_section_paran_specific_context) {
    gsap.fromTo('#pr-sports-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_section_what_our_clients_say = document.getElementById('pr-sports-section-what-our-clients-say');
  if (pr_sports_section_what_our_clients_say) {
    gsap.fromTo('#pr-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_section_frequently_asked_questions = document.getElementById('pr-sports-section-frequently-asked-questions');
  if (pr_sports_section_frequently_asked_questions) {
    gsap.fromTo('#pr-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_section_international_support = document.getElementById('pr-sports-section-international-support');
  if (pr_sports_section_international_support) {
    gsap.fromTo('#pr-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_list_our_credentials = document.getElementById('pr-sports-list-our-credentials');
  if (pr_sports_list_our_credentials) {
    gsap.from('#pr-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_list_related_services = document.getElementById('pr-sports-list-related-services');
  if (pr_sports_list_related_services) {
    gsap.from('#pr-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_section_youre_in_good_hands = document.getElementById('pr-sports-section-youre-in-good-hands');
  if (pr_sports_section_youre_in_good_hands) {
    gsap.fromTo('#pr-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_sports_section_21 = document.getElementById('pr-sports-section-21');
  if (pr_sports_section_21) {
    gsap.fromTo('#pr-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('pr-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (pr_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#pr-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #pr-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_list_quick_facts = document.getElementById('pr-medical-list-quick-facts');
  if (pr_medical_list_quick_facts) {
    gsap.from('#pr-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_list_common_challenges_applicants_face = document.getElementById('pr-medical-list-common-challenges-applicants-face');
  if (pr_medical_list_common_challenges_applicants_face) {
    gsap.from('#pr-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_list_how_we_solve_these_challenges = document.getElementById('pr-medical-list-how-we-solve-these-challenges');
  if (pr_medical_list_how_we_solve_these_challenges) {
    gsap.from('#pr-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_section_visa_overview = document.getElementById('pr-medical-section-visa-overview');
  if (pr_medical_section_visa_overview) {
    gsap.fromTo('#pr-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_form_who_is_this_visa_for = document.getElementById('pr-medical-form-who-is-this-visa-for');
  if (pr_medical_form_who_is_this_visa_for) {
    gsap.from('#pr-medical-form-who-is-this-visa-for input, #pr-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_list_required_documents = document.getElementById('pr-medical-list-required-documents');
  if (pr_medical_list_required_documents) {
    gsap.from('#pr-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_list_application_process = document.getElementById('pr-medical-list-application-process');
  if (pr_medical_list_application_process) {
    gsap.from('#pr-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_section_timelines_deadlines = document.getElementById('pr-medical-section-timelines-deadlines');
  if (pr_medical_section_timelines_deadlines) {
    gsap.fromTo('#pr-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_section_fees_costs = document.getElementById('pr-medical-section-fees-costs');
  if (pr_medical_section_fees_costs) {
    gsap.fromTo('#pr-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_list_risks_common_mistakes = document.getElementById('pr-medical-list-risks-common-mistakes');
  if (pr_medical_list_risks_common_mistakes) {
    gsap.from('#pr-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_section_diy_vs_professional_assistance = document.getElementById('pr-medical-section-diy-vs-professional-assistance');
  if (pr_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_section_paran_specific_context = document.getElementById('pr-medical-section-paran-specific-context');
  if (pr_medical_section_paran_specific_context) {
    gsap.fromTo('#pr-medical-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_section_what_our_clients_say = document.getElementById('pr-medical-section-what-our-clients-say');
  if (pr_medical_section_what_our_clients_say) {
    gsap.fromTo('#pr-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_section_frequently_asked_questions = document.getElementById('pr-medical-section-frequently-asked-questions');
  if (pr_medical_section_frequently_asked_questions) {
    gsap.fromTo('#pr-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_section_international_support = document.getElementById('pr-medical-section-international-support');
  if (pr_medical_section_international_support) {
    gsap.fromTo('#pr-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_list_our_credentials = document.getElementById('pr-medical-list-our-credentials');
  if (pr_medical_list_our_credentials) {
    gsap.from('#pr-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_list_related_services = document.getElementById('pr-medical-list-related-services');
  if (pr_medical_list_related_services) {
    gsap.from('#pr-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_section_youre_in_good_hands = document.getElementById('pr-medical-section-youre-in-good-hands');
  if (pr_medical_section_youre_in_good_hands) {
    gsap.fromTo('#pr-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_medical_section_21 = document.getElementById('pr-medical-section-21');
  if (pr_medical_section_21) {
    gsap.fromTo('#pr-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('pr-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (pr_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#pr-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #pr-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_list_quick_facts = document.getElementById('pr-tourist-list-quick-facts');
  if (pr_tourist_list_quick_facts) {
    gsap.from('#pr-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_list_common_challenges_applicants_face = document.getElementById('pr-tourist-list-common-challenges-applicants-face');
  if (pr_tourist_list_common_challenges_applicants_face) {
    gsap.from('#pr-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_list_how_we_solve_these_challenges = document.getElementById('pr-tourist-list-how-we-solve-these-challenges');
  if (pr_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#pr-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_section_visa_overview = document.getElementById('pr-tourist-section-visa-overview');
  if (pr_tourist_section_visa_overview) {
    gsap.fromTo('#pr-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_form_who_is_this_visa_for = document.getElementById('pr-tourist-form-who-is-this-visa-for');
  if (pr_tourist_form_who_is_this_visa_for) {
    gsap.from('#pr-tourist-form-who-is-this-visa-for input, #pr-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_list_required_documents = document.getElementById('pr-tourist-list-required-documents');
  if (pr_tourist_list_required_documents) {
    gsap.from('#pr-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_list_application_process = document.getElementById('pr-tourist-list-application-process');
  if (pr_tourist_list_application_process) {
    gsap.from('#pr-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_section_timelines_deadlines = document.getElementById('pr-tourist-section-timelines-deadlines');
  if (pr_tourist_section_timelines_deadlines) {
    gsap.fromTo('#pr-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_section_fees_costs = document.getElementById('pr-tourist-section-fees-costs');
  if (pr_tourist_section_fees_costs) {
    gsap.fromTo('#pr-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_list_risks_common_mistakes = document.getElementById('pr-tourist-list-risks-common-mistakes');
  if (pr_tourist_list_risks_common_mistakes) {
    gsap.from('#pr-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_section_diy_vs_professional_assistance = document.getElementById('pr-tourist-section-diy-vs-professional-assistance');
  if (pr_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_section_paran_specific_context = document.getElementById('pr-tourist-section-paran-specific-context');
  if (pr_tourist_section_paran_specific_context) {
    gsap.fromTo('#pr-tourist-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_section_what_our_clients_say = document.getElementById('pr-tourist-section-what-our-clients-say');
  if (pr_tourist_section_what_our_clients_say) {
    gsap.fromTo('#pr-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_section_frequently_asked_questions = document.getElementById('pr-tourist-section-frequently-asked-questions');
  if (pr_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#pr-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_section_international_support = document.getElementById('pr-tourist-section-international-support');
  if (pr_tourist_section_international_support) {
    gsap.fromTo('#pr-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_list_our_credentials = document.getElementById('pr-tourist-list-our-credentials');
  if (pr_tourist_list_our_credentials) {
    gsap.from('#pr-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_list_related_services = document.getElementById('pr-tourist-list-related-services');
  if (pr_tourist_list_related_services) {
    gsap.from('#pr-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_section_youre_in_good_hands = document.getElementById('pr-tourist-section-youre-in-good-hands');
  if (pr_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#pr-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_tourist_section_21 = document.getElementById('pr-tourist-section-21');
  if (pr_tourist_section_21) {
    gsap.fromTo('#pr-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('pr-transit-form-transit-through-brazil-with-the-transit-visa');
  if (pr_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#pr-transit-form-transit-through-brazil-with-the-transit-visa input, #pr-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_list_quick_facts = document.getElementById('pr-transit-list-quick-facts');
  if (pr_transit_list_quick_facts) {
    gsap.from('#pr-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_list_common_challenges_applicants_face = document.getElementById('pr-transit-list-common-challenges-applicants-face');
  if (pr_transit_list_common_challenges_applicants_face) {
    gsap.from('#pr-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_list_how_we_solve_these_challenges = document.getElementById('pr-transit-list-how-we-solve-these-challenges');
  if (pr_transit_list_how_we_solve_these_challenges) {
    gsap.from('#pr-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_section_visa_overview = document.getElementById('pr-transit-section-visa-overview');
  if (pr_transit_section_visa_overview) {
    gsap.fromTo('#pr-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_form_who_is_this_visa_for = document.getElementById('pr-transit-form-who-is-this-visa-for');
  if (pr_transit_form_who_is_this_visa_for) {
    gsap.from('#pr-transit-form-who-is-this-visa-for input, #pr-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_list_required_documents = document.getElementById('pr-transit-list-required-documents');
  if (pr_transit_list_required_documents) {
    gsap.from('#pr-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_list_application_process = document.getElementById('pr-transit-list-application-process');
  if (pr_transit_list_application_process) {
    gsap.from('#pr-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_section_timelines_deadlines = document.getElementById('pr-transit-section-timelines-deadlines');
  if (pr_transit_section_timelines_deadlines) {
    gsap.fromTo('#pr-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_section_fees_costs = document.getElementById('pr-transit-section-fees-costs');
  if (pr_transit_section_fees_costs) {
    gsap.fromTo('#pr-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_list_risks_common_mistakes = document.getElementById('pr-transit-list-risks-common-mistakes');
  if (pr_transit_list_risks_common_mistakes) {
    gsap.from('#pr-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_section_diy_vs_professional_assistance = document.getElementById('pr-transit-section-diy-vs-professional-assistance');
  if (pr_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_section_paran_specific_context = document.getElementById('pr-transit-section-paran-specific-context');
  if (pr_transit_section_paran_specific_context) {
    gsap.fromTo('#pr-transit-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_section_what_our_clients_say = document.getElementById('pr-transit-section-what-our-clients-say');
  if (pr_transit_section_what_our_clients_say) {
    gsap.fromTo('#pr-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_section_frequently_asked_questions = document.getElementById('pr-transit-section-frequently-asked-questions');
  if (pr_transit_section_frequently_asked_questions) {
    gsap.fromTo('#pr-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_section_international_support = document.getElementById('pr-transit-section-international-support');
  if (pr_transit_section_international_support) {
    gsap.fromTo('#pr-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_list_our_credentials = document.getElementById('pr-transit-list-our-credentials');
  if (pr_transit_list_our_credentials) {
    gsap.from('#pr-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_list_related_services = document.getElementById('pr-transit-list-related-services');
  if (pr_transit_list_related_services) {
    gsap.from('#pr-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_section_youre_in_good_hands = document.getElementById('pr-transit-section-youre-in-good-hands');
  if (pr_transit_section_youre_in_good_hands) {
    gsap.fromTo('#pr-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_transit_section_21 = document.getElementById('pr-transit-section-21');
  if (pr_transit_section_21) {
    gsap.fromTo('#pr-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_form_study_in_brazil_with_the_student_visa = document.getElementById('pr-student-form-study-in-brazil-with-the-student-visa');
  if (pr_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#pr-student-form-study-in-brazil-with-the-student-visa input, #pr-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_list_quick_facts = document.getElementById('pr-student-list-quick-facts');
  if (pr_student_list_quick_facts) {
    gsap.from('#pr-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_list_common_challenges_applicants_face = document.getElementById('pr-student-list-common-challenges-applicants-face');
  if (pr_student_list_common_challenges_applicants_face) {
    gsap.from('#pr-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_list_how_we_solve_these_challenges = document.getElementById('pr-student-list-how-we-solve-these-challenges');
  if (pr_student_list_how_we_solve_these_challenges) {
    gsap.from('#pr-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_section_visa_overview = document.getElementById('pr-student-section-visa-overview');
  if (pr_student_section_visa_overview) {
    gsap.fromTo('#pr-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_form_who_is_this_visa_for = document.getElementById('pr-student-form-who-is-this-visa-for');
  if (pr_student_form_who_is_this_visa_for) {
    gsap.from('#pr-student-form-who-is-this-visa-for input, #pr-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_list_required_documents = document.getElementById('pr-student-list-required-documents');
  if (pr_student_list_required_documents) {
    gsap.from('#pr-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_list_application_process = document.getElementById('pr-student-list-application-process');
  if (pr_student_list_application_process) {
    gsap.from('#pr-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_section_timelines_deadlines = document.getElementById('pr-student-section-timelines-deadlines');
  if (pr_student_section_timelines_deadlines) {
    gsap.fromTo('#pr-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_section_fees_costs = document.getElementById('pr-student-section-fees-costs');
  if (pr_student_section_fees_costs) {
    gsap.fromTo('#pr-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_list_risks_common_mistakes = document.getElementById('pr-student-list-risks-common-mistakes');
  if (pr_student_list_risks_common_mistakes) {
    gsap.from('#pr-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_section_diy_vs_professional_assistance = document.getElementById('pr-student-section-diy-vs-professional-assistance');
  if (pr_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_section_paran_specific_context = document.getElementById('pr-student-section-paran-specific-context');
  if (pr_student_section_paran_specific_context) {
    gsap.fromTo('#pr-student-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_section_what_our_clients_say = document.getElementById('pr-student-section-what-our-clients-say');
  if (pr_student_section_what_our_clients_say) {
    gsap.fromTo('#pr-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_section_frequently_asked_questions = document.getElementById('pr-student-section-frequently-asked-questions');
  if (pr_student_section_frequently_asked_questions) {
    gsap.fromTo('#pr-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_section_international_support = document.getElementById('pr-student-section-international-support');
  if (pr_student_section_international_support) {
    gsap.fromTo('#pr-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_list_our_credentials = document.getElementById('pr-student-list-our-credentials');
  if (pr_student_list_our_credentials) {
    gsap.from('#pr-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_list_related_services = document.getElementById('pr-student-list-related-services');
  if (pr_student_list_related_services) {
    gsap.from('#pr-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_section_youre_in_good_hands = document.getElementById('pr-student-section-youre-in-good-hands');
  if (pr_student_section_youre_in_good_hands) {
    gsap.fromTo('#pr-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_student_section_21 = document.getElementById('pr-student-section-21');
  if (pr_student_section_21) {
    gsap.fromTo('#pr-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('pr-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (pr_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#pr-business-form-conduct-business-in-brazil-with-the-business-visa input, #pr-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_list_quick_facts = document.getElementById('pr-business-list-quick-facts');
  if (pr_business_list_quick_facts) {
    gsap.from('#pr-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_list_common_challenges_applicants_face = document.getElementById('pr-business-list-common-challenges-applicants-face');
  if (pr_business_list_common_challenges_applicants_face) {
    gsap.from('#pr-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_list_how_we_solve_these_challenges = document.getElementById('pr-business-list-how-we-solve-these-challenges');
  if (pr_business_list_how_we_solve_these_challenges) {
    gsap.from('#pr-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_section_visa_overview = document.getElementById('pr-business-section-visa-overview');
  if (pr_business_section_visa_overview) {
    gsap.fromTo('#pr-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_form_who_is_this_visa_for = document.getElementById('pr-business-form-who-is-this-visa-for');
  if (pr_business_form_who_is_this_visa_for) {
    gsap.from('#pr-business-form-who-is-this-visa-for input, #pr-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_list_required_documents = document.getElementById('pr-business-list-required-documents');
  if (pr_business_list_required_documents) {
    gsap.from('#pr-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_list_application_process = document.getElementById('pr-business-list-application-process');
  if (pr_business_list_application_process) {
    gsap.from('#pr-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_section_timelines_deadlines = document.getElementById('pr-business-section-timelines-deadlines');
  if (pr_business_section_timelines_deadlines) {
    gsap.fromTo('#pr-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_section_fees_costs = document.getElementById('pr-business-section-fees-costs');
  if (pr_business_section_fees_costs) {
    gsap.fromTo('#pr-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_list_risks_common_mistakes = document.getElementById('pr-business-list-risks-common-mistakes');
  if (pr_business_list_risks_common_mistakes) {
    gsap.from('#pr-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_section_diy_vs_professional_assistance = document.getElementById('pr-business-section-diy-vs-professional-assistance');
  if (pr_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_section_paran_specific_context = document.getElementById('pr-business-section-paran-specific-context');
  if (pr_business_section_paran_specific_context) {
    gsap.fromTo('#pr-business-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_section_what_our_clients_say = document.getElementById('pr-business-section-what-our-clients-say');
  if (pr_business_section_what_our_clients_say) {
    gsap.fromTo('#pr-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_section_frequently_asked_questions = document.getElementById('pr-business-section-frequently-asked-questions');
  if (pr_business_section_frequently_asked_questions) {
    gsap.fromTo('#pr-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_section_international_support = document.getElementById('pr-business-section-international-support');
  if (pr_business_section_international_support) {
    gsap.fromTo('#pr-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_list_our_credentials = document.getElementById('pr-business-list-our-credentials');
  if (pr_business_list_our_credentials) {
    gsap.from('#pr-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_list_related_services = document.getElementById('pr-business-list-related-services');
  if (pr_business_list_related_services) {
    gsap.from('#pr-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_section_youre_in_good_hands = document.getElementById('pr-business-section-youre-in-good-hands');
  if (pr_business_section_youre_in_good_hands) {
    gsap.fromTo('#pr-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_business_section_21 = document.getElementById('pr-business-section-21');
  if (pr_business_section_21) {
    gsap.fromTo('#pr-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('pr-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (pr_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#pr-research-form-conduct-research-in-brazil-with-the-research-visa input, #pr-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_list_quick_facts = document.getElementById('pr-research-list-quick-facts');
  if (pr_research_list_quick_facts) {
    gsap.from('#pr-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_list_common_challenges_applicants_face = document.getElementById('pr-research-list-common-challenges-applicants-face');
  if (pr_research_list_common_challenges_applicants_face) {
    gsap.from('#pr-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_list_how_we_solve_these_challenges = document.getElementById('pr-research-list-how-we-solve-these-challenges');
  if (pr_research_list_how_we_solve_these_challenges) {
    gsap.from('#pr-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_section_visa_overview = document.getElementById('pr-research-section-visa-overview');
  if (pr_research_section_visa_overview) {
    gsap.fromTo('#pr-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_form_who_is_this_visa_for = document.getElementById('pr-research-form-who-is-this-visa-for');
  if (pr_research_form_who_is_this_visa_for) {
    gsap.from('#pr-research-form-who-is-this-visa-for input, #pr-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_list_required_documents = document.getElementById('pr-research-list-required-documents');
  if (pr_research_list_required_documents) {
    gsap.from('#pr-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_list_application_process = document.getElementById('pr-research-list-application-process');
  if (pr_research_list_application_process) {
    gsap.from('#pr-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_section_timelines_deadlines = document.getElementById('pr-research-section-timelines-deadlines');
  if (pr_research_section_timelines_deadlines) {
    gsap.fromTo('#pr-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_section_fees_costs = document.getElementById('pr-research-section-fees-costs');
  if (pr_research_section_fees_costs) {
    gsap.fromTo('#pr-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_list_risks_common_mistakes = document.getElementById('pr-research-list-risks-common-mistakes');
  if (pr_research_list_risks_common_mistakes) {
    gsap.from('#pr-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_section_diy_vs_professional_assistance = document.getElementById('pr-research-section-diy-vs-professional-assistance');
  if (pr_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_section_paran_specific_context = document.getElementById('pr-research-section-paran-specific-context');
  if (pr_research_section_paran_specific_context) {
    gsap.fromTo('#pr-research-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_section_what_our_clients_say = document.getElementById('pr-research-section-what-our-clients-say');
  if (pr_research_section_what_our_clients_say) {
    gsap.fromTo('#pr-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_section_frequently_asked_questions = document.getElementById('pr-research-section-frequently-asked-questions');
  if (pr_research_section_frequently_asked_questions) {
    gsap.fromTo('#pr-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_section_international_support = document.getElementById('pr-research-section-international-support');
  if (pr_research_section_international_support) {
    gsap.fromTo('#pr-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_list_our_credentials = document.getElementById('pr-research-list-our-credentials');
  if (pr_research_list_our_credentials) {
    gsap.from('#pr-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_list_related_services = document.getElementById('pr-research-list-related-services');
  if (pr_research_list_related_services) {
    gsap.from('#pr-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_section_youre_in_good_hands = document.getElementById('pr-research-section-youre-in-good-hands');
  if (pr_research_section_youre_in_good_hands) {
    gsap.fromTo('#pr-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_research_section_21 = document.getElementById('pr-research-section-21');
  if (pr_research_section_21) {
    gsap.fromTo('#pr-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('pr-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (pr_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#pr-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #pr-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_list_quick_facts = document.getElementById('pr-diplomatic-list-quick-facts');
  if (pr_diplomatic_list_quick_facts) {
    gsap.from('#pr-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_list_common_challenges_applicants_face = document.getElementById('pr-diplomatic-list-common-challenges-applicants-face');
  if (pr_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#pr-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_list_how_we_solve_these_challenges = document.getElementById('pr-diplomatic-list-how-we-solve-these-challenges');
  if (pr_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#pr-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_section_visa_overview = document.getElementById('pr-diplomatic-section-visa-overview');
  if (pr_diplomatic_section_visa_overview) {
    gsap.fromTo('#pr-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_form_who_is_this_visa_for = document.getElementById('pr-diplomatic-form-who-is-this-visa-for');
  if (pr_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#pr-diplomatic-form-who-is-this-visa-for input, #pr-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_list_required_documents = document.getElementById('pr-diplomatic-list-required-documents');
  if (pr_diplomatic_list_required_documents) {
    gsap.from('#pr-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_list_application_process = document.getElementById('pr-diplomatic-list-application-process');
  if (pr_diplomatic_list_application_process) {
    gsap.from('#pr-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_section_timelines_deadlines = document.getElementById('pr-diplomatic-section-timelines-deadlines');
  if (pr_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#pr-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_section_fees_costs = document.getElementById('pr-diplomatic-section-fees-costs');
  if (pr_diplomatic_section_fees_costs) {
    gsap.fromTo('#pr-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_list_risks_common_mistakes = document.getElementById('pr-diplomatic-list-risks-common-mistakes');
  if (pr_diplomatic_list_risks_common_mistakes) {
    gsap.from('#pr-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_section_diy_vs_professional_assistance = document.getElementById('pr-diplomatic-section-diy-vs-professional-assistance');
  if (pr_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_section_paran_specific_context = document.getElementById('pr-diplomatic-section-paran-specific-context');
  if (pr_diplomatic_section_paran_specific_context) {
    gsap.fromTo('#pr-diplomatic-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_section_what_our_clients_say = document.getElementById('pr-diplomatic-section-what-our-clients-say');
  if (pr_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#pr-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_section_frequently_asked_questions = document.getElementById('pr-diplomatic-section-frequently-asked-questions');
  if (pr_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#pr-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_section_international_support = document.getElementById('pr-diplomatic-section-international-support');
  if (pr_diplomatic_section_international_support) {
    gsap.fromTo('#pr-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_list_our_credentials = document.getElementById('pr-diplomatic-list-our-credentials');
  if (pr_diplomatic_list_our_credentials) {
    gsap.from('#pr-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_list_related_services = document.getElementById('pr-diplomatic-list-related-services');
  if (pr_diplomatic_list_related_services) {
    gsap.from('#pr-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_section_youre_in_good_hands = document.getElementById('pr-diplomatic-section-youre-in-good-hands');
  if (pr_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#pr-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_diplomatic_section_21 = document.getElementById('pr-diplomatic-section-21');
  if (pr_diplomatic_section_21) {
    gsap.fromTo('#pr-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('pr-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (pr_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#pr-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #pr-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_list_quick_facts = document.getElementById('pr-journalist-list-quick-facts');
  if (pr_journalist_list_quick_facts) {
    gsap.from('#pr-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_list_common_challenges_applicants_face = document.getElementById('pr-journalist-list-common-challenges-applicants-face');
  if (pr_journalist_list_common_challenges_applicants_face) {
    gsap.from('#pr-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_list_how_we_solve_these_challenges = document.getElementById('pr-journalist-list-how-we-solve-these-challenges');
  if (pr_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#pr-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_section_visa_overview = document.getElementById('pr-journalist-section-visa-overview');
  if (pr_journalist_section_visa_overview) {
    gsap.fromTo('#pr-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_form_who_is_this_visa_for = document.getElementById('pr-journalist-form-who-is-this-visa-for');
  if (pr_journalist_form_who_is_this_visa_for) {
    gsap.from('#pr-journalist-form-who-is-this-visa-for input, #pr-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_list_required_documents = document.getElementById('pr-journalist-list-required-documents');
  if (pr_journalist_list_required_documents) {
    gsap.from('#pr-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_list_application_process = document.getElementById('pr-journalist-list-application-process');
  if (pr_journalist_list_application_process) {
    gsap.from('#pr-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_section_timelines_deadlines = document.getElementById('pr-journalist-section-timelines-deadlines');
  if (pr_journalist_section_timelines_deadlines) {
    gsap.fromTo('#pr-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_section_fees_costs = document.getElementById('pr-journalist-section-fees-costs');
  if (pr_journalist_section_fees_costs) {
    gsap.fromTo('#pr-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_list_risks_common_mistakes = document.getElementById('pr-journalist-list-risks-common-mistakes');
  if (pr_journalist_list_risks_common_mistakes) {
    gsap.from('#pr-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_section_diy_vs_professional_assistance = document.getElementById('pr-journalist-section-diy-vs-professional-assistance');
  if (pr_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_section_paran_specific_context = document.getElementById('pr-journalist-section-paran-specific-context');
  if (pr_journalist_section_paran_specific_context) {
    gsap.fromTo('#pr-journalist-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_section_what_our_clients_say = document.getElementById('pr-journalist-section-what-our-clients-say');
  if (pr_journalist_section_what_our_clients_say) {
    gsap.fromTo('#pr-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_section_frequently_asked_questions = document.getElementById('pr-journalist-section-frequently-asked-questions');
  if (pr_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#pr-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_section_international_support = document.getElementById('pr-journalist-section-international-support');
  if (pr_journalist_section_international_support) {
    gsap.fromTo('#pr-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_list_our_credentials = document.getElementById('pr-journalist-list-our-credentials');
  if (pr_journalist_list_our_credentials) {
    gsap.from('#pr-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_list_related_services = document.getElementById('pr-journalist-list-related-services');
  if (pr_journalist_list_related_services) {
    gsap.from('#pr-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_section_youre_in_good_hands = document.getElementById('pr-journalist-section-youre-in-good-hands');
  if (pr_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#pr-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_journalist_section_21 = document.getElementById('pr-journalist-section-21');
  if (pr_journalist_section_21) {
    gsap.fromTo('#pr-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('pr-fines-form-resolve-immigration-fines-in-brazil');
  if (pr_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#pr-fines-form-resolve-immigration-fines-in-brazil input, #pr-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_list_quick_facts = document.getElementById('pr-fines-list-quick-facts');
  if (pr_fines_list_quick_facts) {
    gsap.from('#pr-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_list_common_challenges_applicants_face = document.getElementById('pr-fines-list-common-challenges-applicants-face');
  if (pr_fines_list_common_challenges_applicants_face) {
    gsap.from('#pr-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_list_how_we_solve_these_challenges = document.getElementById('pr-fines-list-how-we-solve-these-challenges');
  if (pr_fines_list_how_we_solve_these_challenges) {
    gsap.from('#pr-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_section_service_overview = document.getElementById('pr-fines-section-service-overview');
  if (pr_fines_section_service_overview) {
    gsap.fromTo('#pr-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_form_who_is_this_service_for = document.getElementById('pr-fines-form-who-is-this-service-for');
  if (pr_fines_form_who_is_this_service_for) {
    gsap.from('#pr-fines-form-who-is-this-service-for input, #pr-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_list_required_documents = document.getElementById('pr-fines-list-required-documents');
  if (pr_fines_list_required_documents) {
    gsap.from('#pr-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_list_process = document.getElementById('pr-fines-list-process');
  if (pr_fines_list_process) {
    gsap.from('#pr-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_section_timelines_deadlines = document.getElementById('pr-fines-section-timelines-deadlines');
  if (pr_fines_section_timelines_deadlines) {
    gsap.fromTo('#pr-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_section_fees_costs = document.getElementById('pr-fines-section-fees-costs');
  if (pr_fines_section_fees_costs) {
    gsap.fromTo('#pr-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_list_risks_common_mistakes = document.getElementById('pr-fines-list-risks-common-mistakes');
  if (pr_fines_list_risks_common_mistakes) {
    gsap.from('#pr-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_section_diy_vs_professional_assistance = document.getElementById('pr-fines-section-diy-vs-professional-assistance');
  if (pr_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_section_paran_specific_context = document.getElementById('pr-fines-section-paran-specific-context');
  if (pr_fines_section_paran_specific_context) {
    gsap.fromTo('#pr-fines-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_section_what_our_clients_say = document.getElementById('pr-fines-section-what-our-clients-say');
  if (pr_fines_section_what_our_clients_say) {
    gsap.fromTo('#pr-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_section_frequently_asked_questions = document.getElementById('pr-fines-section-frequently-asked-questions');
  if (pr_fines_section_frequently_asked_questions) {
    gsap.fromTo('#pr-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_section_international_support = document.getElementById('pr-fines-section-international-support');
  if (pr_fines_section_international_support) {
    gsap.fromTo('#pr-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_list_our_credentials = document.getElementById('pr-fines-list-our-credentials');
  if (pr_fines_list_our_credentials) {
    gsap.from('#pr-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_list_related_services = document.getElementById('pr-fines-list-related-services');
  if (pr_fines_list_related_services) {
    gsap.from('#pr-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_section_youre_in_good_hands = document.getElementById('pr-fines-section-youre-in-good-hands');
  if (pr_fines_section_youre_in_good_hands) {
    gsap.fromTo('#pr-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_fines_section_21 = document.getElementById('pr-fines-section-21');
  if (pr_fines_section_21) {
    gsap.fromTo('#pr-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_form_deportation_assistance_in_brazil = document.getElementById('pr-deportation-form-deportation-assistance-in-brazil');
  if (pr_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#pr-deportation-form-deportation-assistance-in-brazil input, #pr-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_list_quick_facts = document.getElementById('pr-deportation-list-quick-facts');
  if (pr_deportation_list_quick_facts) {
    gsap.from('#pr-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_list_common_challenges_applicants_face = document.getElementById('pr-deportation-list-common-challenges-applicants-face');
  if (pr_deportation_list_common_challenges_applicants_face) {
    gsap.from('#pr-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_list_how_we_solve_these_challenges = document.getElementById('pr-deportation-list-how-we-solve-these-challenges');
  if (pr_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#pr-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_section_service_overview = document.getElementById('pr-deportation-section-service-overview');
  if (pr_deportation_section_service_overview) {
    gsap.fromTo('#pr-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_form_who_is_this_service_for = document.getElementById('pr-deportation-form-who-is-this-service-for');
  if (pr_deportation_form_who_is_this_service_for) {
    gsap.from('#pr-deportation-form-who-is-this-service-for input, #pr-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_list_required_documents = document.getElementById('pr-deportation-list-required-documents');
  if (pr_deportation_list_required_documents) {
    gsap.from('#pr-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_list_process = document.getElementById('pr-deportation-list-process');
  if (pr_deportation_list_process) {
    gsap.from('#pr-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_section_timelines_deadlines = document.getElementById('pr-deportation-section-timelines-deadlines');
  if (pr_deportation_section_timelines_deadlines) {
    gsap.fromTo('#pr-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_section_fees_costs = document.getElementById('pr-deportation-section-fees-costs');
  if (pr_deportation_section_fees_costs) {
    gsap.fromTo('#pr-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_list_risks_common_mistakes = document.getElementById('pr-deportation-list-risks-common-mistakes');
  if (pr_deportation_list_risks_common_mistakes) {
    gsap.from('#pr-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_section_diy_vs_professional_assistance = document.getElementById('pr-deportation-section-diy-vs-professional-assistance');
  if (pr_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_section_paran_specific_context = document.getElementById('pr-deportation-section-paran-specific-context');
  if (pr_deportation_section_paran_specific_context) {
    gsap.fromTo('#pr-deportation-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_section_what_our_clients_say = document.getElementById('pr-deportation-section-what-our-clients-say');
  if (pr_deportation_section_what_our_clients_say) {
    gsap.fromTo('#pr-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_section_frequently_asked_questions = document.getElementById('pr-deportation-section-frequently-asked-questions');
  if (pr_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#pr-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_section_international_support = document.getElementById('pr-deportation-section-international-support');
  if (pr_deportation_section_international_support) {
    gsap.fromTo('#pr-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_list_our_credentials = document.getElementById('pr-deportation-list-our-credentials');
  if (pr_deportation_list_our_credentials) {
    gsap.from('#pr-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_list_related_services = document.getElementById('pr-deportation-list-related-services');
  if (pr_deportation_list_related_services) {
    gsap.from('#pr-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_section_youre_in_good_hands = document.getElementById('pr-deportation-section-youre-in-good-hands');
  if (pr_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#pr-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_deportation_section_21 = document.getElementById('pr-deportation-section-21');
  if (pr_deportation_section_21) {
    gsap.fromTo('#pr-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('pr-translation-form-sworn-document-translation-services-in-brazil');
  if (pr_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#pr-translation-form-sworn-document-translation-services-in-brazil input, #pr-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_list_quick_facts = document.getElementById('pr-translation-list-quick-facts');
  if (pr_translation_list_quick_facts) {
    gsap.from('#pr-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_list_common_challenges_applicants_face = document.getElementById('pr-translation-list-common-challenges-applicants-face');
  if (pr_translation_list_common_challenges_applicants_face) {
    gsap.from('#pr-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_list_how_we_solve_these_challenges = document.getElementById('pr-translation-list-how-we-solve-these-challenges');
  if (pr_translation_list_how_we_solve_these_challenges) {
    gsap.from('#pr-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_section_service_overview = document.getElementById('pr-translation-section-service-overview');
  if (pr_translation_section_service_overview) {
    gsap.fromTo('#pr-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_form_who_is_this_service_for = document.getElementById('pr-translation-form-who-is-this-service-for');
  if (pr_translation_form_who_is_this_service_for) {
    gsap.from('#pr-translation-form-who-is-this-service-for input, #pr-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_list_required_documents = document.getElementById('pr-translation-list-required-documents');
  if (pr_translation_list_required_documents) {
    gsap.from('#pr-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_list_process = document.getElementById('pr-translation-list-process');
  if (pr_translation_list_process) {
    gsap.from('#pr-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_section_timelines_deadlines = document.getElementById('pr-translation-section-timelines-deadlines');
  if (pr_translation_section_timelines_deadlines) {
    gsap.fromTo('#pr-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_section_fees_costs = document.getElementById('pr-translation-section-fees-costs');
  if (pr_translation_section_fees_costs) {
    gsap.fromTo('#pr-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_list_risks_common_mistakes = document.getElementById('pr-translation-list-risks-common-mistakes');
  if (pr_translation_list_risks_common_mistakes) {
    gsap.from('#pr-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_section_diy_vs_professional_assistance = document.getElementById('pr-translation-section-diy-vs-professional-assistance');
  if (pr_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_section_paran_specific_context = document.getElementById('pr-translation-section-paran-specific-context');
  if (pr_translation_section_paran_specific_context) {
    gsap.fromTo('#pr-translation-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_section_what_our_clients_say = document.getElementById('pr-translation-section-what-our-clients-say');
  if (pr_translation_section_what_our_clients_say) {
    gsap.fromTo('#pr-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_section_frequently_asked_questions = document.getElementById('pr-translation-section-frequently-asked-questions');
  if (pr_translation_section_frequently_asked_questions) {
    gsap.fromTo('#pr-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_section_international_support = document.getElementById('pr-translation-section-international-support');
  if (pr_translation_section_international_support) {
    gsap.fromTo('#pr-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_list_our_credentials = document.getElementById('pr-translation-list-our-credentials');
  if (pr_translation_list_our_credentials) {
    gsap.from('#pr-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_list_related_services = document.getElementById('pr-translation-list-related-services');
  if (pr_translation_list_related_services) {
    gsap.from('#pr-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_section_youre_in_good_hands = document.getElementById('pr-translation-section-youre-in-good-hands');
  if (pr_translation_section_youre_in_good_hands) {
    gsap.fromTo('#pr-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_translation_section_21 = document.getElementById('pr-translation-section-21');
  if (pr_translation_section_21) {
    gsap.fromTo('#pr-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('pr-expulsion-form-expulsion-assistance-in-brazil');
  if (pr_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#pr-expulsion-form-expulsion-assistance-in-brazil input, #pr-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_list_quick_facts = document.getElementById('pr-expulsion-list-quick-facts');
  if (pr_expulsion_list_quick_facts) {
    gsap.from('#pr-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_list_common_challenges_applicants_face = document.getElementById('pr-expulsion-list-common-challenges-applicants-face');
  if (pr_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#pr-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_list_how_we_solve_these_challenges = document.getElementById('pr-expulsion-list-how-we-solve-these-challenges');
  if (pr_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#pr-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_section_service_overview = document.getElementById('pr-expulsion-section-service-overview');
  if (pr_expulsion_section_service_overview) {
    gsap.fromTo('#pr-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_form_who_is_this_service_for = document.getElementById('pr-expulsion-form-who-is-this-service-for');
  if (pr_expulsion_form_who_is_this_service_for) {
    gsap.from('#pr-expulsion-form-who-is-this-service-for input, #pr-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_list_required_documents = document.getElementById('pr-expulsion-list-required-documents');
  if (pr_expulsion_list_required_documents) {
    gsap.from('#pr-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_list_process = document.getElementById('pr-expulsion-list-process');
  if (pr_expulsion_list_process) {
    gsap.from('#pr-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_section_timelines_deadlines = document.getElementById('pr-expulsion-section-timelines-deadlines');
  if (pr_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#pr-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_section_fees_costs = document.getElementById('pr-expulsion-section-fees-costs');
  if (pr_expulsion_section_fees_costs) {
    gsap.fromTo('#pr-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_list_risks_common_mistakes = document.getElementById('pr-expulsion-list-risks-common-mistakes');
  if (pr_expulsion_list_risks_common_mistakes) {
    gsap.from('#pr-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_section_diy_vs_professional_assistance = document.getElementById('pr-expulsion-section-diy-vs-professional-assistance');
  if (pr_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_section_paran_specific_context = document.getElementById('pr-expulsion-section-paran-specific-context');
  if (pr_expulsion_section_paran_specific_context) {
    gsap.fromTo('#pr-expulsion-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_section_what_our_clients_say = document.getElementById('pr-expulsion-section-what-our-clients-say');
  if (pr_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#pr-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_section_frequently_asked_questions = document.getElementById('pr-expulsion-section-frequently-asked-questions');
  if (pr_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#pr-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_section_international_support = document.getElementById('pr-expulsion-section-international-support');
  if (pr_expulsion_section_international_support) {
    gsap.fromTo('#pr-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_list_our_credentials = document.getElementById('pr-expulsion-list-our-credentials');
  if (pr_expulsion_list_our_credentials) {
    gsap.from('#pr-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_list_related_services = document.getElementById('pr-expulsion-list-related-services');
  if (pr_expulsion_list_related_services) {
    gsap.from('#pr-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_section_youre_in_good_hands = document.getElementById('pr-expulsion-section-youre-in-good-hands');
  if (pr_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#pr-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_expulsion_section_21 = document.getElementById('pr-expulsion-section-21');
  if (pr_expulsion_section_21) {
    gsap.fromTo('#pr-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('pr-appeals-form-appeal-immigration-denials-in-brazil');
  if (pr_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#pr-appeals-form-appeal-immigration-denials-in-brazil input, #pr-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_list_quick_facts = document.getElementById('pr-appeals-list-quick-facts');
  if (pr_appeals_list_quick_facts) {
    gsap.from('#pr-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_list_common_challenges_applicants_face = document.getElementById('pr-appeals-list-common-challenges-applicants-face');
  if (pr_appeals_list_common_challenges_applicants_face) {
    gsap.from('#pr-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_list_how_we_solve_these_challenges = document.getElementById('pr-appeals-list-how-we-solve-these-challenges');
  if (pr_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#pr-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_section_service_overview = document.getElementById('pr-appeals-section-service-overview');
  if (pr_appeals_section_service_overview) {
    gsap.fromTo('#pr-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_form_who_is_this_service_for = document.getElementById('pr-appeals-form-who-is-this-service-for');
  if (pr_appeals_form_who_is_this_service_for) {
    gsap.from('#pr-appeals-form-who-is-this-service-for input, #pr-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_list_required_documents = document.getElementById('pr-appeals-list-required-documents');
  if (pr_appeals_list_required_documents) {
    gsap.from('#pr-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_list_appeal_process = document.getElementById('pr-appeals-list-appeal-process');
  if (pr_appeals_list_appeal_process) {
    gsap.from('#pr-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_section_timelines_deadlines = document.getElementById('pr-appeals-section-timelines-deadlines');
  if (pr_appeals_section_timelines_deadlines) {
    gsap.fromTo('#pr-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_section_fees_costs = document.getElementById('pr-appeals-section-fees-costs');
  if (pr_appeals_section_fees_costs) {
    gsap.fromTo('#pr-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_list_risks_common_mistakes = document.getElementById('pr-appeals-list-risks-common-mistakes');
  if (pr_appeals_list_risks_common_mistakes) {
    gsap.from('#pr-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_section_diy_vs_professional_assistance = document.getElementById('pr-appeals-section-diy-vs-professional-assistance');
  if (pr_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_section_paran_specific_context = document.getElementById('pr-appeals-section-paran-specific-context');
  if (pr_appeals_section_paran_specific_context) {
    gsap.fromTo('#pr-appeals-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_section_what_our_clients_say = document.getElementById('pr-appeals-section-what-our-clients-say');
  if (pr_appeals_section_what_our_clients_say) {
    gsap.fromTo('#pr-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_section_frequently_asked_questions = document.getElementById('pr-appeals-section-frequently-asked-questions');
  if (pr_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#pr-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_section_international_support = document.getElementById('pr-appeals-section-international-support');
  if (pr_appeals_section_international_support) {
    gsap.fromTo('#pr-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_list_our_credentials = document.getElementById('pr-appeals-list-our-credentials');
  if (pr_appeals_list_our_credentials) {
    gsap.from('#pr-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_list_related_services = document.getElementById('pr-appeals-list-related-services');
  if (pr_appeals_list_related_services) {
    gsap.from('#pr-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_section_youre_in_good_hands = document.getElementById('pr-appeals-section-youre-in-good-hands');
  if (pr_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#pr-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_appeals_section_21 = document.getElementById('pr-appeals-section-21');
  if (pr_appeals_section_21) {
    gsap.fromTo('#pr-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('pr-consular-form-consular-services-in-brazil-for-citizens');
  if (pr_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#pr-consular-form-consular-services-in-brazil-for-citizens input, #pr-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_list_quick_facts = document.getElementById('pr-consular-list-quick-facts');
  if (pr_consular_list_quick_facts) {
    gsap.from('#pr-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_list_common_challenges_applicants_face = document.getElementById('pr-consular-list-common-challenges-applicants-face');
  if (pr_consular_list_common_challenges_applicants_face) {
    gsap.from('#pr-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_list_how_we_solve_these_challenges = document.getElementById('pr-consular-list-how-we-solve-these-challenges');
  if (pr_consular_list_how_we_solve_these_challenges) {
    gsap.from('#pr-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_section_service_overview = document.getElementById('pr-consular-section-service-overview');
  if (pr_consular_section_service_overview) {
    gsap.fromTo('#pr-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_form_who_is_this_service_for = document.getElementById('pr-consular-form-who-is-this-service-for');
  if (pr_consular_form_who_is_this_service_for) {
    gsap.from('#pr-consular-form-who-is-this-service-for input, #pr-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_list_required_documents = document.getElementById('pr-consular-list-required-documents');
  if (pr_consular_list_required_documents) {
    gsap.from('#pr-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_list_process = document.getElementById('pr-consular-list-process');
  if (pr_consular_list_process) {
    gsap.from('#pr-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_section_timelines_deadlines = document.getElementById('pr-consular-section-timelines-deadlines');
  if (pr_consular_section_timelines_deadlines) {
    gsap.fromTo('#pr-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_section_fees_costs = document.getElementById('pr-consular-section-fees-costs');
  if (pr_consular_section_fees_costs) {
    gsap.fromTo('#pr-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_list_risks_common_mistakes = document.getElementById('pr-consular-list-risks-common-mistakes');
  if (pr_consular_list_risks_common_mistakes) {
    gsap.from('#pr-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_section_diy_vs_professional_assistance = document.getElementById('pr-consular-section-diy-vs-professional-assistance');
  if (pr_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_section_paran_specific_context = document.getElementById('pr-consular-section-paran-specific-context');
  if (pr_consular_section_paran_specific_context) {
    gsap.fromTo('#pr-consular-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_section_what_our_clients_say = document.getElementById('pr-consular-section-what-our-clients-say');
  if (pr_consular_section_what_our_clients_say) {
    gsap.fromTo('#pr-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_section_frequently_asked_questions = document.getElementById('pr-consular-section-frequently-asked-questions');
  if (pr_consular_section_frequently_asked_questions) {
    gsap.fromTo('#pr-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_section_international_support = document.getElementById('pr-consular-section-international-support');
  if (pr_consular_section_international_support) {
    gsap.fromTo('#pr-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_list_our_credentials = document.getElementById('pr-consular-list-our-credentials');
  if (pr_consular_list_our_credentials) {
    gsap.from('#pr-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_list_related_services = document.getElementById('pr-consular-list-related-services');
  if (pr_consular_list_related_services) {
    gsap.from('#pr-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_section_youre_in_good_hands = document.getElementById('pr-consular-section-youre-in-good-hands');
  if (pr_consular_section_youre_in_good_hands) {
    gsap.fromTo('#pr-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_consular_section_21 = document.getElementById('pr-consular-section-21');
  if (pr_consular_section_21) {
    gsap.fromTo('#pr-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('pr-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (pr_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#pr-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #pr-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_list_quick_facts = document.getElementById('pr-criminalrecords-list-quick-facts');
  if (pr_criminalrecords_list_quick_facts) {
    gsap.from('#pr-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_list_common_challenges_applicants_face = document.getElementById('pr-criminalrecords-list-common-challenges-applicants-face');
  if (pr_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#pr-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('pr-criminalrecords-list-how-we-solve-these-challenges');
  if (pr_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#pr-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_section_service_overview = document.getElementById('pr-criminalrecords-section-service-overview');
  if (pr_criminalrecords_section_service_overview) {
    gsap.fromTo('#pr-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_form_who_is_this_service_for = document.getElementById('pr-criminalrecords-form-who-is-this-service-for');
  if (pr_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#pr-criminalrecords-form-who-is-this-service-for input, #pr-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_list_required_documents = document.getElementById('pr-criminalrecords-list-required-documents');
  if (pr_criminalrecords_list_required_documents) {
    gsap.from('#pr-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_list_process = document.getElementById('pr-criminalrecords-list-process');
  if (pr_criminalrecords_list_process) {
    gsap.from('#pr-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_section_timelines_deadlines = document.getElementById('pr-criminalrecords-section-timelines-deadlines');
  if (pr_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#pr-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_section_fees_costs = document.getElementById('pr-criminalrecords-section-fees-costs');
  if (pr_criminalrecords_section_fees_costs) {
    gsap.fromTo('#pr-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_list_risks_common_mistakes = document.getElementById('pr-criminalrecords-list-risks-common-mistakes');
  if (pr_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#pr-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('pr-criminalrecords-section-diy-vs-professional-assistance');
  if (pr_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_section_paran_specific_context = document.getElementById('pr-criminalrecords-section-paran-specific-context');
  if (pr_criminalrecords_section_paran_specific_context) {
    gsap.fromTo('#pr-criminalrecords-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_section_what_our_clients_say = document.getElementById('pr-criminalrecords-section-what-our-clients-say');
  if (pr_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#pr-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_section_frequently_asked_questions = document.getElementById('pr-criminalrecords-section-frequently-asked-questions');
  if (pr_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#pr-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_section_international_support = document.getElementById('pr-criminalrecords-section-international-support');
  if (pr_criminalrecords_section_international_support) {
    gsap.fromTo('#pr-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_list_our_credentials = document.getElementById('pr-criminalrecords-list-our-credentials');
  if (pr_criminalrecords_list_our_credentials) {
    gsap.from('#pr-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_list_related_services = document.getElementById('pr-criminalrecords-list-related-services');
  if (pr_criminalrecords_list_related_services) {
    gsap.from('#pr-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_section_youre_in_good_hands = document.getElementById('pr-criminalrecords-section-youre-in-good-hands');
  if (pr_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#pr-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_criminalrecords_section_21 = document.getElementById('pr-criminalrecords-section-21');
  if (pr_criminalrecords_section_21) {
    gsap.fromTo('#pr-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_form_extradition_assistance_in_brazil = document.getElementById('pr-extradition-form-extradition-assistance-in-brazil');
  if (pr_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#pr-extradition-form-extradition-assistance-in-brazil input, #pr-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_list_quick_facts = document.getElementById('pr-extradition-list-quick-facts');
  if (pr_extradition_list_quick_facts) {
    gsap.from('#pr-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_list_common_challenges_applicants_face = document.getElementById('pr-extradition-list-common-challenges-applicants-face');
  if (pr_extradition_list_common_challenges_applicants_face) {
    gsap.from('#pr-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_list_how_we_solve_these_challenges = document.getElementById('pr-extradition-list-how-we-solve-these-challenges');
  if (pr_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#pr-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_section_service_overview = document.getElementById('pr-extradition-section-service-overview');
  if (pr_extradition_section_service_overview) {
    gsap.fromTo('#pr-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_form_who_is_this_service_for = document.getElementById('pr-extradition-form-who-is-this-service-for');
  if (pr_extradition_form_who_is_this_service_for) {
    gsap.from('#pr-extradition-form-who-is-this-service-for input, #pr-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_list_required_documents = document.getElementById('pr-extradition-list-required-documents');
  if (pr_extradition_list_required_documents) {
    gsap.from('#pr-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_list_process = document.getElementById('pr-extradition-list-process');
  if (pr_extradition_list_process) {
    gsap.from('#pr-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_section_timelines_deadlines = document.getElementById('pr-extradition-section-timelines-deadlines');
  if (pr_extradition_section_timelines_deadlines) {
    gsap.fromTo('#pr-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_section_fees_costs = document.getElementById('pr-extradition-section-fees-costs');
  if (pr_extradition_section_fees_costs) {
    gsap.fromTo('#pr-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_list_risks_common_mistakes = document.getElementById('pr-extradition-list-risks-common-mistakes');
  if (pr_extradition_list_risks_common_mistakes) {
    gsap.from('#pr-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_section_diy_vs_professional_assistance = document.getElementById('pr-extradition-section-diy-vs-professional-assistance');
  if (pr_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_section_paran_specific_context = document.getElementById('pr-extradition-section-paran-specific-context');
  if (pr_extradition_section_paran_specific_context) {
    gsap.fromTo('#pr-extradition-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_section_what_our_clients_say = document.getElementById('pr-extradition-section-what-our-clients-say');
  if (pr_extradition_section_what_our_clients_say) {
    gsap.fromTo('#pr-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_section_frequently_asked_questions = document.getElementById('pr-extradition-section-frequently-asked-questions');
  if (pr_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#pr-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_section_international_support = document.getElementById('pr-extradition-section-international-support');
  if (pr_extradition_section_international_support) {
    gsap.fromTo('#pr-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_list_our_credentials = document.getElementById('pr-extradition-list-our-credentials');
  if (pr_extradition_list_our_credentials) {
    gsap.from('#pr-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_list_related_services = document.getElementById('pr-extradition-list-related-services');
  if (pr_extradition_list_related_services) {
    gsap.from('#pr-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_section_youre_in_good_hands = document.getElementById('pr-extradition-section-youre-in-good-hands');
  if (pr_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#pr-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_extradition_section_21 = document.getElementById('pr-extradition-section-21');
  if (pr_extradition_section_21) {
    gsap.fromTo('#pr-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_form_discover_the_north_amazon_and_beyond = document.getElementById('pr-north-form-discover-the-north-amazon-and-beyond');
  if (pr_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#pr-north-form-discover-the-north-amazon-and-beyond input, #pr-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_list_quick_facts = document.getElementById('pr-north-list-quick-facts');
  if (pr_north_list_quick_facts) {
    gsap.from('#pr-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_list_common_challenges_applicants_face = document.getElementById('pr-north-list-common-challenges-applicants-face');
  if (pr_north_list_common_challenges_applicants_face) {
    gsap.from('#pr-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_list_how_we_solve_these_challenges = document.getElementById('pr-north-list-how-we-solve-these-challenges');
  if (pr_north_list_how_we_solve_these_challenges) {
    gsap.from('#pr-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_section_trip_overview = document.getElementById('pr-north-section-trip-overview');
  if (pr_north_section_trip_overview) {
    gsap.fromTo('#pr-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_form_who_is_this_trip_for = document.getElementById('pr-north-form-who-is-this-trip-for');
  if (pr_north_form_who_is_this_trip_for) {
    gsap.from('#pr-north-form-who-is-this-trip-for input, #pr-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_list_required_documents = document.getElementById('pr-north-list-required-documents');
  if (pr_north_list_required_documents) {
    gsap.from('#pr-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_list_booking_process = document.getElementById('pr-north-list-booking-process');
  if (pr_north_list_booking_process) {
    gsap.from('#pr-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_section_timelines_deadlines = document.getElementById('pr-north-section-timelines-deadlines');
  if (pr_north_section_timelines_deadlines) {
    gsap.fromTo('#pr-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_section_fees_costs = document.getElementById('pr-north-section-fees-costs');
  if (pr_north_section_fees_costs) {
    gsap.fromTo('#pr-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_list_risks_common_mistakes = document.getElementById('pr-north-list-risks-common-mistakes');
  if (pr_north_list_risks_common_mistakes) {
    gsap.from('#pr-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_section_diy_vs_professional_assistance = document.getElementById('pr-north-section-diy-vs-professional-assistance');
  if (pr_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_section_paran_specific_context = document.getElementById('pr-north-section-paran-specific-context');
  if (pr_north_section_paran_specific_context) {
    gsap.fromTo('#pr-north-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_section_what_our_clients_say = document.getElementById('pr-north-section-what-our-clients-say');
  if (pr_north_section_what_our_clients_say) {
    gsap.fromTo('#pr-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_section_frequently_asked_questions = document.getElementById('pr-north-section-frequently-asked-questions');
  if (pr_north_section_frequently_asked_questions) {
    gsap.fromTo('#pr-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_section_international_support = document.getElementById('pr-north-section-international-support');
  if (pr_north_section_international_support) {
    gsap.fromTo('#pr-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_list_our_credentials = document.getElementById('pr-north-list-our-credentials');
  if (pr_north_list_our_credentials) {
    gsap.from('#pr-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_list_related_services = document.getElementById('pr-north-list-related-services');
  if (pr_north_list_related_services) {
    gsap.from('#pr-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_section_youre_in_good_hands = document.getElementById('pr-north-section-youre-in-good-hands');
  if (pr_north_section_youre_in_good_hands) {
    gsap.fromTo('#pr-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_north_section_21 = document.getElementById('pr-north-section-21');
  if (pr_north_section_21) {
    gsap.fromTo('#pr-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('pr-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (pr_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#pr-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #pr-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_list_quick_facts = document.getElementById('pr-centralwest-list-quick-facts');
  if (pr_centralwest_list_quick_facts) {
    gsap.from('#pr-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_list_common_challenges_applicants_face = document.getElementById('pr-centralwest-list-common-challenges-applicants-face');
  if (pr_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#pr-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_list_how_we_solve_these_challenges = document.getElementById('pr-centralwest-list-how-we-solve-these-challenges');
  if (pr_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#pr-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_section_trip_overview = document.getElementById('pr-centralwest-section-trip-overview');
  if (pr_centralwest_section_trip_overview) {
    gsap.fromTo('#pr-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_form_who_is_this_trip_for = document.getElementById('pr-centralwest-form-who-is-this-trip-for');
  if (pr_centralwest_form_who_is_this_trip_for) {
    gsap.from('#pr-centralwest-form-who-is-this-trip-for input, #pr-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_list_required_documents = document.getElementById('pr-centralwest-list-required-documents');
  if (pr_centralwest_list_required_documents) {
    gsap.from('#pr-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_list_booking_process = document.getElementById('pr-centralwest-list-booking-process');
  if (pr_centralwest_list_booking_process) {
    gsap.from('#pr-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_section_timelines_deadlines = document.getElementById('pr-centralwest-section-timelines-deadlines');
  if (pr_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#pr-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_section_fees_costs = document.getElementById('pr-centralwest-section-fees-costs');
  if (pr_centralwest_section_fees_costs) {
    gsap.fromTo('#pr-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_list_risks_common_mistakes = document.getElementById('pr-centralwest-list-risks-common-mistakes');
  if (pr_centralwest_list_risks_common_mistakes) {
    gsap.from('#pr-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_section_diy_vs_professional_assistance = document.getElementById('pr-centralwest-section-diy-vs-professional-assistance');
  if (pr_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_section_paran_specific_context = document.getElementById('pr-centralwest-section-paran-specific-context');
  if (pr_centralwest_section_paran_specific_context) {
    gsap.fromTo('#pr-centralwest-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_section_what_our_clients_say = document.getElementById('pr-centralwest-section-what-our-clients-say');
  if (pr_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#pr-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_section_frequently_asked_questions = document.getElementById('pr-centralwest-section-frequently-asked-questions');
  if (pr_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#pr-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_section_international_support = document.getElementById('pr-centralwest-section-international-support');
  if (pr_centralwest_section_international_support) {
    gsap.fromTo('#pr-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_list_our_credentials = document.getElementById('pr-centralwest-list-our-credentials');
  if (pr_centralwest_list_our_credentials) {
    gsap.from('#pr-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_list_related_services = document.getElementById('pr-centralwest-list-related-services');
  if (pr_centralwest_list_related_services) {
    gsap.from('#pr-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_section_youre_in_good_hands = document.getElementById('pr-centralwest-section-youre-in-good-hands');
  if (pr_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#pr-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_centralwest_section_21 = document.getElementById('pr-centralwest-section-21');
  if (pr_centralwest_section_21) {
    gsap.fromTo('#pr-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('pr-southeast-form-dynamic-southeast-cities-and-history');
  if (pr_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#pr-southeast-form-dynamic-southeast-cities-and-history input, #pr-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_list_quick_facts = document.getElementById('pr-southeast-list-quick-facts');
  if (pr_southeast_list_quick_facts) {
    gsap.from('#pr-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_list_common_challenges_applicants_face = document.getElementById('pr-southeast-list-common-challenges-applicants-face');
  if (pr_southeast_list_common_challenges_applicants_face) {
    gsap.from('#pr-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_list_how_we_solve_these_challenges = document.getElementById('pr-southeast-list-how-we-solve-these-challenges');
  if (pr_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#pr-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_section_trip_overview = document.getElementById('pr-southeast-section-trip-overview');
  if (pr_southeast_section_trip_overview) {
    gsap.fromTo('#pr-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_form_who_is_this_trip_for = document.getElementById('pr-southeast-form-who-is-this-trip-for');
  if (pr_southeast_form_who_is_this_trip_for) {
    gsap.from('#pr-southeast-form-who-is-this-trip-for input, #pr-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_list_required_documents = document.getElementById('pr-southeast-list-required-documents');
  if (pr_southeast_list_required_documents) {
    gsap.from('#pr-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_list_booking_process = document.getElementById('pr-southeast-list-booking-process');
  if (pr_southeast_list_booking_process) {
    gsap.from('#pr-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_section_timelines_deadlines = document.getElementById('pr-southeast-section-timelines-deadlines');
  if (pr_southeast_section_timelines_deadlines) {
    gsap.fromTo('#pr-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_section_fees_costs = document.getElementById('pr-southeast-section-fees-costs');
  if (pr_southeast_section_fees_costs) {
    gsap.fromTo('#pr-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_list_risks_common_mistakes = document.getElementById('pr-southeast-list-risks-common-mistakes');
  if (pr_southeast_list_risks_common_mistakes) {
    gsap.from('#pr-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_section_diy_vs_professional_assistance = document.getElementById('pr-southeast-section-diy-vs-professional-assistance');
  if (pr_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_section_paran_specific_context = document.getElementById('pr-southeast-section-paran-specific-context');
  if (pr_southeast_section_paran_specific_context) {
    gsap.fromTo('#pr-southeast-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_section_what_our_clients_say = document.getElementById('pr-southeast-section-what-our-clients-say');
  if (pr_southeast_section_what_our_clients_say) {
    gsap.fromTo('#pr-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_section_frequently_asked_questions = document.getElementById('pr-southeast-section-frequently-asked-questions');
  if (pr_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#pr-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_section_international_support = document.getElementById('pr-southeast-section-international-support');
  if (pr_southeast_section_international_support) {
    gsap.fromTo('#pr-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_list_our_credentials = document.getElementById('pr-southeast-list-our-credentials');
  if (pr_southeast_list_our_credentials) {
    gsap.from('#pr-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_list_related_services = document.getElementById('pr-southeast-list-related-services');
  if (pr_southeast_list_related_services) {
    gsap.from('#pr-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_section_youre_in_good_hands = document.getElementById('pr-southeast-section-youre-in-good-hands');
  if (pr_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#pr-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_southeast_section_21 = document.getElementById('pr-southeast-section-21');
  if (pr_southeast_section_21) {
    gsap.fromTo('#pr-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('pr-northeast-form-vibrant-northeast-beaches-and-culture');
  if (pr_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#pr-northeast-form-vibrant-northeast-beaches-and-culture input, #pr-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_list_quick_facts = document.getElementById('pr-northeast-list-quick-facts');
  if (pr_northeast_list_quick_facts) {
    gsap.from('#pr-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_list_common_challenges_applicants_face = document.getElementById('pr-northeast-list-common-challenges-applicants-face');
  if (pr_northeast_list_common_challenges_applicants_face) {
    gsap.from('#pr-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_list_how_we_solve_these_challenges = document.getElementById('pr-northeast-list-how-we-solve-these-challenges');
  if (pr_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#pr-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_section_trip_overview = document.getElementById('pr-northeast-section-trip-overview');
  if (pr_northeast_section_trip_overview) {
    gsap.fromTo('#pr-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_form_who_is_this_trip_for = document.getElementById('pr-northeast-form-who-is-this-trip-for');
  if (pr_northeast_form_who_is_this_trip_for) {
    gsap.from('#pr-northeast-form-who-is-this-trip-for input, #pr-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_list_required_documents = document.getElementById('pr-northeast-list-required-documents');
  if (pr_northeast_list_required_documents) {
    gsap.from('#pr-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_list_booking_process = document.getElementById('pr-northeast-list-booking-process');
  if (pr_northeast_list_booking_process) {
    gsap.from('#pr-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_section_timelines_deadlines = document.getElementById('pr-northeast-section-timelines-deadlines');
  if (pr_northeast_section_timelines_deadlines) {
    gsap.fromTo('#pr-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_section_fees_costs = document.getElementById('pr-northeast-section-fees-costs');
  if (pr_northeast_section_fees_costs) {
    gsap.fromTo('#pr-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_list_risks_common_mistakes = document.getElementById('pr-northeast-list-risks-common-mistakes');
  if (pr_northeast_list_risks_common_mistakes) {
    gsap.from('#pr-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_section_diy_vs_professional_assistance = document.getElementById('pr-northeast-section-diy-vs-professional-assistance');
  if (pr_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_section_paran_specific_context = document.getElementById('pr-northeast-section-paran-specific-context');
  if (pr_northeast_section_paran_specific_context) {
    gsap.fromTo('#pr-northeast-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_section_what_our_clients_say = document.getElementById('pr-northeast-section-what-our-clients-say');
  if (pr_northeast_section_what_our_clients_say) {
    gsap.fromTo('#pr-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_section_frequently_asked_questions = document.getElementById('pr-northeast-section-frequently-asked-questions');
  if (pr_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#pr-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_section_international_support = document.getElementById('pr-northeast-section-international-support');
  if (pr_northeast_section_international_support) {
    gsap.fromTo('#pr-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_list_our_credentials = document.getElementById('pr-northeast-list-our-credentials');
  if (pr_northeast_list_our_credentials) {
    gsap.from('#pr-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_list_related_services = document.getElementById('pr-northeast-list-related-services');
  if (pr_northeast_list_related_services) {
    gsap.from('#pr-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_section_youre_in_good_hands = document.getElementById('pr-northeast-section-youre-in-good-hands');
  if (pr_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#pr-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_northeast_section_21 = document.getElementById('pr-northeast-section-21');
  if (pr_northeast_section_21) {
    gsap.fromTo('#pr-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_form_charming_south_wine_and_gauchos = document.getElementById('pr-south-form-charming-south-wine-and-gauchos');
  if (pr_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#pr-south-form-charming-south-wine-and-gauchos input, #pr-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_list_quick_facts = document.getElementById('pr-south-list-quick-facts');
  if (pr_south_list_quick_facts) {
    gsap.from('#pr-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_list_common_challenges_applicants_face = document.getElementById('pr-south-list-common-challenges-applicants-face');
  if (pr_south_list_common_challenges_applicants_face) {
    gsap.from('#pr-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_list_how_we_solve_these_challenges = document.getElementById('pr-south-list-how-we-solve-these-challenges');
  if (pr_south_list_how_we_solve_these_challenges) {
    gsap.from('#pr-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_section_trip_overview = document.getElementById('pr-south-section-trip-overview');
  if (pr_south_section_trip_overview) {
    gsap.fromTo('#pr-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_form_who_is_this_trip_for = document.getElementById('pr-south-form-who-is-this-trip-for');
  if (pr_south_form_who_is_this_trip_for) {
    gsap.from('#pr-south-form-who-is-this-trip-for input, #pr-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_list_required_documents = document.getElementById('pr-south-list-required-documents');
  if (pr_south_list_required_documents) {
    gsap.from('#pr-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_list_booking_process = document.getElementById('pr-south-list-booking-process');
  if (pr_south_list_booking_process) {
    gsap.from('#pr-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_section_timelines_deadlines = document.getElementById('pr-south-section-timelines-deadlines');
  if (pr_south_section_timelines_deadlines) {
    gsap.fromTo('#pr-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_section_fees_costs = document.getElementById('pr-south-section-fees-costs');
  if (pr_south_section_fees_costs) {
    gsap.fromTo('#pr-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_list_risks_common_mistakes = document.getElementById('pr-south-list-risks-common-mistakes');
  if (pr_south_list_risks_common_mistakes) {
    gsap.from('#pr-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_section_diy_vs_professional_assistance = document.getElementById('pr-south-section-diy-vs-professional-assistance');
  if (pr_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pr-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_section_paran_specific_context = document.getElementById('pr-south-section-paran-specific-context');
  if (pr_south_section_paran_specific_context) {
    gsap.fromTo('#pr-south-section-paran-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_section_what_our_clients_say = document.getElementById('pr-south-section-what-our-clients-say');
  if (pr_south_section_what_our_clients_say) {
    gsap.fromTo('#pr-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_section_frequently_asked_questions = document.getElementById('pr-south-section-frequently-asked-questions');
  if (pr_south_section_frequently_asked_questions) {
    gsap.fromTo('#pr-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_section_international_support = document.getElementById('pr-south-section-international-support');
  if (pr_south_section_international_support) {
    gsap.fromTo('#pr-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_list_our_credentials = document.getElementById('pr-south-list-our-credentials');
  if (pr_south_list_our_credentials) {
    gsap.from('#pr-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_list_related_services = document.getElementById('pr-south-list-related-services');
  if (pr_south_list_related_services) {
    gsap.from('#pr-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_section_youre_in_good_hands = document.getElementById('pr-south-section-youre-in-good-hands');
  if (pr_south_section_youre_in_good_hands) {
    gsap.fromTo('#pr-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

  const pr_south_section_21 = document.getElementById('pr-south-section-21');
  if (pr_south_section_21) {
    gsap.fromTo('#pr-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInSine'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
