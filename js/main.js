// Simple script to allow replacing images via drag-and-drop (optional)
document.addEventListener('DOMContentLoaded',()=>{
  const imgs = document.querySelectorAll('#photo-id, #photo-lic');
  imgs.forEach(img=>{
    img.addEventListener('click',()=>{
      alert('Αντικαταστήστε το αρχείο στο /assets/images και ανανεώστε τη σελίδα.');
    });
  });
});
