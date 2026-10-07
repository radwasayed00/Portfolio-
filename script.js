const src={c1:document.querySelector('[data-img=c1] img').src,c2:document.querySelector('[data-img=c2] img').src,c3:document.querySelector('[data-img=c3] img').src};
const d=document.getElementById('dlg'),big=document.getElementById('big');
document.querySelectorAll('.cert button').forEach(b=>b.onclick=()=>{big.src=src[b.dataset.img];big.alt=b.getAttribute('aria-label');d.showModal()});
d.onclick=()=>d.close();