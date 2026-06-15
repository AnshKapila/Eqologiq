export const metadata = {
  title: `Checkout | Eqo Logiq`,
  description: `Complete your Eqo Logiq order. Secure checkout for plastic-free steel bottles and oral care.`,
};

export default function Page() {
  return (
    <>
      
      <div dangerouslySetInnerHTML={{ __html: `
  <!-- NAV -->
  <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 py-4 bg-brand-base border-b border-brand-text/10 transition-all duration-300">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2 z-50"><img src="https://static.kite.ai/image/upload/c_crop,x_0.000,y_0.196,w_1.000,h_0.609/v1780077526/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/wbsbvykvt63upqxf8tmm.png" alt="Eqo Logiq" class="h-9 w-auto object-contain"></a>
      <div class="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
        <a href="/shop/" class="text-sm font-body font-medium text-brand-text hover:text-brand-primary transition-colors">Shop</a>
        <a href="/about/" class="text-sm font-body font-medium text-brand-text hover:text-brand-primary transition-colors">Our Story</a>
        <a href="/qrash-qourse/" class="text-sm font-body font-medium text-brand-text hover:text-brand-primary transition-colors">Impact</a>
        <a href="/blog/" class="text-sm font-body font-medium text-brand-text hover:text-brand-primary transition-colors">Blogs</a>
      </div>
      <div class="flex items-center gap-6 z-50">
        <button id="search-btn" class="text-brand-text hover:text-brand-primary transition-colors" aria-label="Search"><i data-lucide="search" class="w-5 h-5"></i></button>
        <a href="/login/" class="text-brand-text hover:text-brand-primary transition-colors hidden md:flex items-center" aria-label="Sign In"><i data-lucide="user" class="w-5 h-5"></i></a>
        <a href="/cart/" class="flex items-center gap-2 text-brand-text hover:text-brand-primary transition-colors"><span class="text-sm font-body font-medium hidden md:block">Cart</span><i data-lucide="shopping-bag" class="w-5 h-5"></i></a>
        <button id="mobile-menu-btn" class="md:hidden text-brand-text"><i data-lucide="menu" class="w-6 h-6"></i></button>
      </div>
    </div>
  </nav>

  <!-- MOBILE MENU -->
  <div id="mobile-menu" class="fixed inset-0 z-[60] bg-brand-base transform translate-x-full transition-transform duration-500 ease-in-out flex flex-col">
    <div class="h-20 flex items-center justify-between px-6"><img src="https://static.kite.ai/image/upload/c_crop,x_0.000,y_0.196,w_1.000,h_0.609/v1780077526/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/wbsbvykvt63upqxf8tmm.png" alt="Eqo Logiq" class="h-9 w-auto"><button id="close-mobile-menu" class="p-2 text-brand-text"><i data-lucide="x" class="w-8 h-8"></i></button></div>
    <div class="flex-1 flex flex-col justify-center px-12 gap-8">
      <a href="/shop/" class="text-4xl font-sans font-bold text-brand-text hover:text-brand-primary transition-colors">Shop</a>
      <a href="/about/" class="text-4xl font-sans font-bold text-brand-text hover:text-brand-primary transition-colors">Our Story</a>
      <a href="/qrash-qourse/" class="text-4xl font-sans font-bold text-brand-text hover:text-brand-primary transition-colors">Impact</a>
      <a href="/blog/" class="text-4xl font-sans font-bold text-brand-text hover:text-brand-primary transition-colors">Blogs</a>
      <a href="/login/" class="text-4xl font-sans font-bold text-brand-text hover:text-brand-primary transition-colors">Sign In</a>
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
    <!-- PAGE HEADER -->
    <section class="bg-brand-base py-10 border-b border-brand-text/8">
      <div class="max-w-[1400px] mx-auto px-6 md:px-12">
        <div class="flex items-center gap-3">
          <a href="/cart/" class="inline-flex items-center gap-1.5 font-body text-sm text-brand-text/50 hover:text-brand-primary transition-colors"><i data-lucide="arrow-left" class="w-3.5 h-3.5"></i> Back to cart</a>
          <span class="text-brand-text/20">/</span>
          <span class="font-body text-sm text-brand-text/50">Checkout</span>
        </div>
        <h1 class="font-sans font-bold text-3xl text-brand-text mt-4">Checkout</h1>
      </div>
    </section>

    <!-- CHECKOUT CONTENT -->
    <section class="bg-brand-base py-12 md:py-20">
      <div class="max-w-[1400px] mx-auto px-6 md:px-12">

        <!-- Success state (hidden by default) -->
        <div id="success-state" class="hidden">
          <div class="max-w-lg mx-auto text-center py-20">
            <div class="w-16 h-16 rounded-full bg-brand-secondary/10 flex items-center justify-center mx-auto mb-6">
              <i data-lucide="check-circle" class="w-8 h-8 text-brand-secondary"></i>
            </div>
            <h2 class="font-sans font-bold text-2xl md:text-3xl text-brand-text mb-4">Order placed.</h2>
            <p class="font-body text-brand-text/65 text-base leading-relaxed mb-8">You will receive a confirmation email shortly.</p>
            <a href="/shop/" class="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white font-sans font-bold text-sm rounded-xl hover:bg-[#005580] transition-colors">Continue Shopping <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
          </div>
        </div>

        <!-- Checkout form -->
        <div id="checkout-form-wrapper" class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          <!-- LEFT: Delivery address form -->
          <div class="lg:flex-1 w-full reveal active">
            <div class="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_16px_rgba(34,34,34,0.07)]">
              <h2 class="font-sans font-bold text-lg text-brand-text mb-6 pb-4 border-b border-brand-text/8">Delivery Address</h2>

              <form id="checkout-form" class="space-y-4" novalidate="">
                <!-- Name -->
                <div>
                  <label class="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">Full Name <span class="text-red-400">*</span></label>
                  <input type="text" id="field-name" name="name" placeholder="Your full name" required="" class="form-field">
                </div>

                <!-- Phone -->
                <div>
                  <label class="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">Phone Number <span class="text-red-400">*</span></label>
                  <input type="tel" id="field-phone" name="phone" placeholder="+91 98765 43210" required="" class="form-field">
                </div>

                <!-- Email -->
                <div>
                  <label class="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">Email Address <span class="text-red-400">*</span></label>
                  <input type="email" id="field-email" name="email" placeholder="your@email.com" required="" class="form-field">
                </div>

                <!-- Address -->
                <div>
                  <label class="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">Address <span class="text-red-400">*</span></label>
                  <textarea id="field-address" name="address" rows="3" placeholder="House/flat no., building name, street, area" required="" class="form-field resize-none"></textarea>
                </div>

                <!-- City & Pincode -->
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">City <span class="text-red-400">*</span></label>
                    <input type="text" id="field-city" name="city" placeholder="Mumbai" required="" class="form-field">
                  </div>
                  <div>
                    <label class="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">Pincode <span class="text-red-400">*</span></label>
                    <input type="text" id="field-pincode" name="pincode" placeholder="400001" required="" maxlength="6" class="form-field">
                  </div>
                </div>

                <!-- State -->
                <div>
                  <label class="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">State <span class="text-red-400">*</span></label>
                  <select id="field-state" name="state" required="" class="form-field appearance-none bg-white">
                    <option value="" disabled="" selected="">Select state</option>
                    <option>Andhra Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Delhi</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jammu &amp; Kashmir</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Tamil Nadu</option>
                    <option>Telangana</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>
                  </select>
                </div>

              </form>
            </div>
          </div>

          <!-- RIGHT: Order summary -->
          <div class="lg:w-[400px] w-full reveal active" style="transition-delay:80ms;">
            <div class="bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(34,34,34,0.08)] sticky top-24">
              <h2 class="font-sans font-bold text-lg text-brand-text mb-6">Order Summary</h2>

              <div class="space-y-4 mb-6">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl bg-brand-surface flex-shrink-0 overflow-hidden">
                    <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_96,c_fill,g_auto/v1777952844/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/g6uec6ksdecsgs8ybt9r.png" alt="Steel Bottle" class="w-full h-full object-cover">
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-sans font-bold text-sm text-brand-text truncate">Steel Water Bottle - 750ml</p>
                    <p class="font-body text-xs text-brand-text/45 mt-0.5">Qty: 1</p>
                  </div>
                  <p class="font-sans font-bold text-sm text-brand-text flex-shrink-0">₹799</p>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl bg-brand-surface flex-shrink-0 flex items-center justify-center">
                    <i data-lucide="package" class="w-5 h-5 text-brand-text/30"></i>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-sans font-bold text-sm text-brand-text truncate">Bamboo Toothbrush</p>
                    <p class="font-body text-xs text-brand-text/45 mt-0.5">Qty: 2</p>
                  </div>
                  <p class="font-sans font-bold text-sm text-brand-text flex-shrink-0">₹298</p>
                </div>
              </div>

              <div class="border-t border-brand-text/8 pt-4 mb-2 space-y-2">
                <div class="flex justify-between font-body text-sm text-brand-text/70"><span>Subtotal</span><span>₹1,097</span></div>
                <div class="flex justify-between font-body text-sm text-brand-secondary"><span class="flex items-center gap-1"><i data-lucide="truck" class="w-3.5 h-3.5"></i> Shipping</span><span>Free</span></div>
              </div>

              <div class="border-t border-brand-text/8 pt-4 mb-6">
                <div class="flex justify-between font-sans font-bold text-lg text-brand-text"><span>Total</span><span>₹1,097</span></div>
                <p class="font-body text-xs text-brand-text/45 mt-1">Inclusive of all taxes (GST)</p>
              </div>

              <!-- Trust strip -->
              <div class="grid grid-cols-3 gap-2 mb-6 pb-4 border-b border-brand-text/8">
                <div class="flex flex-col items-center gap-1 text-center">
                  <i data-lucide="shield-check" class="w-4 h-4 text-brand-secondary"></i>
                  <span class="font-body text-xs text-brand-text/50 leading-tight">Plastic-free</span>
                </div>
                <div class="flex flex-col items-center gap-1 text-center">
                  <i data-lucide="lock" class="w-4 h-4 text-brand-primary"></i>
                  <span class="font-body text-xs text-brand-text/50 leading-tight">Secure</span>
                </div>
                <div class="flex flex-col items-center gap-1 text-center">
                  <i data-lucide="rotate-ccw" class="w-4 h-4 text-brand-primary"></i>
                  <span class="font-body text-xs text-brand-text/50 leading-tight">7-day returns</span>
                </div>
              </div>

              <!-- Place Order button -->
              <button id="place-order-btn" type="button" class="w-full py-4 rounded-xl font-sans font-bold text-base text-white transition-colors duration-200" style="background:#006B96;" onmouseover="this.style.background='#005580'" onmouseout="this.style.background='#006B96'">
                Place Order
              </button>

              <p class="font-body text-xs text-brand-text/40 mt-4 text-center leading-relaxed">
                This will connect to your WooCommerce checkout on the live site.
              </p>
            </div>
          </div>

        </div><!-- /checkout-form-wrapper -->

      </div>
    </section>
  </main>

  <footer class="bg-[#111111] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/10">
    <div class="max-w-[1400px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div class="md:col-span-1"><img src="https://static.kite.ai/image/upload/v1780371329/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/fdqs1mpfbswxcq4trn6k.png" alt="Eqo Logiq" class="h-10 w-auto object-contain mb-6"><p class="font-body text-white/50 text-sm max-w-xs">Plastic-free steel bottles and daily essentials. No plastic in any product.</p></div>
        <div><h5 class="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-white/80">Shop</h5><ul class="space-y-4"><li><a href="/shop/" class="font-body text-white/50 hover:text-white transition-colors">Steel Bottles</a></li><li><a href="/shop/" class="font-body text-white/50 hover:text-white transition-colors">Oral Care</a></li><li><a href="/shop/" class="font-body text-white/50 hover:text-white transition-colors">Bundles</a></li><li><a href="/contact/" class="font-body text-white/50 hover:text-white transition-colors">Corporate Gifting</a></li></ul></div>
        <div><h5 class="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-white/80">Company</h5><ul class="space-y-4"><li><a href="/about/" class="font-body text-white/50 hover:text-white transition-colors">Our Story</a></li><li><a href="/qrash-qourse/" class="font-body text-white/50 hover:text-white transition-colors">Impact Report</a></li><li><a href="/blog/" class="font-body text-white/50 hover:text-white transition-colors">Blogs</a></li><li><a href="/contact/" class="font-body text-white/50 hover:text-white transition-colors">Contact</a></li></ul></div>
        <div><h5 class="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-white/80">Stay Updated</h5><p class="font-body text-white/50 text-sm mb-4">No spam. Just product drops and real updates.</p><form class="flex border-b border-white/20 pb-2"><input type="email" placeholder="Email address" class="bg-transparent border-none outline-none text-white font-body text-sm w-full placeholder:text-white/30"><button type="submit" class="text-white hover:text-brand-primary transition-colors"><i data-lucide="arrow-right" class="w-5 h-5"></i></button></form></div>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
        <p class="font-body text-white/30 text-sm">© <span id="year"></span> Eqo Logiq. All rights reserved.</p>
        <div class="flex items-center gap-6"><a href="/policy.html#privacy" class="font-body text-white/30 hover:text-white text-sm transition-colors">Privacy Policy</a><a href="/policy.html#terms" class="font-body text-white/30 hover:text-white text-sm transition-colors">Terms of Use</a><a href="/policy.html#shipping" class="font-body text-white/30 hover:text-white text-sm transition-colors">Shipping Policy</a><a href="/policy.html#returns" class="font-body text-white/30 hover:text-white text-sm transition-colors">Refund &amp; Returns</a></div>
      </div>
    </div>
  </footer>

  <script>
    lucide.createIcons();
    document.getElementById('year').textContent = new Date().getFullYear();
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 50); });
    document.getElementById('mobile-menu-btn').addEventListener('click', () => document.getElementById('mobile-menu').classList.remove('translate-x-full'));
    document.getElementById('close-mobile-menu').addEventListener('click', () => document.getElementById('mobile-menu').classList.add('translate-x-full'));
    const ro = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('active');ro.unobserve(e.target);} }), {threshold:0.1,rootMargin:"0px 0px -40px 0px"});
    document.querySelectorAll('.reveal:not(.active)').forEach(el => ro.observe(el));

    // Place Order
    document.getElementById('place-order-btn').addEventListener('click', function() {
      const fields = ['field-name','field-phone','field-email','field-address','field-city','field-pincode','field-state'];
      let valid = true;
      fields.forEach(id => {
        const el = document.getElementById(id);
        if (!el.value.trim()) {
          el.style.borderColor = '#E53E3E';
          el.style.boxShadow = '0 0 0 3px rgba(229,62,62,0.08)';
          valid = false;
        } else {
          el.style.borderColor = '';
          el.style.boxShadow = '';
        }
      });
      if (!valid) {
        const firstErr = fields.find(id => !document.getElementById(id).value.trim());
        if (firstErr) document.getElementById(firstErr).scrollIntoView({behavior:'smooth', block:'center'});
        return;
      }
      document.getElementById('checkout-form-wrapper').style.display = 'none';
      const successState = document.getElementById('success-state');
      successState.classList.remove('hidden');
      successState.scrollIntoView({behavior:'smooth', block:'start'});
    });

    // Search modal
    const SEARCH_DATA=[{title:'Steel Water Bottle - 750ml',desc:'Keeps cold for 24h · Food-grade steel · Zero plastic',meta:'₹799 onwards',url:'/product.html',type:'product'},{title:'Bamboo Toothbrush',desc:'Biodegradable handle · BPA-free bristles · Vegan',meta:'₹149 onwards',url:'/product.html',type:'product'},{title:'Shop All Products',desc:'Browse the full Eqo Logiq catalogue',meta:'Page',url:'/shop.html',type:'page'},{title:'Our Story',desc:'Why Eqo Logiq exists',meta:'Page',url:'/about.html',type:'page'},{title:'Cart',desc:'Review your selected items',meta:'Page',url:'/cart.html',type:'page'},{title:'Contact Us',desc:'Get in touch with the Eqo Logiq team',meta:'Page',url:'/contact.html',type:'page'}];
    const searchModal=document.getElementById('search-modal'),searchInput=document.getElementById('search-input'),searchResults=document.getElementById('search-results');
    function openSearch(){searchModal.classList.remove('pointer-events-none','opacity-0');searchModal.classList.add('pointer-events-auto','opacity-100');searchInput.value='';renderResults('');setTimeout(()=>searchInput.focus(),50);}
    function closeSearch(){searchModal.classList.add('pointer-events-none','opacity-0');searchModal.classList.remove('pointer-events-auto','opacity-100');}
    function renderResults(q){const t=q.trim().toLowerCase();const hits=t.length===0?SEARCH_DATA.slice(0,5):SEARCH_DATA.filter(d=>(d.title+' '+d.desc).toLowerCase().includes(t));if(!hits.length){searchResults.innerHTML='<p class="font-body text-sm text-brand-text/40 px-5 py-6 text-center">No results</p>';return;}searchResults.innerHTML=hits.map(h=>\`<a href="\${h.url}" class="flex items-center gap-4 px-5 py-3.5 hover:bg-brand-surface transition-colors"><div class="flex-1 min-w-0"><p class="font-sans font-bold text-sm text-brand-text truncate">\${h.title}</p><p class="font-body text-xs text-brand-text/45 truncate mt-0.5">\${h.desc}</p></div></a>\`).join('');}
    document.getElementById('search-btn').addEventListener('click',openSearch);
    document.getElementById('search-close').addEventListener('click',closeSearch);
    searchModal.addEventListener('click',e=>{if(e.target===searchModal)closeSearch();});
    searchInput.addEventListener('input',e=>renderResults(e.target.value));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSearch();if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();openSearch();}});
  </script>
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
