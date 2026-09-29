(function(){
  /* background video: hold on the poster frame when reduced motion is preferred */
  var hv=document.getElementById('heroVideo');
  if(hv){
    var rm=window.matchMedia('(prefers-reduced-motion: reduce)');
    var applyRM=function(){
      if(rm.matches){hv.removeAttribute('autoplay');hv.pause();}
      else{var p=hv.play();if(p&&p.catch){p.catch(function(){});}}
    };
    applyRM();
    if(rm.addEventListener){rm.addEventListener('change',applyRM);}
    /* pause while the hero is off screen */
    if('IntersectionObserver' in window){
      new IntersectionObserver(function(es){es.forEach(function(e){
        if(rm.matches)return;
        if(e.isIntersecting){var p=hv.play();if(p&&p.catch){p.catch(function(){});}}else{hv.pause();}
      })},{threshold:0}).observe(hv);
    }
  }

  /* keep aria-expanded in sync with the hover/focus menus */
  document.querySelectorAll('.nav-links > li').forEach(function(li){
    var btn=li.querySelector(':scope > button'); if(!btn)return;
    var set=function(v){btn.setAttribute('aria-expanded',v?'true':'false')};
    li.addEventListener('mouseenter',function(){set(true)});
    li.addEventListener('mouseleave',function(){set(false)});
    li.addEventListener('focusin',function(){set(true)});
    li.addEventListener('focusout',function(){if(!li.contains(document.activeElement))set(false)});
  });

  var header=document.getElementById('header');
  var onScroll=function(){header.classList.toggle('scrolled',window.scrollY>24)};
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  var mm=document.getElementById('mobileMenu');
  document.getElementById('burger').addEventListener('click',function(){mm.classList.add('open');mm.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'});
  document.getElementById('closeMenu').addEventListener('click',function(){mm.classList.remove('open');mm.setAttribute('aria-hidden','true');document.body.style.overflow=''});

  /* FAQ accordion (all answers stay in the DOM) */
  document.querySelectorAll('.faq-q').forEach(function(btn){
    btn.addEventListener('click',function(){
      var item=btn.closest('.faq-item');var open=item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(o){o.classList.remove('open');o.querySelector('.faq-q').setAttribute('aria-expanded','false')});
      if(!open){item.classList.add('open');btn.setAttribute('aria-expanded','true')}
    });
  });
  /* Why choose list (same pattern, one open at a time) */
  document.querySelectorAll('.why-list h3 > button').forEach(function(btn){
    btn.addEventListener('click',function(){
      var li=btn.closest('li');var open=li.classList.contains('open');
      document.querySelectorAll('.why-list li.open').forEach(function(o){o.classList.remove('open');o.querySelector('button').setAttribute('aria-expanded','false')});
      if(!open){li.classList.add('open');btn.setAttribute('aria-expanded','true')}
    });
  });

  var els=document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -5% 0px'});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}

  /* Revision 1: hold the sticky Call and Book bar back while the hero is on
     screen, so Book Online is never offered twice at once on a phone. With no
     IntersectionObserver the bar just stays visible, as it did before. */
  var heroSection=document.querySelector('.hero');
  if(heroSection&&'IntersectionObserver' in window){
    document.body.classList.add('hero-onscreen');
    new IntersectionObserver(function(es){
      document.body.classList.toggle('hero-onscreen',es[0].isIntersecting);
    },{threshold:0,rootMargin:'-40% 0px 0px 0px'}).observe(heroSection);
  }

  window.dataLayer=window.dataLayer||[];
  document.querySelectorAll('[data-track]').forEach(function(a){a.addEventListener('click',function(){window.dataLayer.push({event:a.getAttribute('data-track')==='call'?'click_to_call':'book_online_click'})})});
  document.getElementById('year').textContent=new Date().getFullYear();
})();

/* enquiry form -> /api/enquiry (SMTP2GO relay) */
(function(){
  var f=document.getElementById('enquiryForm'); if(!f)return;
  var s=document.getElementById('formStatus'), btn=document.getElementById('formSubmit');
  f.addEventListener('submit',function(e){
    e.preventDefault();
    if(!f.checkValidity()){f.reportValidity();return;}
    s.className='form-status';s.textContent='Sending your enquiry...';btn.disabled=true;
    fetch(f.action,{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({name:f.name.value,phone:f.phone.value,email:f.email.value,service:f.service.value,message:f.message.value})})
      .then(function(r){return r.json().then(function(d){return {ok:r.ok,d:d}})})
      .then(function(res){
        if(res.ok){f.reset();s.className='form-status ok';s.textContent='Thank you. Your enquiry has been sent and our team will be in touch during opening hours.';}
        else{s.className='form-status err';s.textContent=(res.d&&res.d.error)||'Sorry, that did not send. Please call us on (07) 3852 1160.';}
      })
      .catch(function(){s.className='form-status err';s.textContent='Sorry, that did not send. Please call us on (07) 3852 1160.';})
      .then(function(){btn.disabled=false;});
  });
})();
