
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
