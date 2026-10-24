const factions = [
 
 {id:'bleus',name:'Chevaliers Bleus',short:'Les défenseurs du royaume',symbol:'♞',accent:'#4ba8ff',tint:'#18385b',motto:'COURAGE • HONNEUR • AMITIÉ',desc:'Les héros du royaume ! Courageux, loyaux et toujours prêts à aider… même si leur plan de bataille consiste parfois à foncer tout droit.',chars:[['Sir Galahad','Champion des Bleus','♞','Un chevalier au cœur noble et à l’armure étincelante. Il rêve de devenir une légende, et s’entraîne à prendre des poses héroïques devant les remparts.'],['Capitaine Azur','Chef de la garnison','🛡','Un stratège réputé qui a un plan pour chaque situation. Il lui arrive simplement d’oublier le plan au moment le plus important.'],['Frère Moustache','Chevalier errant','⚔','Le plus brave des chevaliers, selon lui-même. Sa moustache est célèbre dans trois duchés et redoutée par les barbiers.'],['Draeven — Le Ninja Bleu','Maître des techniques ninja','🥷','Draeven est un chevalier loyal et courageux, le seul de son ordre à maîtriser les techniques ninja. Il se déplace très vite, esquive les attaques et surprend ses ennemis. Il combat pour défendre ses amis et son royaume.']]}
 {id:'rouges',name:'Chevaliers Rouges',short:'Chevaucheurs de dragons',symbol:'🐉',accent:'#ff655f',tint:'#55262f',motto:'FORCE • FIERTÉ • FLAMMES',desc:'Rivaux des Chevaliers Bleus, les Rouges chevauchent de puissants dragons. Ils ne sont pas maléfiques : ils aiment juste gagner, parader et avoir les plus grosses flammes.',chars:[['Seigneur Écarlate','Maître des dragons','🐉','Un chef fier et spectaculaire qui préfère une entrée en scène avec rugissements et flammes à une arrivée discrète.'],['Dame Flamboyante','Cavalière draconique','🔥','Une dragonnière intrépide qui comprend ses dragons mieux que quiconque. Elle n’aime pas qu’on les appelle de gros lézards.'],['Brak le Rouge','Chevalier de l’avant-garde','🗡','Il prend la rivalité avec les Bleus très au sérieux. Beaucoup trop au sérieux, surtout pendant les tournois de tir à la corde.']]},
 {id:'noirs',name:'Chevaliers Noirs',short:'Les serviteurs des ténèbres',symbol:'☠',accent:'#bd9bff',tint:'#302342',motto:'POUVOIR • PEUR • OBÉISSANCE',desc:'Dans leur forteresse lugubre, les Chevaliers Noirs complotent sous les ordres du Seigneur des Ténèbres. Ils sont méchants, théâtraux et très attachés aux capes dramatiques.',chars:[['Seigneur des Ténèbres','Maître du château noir','♛','Il veut conquérir le monde entier, mais doit d’abord choisir quelle cape sera la plus menaçante pour la grande réunion du mal.'],['Chevalier Sinistre','Champion noir','☠','Silencieux et redoutable. Il ne parle presque jamais, sauf pour annoncer qu’un couloir est sombre ou qu’une porte grince.'],['Le Bourreau Noir','Exécuteur du seigneur','⚔','Son armure est terrifiante, sa hache est immense et son sens de l’humour est inexistant. C’est probablement mieux ainsi.']]},
 {id:'nains',name:'Nains',short:'Forgerons et aventuriers',symbol:'⚒',accent:'#f0b45d',tint:'#49351f',motto:'SOLIDITÉ • OR • BONNE TOURTE',desc:'Sous la montagne, les Nains forgent des armes et gardent leurs trésors. Ils sont généreux… sauf quand on touche à leur or ou à leur dernière tourte.',chars:[['Brom le Forgeron','Maître artisan','⚒','Il peut réparer presque tout avec son marteau. Il prétend même pouvoir réparer les mauvaises décisions, mais personne n’ose lui confier les siennes.'],['Rurik Barbe-d’Or','Guerrier nain','🪓','Petit par la taille, immense par le courage et par le volume de sa voix. On l’entend souvent avant de le voir.'],['Dame Piquette','Ingénieure naine','⚙','Inventrice de génie, elle a conçu une foreuse à vapeur. Le fait qu’elle traverse parfois les murs est, selon elle, une fonctionnalité.']]},
 {id:'elfes',name:'Elfes de la forêt',short:'Gardiens des bois anciens',symbol:'✦',accent:'#83d68d',tint:'#203d32',motto:'NATURE • SAGESSE • ADRESSE',desc:'Agiles et mystérieux, les Elfes protègent les bois anciens et tirent à l’arc avec une précision incroyable. Ils sont un peu susceptibles quand on piétine leurs champignons.',chars:[['Aelwen','Éclaireuse elfique','🏹','Elle connaît chaque sentier et peut repérer une feuille déplacée à trois lieues. Elle préfère toutefois ne pas expliquer pourquoi elle surveille les champignons.'],['Eldrin le Sage','Gardien du bosquet','🌿','Il parle aux arbres. Les arbres l’écoutent, surtout quand il leur apporte de l’eau.'],['Sylveflèche','Archer des cimes','🏹','Un tireur si précis qu’il peut fendre une flèche en deux. Il a aussi déjà raté une cible parce qu’un papillon passait devant.']]},
 {id:'orks',name:'Orks',short:'La force avant tout',symbol:'⚔',accent:'#b3d96a',tint:'#344125',motto:'FORCE • FESTIN • BATAILLE',desc:'Les Orks aiment les défis, les festins et les grandes batailles. Ils ne sont d’accord sur presque rien, sauf sur le fait qu’un repas doit être énorme.',chars:[['Gorbag le Costaud','Chef de clan','⚔','Il résout la plupart des problèmes en les soulevant très haut. Cela marche rarement avec les problèmes de maths.'],['Grik le Rusé','Éclaireur ork','🗡','Il préfère les plans malins aux coups de massue, ce qui rend ses amis très méfiants.'],['Mâche-Tout','Champion du festin','🍖','Il a remporté le concours du plus gros mangeur sept années de suite. Il s’entraîne encore, par pure modestie.']]},
 {id:'gobelins',name:'Gobelins',short:'Petits fauteurs de troubles',symbol:'☄',accent:'#e4d15d',tint:'#49411f',motto:'MALICE • VITESSE • PAGAILLE',desc:'Petits, rapides et beaucoup trop curieux, les Gobelins bricolent des machines improbables. Elles fonctionnent parfois exactement comme prévu : c’est là que les ennuis commencent.',chars:[['Zig le Bricoleur','Inventeur gobelin','⚙','Il a inventé une catapulte à tartes et une machine qui fait « pouêt ». Il travaille encore sur la machine à arrêter les explosions.'],['Bouzouk','Chapardeur','☄','Il peut voler une bourse sans que personne le voie. Il peut aussi trébucher sur son propre sac et tout faire tomber.'],['P’tit Boum','Expert en démolition','💣','Il affirme que tout est sous contrôle. Cette phrase est généralement suivie d’un nuage de fumée et d’un bruit très fort.']]},
 {id:'sorcieres',name:'Sorcières',short:'Magie et mystères',symbol:'☾',accent:'#d29aff',tint:'#422754',motto:'MAGIE • MYSTÈRE • LIBERTÉ',desc:'Dans leurs tours biscornues, les sorcières concoctent des potions et lancent des sortilèges. Leurs recettes sont rarement garanties et les effets secondaires sont parfois poilus.',chars:[['Morgalune','Sorcière des brumes','☾','Maîtresse des illusions et des potions. Son chat affirme qu’elle ne maîtrise pas du tout le rangement.'],['Baba Grimoire','Gardienne des sortilèges','✧','Elle possède un grimoire immense et une réponse à presque toutes les questions. Pour les autres, elle invente une prophétie.'],['Pétunia la Terrible','Apprentie sorcière','🧪','Ses potions sont puissantes, colorées et souvent pétillantes. Elle ne sait pas encore pourquoi la dernière a transformé ses bottes en grenouilles.']]}
];
const $=s=>document.querySelector(s);const homeView=$('#homeView'),factionView=$('#factionView'),characterView=$('#characterView');
function show(view){[homeView,factionView,characterView].forEach(v=>v.classList.add('hidden'));view.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'});}
function factionArt(f,extra=''){return `<div class="banner-art ${extra}" style="--accent:${f.accent};--tint:${f.tint}"><span class="banner-symbol">${f.symbol}</span></div>`}
function renderHome(){ $('#factionList').innerHTML=factions.map((f,i)=>`<button class="faction-banner" data-faction="${f.id}" style="--accent:${f.accent};--tint:${f.tint}">${factionArt(f)}<div class="banner-copy"><div class="banner-kicker">FACTION ${String(i+1).padStart(2,'0')}</div><h3>${f.name}</h3><p>${f.short}</p><div class="banner-motto">${f.motto}</div></div><span class="banner-arrow">›</span></button>`).join('');}
function openFaction(id){const f=factions.find(x=>x.id===id);if(!f)return;const hero=$('#factionHero');hero.style.setProperty('--accent',f.accent);hero.style.setProperty('--tint',f.tint);hero.innerHTML=`${factionArt(f)}<div><div class="motto">${f.motto}</div><h1>${f.name}</h1><p>${f.desc}</p></div>`;$('#rosterTitle').textContent=`Les personnages`;$('#characterGrid').innerHTML=f.chars.map((c,i)=>`<button class="character-card" data-character="${i}" style="--accent:${f.accent}"><div class="character-art"><span class="char-level">HÉROS ${String(i+1).padStart(2,'0')}</span><span class="character-glyph">${c[2]}</span><span class="character-name-overlay">${c[0]}</span></div><div class="character-info"><p class="role">${c[1]}</p><h3>${c[0]}</h3><p>${c[3]}</p><div class="card-open">VOIR LA FICHE <span>↗</span></div></div></button>`).join('');$('#characterGrid').querySelectorAll('[data-character]').forEach(btn=>btn.addEventListener('click',()=>openCharacter(f.id,+btn.dataset.character)));show(factionView);}

function openCharacter(id,index){
 const f=factions.find(x=>x.id===id),c=f.chars[index];
 const description=c[3];
 const slug=s=>s.normalize('NFD')
  .replace(/[\u0300-\u036f]/g,'')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g,'-')
  .replace(/^-|-$/g,'');
 const name=slug(c[0]);
 const voiceUrl=`media/${name}-voix.mp3`;
 const descriptionUrl=`media/${name}-description.mp3`;

 characterView.style.setProperty('--accent',f.accent);
 characterView.innerHTML=`
 <button class="back-link" id="backRoster">← Retour aux personnages</button>
 <div class="profile" style="--accent:${f.accent}">
  <div class="profile-visuals">
   <div class="portrait-frame">
    <div class="portrait-art">
     <span>${c[2]}</span>
     <div class="portrait-name">${c[0]}</div>
     <button class="play-button portrait-voice" id="demoVoice" hidden>▶ Écouter sa voix</button>
    </div>
    <div class="portrait-caption">PORTRAIT OFFICIEL</div>
   </div>
   <div class="idle-frame">
    <div class="idle-stage">
     <div class="idle-glow"></div>
     <span class="idle-glyph">${c[2]}</span>
     <div class="idle-label">ANIMATION EN BOUCLE</div>
    </div>
    <p class="media-hint">Ta courte vidéo MP4 sera affichée ici automatiquement, en boucle et sans son.</p>
   </div>
  </div>
  <div class="profile-copy">
   <p class="role profile-role">${f.name} · ${c[1]}</p>
   <div class="lore-panel">
    <h2>Description</h2>
    <p>${description}</p>
    <button class="play-button" id="readDescription">▶ Écouter la description</button>
   </div>
  </div>
 </div>`;

 show(characterView);
 $('#backRoster').addEventListener('click',()=>openFaction(id));

 const voiceButton=$('#demoVoice');
 const descriptionButton=$('#readDescription');

 function fileExists(url){
  return fetch(url,{method:'HEAD',cache:'no-store'})
   .then(response=>response.ok)
   .catch(()=>false);
 }

 const voiceAudio=new Audio(voiceUrl);
 const descriptionAudio=new Audio(descriptionUrl);

 fileExists(voiceUrl).then(exists=>{
  if(exists) voiceButton.hidden=false;
 });

 voiceButton.addEventListener('click',()=>{
  voiceAudio.currentTime=0;
  voiceAudio.play().catch(()=>{
   voiceButton.textContent='Audio indisponible';
  });
 });

 fileExists(descriptionUrl).then(exists=>{
  if(exists){
   descriptionButton.textContent='▶ Écouter la description';
   descriptionButton.onclick=()=>{
    speechSynthesis.cancel();
    descriptionAudio.currentTime=0;
    descriptionAudio.play().catch(()=>{
     descriptionButton.textContent='Audio indisponible';
    });
   };
  }else{
   descriptionButton.textContent='▶ Lire la description (voix de secours)';
   descriptionButton.onclick=()=>{
    descriptionAudio.pause();
    speechSynthesis.cancel();
    const utterance=new SpeechSynthesisUtterance(description);
    utterance.lang='fr-FR';
    speechSynthesis.speak(utterance);
   };
  }
 });
}


$('#factionList').addEventListener('click',e=>{const b=e.target.closest('[data-faction]');if(b)openFaction(b.dataset.faction)});$('#backBtn').addEventListener('click',()=>show(homeView));$('#homeBtn').addEventListener('click',()=>show(homeView));$('#topHome').addEventListener('click',()=>show(homeView));renderHome();
