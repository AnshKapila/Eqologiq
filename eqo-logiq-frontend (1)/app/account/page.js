export const metadata = {
  title: `My Account | Eqo Logiq`,
  description: `Your Eqo Logiq member area. View orders, manage preferences, and track your impact.`,
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
        <a href="/account/" class="text-brand-primary hidden md:flex items-center" aria-label="Account">
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
      <a href="/account/" class="text-4xl font-sans font-bold text-brand-primary">Account</a>
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

  <main class="pt-20">

    <!-- Guest redirect notice (shown if not logged in) -->
    <div id="guest-notice" class="hidden">
      <section class="min-h-[70vh] flex items-center justify-center px-6 py-24">
        <div class="text-center max-w-md reveal active">
          <div class="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-6">
            <i data-lucide="lock" class="w-7 h-7 text-brand-primary"></i>
          </div>
          <h1 class="font-sans font-bold text-3xl text-brand-text mb-4">Sign in to view your account</h1>
          <p class="font-body text-brand-text/55 text-base leading-relaxed mb-8">
            Your member area is waiting. Sign in to access orders, saved items, and member benefits.
          </p>
          <a href="/login/" class="inline-flex items-center gap-2.5 px-8 py-4 bg-brand-primary text-white font-sans font-bold text-base rounded-xl hover:bg-[#005580] transition-colors shadow-[0_4px_24px_rgba(0,107,150,0.25)]">
            Sign In
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
      </section>
    </div>

    <!-- Logged-in member area -->
    <div id="member-area" class="hidden">

      <!-- Welcome header -->
      <section class="bg-brand-base pt-16 pb-12 border-b border-brand-text/8">
        <div class="max-w-[1400px] mx-auto px-6 md:px-12">
          <div class="relative reveal active">
            <!-- Sign Out — top-right on all sizes -->
            <div class="flex justify-end mb-4 md:absolute md:top-0 md:right-0 md:mb-0">
              <button id="sign-out-btn" class="inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-brand-text/15 font-body font-medium text-sm text-brand-text/60 hover:text-brand-text hover:border-brand-text/30 transition-colors">
                <i data-lucide="log-out" class="w-4 h-4"></i>
                Sign Out
              </button>
            </div>
            <!-- User info -->
            <div class="flex items-center gap-5">
              <!-- Avatar -->
              <div class="w-14 h-14 rounded-full bg-brand-primary flex items-center justify-center text-white font-sans font-bold text-xl flex-shrink-0" id="avatar-initials">V</div>
              <div>
                <p class="kicker text-brand-primary mb-1 flex items-center gap-2">
                  <span class="w-4 h-px bg-brand-primary"></span>
                  Member Area
                </p>
                <h1 class="font-sans font-bold text-2xl md:text-3xl text-brand-text">Welcome back, <span id="user-name">there</span>.</h1>
                <p class="font-body text-xs text-brand-text/45 mt-0.5" id="user-email">demo@eqologic.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats strip -->
      <section class="bg-brand-base py-8 border-b border-brand-text/8">
        <div class="max-w-[1400px] mx-auto px-6 md:px-12">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 reveal active" style="transition-delay:60ms;">
            <div class="stat-card">
              <p class="font-sans font-bold text-2xl text-brand-primary mb-1">3</p>
              <p class="font-body text-xs text-brand-text/50">Orders placed</p>
            </div>
            <div class="stat-card">
              <p class="font-sans font-bold text-2xl text-brand-primary mb-1">2</p>
              <p class="font-body text-xs text-brand-text/50">Saved items</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Tabs content area -->
      <section class="py-12 md:py-16">
        <div class="max-w-[1400px] mx-auto px-6 md:px-12">

          <!-- Tab nav -->
          <div class="flex items-center gap-8 border-b border-brand-text/10 mb-10 overflow-x-auto reveal active" style="transition-delay:100ms;">
            <button class="tab-btn active pb-4 font-sans font-bold text-sm whitespace-nowrap" data-tab="orders">Orders</button>
            <button class="tab-btn pb-4 font-body font-medium text-sm text-brand-text/50 whitespace-nowrap" data-tab="saved">Saved Items</button>
            <button class="tab-btn pb-4 font-body font-medium text-sm text-brand-text/50 whitespace-nowrap" data-tab="impact">My Impact</button>
            <button class="tab-btn pb-4 font-body font-medium text-sm text-brand-text/50 whitespace-nowrap" data-tab="settings">Settings</button>
          </div>

          <!-- Orders tab -->
          <div id="tab-orders" class="tab-content active reveal active" style="transition-delay:140ms;">
            <div class="bg-white rounded-2xl overflow-hidden" style="border:1.5px solid rgba(34,34,34,0.07);">
              <!-- Order 1 -->
              <div class="order-row px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl overflow-hidden bg-brand-surface flex-shrink-0">
                    <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_96,c_fill/v1777952844/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/g6uec6ksdecsgs8ybt9r.png" alt="Steel Bottle" class="w-full h-full object-cover">
                  </div>
                  <div>
                    <p class="font-sans font-bold text-sm text-brand-text">Steel Water Bottle - 750ml</p>
                    <p class="font-body text-xs text-brand-text/45 mt-0.5">Order #EQ-0041 · 14 Apr 2025</p>
                  </div>
                </div>
                <div class="flex items-center gap-4 md:gap-6">
                  <p class="font-sans font-bold text-sm text-brand-text">₹799</p>
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider" style="background:rgba(153,189,5,0.1);color:#99BD05;">Delivered</span>
                  <a href="/product/" class="font-body text-xs text-brand-primary hover:underline">View product</a>
                </div>
              </div>
              <!-- Order 2 -->
              <div class="order-row px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl overflow-hidden bg-brand-surface flex-shrink-0 flex items-center justify-center">
                    <i data-lucide="package" class="w-5 h-5 text-brand-text/30"></i>
                  </div>
                  <div>
                    <p class="font-sans font-bold text-sm text-brand-text">Bamboo Toothbrush × 2</p>
                    <p class="font-body text-xs text-brand-text/45 mt-0.5">Order #EQ-0038 · 2 Mar 2025</p>
                  </div>
                </div>
                <div class="flex items-center gap-4 md:gap-6">
                  <p class="font-sans font-bold text-sm text-brand-text">₹298</p>
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider" style="background:rgba(153,189,5,0.1);color:#99BD05;">Delivered</span>
                  <a href="/product/" class="font-body text-xs text-brand-primary hover:underline">View product</a>
                </div>
              </div>
              <!-- Order 3 -->
              <div class="order-row px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl overflow-hidden bg-brand-surface flex-shrink-0 flex items-center justify-center">
                    <i data-lucide="package" class="w-5 h-5 text-brand-text/30"></i>
                  </div>
                  <div>
                    <p class="font-sans font-bold text-sm text-brand-text">Starter Switch Bundle</p>
                    <p class="font-body text-xs text-brand-text/45 mt-0.5">Order #EQ-0021 · 10 Jan 2025</p>
                  </div>
                </div>
                <div class="flex items-center gap-4 md:gap-6">
                  <p class="font-sans font-bold text-sm text-brand-text">₹1,199</p>
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider" style="background:rgba(153,189,5,0.1);color:#99BD05;">Delivered</span>
                  <a href="/product/" class="font-body text-xs text-brand-primary hover:underline">View product</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Saved Items tab -->
          <div id="tab-saved" class="tab-content">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white rounded-2xl overflow-hidden flex items-center gap-4 p-6" style="border:1.5px solid rgba(34,34,34,0.07);">
                <div class="w-16 h-16 rounded-xl overflow-hidden bg-brand-surface flex-shrink-0">
                  <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_128,c_fill/v1777952844/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/g6uec6ksdecsgs8ybt9r.png" alt="Steel Bottle" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-sans font-bold text-sm text-brand-text">Steel Water Bottle - 1 Litre</p>
                  <p class="font-body text-xs text-brand-text/45 mt-0.5">₹999 onwards</p>
                </div>
                <a href="/product/" class="flex-shrink-0 px-4 py-2 bg-brand-primary text-white font-sans font-bold text-xs rounded-lg hover:bg-[#005580] transition-colors">Buy now</a>
              </div>
              <div class="bg-white rounded-2xl overflow-hidden flex items-center gap-4 p-6" style="border:1.5px solid rgba(34,34,34,0.07);">
                <div class="w-16 h-16 rounded-xl overflow-hidden bg-brand-surface flex-shrink-0 flex items-center justify-center">
                  <i data-lucide="package" class="w-6 h-6 text-brand-text/30"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-sans font-bold text-sm text-brand-text">Stainless Steel Tongue Scraper</p>
                  <p class="font-body text-xs text-brand-text/45 mt-0.5">₹299 onwards</p>
                </div>
                <a href="/product/" class="flex-shrink-0 px-4 py-2 bg-brand-primary text-white font-sans font-bold text-xs rounded-lg hover:bg-[#005580] transition-colors">Buy now</a>
              </div>
            </div>
          </div>

          <!-- Impact tab -->
          <div id="tab-impact" class="tab-content">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="rounded-2xl p-8 flex flex-col gap-4" style="background:#0D1F0E;">
                <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background:rgba(168,230,163,0.15);">
                  <i data-lucide="leaf" class="w-5 h-5" style="color:#A8E6A3;"></i>
                </div>
                <div>
                  <p class="font-sans font-bold text-3xl text-white mb-1">0g</p>
                  <p class="font-body text-sm text-white/55">Single-use plastic avoided through your purchases</p>
                </div>
              </div>
              <div class="rounded-2xl p-8 flex flex-col gap-4 bg-brand-primary">
                <div class="w-10 h-10 rounded-full flex items-center justify-center bg-white/15">
                  <i data-lucide="infinity" class="w-5 h-5 text-white"></i>
                </div>
                <div>
                  <p class="font-sans font-bold text-3xl text-white mb-1">10 yr</p>
                  <p class="font-body text-sm text-white/65">Combined product lifespan of your Eqo Logiq items</p>
                </div>
              </div>
              <div class="rounded-2xl p-8 flex flex-col gap-4" style="background:#EAE6DF;border:1.5px solid rgba(0,107,150,0.1);">
                <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background:rgba(0,107,150,0.1);border:1px solid rgba(0,107,150,0.2);">
                  <i data-lucide="trending-up" class="w-5 h-5 text-brand-primary"></i>
                </div>
                <div>
                  <p class="font-sans font-bold text-3xl text-brand-primary mb-1">3×</p>
                  <p class="font-body text-sm text-brand-text/55">Products switched away from single-use alternatives</p>
                </div>
              </div>
            </div>
            <p class="font-body text-xs text-brand-text/35 mt-6 text-center">Impact metrics are calculated estimates based on your purchase history.</p>
          </div>

          <!-- Settings tab -->
          <div id="tab-settings" class="tab-content">
            <div class="max-w-lg">
              <div class="bg-white rounded-2xl p-8" style="border:1.5px solid rgba(34,34,34,0.07);">
                <h3 class="font-sans font-bold text-base text-brand-text mb-6">Account Details</h3>
                <div class="space-y-5">
                  <div>
                    <label class="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">Display Name</label>
                    <input type="text" id="settings-name" class="w-full px-4 py-3 rounded-xl font-body text-sm text-brand-text bg-brand-surface outline-none border-2 border-transparent focus:border-brand-primary transition-colors">
                  </div>
                  <div>
                    <label class="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">Email Address</label>
                    <input type="email" id="settings-email" class="w-full px-4 py-3 rounded-xl font-body text-sm text-brand-text bg-brand-surface outline-none border-2 border-transparent focus:border-brand-primary transition-colors">
                  </div>
                  <div class="pt-2">
                    <button id="save-settings-btn" class="px-6 py-3 bg-brand-primary text-white font-sans font-bold text-sm rounded-xl hover:bg-[#005580] transition-colors">
                      Save Changes
                    </button>
                    <span id="save-confirm" class="hidden ml-3 font-body text-sm text-brand-secondary">✓ Saved (demo)</span>
                  </div>
                </div>
              </div>
              <div class="mt-6 bg-white rounded-2xl p-6 flex items-center justify-between" style="border:1.5px solid rgba(229,62,62,0.12);">
                <div>
                  <p class="font-sans font-bold text-sm text-brand-text">Sign out everywhere</p>
                  <p class="font-body text-xs text-brand-text/40 mt-0.5">End your demo session</p>
                </div>
                <button id="sign-out-all-btn" class="px-6 py-2 rounded-xl border border-red-200 font-body font-medium text-sm text-red-500 hover:bg-red-50 transition-colors">
                  Sign Out
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- Recommended products strip -->
      <section class="py-12 border-t border-brand-text/8" style="background:#F2EFE8;">
        <div class="max-w-[1400px] mx-auto px-6 md:px-12">
          <div class="flex items-center justify-between mb-8 reveal active">
            <div>
              <p class="kicker text-brand-primary mb-2 flex items-center gap-2"><span class="w-4 h-px bg-brand-primary"></span>You might also like</p>
              <h2 class="font-sans font-bold text-2xl text-brand-text">Complete your setup.</h2>
            </div>
            <a href="/shop/" class="hidden md:flex items-center gap-2 font-sans font-bold text-sm text-brand-primary hover:text-[#005580] transition-colors group">
              View all
              <i data-lucide="arrow-right" class="w-4 h-4 transform group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 reveal active" style="transition-delay:80ms;">
            <div class="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)]">
              <div class="aspect-square overflow-hidden bg-brand-surface">
                <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_400,c_fill,g_auto/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-brush.png" alt="Bamboo Toothbrush" class="w-full h-full object-cover">
              </div>
              <div class="p-4">
                <p class="font-sans font-bold text-sm text-brand-text mb-0.5">Bamboo Toothbrush</p>
                <p class="font-sans font-bold text-sm text-brand-primary">₹149</p>
              </div>
            </div>
            <div class="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)]">
              <div class="aspect-square overflow-hidden bg-brand-surface">
                <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_400,c_fill,g_auto/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-cleaner.png" alt="Tongue Scraper" class="w-full h-full object-cover">
              </div>
              <div class="p-4">
                <p class="font-sans font-bold text-sm text-brand-text mb-0.5">Stainless Tongue Scraper</p>
                <p class="font-sans font-bold text-sm text-brand-primary">₹299</p>
              </div>
            </div>
            <div class="hidden md:block bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)]">
              <div class="aspect-square overflow-hidden bg-brand-surface">
                <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_400,c_fill,g_auto/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-bottle.png" alt="Steel Bottle 1L" class="w-full h-full object-cover">
              </div>
              <div class="p-4">
                <p class="font-sans font-bold text-sm text-brand-text mb-0.5">Steel Bottle - 1 Litre</p>
                <p class="font-sans font-bold text-sm text-brand-primary">₹999</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div><!-- /member-area -->

  </main>

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
    const memberSinceEl = document.getElementById('member-since'); if (memberSinceEl) memberSinceEl.textContent = new Date().toLocaleDateString('en-IN', {month:'short', year:'numeric'});

    // Navbar scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 50); });
    document.getElementById('mobile-menu-btn').addEventListener('click', () => document.getElementById('mobile-menu').classList.remove('translate-x-full'));
    document.getElementById('close-mobile-menu').addEventListener('click', () => document.getElementById('mobile-menu').classList.add('translate-x-full'));

    // Session check
    const session = sessionStorage.getItem('eq_demo_user');
    if (session) {
      const user = JSON.parse(session);
      const name = user.name ? (user.name.charAt(0).toUpperCase() + user.name.slice(1)) : 'there';
      document.getElementById('user-name').textContent = name;
      document.getElementById('user-email').textContent = user.email || '';
      const navUserLabel = document.getElementById('nav-user-label'); if(navUserLabel) navUserLabel.textContent = name;
      document.getElementById('avatar-initials').textContent = name.charAt(0).toUpperCase();
      document.getElementById('settings-name').value = name;
      document.getElementById('settings-email').value = user.email || '';
      document.getElementById('member-area').classList.remove('hidden');
    } else {
      document.getElementById('guest-notice').classList.remove('hidden');
    }

    // Sign out
    function signOut() {
      sessionStorage.removeItem('eq_demo_user');
      window.location.href = '/login.html';
    }
    document.getElementById('sign-out-btn').addEventListener('click', signOut);
    document.getElementById('sign-out-all-btn').addEventListener('click', signOut);

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => {
          b.classList.remove('active');
          b.classList.add('text-brand-text/50');
          b.classList.remove('font-body');
          b.classList.add('font-body');
        });
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        btn.classList.remove('text-brand-text/50');
        document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
      });
    });

    // Save settings demo
    document.getElementById('save-settings-btn').addEventListener('click', () => {
      const confirm = document.getElementById('save-confirm');
      confirm.classList.remove('hidden');
      setTimeout(() => confirm.classList.add('hidden'), 2500);
    });

    // Search modal
    const SEARCH_DATA=[{title:'Steel Water Bottle - 750ml',desc:'Keeps cold for 24h · Food-grade steel · Zero plastic',meta:'₹799',url:'/product.html',type:'product'},{title:'Bamboo Toothbrush',desc:'Biodegradable handle · BPA-free bristles',meta:'₹149',url:'/product.html',type:'product'},{title:'Shop All Products',desc:'Browse the full Eqo Logiq catalogue',meta:'Page',url:'/shop.html',type:'page'},{title:'Our Story',desc:'Why Eqo Logiq exists',meta:'Page',url:'/about.html',type:'page'},{title:'Contact Us',desc:'Get in touch',meta:'Page',url:'/contact.html',type:'page'}];
    const searchModal=document.getElementById('search-modal'),searchInput=document.getElementById('search-input'),searchResults=document.getElementById('search-results');
    function openSearch(){searchModal.classList.remove('pointer-events-none','opacity-0');searchModal.classList.add('pointer-events-auto','opacity-100');searchInput.value='';renderResults('');setTimeout(()=>searchInput.focus(),50);}
    function closeSearch(){searchModal.classList.add('pointer-events-none','opacity-0');searchModal.classList.remove('pointer-events-auto','opacity-100');}
    function renderResults(q){const t=q.trim().toLowerCase();const hits=t.length===0?SEARCH_DATA.slice(0,5):SEARCH_DATA.filter(d=>(d.title+' '+d.desc).toLowerCase().includes(t));if(!hits.length){searchResults.innerHTML='<p class="font-body text-sm text-brand-text/40 px-5 py-6 text-center">No results</p>';return;}searchResults.innerHTML=hits.map(h=>\`<a href="\${h.url}" class="flex items-center gap-4 px-5 py-3.5 hover:bg-brand-surface transition-colors"><div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 \${h.type==='product'?'bg-brand-primary/10':'bg-brand-text/6'}"></div><div class="flex-1 min-w-0"><p class="font-sans font-bold text-sm text-brand-text truncate">\${h.title}</p></div></a>\`).join('');}
    document.getElementById('search-btn').addEventListener('click',openSearch);
    document.getElementById('search-close').addEventListener('click',closeSearch);
    searchModal.addEventListener('click',e=>{if(e.target===searchModal)closeSearch();});
    searchInput.addEventListener('input',e=>renderResults(e.target.value));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSearch();if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();openSearch();}});

    // Reveal observer
    const ro = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('active');ro.unobserve(e.target);} }), {threshold:0.1});
    document.querySelectorAll('.reveal:not(.active)').forEach(el => ro.observe(el));
  
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
