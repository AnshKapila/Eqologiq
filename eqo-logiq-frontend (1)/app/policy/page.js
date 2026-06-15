export const metadata = {
  title: `Shipping, Returns & Privacy Policy | Eqo Logiq`,
  description: `Eqo Logiq shipping policy, returns policy, privacy policy, and terms of service. Free shipping over ₹1,500. 7-day returns on eligible items.`,
  alternates: { canonical: `https://eqologiq.kite.space/policy.html` },
  openGraph: {
    title: `Shipping, Returns & Privacy Policy | Eqo Logiq`,
    description: `Eqo Logiq shipping policy, returns policy, privacy policy, and terms of service. Free shipping over ₹1,500. 7-day returns on eligible items.`,
    images: [{ url: `https://static.kite.ai/image/upload/f_auto,q_auto,w_1200/v1777921391/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/dblcljacximlbkcgccyk.png` }],
  },
};

export default function Page() {
  return (
    <>
      
      <div dangerouslySetInnerHTML={{ __html: `
  <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 py-4 bg-brand-base border-b border-brand-text/10 transition-all duration-300">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2 z-50"><img src="https://static.kite.ai/image/upload/c_crop,x_0.000,y_0.196,w_1.000,h_0.609/v1780077526/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/wbsbvykvt63upqxf8tmm.png" alt="Eqo Logiq" class="h-9 w-auto object-contain"></a>
      <div class="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
        <a href="/shop/" class="text-sm font-body font-medium text-brand-text hover:text-brand-primary transition-colors">Shop</a>
        <a href="/about/" class="text-sm font-body font-medium text-brand-text hover:text-brand-primary transition-colors">Our Story</a>
        <a href="/qrash-qourse/" class="text-sm font-body font-medium text-brand-text hover:text-brand-primary transition-colors">Impact</a>
      </div>
      <div class="flex items-center gap-6 z-50">
        <button id="search-btn" class="text-brand-text hover:text-brand-primary transition-colors" aria-label="Search"><i data-lucide="search" class="w-5 h-5"></i></button>
        <a href="/login/" class="text-sm font-body font-medium text-brand-text hover:text-brand-primary transition-colors hidden md:flex items-center gap-1.5"><i data-lucide="user" class="w-4 h-4"></i><span>Sign In</span></a>
        <button id="cart-drawer-btn" class="relative flex items-center gap-2 text-brand-text hover:text-brand-primary transition-colors" aria-label="Open cart"><span class="text-sm font-body font-medium hidden md:block">Cart</span><i data-lucide="shopping-bag" class="w-5 h-5"></i><span class="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#006B96] text-white text-[10px] font-bold flex items-center justify-center leading-none">2</span></button>
        <button id="mobile-menu-btn" class="md:hidden text-brand-text"><i data-lucide="menu" class="w-6 h-6"></i></button>
      </div>
    </div>
  </nav>
  <div id="mobile-menu" class="fixed inset-0 z-[60] bg-brand-base transform translate-x-full transition-transform duration-500 ease-in-out flex flex-col">
    <div class="h-20 flex items-center justify-between px-6"><img src="https://static.kite.ai/image/upload/c_crop,x_0.000,y_0.196,w_1.000,h_0.609/v1780077526/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/wbsbvykvt63upqxf8tmm.png" alt="Eqo Logiq" class="h-9 w-auto"><button id="close-mobile-menu" class="p-2 text-brand-text"><i data-lucide="x" class="w-8 h-8"></i></button></div>
    <div class="flex-1 flex flex-col justify-center px-12 gap-8">
      <a href="/shop/" class="text-4xl font-sans font-bold text-brand-text hover:text-brand-primary">Shop</a>
       <a href="/about/" class="text-4xl font-sans font-bold text-brand-text hover:text-brand-primary">Our Story</a>
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
    <!-- BACK LINK + HEADER -->
    <div class="max-w-[860px] mx-auto px-6 md:px-12 pt-8">
      <a href="/" class="inline-flex items-center gap-2 font-body text-sm text-brand-text/50 hover:text-brand-primary transition-colors mb-8"><i data-lucide="arrow-left" class="w-3.5 h-3.5"></i> Back to Home</a>
    </div>
    <section class="max-w-[860px] mx-auto px-6 md:px-12 pb-6 reveal">
      <h1 class="font-sans font-bold text-3xl md:text-4xl text-brand-text mb-2">Policies &amp; Terms</h1>
      <p class="font-body text-brand-text/55 text-base">Last updated: January 2025</p>
    </section>

    <!-- POLICY TABS -->
    <div class="max-w-[860px] mx-auto px-6 md:px-12 border-b border-brand-text/10 mb-10 overflow-x-auto">
      <div class="flex gap-6 min-w-max">
        <button class="policy-tab active py-4 font-body font-medium text-sm" data-policy="shipping">Shipping Policy</button>
        <button class="policy-tab py-4 font-body font-medium text-sm text-brand-text/50" data-policy="returns">Returns Policy</button>
        <button class="policy-tab py-4 font-body font-medium text-sm text-brand-text/50" data-policy="privacy">Privacy Policy</button>
        <button class="policy-tab py-4 font-body font-medium text-sm text-brand-text/50" data-policy="terms">Terms of Service</button>
      </div>
    </div>

    <section class="max-w-[860px] mx-auto px-6 md:px-12 pb-24 reveal">

      <div id="policy-shipping" class="policy-content active prose">
        <h2>Shipping Charges</h2>
        <p>Shipping charges are applicable as per the courier service used for your order. The total shipping cost is calculated based on the weight, dimensions, and destination of your order and will be displayed during checkout before you confirm your purchase.</p>
        <h2>Order Processing Time</h2>
        <p>We aim to process and dispatch all orders within 24 hours on business days after receiving payment. You will receive a tracking number via email or phone once your order has been shipped.</p>
        <h2>Delivery Timeframes</h2>
        <p>Delivery usually takes between 2 to 7 business days depending on the distance from our dispatch location. These timeframes are estimates and may vary due to weather conditions, courier delays, or other factors outside our control.</p>
        <h2>Cash on Delivery</h2>
        <p>Cash on delivery is available, but it is not recommended as additional charges may apply from the courier service. We suggest prepaid payment methods to avoid these extra costs.</p>
        <h2>Courier Preferences</h2>
        <p>If you are unable to receive delivery from a specific courier due to serviceability issues in your area, please let us know and we will arrange a different courier provider for your order. Fast/speed post can also be requested.</p>
        <h2>International Shipping</h2>
        <p>We ship to select countries internationally. Please note that any additional customs duties, taxes, and fees applicable at the destination are the responsibility of the customer and are not included in the shipping cost shown at checkout.</p>
        <h2>Address Accuracy</h2>
        <p>Customers must provide accurate and complete shipping information at the time of placing an order. Eqo Logiq is not responsible for delays or lost packages resulting from incorrect or incomplete addresses provided by the customer.</p>
        <h2>Order Status and Support</h2>
        <p>For assistance with your order status or tracking information, please contact our support team at <a href="mailto:be.dysw4@slmail.me" style="color:#006B96;">be.dysw4@slmail.me</a>. If you have any further questions or concerns regarding your shipment, feel free to reach out and we will be happy to help.</p>
        <p style="margin-top:1.5rem;font-size:0.8125rem;color:rgba(34,34,34,0.4);">Last updated: 12/12/25</p>
      </div>

      <div id="policy-returns" class="policy-content prose">
        <h2>Return Window</h2>
        <p>Our refund and returns policy lasts 7 days from the date you receive the product. If 7 days have passed since your purchase, we are unable to offer a refund or exchange.</p>
        <h2>Non-Returnable Items</h2>
        <p>Several types of goods are exempt from being returned, including perishable goods such as food and flowers, intimate or sanitary goods, hazardous materials, flammable liquids or gases, and some health and personal care items. Please do not send your purchase back to the manufacturer.</p>
        <h2>Proof of Purchase</h2>
        <p>A receipt or proof of purchase is required to complete a return. Please ensure you have this ready when contacting us to initiate a return.</p>
        <h2>Refunds</h2>
        <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If approved, your refund will be processed and a credit will be automatically applied to your original payment method within a certain number of days.</p>
        <h2>Late or Missing Refunds</h2>
        <p>If you have not received your refund, please first check your bank account or statement again. If you still have not received it, please contact us and we will look into it for you.</p>
        <h2>Exchanges</h2>
        <p>If you need to exchange an item for the same product, please email <a href="mailto:vbdmail@tutanota.com" style="color:#006B96;">vbdmail@tutanota.com</a> and send your item to our business address.</p>
        <h2>Shipping Returns</h2>
        <p>Customers are responsible for paying their own shipping costs when returning an item, unless the item is damaged, defective, or incorrect. Shipping costs are non-refundable in standard return cases.</p>
        <h2>Need Help?</h2>
        <p>For any questions related to refunds and returns, please contact us at <a href="mailto:email@eqologiq.in" style="color:#006B96;">email@eqologiq.in</a>.</p>
      </div>

      <div id="policy-privacy" class="policy-content prose">
        <p>This is the Privacy Policy regarding your data and information that is collected by us. It is our responsibility to disclose the details about its collection and usage. We understand the importance and threats when it comes to data protection and want to provide people a shopping experience that respects their privacy.</p>
        <h2>Information We Receive and Collect</h2>
        <p>We receive information when customers checkout from the website or purchase products through other websites or sources through their billing details. Some embedded content on our pages — such as YouTube videos — may also collect data independently.</p>
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to process your order and to contact you regarding your order, promotions, offers, and feedback. If you prefer not to receive such communications, you can opt out at any time by contacting us on WhatsApp or via email.</p>
        <p>Data collected by embedded third-party content such as YouTube does not benefit Eqo Logiq and is subject to those platforms' own data policies.</p>
        <h2>Who We Share Data With</h2>
        <p>We do not share your data outside the organisation. We use the information only for our relationship with customers regarding the trade of products and services.</p>
        <h2>Data Retention and Deletion</h2>
        <p>If you would like your data to be deleted or would like confirmation of what data we hold about you, please contact us at <a href="mailto:email@eqologiq.in" style="color:#006B96;">email@eqologiq.in</a>.</p>
        <h2>Your Data &amp; Privacy Rights</h2>
        <p>Different countries have their own privacy rights and regulations. While India does not currently have the most comprehensive privacy laws, Eqo Logiq aims to take care of user data through the use of open source software and encryption wherever possible.</p>
        <h2>Grievance Redressal</h2>
        <p>For any privacy-related concerns, please contact our grievance officer:</p>
        <ul>
          <li><strong>Name:</strong> Vaibhav</li>
          <li><strong>Email:</strong> <a href="mailto:email@eqologiq.in" style="color:#006B96;">email@eqologiq.in</a></li>
          <li><strong>Phone:</strong> +91 9667691316</li>
        </ul>
      </div>

      <div id="policy-terms" class="policy-content prose">
        <p>This website is owned and operated by Eqo Logiq. Throughout these Terms &amp; Conditions, "we," "us," and "our" refer to Eqo Logiq. By using this website, you confirm that you are at least 18 years old, or that you have the consent of a parent or legal guardian.</p>
        <h2>1. Products</h2>
        <p>We strive to provide accurate and up-to-date information about our products, including descriptions, images, and prices. However, we do not guarantee 100% accuracy, completeness, or reliability, as mistakes are natural. Products are subject to availability and may be discontinued or modified at any time without prior notice. Some images on this website are illustrative only; the actual product may vary slightly in appearance, including due to differences in camera settings or screen calibration.</p>
        <h2>2. Orders and Payments</h2>
        <p>Placing an order constitutes an offer to purchase the selected products. We may accept or reject any order at our discretion. Prices are listed in Indian Rupees (₹). For orders within India, applicable taxes and shipping charges will be added during checkout. By placing an order, you agree to provide accurate and complete payment information through the payment methods provided on the site.</p>
        <h2>3. Shipping and Delivery</h2>
        <p>We aim to process and ship orders promptly, but specific delivery times are not guaranteed. Shipping costs and estimated delivery times are calculated during checkout. Customers are responsible for any customs duties, taxes, or additional charges applicable at the destination.</p>
        <h2>4. Returns and Refunds</h2>
        <p>Please contact us within 7 days of receiving your product to request a return or refund. Returned products must be unused, in their original packaging, and in the same condition as received. Refunds will be issued to the original payment method, excluding shipping charges.</p>
        <h2>5. Intellectual Property</h2>
        <p>All branding text, images, logos, and trademarks on this website are the property of Eqo Logiq and are protected by applicable law. Content may not be reproduced, distributed, modified, or used without prior written consent, except as stated under the applicable Creative Commons licence.</p>
        <h2>6. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, Eqo Logiq is not liable for any indirect, incidental, consequential, or punitive damages arising out of your use of this website or the purchase of products. We do not guarantee that the website will be error-free, uninterrupted, or free from viruses or harmful components. Users are responsible for implementing appropriate security measures on their own devices.</p>
        <h2>7. Governing Law and Jurisdiction</h2>
        <p>These Terms &amp; Conditions are governed by the laws of India. Any disputes arising under these terms are subject to the exclusive jurisdiction of the courts of India.</p>
        <h2>8. Amendments</h2>
        <p>We may update or modify these terms at any time without prior notice. Changes are effective upon posting to the website. You are responsible for reviewing these terms periodically or before making any new purchase.</p>
        <p>By using this website and making a purchase, you acknowledge that you have read, understood, and agreed to these Terms &amp; Conditions.</p>
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
        <div class="flex items-center gap-6"><a href="/policy/" class="font-body text-white/30 hover:text-white text-sm transition-colors">Privacy Policy</a><a href="/policy/" class="font-body text-white/30 hover:text-white text-sm transition-colors">Terms of Service</a><a href="/policy/" class="font-body text-white/30 hover:text-white text-sm transition-colors">Shipping &amp; Returns</a></div>
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
    document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
    document.querySelectorAll('.policy-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.policy-tab').forEach(b => { b.classList.remove('active'); b.classList.add('text-brand-text/50'); });
        document.querySelectorAll('.policy-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active'); btn.classList.remove('text-brand-text/50');
        document.getElementById('policy-' + btn.dataset.policy).classList.add('active');
      });
    });
    // ── SEARCH ──────────────────────────────────────────────────────────
    const SEARCH_DATA=[{title:'Steel Water Bottle - 750ml',desc:'Keeps cold for 24h · Food-grade steel · Zero plastic',meta:'₹799 onwards · Bestseller',url:'/product.html',type:'product'},{title:'Plastic Free Steel Bottle | 1 Litre',desc:'Double wall · 12+ hrs insulation · No plastic',meta:'₹1,200 (was ₹2,000)',url:'/product.html',type:'product'},{title:'Steel Flask - 500ml',desc:'Compact · Cupholder-friendly · No-spill seal',meta:'₹699 onwards',url:'/product.html',type:'product'},{title:'Kids Steel Bottle - 400ml',desc:'Child-safe · Lightweight · BPA-free · Easy flip lid',meta:'₹599 onwards',url:'/product.html',type:'product'},{title:'Bamboo Toothbrush',desc:'Biodegradable handle · BPA-free bristles · Vegan',meta:'₹149 onwards',url:'/product.html',type:'product'},{title:'Bamboo Toothbrush - Pack of 4',desc:'Family pack · Biodegradable · Plastic-free packaging',meta:'₹499 onwards · Best value',url:'/product.html',type:'product'},{title:'Stainless Steel Tongue Scraper',desc:'Food-grade steel · Lasts for life · Zero plastic',meta:'₹299 onwards',url:'/product.html',type:'product'},{title:'The Starter Switch Bundle',desc:'750ml bottle + Bamboo brush + Tongue scraper',meta:'₹1,199 onwards · New',url:'/product.html',type:'product'},{title:'Shop All Products',desc:'Browse the full Eqo Logiq catalogue',meta:'Page',url:'/shop.html',type:'page'},{title:'Our Story',desc:'Why Eqo Logiq exists and what we refuse to compromise on',meta:'Page',url:'/about.html',type:'page'},{title:'Impact: Qrash Qourse',desc:'Environmental impact and facts',meta:'Page',url:'/qrash-qourse.html',type:'page'},{title:'FAQ',desc:'Answers to common questions about products and orders',meta:'Page',url:'/faq.html',type:'page'},{title:'Contact Us',desc:'Get in touch with the Eqo Logiq team',meta:'Page',url:'/contact.html',type:'page'},{title:'Cart',desc:'Review your selected items and checkout',meta:'Page',url:'/cart.html',type:'page'}];
    const searchModal=document.getElementById('search-modal'),searchInput=document.getElementById('search-input'),searchResults=document.getElementById('search-results');let activeIdx=-1;
    function openSearch(){searchModal.classList.remove('pointer-events-none','opacity-0');searchModal.classList.add('pointer-events-auto','opacity-100');searchInput.value='';renderResults('');setTimeout(()=>searchInput.focus(),50);}
    function closeSearch(){searchModal.classList.add('pointer-events-none','opacity-0');searchModal.classList.remove('pointer-events-auto','opacity-100');activeIdx=-1;}
    function renderResults(q){const t=q.trim().toLowerCase();const hits=t.length===0?SEARCH_DATA.slice(0,6):SEARCH_DATA.filter(d=>(d.title+' '+d.desc+' '+d.meta).toLowerCase().includes(t));if(!hits.length){searchResults.innerHTML='<p class="font-body text-sm text-brand-text/40 px-5 py-6 text-center">No results for "'+q+'"</p>';return;}searchResults.innerHTML=hits.map((h,i)=>\`<a href="\${h.url}" class="search-result-item flex items-center gap-4 px-5 py-3.5 hover:bg-brand-surface transition-colors" data-idx="\${i}"><div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 \${h.type==='product'?'bg-brand-primary/10':'bg-brand-text/6'}">\${h.type==='product'?'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#006B96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'}</div><div class="flex-1 min-w-0"><p class="font-sans font-bold text-sm text-brand-text truncate">\${h.title}</p><p class="font-body text-xs text-brand-text/45 truncate mt-0.5">\${h.desc}</p></div><span class="text-xs font-body text-brand-text/30 flex-shrink-0 hidden md:block">\${h.meta}</span></a>\`).join('');activeIdx=-1;}
    document.getElementById('search-btn').addEventListener('click',openSearch);
    document.getElementById('search-close').addEventListener('click',closeSearch);
    searchModal.addEventListener('click',e=>{if(e.target===searchModal)closeSearch();});
    searchInput.addEventListener('input',e=>renderResults(e.target.value));
    searchInput.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();const items=searchResults.querySelectorAll('.search-result-item');if(!items.length)return;items.forEach(el=>el.classList.remove('bg-brand-surface'));activeIdx=(activeIdx+1+items.length)%items.length;items[activeIdx].classList.add('bg-brand-surface');items[activeIdx].scrollIntoView({block:'nearest'});}else if(e.key==='ArrowUp'){e.preventDefault();const items=searchResults.querySelectorAll('.search-result-item');if(!items.length)return;items.forEach(el=>el.classList.remove('bg-brand-surface'));activeIdx=(activeIdx-1+items.length)%items.length;items[activeIdx].classList.add('bg-brand-surface');items[activeIdx].scrollIntoView({block:'nearest'});}else if(e.key==='Enter'){const items=searchResults.querySelectorAll('.search-result-item');if(activeIdx>=0&&items[activeIdx])items[activeIdx].click();}else if(e.key==='Escape')closeSearch();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSearch();if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();openSearch();}});
    // ── END SEARCH ───────────────────────────────────────────────────────
  
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
