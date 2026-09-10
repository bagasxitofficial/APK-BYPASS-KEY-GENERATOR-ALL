(function(){
'use strict';
var TARGET_SKIP_URL="https://bagasxitofficial.github.io/ANIMASI-BAGASXIT-OFFICIAL/";
if(window.__BAGASXIT_BYPASS__){console.log('[BAGASXIT] Bypass sudah aktif.');return;}
window.__BAGASXIT_BYPASS__=true;

(function(){
function createBtn(){
if(document.getElementById('bagasxit-skip-btn'))return;
var btn=document.createElement('button');
btn.id='bagasxit-skip-btn';
btn.innerText='SKIP ⏭';
btn.style.cssText='position:fixed;top:12px;right:12px;z-index:999999999;padding:10px 18px;background:#A033FF;color:#fff;font-weight:bold;border:2px solid #C875FF;border-radius:16px;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.5);font-size:14px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;';
btn.onclick=function(){
var els=document.querySelectorAll('button, a, div[role="button"], input[type="submit"], .btn');
var clicked=false;
for(var i=0;i<els.length;i++){
var el=els[i];
var t=(el.textContent||el.innerText||el.value||'').toUpperCase();
if(el.offsetWidth>0&&el.offsetHeight>0&&(t.includes('SKIP')||t.includes('PULAR')||t.includes('CONTINUE')||t.includes('CLIQUE')||t.includes('CONTINUAR')||t.includes('NEXT')||t.includes('PROSSEGUIR')||t.includes('FINALIZAR')||t.includes('GET LINK'))){
try{el.click();clicked=true;}catch(e){}
}
}
if(!clicked)window.location.href=TARGET_SKIP_URL;
};
if(document.body)document.body.appendChild(btn);
else document.addEventListener('DOMContentLoaded',function(){document.body.appendChild(btn);});
}
createBtn();
setInterval(function(){if(!document.getElementById('bagasxit-skip-btn')&&document.body)createBtn();},2000);
})();

(function(){
var adKeywords=['googleads','doubleclick','pagead','adservice'];
var socialKeywords=['t.me','telegram','whatsapp.com','wa.me','youtube.com','youtu.be','discord.gg','discord.com','instagram.com','facebook.com','tiktok.com','twitter.com','x.com'];
try{
var _origOpen=window.open;
window.open=function(url){
if(url){var u=url.toLowerCase();if(socialKeywords.some(function(k){return u.includes(k);}))return null;}
return _origOpen.apply(this,arguments);
};
}catch(e){}
window.addEventListener('click',function(e){
var a=e.target.closest('a');
if(!a||!a.href)return;
var h=a.href.toLowerCase();
if(adKeywords.some(function(k){return h.includes(k);})||socialKeywords.some(function(k){return h.includes(k);})){
e.preventDefault();e.stopPropagation();
}
},true);
})();

function triggerRealClick(elem){
try{elem.click();}catch(e){}
try{var evt=new MouseEvent('click',{view:window,bubbles:true,cancelable:true});elem.dispatchEvent(evt);}catch(e){}
}

function injectCleanBypass(){
if(window.__cleanBypassInjected)return;
window.__cleanBypassInjected=true;
document.addEventListener('click',function(e){
var ad=e.target.closest('.adsbygoogle, iframe, [class*="ad-"], [id*="ad-"], .publicidade');
if(ad){ad.style.visibility='hidden';ad.style.pointerEvents='none';}
},true);
try{
var _st=window.setTimeout;
window.setTimeout=function(fn,delay){return _st(fn,Math.min(delay,100));};
var _si=window.setInterval;
window.setInterval=function(fn,delay){return _si(fn,Math.min(delay,200));};
}catch(e){}
setInterval(function(){
var foundAction=false;
var btns=document.querySelectorAll('button, a, div[role="button"], input[type="submit"], .btn, [class*="btn"]');
btns.forEach(function(el){
var txt=(el.textContent||el.innerText||el.value||'').toUpperCase().trim();
if(txt==='FECHAR'){triggerRealClick(el);return;}
var isSocialTask=(txt.includes('SUBSCRIBE')||txt.includes('JOIN')||txt.includes('DISCORD')||txt.includes('TELEGRAM')||txt.includes('WHATSAPP')||txt.includes('LIKE')||txt.includes('FOLLOW')||txt.includes('CANAL')||txt.includes('INSCREVER'));
if(isSocialTask){
el.dataset.completed='true';
el.dataset.visited='true';
if(el.disabled)el.disabled=false;
el.style.pointerEvents='auto';
el.style.opacity='1';
el.removeAttribute('disabled');
}
var isTarget=(txt.includes('PROSSEGUIR')||txt.includes('PROSS3GU!R')||txt.includes('PR0SS3GU!R')||txt.includes('CONTINUAR')||txt.includes('CONT!NUAR')||txt.includes('FINALIZAR')||txt.includes('F!NAL!ZAR')||txt.includes('CL!QU3')||txt.includes('BLOQU&ADO')||txt.includes('AVANCAR ETAPA')||txt.includes('FECHAR')||txt.includes('CONTINUE TO STEP')||txt.includes('GET LINK')||txt.includes('GETLINK'));
if(isTarget){
foundAction=true;
if(el.disabled)el.disabled=false;
el.style.pointerEvents='auto';
el.style.opacity='1';
el.removeAttribute('disabled');
try{var rect=el.getBoundingClientRect();window.scrollTo(0,window.pageYOffset+rect.top-(window.innerHeight/2));}catch(e){}
if(!el.dataset.autoDone){
el.dataset.autoDone='true';
setTimeout(function(){triggerRealClick(el);},500);
}
}
});
if(!foundAction){
var allElems=document.querySelectorAll('div, p, span, h1, h2, h3');
allElems.forEach(function(item){
var t=(item.textContent||item.innerText||'').toUpperCase();
if(t.includes('APERTE N0 ANÚNC!0')||t.includes('ESP3R3')||t.includes('SEGUND0S')){
try{var r=item.getBoundingClientRect();window.scrollTo(0,window.pageYOffset+r.top-(window.innerHeight/3));}catch(e){}
}
});
}
document.querySelectorAll('[disabled], .disabled, [data-locked="true"]').forEach(function(l){
l.removeAttribute('disabled');
l.classList.remove('disabled');
l.style.pointerEvents='auto';
l.style.opacity='1';
});
},500);
console.log('[BAGASXIT] Clean bypass aktif.');
}

function injectCountdownAndAutoBack(){
if(document.getElementById('customCountdownOverlay'))return;
var overlay=document.createElement('div');
overlay.id='customCountdownOverlay';
overlay.style.cssText='position:fixed!important;top:0!important;left:0!important;width:100%!important;height:100%!important;background:rgba(0,0,0,0.85)!important;z-index:999999999!important;display:flex!important;flex-direction:column!important;justify-content:center!important;align-items:center!important;color:white!important;font-family:sans-serif!important;';
overlay.innerHTML='<div style="font-size:22px;font-weight:bold;margin-bottom:15px;text-align:center;padding:0 20px;line-height:1.3;">SUBREK YT AING ATUH👀🗿</div><div id="customTimerText" style="font-size:80px;font-weight:bold;color:#FFD700;">1</div>';
document.body.appendChild(overlay);
var count=1;
var timerText=document.getElementById('customTimerText');
var interval=setInterval(function(){
count--;
if(timerText)timerText.innerText=count;
if(count<=0){clearInterval(interval);window.history.back();}
},1000);
}

function run(){
var url=window.location.href;
if(url.indexOf(TARGET_SKIP_URL)!==-1)injectCountdownAndAutoBack();
else injectCleanBypass();
}

run();
var _lastUrl=location.href;
setInterval(function(){
if(location.href!==_lastUrl){
_lastUrl=location.href;
window.__cleanBypassInjected=false;
run();
}
},800);
console.log('[BAGASXIT] Bookmarklet loaded.');
})();
