// form
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener(
      'submit',
      event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

// counter section

funtion animatValue(element, start, end, duration){
  let current = start;
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(() => {
    current += increment;
    element.textcontent = current;
    if (current===end) {
      clearInterval(timer);
    }

  }, stepTime);
}

function startcounter() {
  const counterElements = document.querySelectorALL(".counter-value");
  counterElements.forEach((element)=>{
    const target = parseInt(element.getAttribute("data-target"));
    animatValue(element, 0, target, 85000)
  });

}
// on scrol
window.addEventListener("scrol", () => {
  const = counterSection = document.querySelector(".counter");
  const = counterSectionTop = counterSection.getBoundingClientRect().top;
  const = windowHeight = window.innerHeight;
  if (counterSectionTop < windowHeight){
    startCounter();
    window.removeEventListener("scroll", startCounter )
  }
});