export const metadata = {
  title: `Sign In | Eqo Logiq Member Account`,
  description: `Sign in to your Eqo Logiq account to view orders, manage preferences, and access member benefits.`,
};

export default function Page() {
  return (
    <>
      
      <div dangerouslySetInnerHTML={{ __html: `

  <!-- NAV -->
  <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 py-4 bg-brand-base border-b border-brand-text/10 transition-all duration-300">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2 z-50">
        <img src="https://static.kite.ai/image/upload/c_crop,x_0.000,y_0.196,w_1.000,h_0.609/v1780077526/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/wbsbvykvt63upqxf8tmm.png" alt="Eqo Logiq" class="h-9 w-auto object-contain">
      </a>
      <div class="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
        <a href="/shop/" class="text-sm font-body font-medium text-brand-text hover:text-brand-primary transition-colors">Shop</a>
        <a href="/about/" class="text-sm font-body font-medium text-brand-text hover:text-brand-primary transition-colors">Our Story</a>
        <a href="/qrash-qourse/" class="text-sm font-body font-medium text-brand-text hover:text-brand-primary transition-colors">Impact</a>
        <a href="/blog/" class="text-sm font-body font-medium text-brand-text hover:text-brand-primary transition-colors">Blogs</a>
      </div>
      <div class="flex items-center gap-6 z-50">
        <button id="search-btn" class="text-brand-text hover:text-brand-primary transition-colors" aria-label="Search"><i data-lucide="search" class="w-5 h-5"></i></button>
        <a href="/login/" class="text-brand-primary hidden md:flex items-center" aria-label="Sign In">
          <i data-lucide="user" class="w-5 h-5"></i>
        </a>
        <button id="cart-drawer-btn" class="relative flex items-center gap-2 text-brand-text hover:text-brand-primary transition-colors" aria-label="Open cart">
          <span class="text-sm font-body font-medium hidden md:block">Cart</span>
          <i data-lucide="shopping-bag" class="w-5 h-5"></i>
          <span class="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#006B96] text-white text-[10px] font-bold flex items-center justify-center leading-none">2</span>
        </button>
        <button id="mobile-menu-btn" class="md:hidden text-brand-text focus:outline-none">
          <i data-lucide="menu" class="w-6 h-6"></i>
        </button>
      </div>
    </div>
  </nav>

  <!-- MOBILE MENU -->
  <div id="mobile-menu" class="fixed inset-0 z-[60] bg-brand-base transform translate-x-full transition-transform duration-500 ease-in-out flex flex-col">
    <div class="h-20 flex items-center justify-between px-6">
      <img src="https://static.kite.ai/image/upload/c_crop,x_0.000,y_0.196,w_1.000,h_0.609/v1780077526/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/wbsbvykvt63upqxf8tmm.png" alt="Eqo Logiq" class="h-9 w-auto">
      <button id="close-mobile-menu" class="p-2 text-brand-text"><i data-lucide="x" class="w-8 h-8"></i></button>
    </div>
    <div class="flex-1 flex flex-col justify-center px-12 gap-8">
      <a href="/shop/" class="text-4xl font-sans font-bold text-brand-text hover:text-brand-primary transition-colors">Shop</a>
      <a href="/about/" class="text-4xl font-sans font-bold text-brand-text hover:text-brand-primary transition-colors">Our Story</a>
      <a href="/qrash-qourse/" class="text-4xl font-sans font-bold text-brand-text hover:text-brand-primary transition-colors">Impact</a>
      <a href="/blog/" class="text-4xl font-sans font-bold text-brand-text hover:text-brand-primary transition-colors">Blogs</a>
      <a href="/login/" class="text-4xl font-sans font-bold text-brand-primary">Sign In</a>
    </div>
  </div>

  <!-- SEARCH MODAL -->
  <div id="search-modal" class="fixed inset-0 z-[70] flex flex-col items-center pt-24 px-4 pointer-events-none opacity-0 transition-opacity duration-200" style="background:rgba(34,34,34,0.6);backdrop-filter:blur(6px);">
    <div class="w-full max-w-2xl bg-brand-base rounded-2xl shadow-2xl overflow-hidden">
      <div class="flex items-center gap-3 px-5 py-4 border-b border-brand-text/10">
        <i data-lucide="search" class="w-5 h-5 text-brand-text/40 flex-shrink-0"></i>
        <input id="search-input" type="text" placeholder="Search products, pages…" autocomplete="off" class="flex-1 bg-transparent font-body text-base text-brand-text placeholder-brand-text/35 outline-none">
        <button id="search-close" class="p-1 text-brand-text/40 hover:text-brand-text transition-colors" aria-label="Close search"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>
      <div id="search-results" class="max-h-[60vh] overflow-y-auto py-2"></div>
    </div>
  </div>

  <main class="pt-20 min-h-screen flex">

    <!-- LEFT: Brand panel -->
    <div class="hidden lg:flex lg:w-[45%] flex-col justify-between relative overflow-hidden" style="background:#006B96;">
      <!-- Background product image -->
      <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_900,c_fill,g_auto/v1777952844/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/g6uec6ksdecsgs8ybt9r.png" alt="" aria-hidden="true" class="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-luminosity">
      <div class="relative p-16 flex flex-col h-full justify-between">
        <!-- Top: brand statement -->
        <div class="reveal active">
          <p class="kicker text-white/40 mb-6 flex items-center gap-3">
            <span class="w-6 h-px bg-white/30"></span>
            Member Area
          </p>
          <h2 class="font-sans font-bold text-4xl text-white leading-[1.05] tracking-tight mb-6">
            Products that earn<br>their place.
          </h2>
          <p class="font-body text-white/55 text-base leading-relaxed max-w-xs">
            Track orders, manage preferences, and access early drops. All in one place.
          </p>
        </div>

        <!-- Middle: three proof points -->
        <div class="reveal active space-y-6" style="transition-delay:100ms;">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background:rgba(255,255,255,0.12);">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="1"></circle></svg>
            </div>
            <div>
              <p class="font-sans font-bold text-sm text-white">Order history</p>
              <p class="font-body text-xs text-white/45">Track every purchase in one view</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background:rgba(255,255,255,0.12);">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>
            <div>
              <p class="font-sans font-bold text-sm text-white">Wishlist &amp; saves</p>
              <p class="font-body text-xs text-white/45">Keep track of what you want next</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background:rgba(255,255,255,0.12);">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <div>
              <p class="font-sans font-bold text-sm text-white">Early access</p>
              <p class="font-body text-xs text-white/45">Members get new drops first</p>
            </div>
          </div>
        </div>

        <!-- Bottom: trust note -->
        <div class="reveal active" style="transition-delay:200ms;">
          <p class="font-body text-xs text-white/30">10,000+ households trust Eqo Logiq products daily.</p>
        </div>
      </div>
    </div>

    <!-- RIGHT: Login form -->
    <div class="w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-16 lg:px-20 py-16">
      <div class="max-w-md w-full mx-auto reveal active">

        <!-- Header -->
        <div class="mb-10">
          <p class="kicker text-brand-primary mb-4 flex items-center gap-2">
            <span class="w-5 h-px bg-brand-primary"></span>
            Welcome back
          </p>
          <h1 class="font-sans font-bold text-3xl md:text-4xl text-brand-text leading-tight mb-2">Sign in to your account.</h1>
          <p class="font-body text-sm text-brand-text/50">
            Demo login: use any email &amp; password to continue.
          </p>
        </div>

        <!-- Error message -->
        <div id="error-msg" class="mb-6 px-4 py-3 rounded-xl flex items-center gap-3" style="background:rgba(229,62,62,0.08);border:1px solid rgba(229,62,62,0.2);">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E53E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <p class="font-body text-sm" style="color:#E53E3E;" id="error-text">Please enter a valid email address.</p>
        </div>

        <!-- Form -->
        <form id="login-form" novalidate="" class="space-y-4">
          <div>
            <label class="font-sans font-bold text-xs text-brand-text/60 uppercase tracking-wider block mb-2" for="email">Email address</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autocomplete="email" class="input-field">
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <label class="font-sans font-bold text-xs text-brand-text/60 uppercase tracking-wider" for="password">Password</label>
              <button type="button" id="forgot-btn" class="font-body text-xs text-brand-primary hover:underline">Forgot password?</button>
            </div>
            <div class="relative">
              <input id="password" name="password" type="password" placeholder="Enter your password" autocomplete="current-password" class="input-field pr-12">
              <button type="button" id="toggle-pw" class="absolute right-3 top-1/2 -translate-y-1/2 text-brand-text/35 hover:text-brand-text/70 transition-colors" aria-label="Toggle password visibility">
                <i data-lucide="eye" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <!-- Remember me -->
          <div class="flex items-center gap-3 pt-1">
            <input type="checkbox" id="remember" class="w-4 h-4 accent-brand-primary rounded">
            <label for="remember" class="font-body text-sm text-brand-text/60 cursor-pointer">Remember me on this device</label>
          </div>

          <!-- Submit -->
          <button type="submit" id="login-btn" class="w-full flex items-center justify-center gap-2.5 py-4 bg-brand-primary text-white font-sans font-bold text-base rounded-xl hover:bg-[#005580] active:bg-[#004060] transition-colors duration-200 mt-2 shadow-[0_4px_24px_rgba(0,107,150,0.25)]">
            <span id="btn-label">Sign In</span>
            <i data-lucide="arrow-right" class="w-4 h-4" id="btn-icon"></i>
            <!-- Loading spinner (hidden by default) -->
            <svg id="btn-spinner" class="hidden w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
          </button>
        </form>

        <!-- Divider -->
        <div class="flex items-center gap-4 my-8">
          <div class="flex-1 h-px bg-brand-text/10"></div>
          <span class="font-body text-xs text-brand-text/35 uppercase tracking-wider">or</span>
          <div class="flex-1 h-px bg-brand-text/10"></div>
        </div>

        <!-- Create account -->
        <div class="text-center">
          <p class="font-body text-sm text-brand-text/55 mb-3">Don't have an account?</p>
          <a href="#" id="create-account-btn" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-brand-primary text-brand-primary font-sans font-bold text-sm hover:bg-brand-primary hover:text-white transition-colors duration-200">
            Create an account
            <i data-lucide="user-plus" class="w-4 h-4"></i>
          </a>
        </div>

        <!-- Demo note -->
        <div class="mt-10 pt-6 border-t border-brand-text/8">
          <p class="font-body text-xs text-brand-text/35 text-center leading-relaxed">
            This is a demo login experience. No real authentication is used.<br>
            Any email and password will complete the demo flow.
          </p>
        </div>

      </div>
    </div>

  </main>

  <!-- Forgot password toast -->
  <div id="forgot-toast" class="fixed bottom-8 left-1/2 -translate-x-1/2 z-[80] px-6 py-4 rounded-xl font-body text-sm text-white shadow-lg pointer-events-none opacity-0 transition-opacity duration-300 flex items-center gap-3" style="background:#222222;min-width:260px;">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    Demo: a reset link would be sent to your email.
  </div>

  <!-- Create account toast -->
  <div id="create-toast" class="fixed bottom-8 left-1/2 -translate-x-1/2 z-[80] px-6 py-4 rounded-xl font-body text-sm text-white shadow-lg pointer-events-none opacity-0 transition-opacity duration-300 flex items-center gap-3" style="background:#222222;min-width:260px;">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
    Demo: account registration flow would open here.
  </div>

  <footer class="bg-[#111111] text-white pt-12 pb-8 px-6 md:px-12" style="border-top:3px solid #006B96;">
    <div class="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <img src="https://static.kite.ai/image/upload/c_crop,x_0.000,y_0.196,w_1.000,h_0.609/v1780077526/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/wbsbvykvt63upqxf8tmm.png" alt="Eqo Logiq" class="h-8 w-auto object-contain">
      <p class="font-body text-white/30 text-sm">© <span id="year"></span> Eqo Logiq. All rights reserved.</p>
      <div class="flex items-center gap-6">
        <a href="/policy/" class="font-body text-white/30 hover:text-brand-primary text-sm transition-colors">Privacy</a>
        <a href="/shop/" class="font-body text-white/30 hover:text-brand-primary text-sm transition-colors">Shop</a>
        <a href="/contact/" class="font-body text-white/30 hover:text-brand-primary text-sm transition-colors">Contact</a>
      </div>
    </div>
  </footer>

  <script>
    lucide.createIcons();
    document.getElementById('year').textContent = new Date().getFullYear();

    // Navbar scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 50); });

    // Mobile menu
    document.getElementById('mobile-menu-btn').addEventListener('click', () => document.getElementById('mobile-menu').classList.remove('translate-x-full'));
    document.getElementById('close-mobile-menu').addEventListener('click', () => document.getElementById('mobile-menu').classList.add('translate-x-full'));

    // Password toggle
    const pwInput = document.getElementById('password');
    document.getElementById('toggle-pw').addEventListener('click', function() {
      const isText = pwInput.type === 'text';
      pwInput.type = isText ? 'password' : 'text';
      this.innerHTML = isText
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
    });

    // Toast helper
    function showToast(id) {
      const el = document.getElementById(id);
      el.classList.remove('opacity-0');
      el.classList.add('opacity-100');
      setTimeout(() => { el.classList.remove('opacity-100'); el.classList.add('opacity-0'); }, 3200);
    }

    // Forgot password
    document.getElementById('forgot-btn').addEventListener('click', () => showToast('forgot-toast'));

    // Create account
    document.getElementById('create-account-btn').addEventListener('click', (e) => { e.preventDefault(); showToast('create-toast'); });

    // Form submit — demo login flow
    document.getElementById('login-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const errorMsg = document.getElementById('error-msg');
      const errorText = document.getElementById('error-text');
      const emailField = document.getElementById('email');
      const pwField = document.getElementById('password');

      // Hide previous errors
      errorMsg.classList.remove('show');
      emailField.classList.remove('error');
      pwField.classList.remove('error');

      // Basic validation
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+\$/.test(email)) {
        emailField.classList.add('error');
        errorText.textContent = 'Please enter a valid email address.';
        errorMsg.classList.add('show');
        emailField.focus();
        return;
      }
      if (!password || password.length < 4) {
        pwField.classList.add('error');
        errorText.textContent = 'Please enter your password (min. 4 characters for demo).';
        errorMsg.classList.add('show');
        pwField.focus();
        return;
      }

      // Simulate loading state
      const btn = document.getElementById('login-btn');
      const btnLabel = document.getElementById('btn-label');
      const btnIcon = document.getElementById('btn-icon');
      const btnSpinner = document.getElementById('btn-spinner');
      btn.disabled = true;
      btnLabel.textContent = 'Signing in…';
      btnIcon.classList.add('hidden');
      btnSpinner.classList.remove('hidden');

      // Store demo session
      sessionStorage.setItem('eq_demo_user', JSON.stringify({ email, name: email.split('@')[0] }));

      // Redirect after short delay
      setTimeout(() => { window.location.href = '/account.html'; }, 1400);
    });

    // Search modal
    const SEARCH_DATA=[{title:'Steel Water Bottle - 750ml',desc:'Keeps cold for 24h · Food-grade steel · Zero plastic',meta:'₹799 onwards',url:'/product.html',type:'product'},{title:'Bamboo Toothbrush',desc:'Biodegradable handle · BPA-free bristles · Vegan',meta:'₹149 onwards',url:'/product.html',type:'product'},{title:'The Starter Switch Bundle',desc:'750ml bottle + Bamboo brush + Tongue scraper',meta:'₹1,199 onwards',url:'/product.html',type:'product'},{title:'Shop All Products',desc:'Browse the full Eqo Logiq catalogue',meta:'Page',url:'/shop.html',type:'page'},{title:'Our Story',desc:'Why Eqo Logiq exists',meta:'Page',url:'/about.html',type:'page'},{title:'Contact Us',desc:'Get in touch with the Eqo Logiq team',meta:'Page',url:'/contact.html',type:'page'}];
    const searchModal=document.getElementById('search-modal'),searchInput=document.getElementById('search-input'),searchResults=document.getElementById('search-results');let activeIdx=-1;
    function openSearch(){searchModal.classList.remove('pointer-events-none','opacity-0');searchModal.classList.add('pointer-events-auto','opacity-100');searchInput.value='';renderResults('');setTimeout(()=>searchInput.focus(),50);}
    function closeSearch(){searchModal.classList.add('pointer-events-none','opacity-0');searchModal.classList.remove('pointer-events-auto','opacity-100');activeIdx=-1;}
    function renderResults(q){const t=q.trim().toLowerCase();const hits=t.length===0?SEARCH_DATA.slice(0,6):SEARCH_DATA.filter(d=>(d.title+' '+d.desc).toLowerCase().includes(t));if(!hits.length){searchResults.innerHTML='<p class="font-body text-sm text-brand-text/40 px-5 py-6 text-center">No results for "'+q+'"</p>';return;}searchResults.innerHTML=hits.map((h,i)=>\`<a href="\${h.url}" class="search-result-item flex items-center gap-4 px-5 py-3.5 hover:bg-brand-surface transition-colors"><div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 \${h.type==='product'?'bg-brand-primary/10':'bg-brand-text/6'}"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="\${h.type==='product'?'#006B96':'#222'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\${h.type==='product'?'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>':'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>'}</svg></div><div class="flex-1 min-w-0"><p class="font-sans font-bold text-sm text-brand-text truncate">\${h.title}</p><p class="font-body text-xs text-brand-text/45 truncate mt-0.5">\${h.desc}</p></div></a>\`).join('');activeIdx=-1;}
    document.getElementById('search-btn').addEventListener('click',openSearch);
    document.getElementById('search-close').addEventListener('click',closeSearch);
    searchModal.addEventListener('click',e=>{if(e.target===searchModal)closeSearch();});
    searchInput.addEventListener('input',e=>renderResults(e.target.value));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSearch();if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();openSearch();}});
  
    // ── CART DRAWER ──────────────────────────────────────────────────────
    function openCartDrawer(){document.getElementById('cart-overlay').style.opacity='1';document.getElementById('cart-overlay').style.pointerEvents='auto';document.getElementById('cart-drawer').style.transform='translateX(0)';}
    function closeCartDrawer(){document.getElementById('cart-overlay').style.opacity='0';document.getElementById('cart-overlay').style.pointerEvents='none';document.getElementById('cart-drawer').style.transform='translateX(100%)';}
    document.getElementById('cart-drawer-btn').addEventListener('click',openCartDrawer);
    document.addEventListener('keydown',function(e){if(e.key==='Escape')closeCartDrawer();});
    // ── END CART DRAWER ──────────────────────────────────────────────────
  </script>

  <!-- CART DRAWER -->
  <div id="cart-overlay" onclick="closeCartDrawer()" style="position:fixed;inset:0;z-index:80;background:rgba(34,34,34,0.5);backdrop-filter:blur(2px);opacity:0;pointer-events:none;transition:opacity 200ms ease;"></div>
  <div id="cart-drawer" style="position:fixed;top:0;right:0;bottom:0;z-index:81;width:420px;max-width:100vw;background:#F7F5F0;box-shadow:-4px 0 32px rgba(34,34,34,0.12);transform:translateX(100%);transition:transform 350ms cubic-bezier(0.16,1,0.3,1);display:flex;flex-direction:column;">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:1.25rem 1.5rem;border-bottom:1px solid rgba(34,34,34,0.08);">
      <p style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:1.125rem;color:#222;">Your Cart <span style="font-size:0.8rem;font-weight:600;color:#888;margin-left:0.5rem;">2 items</span></p>
      <button onclick="closeCartDrawer()" aria-label="Close cart" style="padding:0.5rem;color:rgba(34,34,34,0.4);transition:color 0.2s;" onmouseover="this.style.color='#222'" onmouseout="this.style.color='rgba(34,34,34,0.4)'"><i data-lucide="x" class="w-5 h-5"></i></button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:1.25rem 1.5rem;display:flex;flex-direction:column;gap:1rem;">
      <div style="background:#fff;border-radius:1rem;padding:1rem;display:flex;gap:1rem;align-items:center;box-shadow:0 2px 12px rgba(34,34,34,0.06);">
        <div style="width:64px;height:64px;border-radius:0.75rem;background:#EAE6DF;flex-shrink:0;overflow:hidden;"><img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_200/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-bottle.png" alt="Core Bottle" style="width:100%;height:100%;object-fit:cover;"></div>
        <div style="flex:1;min-width:0;">
          <p style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:0.875rem;color:#222;">Steel Water Bottle - 750ml</p>
          <p style="font-family:'Inter',sans-serif;font-size:0.75rem;color:rgba(34,34,34,0.5);margin-top:0.125rem;">Food-grade steel • Leak-proof</p>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:0.75rem;">
            <div style="display:flex;align-items:center;border:1.5px solid rgba(34,34,34,0.12);border-radius:0.5rem;overflow:hidden;">
              <button style="padding:0.25rem 0.625rem;font-family:'Space Grotesk',sans-serif;font-weight:700;color:rgba(34,34,34,0.5);background:transparent;border:none;cursor:pointer;">−</button>
              <span style="padding:0.25rem 0.625rem;font-family:'Space Grotesk',sans-serif;font-weight:700;color:#222;font-size:0.875rem;">1</span>
              <button style="padding:0.25rem 0.625rem;font-family:'Space Grotesk',sans-serif;font-weight:700;color:rgba(34,34,34,0.5);background:transparent;border:none;cursor:pointer;">+</button>
            </div>
            <p style="font-family:'Space Grotesk',sans-serif;font-weight:700;color:#222;font-size:0.9rem;">₹799</p>
          </div>
        </div>
      </div>
      <div style="background:#fff;border-radius:1rem;padding:1rem;display:flex;gap:1rem;align-items:center;box-shadow:0 2px 12px rgba(34,34,34,0.06);">
        <div style="width:64px;height:64px;border-radius:0.75rem;background:#EAE6DF;flex-shrink:0;overflow:hidden;"><img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_200/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-brush.png" alt="Bamboo Brush" style="width:100%;height:100%;object-fit:cover;"></div>
        <div style="flex:1;min-width:0;">
          <p style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:0.875rem;color:#222;">Bamboo Toothbrush</p>
          <p style="font-family:'Inter',sans-serif;font-size:0.75rem;color:rgba(34,34,34,0.5);margin-top:0.125rem;">Biodegradable handle • BPA-free</p>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:0.75rem;">
            <div style="display:flex;align-items:center;border:1.5px solid rgba(34,34,34,0.12);border-radius:0.5rem;overflow:hidden;">
              <button style="padding:0.25rem 0.625rem;font-family:'Space Grotesk',sans-serif;font-weight:700;color:rgba(34,34,34,0.5);background:transparent;border:none;cursor:pointer;">−</button>
              <span style="padding:0.25rem 0.625rem;font-family:'Space Grotesk',sans-serif;font-weight:700;color:#222;font-size:0.875rem;">2</span>
              <button style="padding:0.25rem 0.625rem;font-family:'Space Grotesk',sans-serif;font-weight:700;color:rgba(34,34,34,0.5);background:transparent;border:none;cursor:pointer;">+</button>
            </div>
            <p style="font-family:'Space Grotesk',sans-serif;font-weight:700;color:#222;font-size:0.9rem;">₹298</p>
          </div>
        </div>
      </div>
    </div>
    <div style="padding:1.25rem 1.5rem;border-top:1px solid rgba(34,34,34,0.08);">
      <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;">
        <span style="font-family:'Inter',sans-serif;font-size:0.875rem;color:rgba(34,34,34,0.6);">Subtotal</span>
        <span style="font-family:'Space Grotesk',sans-serif;font-weight:700;color:#222;">₹1,097</span>
      </div>
      <p style="font-family:'Inter',sans-serif;font-size:0.75rem;color:rgba(34,34,34,0.4);margin-bottom:1rem;">Inclusive of all taxes · Free shipping</p>
      <a href="/checkout/" style="display:block;width:100%;padding:1rem;background:#006B96;color:#fff;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:0.9375rem;border-radius:0.75rem;text-align:center;text-decoration:none;transition:background 0.2s;" onmouseover="this.style.background='#005580'" onmouseout="this.style.background='#006B96'">Proceed to Checkout</a>
      <a href="/cart/" style="display:block;text-align:center;margin-top:0.75rem;font-family:'Inter',sans-serif;font-size:0.8125rem;font-weight:500;color:rgba(34,34,34,0.5);text-decoration:none;" onmouseover="this.style.color='#006B96'" onmouseout="this.style.color='rgba(34,34,34,0.5)'">View full cart →</a>
    </div>
  </div>
  <!-- WhatsApp Support Button -->
  <a id="wa-support-btn" href="https://wa.me/919667691316" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" style="position:fixed;bottom:28px;right:24px;z-index:9999;display:inline-flex;align-items:center;gap:9px;padding:12px 20px;background:#1C1C1C;color:#fff;font-family:'Inter',sans-serif;font-size:13.5px;font-weight:500;letter-spacing:0.01em;border-radius:100px;text-decoration:none;box-shadow:0 4px 18px rgba(0,0,0,0.22);opacity:0;transform:translateY(10px);transition:opacity 0.45s cubic-bezier(0.22,1,0.36,1),transform 0.45s cubic-bezier(0.22,1,0.36,1),background 0.2s ease,box-shadow 0.2s ease;will-change:transform,opacity;" onmouseover="this.style.background='#006B96';this.style.boxShadow='0 6px 24px rgba(0,107,150,0.28)';this.style.transform='translateY(-2px)';" onmouseout="this.style.background='#1C1C1C';this.style.boxShadow='0 4px 18px rgba(0,0,0,0.22)';this.style.transform='translateY(0)';">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25D366"></path>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.979-1.405A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.099-1.132l-.293-.174-3.046.86.861-3.047-.191-.311A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" fill="#25D366"></path>
    </svg>
    <span>Questions Before Ordering?</span>
  </a>
  <style>
    @media (max-width:640px){
      #wa-support-btn { padding:10px 16px !important; font-size:12.5px !important; bottom:20px !important; right:16px !important; gap:7px !important; }
      #wa-support-btn svg { width:16px !important; height:16px !important; }
    }
  </style>
  <script>
    (function(){
      var btn = document.getElementById('wa-support-btn');
      if (!btn) return;
      setTimeout(function(){ btn.style.opacity = '1'; btn.style.transform = 'translateY(0)'; }, 600);
    })();
  </script>


` }} suppressHydrationWarning />
    </>
  );
}
