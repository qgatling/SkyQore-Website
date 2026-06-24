/* ==========================================================================
   SKYQORE APP LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- Sticky Header Scroll Effect ---
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Mobile Menu Toggle ---
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileNavToggle && navLinks) {
    mobileNavToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      mobileNavToggle.setAttribute('aria-expanded', isExpanded);
      // Toggle icon representation simple text swap if needed (can also use icons)
      mobileNavToggle.innerHTML = isExpanded ? '&#10005;' : '&#9776;';
    });

    // Close menu when clicking navigation links
    const linkItems = document.querySelectorAll('.nav-link');
    linkItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileNavToggle.innerHTML = '&#9776;';
      });
    });
  }

  // --- Active Nav Highlights on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);
      
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });

  // --- Portfolio Filtering ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Deactivate other buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const categories = item.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          item.style.display = 'flex';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // --- Testimonials Slider ---
  const slides = document.querySelectorAll('.testimonial-slide');
  const dotsContainer = document.querySelector('.slider-dots');
  const prevBtn = document.querySelector('.prev-slide');
  const nextBtn = document.querySelector('.next-slide');
  let currentSlide = 0;
  let slideInterval;

  if (slides.length > 0) {
    // Generate dots dynamically
    slides.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.classList.add('slider-dot');
      if (idx === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(idx));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.slider-dot');

    const updateSlider = () => {
      slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        dots[idx].classList.remove('active');
      });
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlider();
    };

    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlider();
    };

    const goToSlide = (idx) => {
      currentSlide = idx;
      updateSlider();
      resetInterval();
    };

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });

    const startInterval = () => {
      slideInterval = setInterval(nextSlide, 8000);
    };

    const resetInterval = () => {
      clearInterval(slideInterval);
      startInterval();
    };

    startInterval();
  }

  // --- Interactive Cost Estimator ---
  const typeRadios = document.querySelectorAll('input[name="project-type"]');
  const timelineSlider = document.querySelector('#calc-timeline');
  const timelineVal = document.querySelector('#timeline-val');
  const featureCheckboxes = document.querySelectorAll('.calc-feature-checkbox');
  const priceNumDisplay = document.querySelector('.calc-price-num');
  
  // Estimate summaries in sidecard
  const summaryType = document.querySelector('#summary-type');
  const summaryTimeline = document.querySelector('#summary-timeline');
  const summaryFeatures = document.querySelector('#summary-features');

  // Multipliers & Base Prices
  const basePrices = {
    saas: 15000,
    mobile: 12000,
    uiux: 8000,
    enterprise: 22000
  };

  const baseLabels = {
    saas: 'SaaS Platform',
    mobile: 'Mobile App',
    uiux: 'UI/UX Design',
    enterprise: 'Enterprise Portal'
  };

  const featureCosts = {
    auth: 1800,
    payment: 1500,
    dashboard: 3200,
    ai: 5000,
    cloud: 3500
  };

  let currentPrice = 12000;

  const calculateEstimate = () => {
    // 1. Get Selected Project Type
    let selectedType = 'mobile';
    typeRadios.forEach(radio => {
      if (radio.checked) selectedType = radio.value;
    });
    const basePrice = basePrices[selectedType] || 12000;
    
    // Update summary text
    if (summaryType) summaryType.textContent = baseLabels[selectedType];

    // 2. Features sum
    let featuresTotal = 0;
    let selectedFeaturesCount = 0;
    featureCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        featuresTotal += featureCosts[checkbox.value] || 0;
        selectedFeaturesCount++;
      }
    });
    
    if (summaryFeatures) {
      summaryFeatures.textContent = selectedFeaturesCount > 0 
        ? `${selectedFeaturesCount} Add-on${selectedFeaturesCount > 1 ? 's' : ''}` 
        : 'Core Features Only';
    }

    // 3. Timeline multiplier
    // Slider values: 1 = Express (fast, expensive), 2 = Standard, 3 = Extended (flexible, minor discount)
    const timelineStep = parseInt(timelineSlider ? timelineSlider.value : 2);
    let timelineMultiplier = 1.0;
    let timelineText = 'Standard (12-16 wks)';
    
    if (timelineStep === 1) {
      timelineMultiplier = 1.35;
      timelineText = 'Express (6-8 wks)';
    } else if (timelineStep === 3) {
      timelineMultiplier = 0.9;
      timelineText = 'Extended (20+ wks)';
    }
    
    if (timelineSlider && timelineVal) {
      timelineVal.textContent = timelineText;
    }
    if (summaryTimeline) {
      summaryTimeline.textContent = timelineText.split(' (')[0];
    }

    // 4. Calculate final total
    const finalTotal = Math.round((basePrice + featuresTotal) * timelineMultiplier);
    
    // Animate price change
    animatePriceDisplay(finalTotal);
  };

  const animatePriceDisplay = (targetPrice) => {
    const duration = 800; // ms
    const startTime = performance.now();
    const startPrice = currentPrice;
    
    const updateNumber = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime >= duration) {
        priceNumDisplay.textContent = formatPrice(targetPrice);
        currentPrice = targetPrice;
      } else {
        const progress = elapsedTime / duration;
        // Ease out quad
        const easeProgress = progress * (2 - progress);
        const nextVal = Math.round(startPrice + (targetPrice - startPrice) * easeProgress);
        priceNumDisplay.textContent = formatPrice(nextVal);
        requestAnimationFrame(updateNumber);
      }
    };
    
    requestAnimationFrame(updateNumber);
  };

  const formatPrice = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Attach event listeners to calculator components
  if (typeRadios.length > 0 && timelineSlider) {
    typeRadios.forEach(radio => radio.addEventListener('change', calculateEstimate));
    timelineSlider.addEventListener('input', calculateEstimate);
    featureCheckboxes.forEach(checkbox => checkbox.addEventListener('change', calculateEstimate));
    
    // Initialize calculator
    calculateEstimate();
  }

  // --- Contact Form Submission Handler ---
  const contactForm = document.getElementById('skyqore-contact-form');
  const formNotification = document.getElementById('form-success-banner');

  if (contactForm && formNotification) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic form visual validation check
      const inputs = contactForm.querySelectorAll('.form-input');
      let isValid = true;

      inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#e74c3c';
        } else {
          input.style.borderColor = 'var(--border-color)';
        }
      });

      if (!isValid) return;

      // Submit Button Loading State
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending... <svg class="spinner" viewBox="0 0 50 50" style="width:18px;height:18px;animation:rotate 2s linear infinite;margin-left:5px;"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5" stroke="currentColor" stroke-linecap="round" style="stroke:currentColor;stroke-dasharray:1,200;stroke-dashoffset:0;animation:dash 1.5s ease-in-out infinite;"></circle></svg>';

      // Simulate API call
      setTimeout(() => {
        // Show success notification
        formNotification.classList.add('show');
        
        // Reset form details
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        // Recalculate estimator back to standard reset defaults
        typeRadios.forEach(radio => {
          if (radio.value === 'mobile') radio.checked = true;
        });
        featureCheckboxes.forEach(checkbox => checkbox.checked = false);
        if (timelineSlider) timelineSlider.value = 2;
        calculateEstimate();

        // Scroll back to notification
        formNotification.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Hide success banner after 5 seconds
        setTimeout(() => {
          formNotification.classList.remove('show');
        }, 6000);
      }, 1500);
    });
  }
});

// Custom CSS animation keyframes injected via JS for the spinner, if it wasn't loaded in the css
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes rotate {
    100% { transform: rotate(360deg); }
  }
  @keyframes dash {
    0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
    50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
    100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
  }
`;
document.head.appendChild(styleSheet);
