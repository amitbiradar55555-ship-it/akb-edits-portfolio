/**
 * PORTFOLIO APPLICATION LOGIC
 * Handles data rendering, video modals, thumbnail lightboxes, copy actions, and filtering.
 */

document.addEventListener('DOMContentLoaded', () => {
  initProfileData();
  initSoftwareGrid();
  initSkillsGrid();
  initTimeline();
  initTableOfContents();
  initVideoSections();
  initThumbnailGalleries();
  initModals();
  initEmailCopy();
  initMobileNav();
  initScrollSpy();
});

// 1. Profile Data
function initProfileData() {
  const p = PORTFOLIO_DATA.profile;

  // Header Brand & Title
  const brandNameEls = document.querySelectorAll('.bind-brand-name');
  brandNameEls.forEach(el => el.textContent = p.brandName);

  const heroNameEls = document.querySelectorAll('.bind-name');
  heroNameEls.forEach(el => el.textContent = p.name);

  const heroTitleEls = document.querySelectorAll('.bind-title');
  heroTitleEls.forEach(el => el.textContent = p.title);

  const heroTaglineEls = document.querySelectorAll('.bind-tagline');
  heroTaglineEls.forEach(el => el.textContent = p.tagline);

  // Stats
  const statYears = document.getElementById('stat-years');
  if (statYears) statYears.textContent = p.experienceYears;

  const statViews = document.getElementById('stat-views');
  if (statViews) statViews.textContent = p.viewsGenerated;

  const statProjects = document.getElementById('stat-projects');
  if (statProjects) statProjects.textContent = p.projectsCompleted;

  // Bio Paragraphs
  const bioContainer = document.getElementById('bio-container');
  if (bioContainer) {
    bioContainer.innerHTML = p.bio.map(para => `
      <p class="text-zinc-300 leading-relaxed text-base sm:text-lg mb-4">
        ${para}
      </p>
    `).join('');
  }

  // Contact Info
  const emailLinks = document.querySelectorAll('.bind-email-link');
  emailLinks.forEach(el => {
    el.href = `mailto:${p.contacts.email}`;
    el.textContent = p.contacts.email;
  });

  const instaLinks = document.querySelectorAll('.bind-insta-link');
  instaLinks.forEach(el => {
    el.href = p.contacts.instagram.url;
    el.textContent = p.contacts.instagram.handle;
  });

  const ytLinks = document.querySelectorAll('.bind-yt-link');
  ytLinks.forEach(el => {
    el.href = p.contacts.youtube.url;
    el.textContent = p.contacts.youtube.handle;
  });
}

// 2. Softwares
function initSoftwareGrid() {
  const container = document.getElementById('software-grid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.softwares.map(item => `
    <div class="glass-card p-4 rounded-2xl flex items-center gap-4 glow-border group transition-all duration-300 hover:-translate-y-1">
      <div class="w-14 h-14 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-center p-2.5 shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg">
        <img src="${item.icon}" alt="${item.name}" class="w-full h-full object-contain filter drop-shadow">
      </div>
      <div>
        <h4 class="text-white font-bold text-base group-hover:text-red-400 transition-colors">${item.name}</h4>
        <p class="text-zinc-400 text-xs mt-0.5">${item.role}</p>
        <span class="inline-block mt-1 px-2 py-0.5 bg-red-950/40 text-red-400 text-[10px] font-semibold rounded-full border border-red-800/40">${item.level}</span>
      </div>
    </div>
  `).join('');
}

// 3. Skills
function initSkillsGrid() {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.skills.map((skill, index) => `
    <div class="glass-card p-5 rounded-2xl glow-border group hover:-translate-y-1 transition-all duration-300">
      <div class="flex items-start gap-3.5">
        <div class="w-8 h-8 rounded-lg bg-red-900/30 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-sm shrink-0 mt-0.5">
          ${(index + 1).toString().padStart(2, '0')}
        </div>
        <div>
          <h4 class="text-white font-bold text-base group-hover:text-red-400 transition-colors">${skill.title}</h4>
          <p class="text-zinc-400 text-xs sm:text-sm mt-1 leading-relaxed">${skill.description}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// 4. Experience Timeline
function initTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map((item, idx) => `
    <div class="relative pl-12 pb-10 group last:pb-2">
      <!-- Glow Dot -->
      <div class="absolute left-[-2px] top-1.5 w-5 h-5 rounded-full bg-zinc-950 border-2 border-red-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_rgba(225,29,72,0.6)]">
        <div class="w-2 h-2 rounded-full bg-red-500"></div>
      </div>

      <!-- Card -->
      <div class="glass-card p-5 rounded-2xl glow-border hover:-translate-y-1 transition-all duration-300">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span class="font-anton text-2xl tracking-wider text-red-500">${item.year}</span>
          <span class="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 font-medium border border-white/5">${item.company}</span>
        </div>
        <h4 class="text-lg font-bold text-white mb-1.5">${item.role}</h4>
        <p class="text-zinc-400 text-sm leading-relaxed">${item.description}</p>
      </div>
    </div>
  `).join('');
}

// 5. Table of Contents
function initTableOfContents() {
  const container = document.getElementById('toc-grid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.tableOfContents.map((item, idx) => `
    <a href="${item.target}" class="glass-card p-4 rounded-xl glow-border flex items-center justify-between group transition-all duration-300 hover:bg-zinc-800/60">
      <div class="flex items-center gap-3">
        <span class="text-xs font-mono text-red-500/80 font-bold">${(idx + 1).toString().padStart(2, '0')}</span>
        <span class="text-white font-bold text-sm sm:text-base group-hover:text-red-400 transition-colors">${item.title}</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-xs text-zinc-500 font-medium">${item.count}</span>
        <svg class="w-4 h-4 text-zinc-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  `).join('');
}

// 6. Video Sections
function initVideoSections() {
  // Client Shorts
  const clientGrid = document.getElementById('client-shorts-grid');
  if (clientGrid) {
    clientGrid.innerHTML = PORTFOLIO_DATA.videos.clientShorts.map(video => renderShortCard(video, "Client Project")).join('');
  }

  // Personal Shorts (Marvel & Cinematic)
  const personalGrid = document.getElementById('personal-shorts-grid');
  if (personalGrid) {
    personalGrid.innerHTML = PORTFOLIO_DATA.videos.personalShorts.map(video => renderShortCard(video, "Marvel / Cinematic Edit")).join('');
  }

  // More Creative Shorts
  const moreGrid = document.getElementById('more-shorts-grid');
  if (moreGrid) {
    moreGrid.innerHTML = PORTFOLIO_DATA.videos.moreShorts.map(video => renderShortCard(video, "Creative Short")).join('');
  }

  // Long-Form Featured
  const longFormGrid = document.getElementById('longform-grid');
  if (longFormGrid) {
    longFormGrid.innerHTML = PORTFOLIO_DATA.videos.featuredLongForm.map(video => renderLongFormCard(video)).join('');
  }

  // Attach Video Click Handlers
  document.querySelectorAll('[data-video-id]').forEach(card => {
    card.addEventListener('click', () => {
      const vid = card.getAttribute('data-video-id');
      const title = card.getAttribute('data-video-title') || 'Featured Video';
      const isShort = card.getAttribute('data-video-type') === 'short';
      openVideoModal(vid, title, isShort);
    });
  });
}

function renderShortCard(video, tag) {
  const thumbUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
  return `
    <div 
      class="group relative rounded-2xl overflow-hidden glass-card glow-border cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(225,29,72,0.25)] flex flex-col"
      data-video-id="${video.id}"
      data-video-title="${video.title}"
      data-video-type="short"
    >
      <!-- 9:16 Aspect Media Container -->
      <div class="relative w-full reel-aspect bg-zinc-950 overflow-hidden">
        <img 
          src="${thumbUrl}" 
          alt="${video.title}" 
          loading="lazy"
          class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
        />
        
        <!-- Dark Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
        
        <!-- Play Button Overlay -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:scale-115 transition-all duration-300 border border-white/20 group-hover:bg-red-500">
            <svg class="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>

        <!-- Tag Badge -->
        <div class="absolute top-3 left-3">
          <span class="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase bg-black/60 backdrop-blur-md text-red-400 border border-red-500/30 rounded-full">
            ${video.category || tag}
          </span>
        </div>

        <!-- YouTube Shorts Logo Indicator -->
        <div class="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-red-500 border border-white/10">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.8-8.2c-.9-.9-2.2-1.4-3.6-1.4-.7 0-1.4.1-2 .4l1.3-.7c1.3-.7 1.8-2.3 1.1-3.6-.7-1.3-2.3-1.8-3.6-1.1L3.8 4.4C2.5 5.1 1.7 6.4 1.7 7.9c0 1.5.8 2.8 2.1 3.5l-1.3.7c-1.3.7-1.8 2.3-1.1 3.6.5.9 1.4 1.4 2.3 1.4.4 0 .9-.1 1.3-.3l7.2-4.4c1.3-.7 2.1-2 2.1-3.5 0-1.5-.8-2.8-2.1-3.5l1.3-.7c.4-.2.9-.3 1.3-.3 1 0 1.9.5 2.4 1.4.7 1.3.2 2.9-1.1 3.6l-.9.5c-.3.2-.5.5-.5.9s.2.7.5.9c.4.2.9.2 1.3 0l1-.6c2.2-1.3 2.9-4.1 1.6-6.3z"/>
          </svg>
        </div>

        <!-- Bottom Info Inside Card -->
        <div class="absolute bottom-3 left-3 right-3 text-left">
          <h4 class="text-white font-bold text-sm line-clamp-2 leading-snug group-hover:text-red-400 transition-colors drop-shadow">
            ${video.title}
          </h4>
          <span class="text-zinc-400 text-[11px] mt-1 inline-flex items-center gap-1">
            <span>Tap to watch</span>
            <svg class="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  `;
}

function renderLongFormCard(video) {
  const thumbUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
  return `
    <div 
      class="group relative rounded-3xl overflow-hidden glass-card glow-border cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(225,29,72,0.2)]"
      data-video-id="${video.id}"
      data-video-title="${video.title}"
      data-video-type="long"
    >
      <div class="relative w-full video-16-9 bg-zinc-950 overflow-hidden">
        <img 
          src="${thumbUrl}" 
          alt="${video.title}"
          loading="lazy"
          onerror="this.src='https://img.youtube.com/vi/${video.id}/hqdefault.jpg'"
          class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-md group-hover:scale-110 transition-all duration-300 border border-white/20 group-hover:bg-red-500">
            <svg class="w-8 h-8 sm:w-10 sm:h-10 ml-1.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>

        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 text-xs font-bold tracking-wider uppercase bg-black/70 backdrop-blur-md text-red-400 border border-red-500/40 rounded-full">
            ${video.category}
          </span>
        </div>

        <div class="absolute bottom-4 left-4 right-4">
          <h3 class="text-white font-display text-2xl sm:text-3xl tracking-wide group-hover:text-red-400 transition-colors drop-shadow-md">
            ${video.title}
          </h3>
          <p class="text-zinc-300 text-xs sm:text-sm mt-1 line-clamp-2 max-w-2xl leading-relaxed">
            ${video.description}
          </p>
        </div>
      </div>
    </div>
  `;
}

// 7. Thumbnail Galleries
function initThumbnailGalleries() {
  const clientGallery = document.getElementById('client-thumbnails-grid');
  if (clientGallery) {
    clientGallery.innerHTML = PORTFOLIO_DATA.thumbnails.client.map(thumb => renderThumbnailCard(thumb)).join('');
  }

  const gamingGallery = document.getElementById('gaming-thumbnails-grid');
  if (gamingGallery) {
    gamingGallery.innerHTML = PORTFOLIO_DATA.thumbnails.gaming.map(thumb => renderThumbnailCard(thumb)).join('');
  }

  const extraGallery = document.getElementById('extra-thumbnails-grid');
  if (extraGallery) {
    extraGallery.innerHTML = PORTFOLIO_DATA.thumbnails.extra.map(thumb => renderThumbnailCard(thumb)).join('');
  }

  // Click on Thumbnail to Open Lightbox
  document.querySelectorAll('[data-thumb-src]').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-thumb-src');
      const title = item.getAttribute('data-thumb-title') || 'Thumbnail Preview';
      const cat = item.getAttribute('data-thumb-cat') || 'Design';
      openLightbox(src, title, cat);
    });
  });
}

function renderThumbnailCard(thumb) {
  return `
    <div 
      class="group relative rounded-2xl overflow-hidden glass-card glow-border cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(225,29,72,0.2)] shine-hover"
      data-thumb-src="${thumb.image}"
      data-thumb-title="${thumb.title}"
      data-thumb-cat="${thumb.category}"
    >
      <div class="video-16-9 bg-zinc-950 overflow-hidden relative">
        <img 
          src="${thumb.image}" 
          alt="${thumb.title}" 
          loading="lazy"
          class="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span class="text-xs text-red-400 font-bold uppercase tracking-wider">${thumb.category}</span>
          <h4 class="text-white font-bold text-sm sm:text-base mt-0.5">${thumb.title}</h4>
          <span class="text-zinc-400 text-xs mt-1 inline-flex items-center gap-1 font-medium">
            <span>View Fullscreen</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 3h6m0 0v6m0-6L14 10M9 21H3m0 0v-6m0 6l7-7"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  `;
}

// 8. Modals: Video Player & Image Lightbox
function initModals() {
  const videoModal = document.getElementById('video-modal');
  const videoFrame = document.getElementById('video-modal-iframe');
  const videoTitle = document.getElementById('video-modal-title');
  const videoDirectLink = document.getElementById('video-modal-direct');
  const closeVideoBtn = document.getElementById('close-video-modal');

  const imgModal = document.getElementById('img-modal');
  const imgElement = document.getElementById('img-modal-view');
  const imgTitle = document.getElementById('img-modal-title');
  const imgCat = document.getElementById('img-modal-cat');
  const closeImgBtn = document.getElementById('close-img-modal');

  // Open Video Modal
  window.openVideoModal = (videoId, title, isShort) => {
    videoTitle.textContent = title;
    
    // Choose embed url
    const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    videoFrame.src = embedUrl;

    const directUrl = isShort 
      ? `https://youtube.com/shorts/${videoId}` 
      : `https://youtu.be/${videoId}`;
    videoDirectLink.href = directUrl;

    // Adjust modal container aspect ratio
    const modalBox = document.getElementById('video-modal-box');
    if (isShort) {
      modalBox.className = "relative w-full max-w-[360px] reel-aspect rounded-2xl overflow-hidden bg-black shadow-2xl border border-zinc-800";
    } else {
      modalBox.className = "relative w-full max-w-4xl video-16-9 rounded-2xl overflow-hidden bg-black shadow-2xl border border-zinc-800";
    }

    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Close Video Modal
  const closeVideo = () => {
    videoModal.classList.remove('active');
    videoFrame.src = "";
    document.body.style.overflow = '';
  };

  if (closeVideoBtn) closeVideoBtn.addEventListener('click', closeVideo);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideo();
    });
  }

  // Open Image Lightbox
  window.openLightbox = (src, title, cat) => {
    imgElement.src = src;
    imgTitle.textContent = title;
    imgCat.textContent = cat;
    imgModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Close Image Lightbox
  const closeImg = () => {
    imgModal.classList.remove('active');
    imgElement.src = "";
    document.body.style.overflow = '';
  };

  if (closeImgBtn) closeImgBtn.addEventListener('click', closeImg);
  if (imgModal) {
    imgModal.addEventListener('click', (e) => {
      if (e.target === imgModal) closeImg();
    });
  }

  // Global Escape Key Listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideo();
      closeImg();
    }
  });
}

// 9. Email Copy & Toast Notification
function initEmailCopy() {
  const copyButtons = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('copy-toast');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = PORTFOLIO_DATA.profile.contacts.email;
      
      navigator.clipboard.writeText(email).then(() => {
        showToast(`✓ Copied: ${email}`);
      }).catch(() => {
        // Fallback prompt
        window.location.href = `mailto:${email}`;
      });
    });
  });

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

// 10. Mobile Navigation Menu
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// 11. Scroll Spy for Navbar
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-red-400');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-red-400');
      }
    });
  });
}
