
const btn=document.querySelector('.mobile-btn');
const menu=document.querySelector('.menu');
if(btn&&menu){btn.addEventListener('click',()=>menu.classList.toggle('open'));}
document.querySelectorAll('.filter button').forEach(b=>{
 b.addEventListener('click',()=>{
  document.querySelectorAll('.filter button').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  const type=b.dataset.filter;
  document.querySelectorAll('[data-type]').forEach(item=>{
    item.style.display=(type==='todos'||item.dataset.type===type)?'block':'none';
  });
 });
});

const countdownEl=document.getElementById('countdown-aniversario');
if(countdownEl){
 const eventDate=new Date('2026-10-18T00:00:00-03:00');
 const today=new Date();
 const diffDays=Math.ceil((eventDate-today)/86400000);
 if(diffDays>1){countdownEl.textContent='Faltam '+diffDays+' dias';}
 else if(diffDays===1){countdownEl.textContent='É amanhã!';}
 else if(diffDays===0){countdownEl.textContent='É hoje!';}
 else{countdownEl.textContent='Celebrado em 18 de outubro de 2026';}
}
