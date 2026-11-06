/* codex-project-demo-script */
(function(){var tries=0;
function tone(v){if(/winner/i.test(v))return" is-gold";if(/national finalist/i.test(v))return" is-blue";if(/second place/i.test(v))return" is-silver";return""}
function award(card,label){if(!label||card.querySelector(".hz-project-award"))return;var m=card.querySelector(".hz-project-copy .hz-card-meta");if(!m)return;var w=document.createElement("div");w.className="hz-project-kicker";m.parentNode.insertBefore(w,m);w.appendChild(m);var t=document.createElement("span");t.className="hz-project-award"+tone(label);t.innerHTML="<i aria-hidden=\"true\">&#10022;</i>"+label;w.appendChild(t)}
var v={
"Store Signal":'<div class="hz-project-demo hz-store-demo"><span class="hz-demo-index">02</span><div class="hz-att-brand" aria-label="AT&T"><i class="hz-att-globe"></i><b>AT&amp;T</b></div><div class="hz-signal-panel"><section class="hz-signal-profile"><small>Customer 017</small><strong>$286.40</strong><span>Monthly spend</span><div class="hz-spend-bar"><i></i></div></section><section class="hz-signal-opps"><small>Local opportunities</small><div class="hz-signal-row"><i>01</i><b>Fiber upgrade</b><span></span></div><div class="hz-signal-row"><i>02</i><b>Mobile bundle</b><span></span></div><div class="hz-signal-row"><i>03</i><b>Smart home</b><span></span></div></section></div></div>',
"Seawolf Course Finder":'<div class="hz-project-demo hz-course-demo"><span class="hz-demo-index">03</span><div class="hz-course-search"><i></i><span>data structures</span><b>Search</b></div><article class="hz-course-result is-best"><strong>CSE 214</strong><div><b>Data Structures</b><small>Programming methodology</small></div><span>98% match</span></article><article class="hz-course-result"><strong>CSE 373</strong><div><b>Analysis of Algorithms</b><small>Data structures + algorithms</small></div><span>94% match</span></article><div class="hz-course-foot"><span><b>4,000+</b> courses</span><span>60+ departments</span></div></div>',
"Pairs Trading Algorithm":'<div class="hz-project-demo hz-pairs-demo"><span class="hz-demo-index">04</span><div class="hz-pairs-key"><span>Stock A</span><span>Stock B</span></div><svg viewBox="0 0 360 150" preserveAspectRatio="none" role="img" aria-label="Two correlated stocks with thin buy and sell signals"><line class="grid" x1="0" y1="27" x2="360" y2="27"/><line class="grid" x1="0" y1="75" x2="360" y2="75"/><line class="grid" x1="0" y1="123" x2="360" y2="123"/><polyline class="stock-a" points="0,122 30,107 60,110 90,91 120,78 150,42 180,87 210,110 240,82 270,34 300,64 330,77 360,57"/><polyline class="stock-b" points="0,128 30,113 60,117 90,99 120,85 150,71 180,92 210,132 240,89 270,67 300,78 330,81 360,60"/><g><circle class="sell" cx="150" cy="42" r="2.2"/><text class="sell" x="141" y="32">SELL</text></g><g><circle class="buy" cx="210" cy="132" r="2.2"/><text class="buy" x="202" y="145">BUY</text></g><g><circle class="sell" cx="270" cy="34" r="2.2"/><text class="sell" x="261" y="24">SELL</text></g></svg></div>',
"Accessibility Extension":'<div class="hz-project-demo hz-reading-demo"><span class="hz-demo-index">05</span><div class="hz-reading-window"><div class="hz-reading-bar"><i></i><i></i><i></i><span>Reading mode</span></div><div class="hz-reading-cols"><div class="hz-reading-toggle"></div><section><small>Before</small><p><span></span><span></span><span></span></p><p><span></span><span></span></p><p><span></span><span></span><span></span></p><p><span></span><span></span></p></section><section class="is-bionic"><small>After</small><p><span></span><span></span><span></span></p><p><span></span><span></span></p><p><span></span><span></span><span></span></p><p><span></span><span></span></p></section></div></div></div>'};
function go(){var cards=document.querySelectorAll(".hz-project");if(!cards.length&&tries++<80){setTimeout(go,50);return}cards.forEach(function(c){var h=c.querySelector(".hz-project-copy h3");if(!h)return;var n=h.textContent.trim(),old=c.querySelector(".hz-art-award"),label=old&&old.querySelector("strong")?old.querySelector("strong").textContent.trim():"";award(c,label);if(old)old.remove();if(v[n]){var a=c.querySelector(".hz-project-art");if(a)a.innerHTML=v[n]}})}go()})();;

/* codex-pairs-label-fix */
(function f(){var k=document.querySelectorAll(".hz-pairs-key span"),s=document.querySelector(".hz-pairs-demo svg");if(k.length<2){return setTimeout(f,50)}k[0].textContent="Pepsi";k[1].textContent="Coca-Cola";if(s)s.setAttribute("aria-label","Pepsi and Coca-Cola price series with pastel red sell and pastel green buy indicators")})();;

/* codex-dashboard-refine */
(function refine(){var d=document.querySelector(".hz-store-demo");if(!d)return setTimeout(refine,50);d.innerHTML='<span class="hz-demo-index">02</span><div class="hz-att-brand" aria-label="AT&amp;T"><i class="hz-att-globe"></i><b>AT&amp;T</b></div><div class="hz-store-dashboard"><div class="hz-store-dash-head"><span><i></i>Regional intelligence</span><b>Store 017 / Live</b></div><div class="hz-store-kpis"><article><small>Opportunities</small><strong>34</strong><span>+8 this week</span></article><article><small>Conversion</small><strong>18.4%</strong><span>+3.2%</span></article><article><small>Monthly spend</small><strong>$286</strong><span>Above local avg.</span></article></div><div class="hz-store-charts"><section class="hz-store-chart hz-store-trend"><header><span>Local demand</span><b>+18%</b></header><svg viewBox="0 0 190 75" preserveAspectRatio="none" role="img" aria-label="Local demand trend chart"><line class="grid" x1="0" y1="15" x2="190" y2="15"/><line class="grid" x1="0" y1="39" x2="190" y2="39"/><line class="grid" x1="0" y1="63" x2="190" y2="63"/><path class="area" d="M0 63 L0 57 L22 52 L44 56 L66 42 L88 45 L110 31 L132 36 L154 20 L176 24 L190 12 L190 63 Z"/><polyline class="line" points="0,57 22,52 44,56 66,42 88,45 110,31 132,36 154,20 176,24 190,12"/></svg></section><section class="hz-store-chart"><header><span>Opportunity mix</span></header><div class="hz-store-mix-body"><div class="hz-store-donut"></div><div class="hz-store-bars"><span></span><span></span><span></span></div></div></section></div></div>'})();;

/* codex-metal-video-behavior */
(function setupMetal(){var cards=document.querySelectorAll(".hz-project");if(!cards.length)return setTimeout(setupMetal,50);var card=Array.from(cards).find(function(c){var h=c.querySelector(".hz-project-copy h3");return h&&h.textContent.trim()==="METAL"});var video=card&&card.querySelector("video");if(!video)return setTimeout(setupMetal,50);if(video.dataset.previewReady)return;video.dataset.previewReady="true";video.preload="auto";video.muted=true;video.playsInline=true;function reset(){var target=Math.min(2,Number.isFinite(video.duration)?Math.max(0,video.duration-.05):2);try{video.currentTime=target}catch(e){}video.pause()}if(video.readyState>=1)reset();else video.addEventListener("loadedmetadata",reset,{once:true});card.addEventListener("mouseenter",function(){if(Math.abs(video.currentTime-2)>.35)try{video.currentTime=2}catch(e){}var play=video.play();if(play&&play.catch)play.catch(function(){})});card.addEventListener("mouseleave",reset)})();;

/* codex-award-row-behavior */
(function moveAwards(){var tags=document.querySelectorAll(".hz-project-award");if(!tags.length)return setTimeout(moveAwards,50);tags.forEach(function(tag){var copy=tag.closest(".hz-project-copy"),title=copy&&copy.querySelector("h3");if(!title||copy.querySelector(".hz-award-row"))return;var tone=tag.classList.contains("is-gold")?" is-gold":tag.classList.contains("is-blue")?" is-blue":tag.classList.contains("is-silver")?" is-silver":"";var row=document.createElement("div");row.className="hz-award-row"+tone;row.innerHTML="<small>&#10022; Recognition</small><i></i><strong>"+tag.textContent.replace("✦","").trim()+"</strong>";title.insertAdjacentElement("afterend",row);var kicker=tag.closest(".hz-project-kicker");tag.remove();if(kicker&&kicker.children.length===1){var meta=kicker.firstElementChild;kicker.parentNode.insertBefore(meta,kicker);kicker.remove()}})})();;

/* codex-project-links */
(function linkProjects(){var cards=document.querySelectorAll(".hz-project");if(!cards.length)return setTimeout(linkProjects,50);var links={"METAL":"https://www.linkedin.com/feed/update/urn:li:activity:7521404142100156416/","Seawolf Course Finder":"https://github.com/giovannivitale4722/stony-brook-course-recommender","Accessibility Extension":"https://github.com/giovannivitale4722/Bionic-Reading-and-more-"};cards.forEach(function(card){var title=card.querySelector(".hz-project-copy h3"),name=title&&title.textContent.trim(),url=links[name];if(!url||card.dataset.projectLink)return;card.dataset.projectLink=url;card.classList.add("is-linked");card.setAttribute("role","link");card.setAttribute("tabindex","0");card.setAttribute("aria-label","Open "+name+" project in a new tab");function openProject(){var opened=window.open(url,"_blank","noopener,noreferrer");if(opened)opened.opener=null}card.addEventListener("click",function(event){if(event.target.closest("a,button"))return;openProject()});card.addEventListener("keydown",function(event){if(event.key==="Enter"||event.key===" "){event.preventDefault();openProject()}})})})();;

/* codex-experience-cleanup */
(function setupExperience(){var timeline=document.querySelector(".experience-timeline");if(!timeline)return setTimeout(setupExperience,50);function googleMarkup(){return '<span class="google-word" aria-label="Google"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></span>'}function apply(){document.querySelectorAll(".timeline-rail li").forEach(function(li){var company=li.querySelector("button strong");if(!company)return;var name=company.textContent.trim();if(name==="Founder & Developer")company.textContent="Entrepreneur";if(name==="AT&T")li.classList.add("is-att-company");if(name==="Google"&&!company.querySelector(".google-word"))company.innerHTML=googleMarkup()});document.querySelectorAll(".timeline-item").forEach(function(item){var company=item.querySelector(".timeline-company");if(!company)return;var name=company.textContent.trim();if(name==="Founder & Developer"){company.textContent="Entrepreneur";name="Entrepreneur"}if(name==="Google"&&!company.querySelector(".google-word"))company.innerHTML=googleMarkup();if(name==="Public Library"||name==="Precision Gear"){var tech=item.querySelector("code");if(tech)tech.remove()}})}apply();var queued=false;new MutationObserver(function(){if(queued)return;queued=true;requestAnimationFrame(function(){queued=false;apply()})}).observe(timeline,{childList:true,subtree:true})})();;

/* codex-sticky-company-branding */
(function stickyBranding(){var timeline=document.querySelector(".experience-timeline");if(!timeline)return setTimeout(stickyBranding,50);var google='<span class="google-word" aria-label="Google"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></span>',scheduled=false;function enforce(){document.querySelectorAll(".timeline-rail li").forEach(function(li){var strong=li.querySelector("button strong");if(!strong)return;var name=strong.textContent.trim();if(name==="AT&T"&&!li.classList.contains("is-att-company"))li.classList.add("is-att-company");if(name==="Google"&&!strong.querySelector(".google-word"))strong.innerHTML=google});document.querySelectorAll(".timeline-company").forEach(function(company){if(company.textContent.trim()==="Google"&&!company.querySelector(".google-word"))company.innerHTML=google})}function queue(){if(scheduled)return;scheduled=true;requestAnimationFrame(function(){scheduled=false;enforce()})}enforce();new MutationObserver(queue).observe(timeline,{attributes:true,attributeFilter:["class"],childList:true,subtree:true});window.addEventListener("scroll",queue,{passive:true})})();;

/* codex-project-heading */
(function renameProjects(){var heading=document.querySelector("#projects .hz-section-title h2");if(!heading)return setTimeout(renameProjects,50);heading.textContent="Projects"})();;

/* codex-final-cleanup */
(function finishCleanup(){var cards=document.querySelectorAll(".hz-project");if(!cards.length)return setTimeout(finishCleanup,50);var contact=document.querySelector(".hz-contact");if(contact)contact.remove();Array.from(document.querySelectorAll(".hz-footer a")).forEach(function(link){if(link.getAttribute("href")==="/resume"||/résumé|resume/i.test(link.textContent))link.remove()});var metal=Array.from(cards).find(function(card){var title=card.querySelector(".hz-project-copy h3");return title&&title.textContent.trim()==="METAL"});var video=metal&&metal.querySelector("video");if(!video||video.dataset.previewStart25)return;video.dataset.previewStart25="true";function reset25(){var target=Math.min(2.5,Number.isFinite(video.duration)?Math.max(0,video.duration-.05):2.5);try{video.currentTime=target}catch(e){}video.pause()}if(video.readyState>=1)reset25();else video.addEventListener("loadedmetadata",reset25,{once:true});metal.addEventListener("mouseenter",function(){try{video.currentTime=2.5}catch(e){}var play=video.play();if(play&&play.catch)play.catch(function(){})});metal.addEventListener("mouseleave",reset25)})();;

/* codex-datathon-winner-target */
(function markDatathonWinner(){
  var cards=document.querySelectorAll(".hz-project");
  if(!cards.length)return setTimeout(markDatathonWinner,50);
  cards.forEach(function(card){
    var title=card.querySelector(".hz-project-copy h3");
    if(!title||title.textContent.trim()!=="Pairs Trading Algorithm")return;
    var row=card.querySelector(".hz-award-row");
    if(row)row.classList.add("is-datathon-winner");
  });
})();;

/* Rotating top-left status */
(function setupRotatingStatus(){
  var attempts=0;
  function setup(){
    var label=document.querySelector('.hz-quote span');
    if(!label){if(attempts++<100)setTimeout(setup,50);return}
    if(label.dataset.rotatingStatus)return;
    label.dataset.rotatingStatus='true';
    var messages=[
      '\u{1F4BB} Fine-tuning my latest project',
      '\u265F\uFE0F Blundering pieces in chess',
      '\u{1F373} Attempting to become a better cook',
      '\u{1F4FA} Currently watching: Silo',
      '\u{1F3A7} On repeat: Bruno Mars',
      '\u{1F3C3} Getting my daily cardio in',
      '\u{1F3CB}\uFE0F Lifting heavy things and putting them back down'
    ];
    var index=Math.floor(Math.random()*messages.length);
    label.textContent=messages[index];
    setInterval(function(){
      label.classList.add('is-swapping');
      setTimeout(function(){
        index=(index+1+Math.floor(Math.random()*(messages.length-1)))%messages.length;
        label.textContent=messages[index];
        label.classList.remove('is-swapping');
      },220);
    },5200);
  }
  setup();
})();
