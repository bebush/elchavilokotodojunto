
  const carousel = document.querySelector('.carousel');
  const carouselInner = carousel.querySelector('.carousel-inner');
  const prevButton = carousel.querySelector('.carousel-prev');
  const nextButton = carousel.querySelector('.carousel-next');
  const description = carousel.querySelector('.car-promo');
  const promoNombre = carousel.querySelector(".car-promo-nombre")
  const promoDescripcion = carousel.querySelector('.car-promo-descripcion')
  const items = Array.from(carouselInner.children);
  const sections = document.querySelectorAll('.seccion1, .seccion2, .seccion3, .seccion4, .seccion5');
  const listaDiv = document.querySelector('.lista');
  const listaId = document.getElementById("#lista")
  let currentIndex = 0;

  function goToSlide(index) {
    currentIndex = index;
    const offset = -currentIndex * carousel.clientWidth;
    carouselInner.style.transform = `translateX(${offset}px)`;
    // Actualizar la descripción
    //description.textContent = `Descripción del Slide ${currentIndex + 1}`;//
    if(currentIndex == 0){
        description.textContent = `Empanada`
        promoNombre.textContent = '#1 dos empanadas a  45$'
        promoDescripcion.textContent ='(carne,pollo,JyQ,cebolla)'
    }
    if(currentIndex == 1){
        description.textContent = `Pizza`
        promoNombre.textContent = '#2 dos Pizzas a elecion 50$'
        promoDescripcion.textContent ='(fugazza,peperoni,4 quesos)'
    }
    if(currentIndex == 2){
        description.textContent = `Burgesa`
        promoNombre.textContent = '#3 cuatro burgesas con papas a  60$'
        promoDescripcion.textContent ='(lechuga,tomate,mayo,jamon,queso)'
    }
    if(currentIndex == 3){
        description.textContent = `Familiar`
        promoNombre.textContent = '#4 dos familiares a  45$'
        promoDescripcion.textContent ='(lechuga,tomate,mayo,jamon,queso)'
    }
    
    
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    goToSlide(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    goToSlide(currentIndex);
  });


  // Mostrar la descripción del primer slide al cargar la página
  goToSlide(currentIndex);

  function handleSectionClick(event) {
    sections.forEach(section => {
      section.classList.remove('section-active');
      section.classList.add('section-inactive');
   
    });
    

    event.target.classList.remove('section-inactive');
    event.target.classList.add('section-active');

    // Obtener el div con la clase .lista
    const listaDiv = document.querySelector('.lista');

    // Limpiar el contenido actual
    listaDiv.innerHTML = '';

    // Crear el contenido según la sección activa
    if (event.target.classList.contains('seccion1')) {
      listaDiv.style.borderRadius = '0px 0% 0% 15px';
      listaDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
      listaDiv.innerHTML = `
      
      
      <div class="lista-items" id="elemten1-p">
       <img src="https://imgs.search.brave.com/9JvgTPmvbM0bw7tm1BB8QFzYhPrcLDyMFBQ1Y_8cOIQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hbWJpdG8uY29t/L3AvZmU3ZWU4YzZj/YTg0NDk2Njk4Nzhh/NjgwYjk3YjIzYmYv/YWRqdW50b3MvMjM5/L2ltYWdlbmVzLzAz/OS8yNzAvMDAzOTI3/MDI3NS9wYXBhcy1m/cml0YXNqcGcuanBn/PzAwMDAtMDAtMDAt/MDAtMDAtMDA" alt="">
       <div>
         <h4>PAPAS FRITAS A LA CREMA</h4>
         <p>$100</p>
       </div>
       <div class="carta-boton">
         <button onclick="agregarAlCarrito('papas fitas', 100)"></button>
       </div>
      </div>



    <div class="lista-items" id="elemten2-p">
      <img src="https://imgs.search.brave.com/EKBfa--cJCHgc0f7gJLJfBnZk6Z095TSHSO-FzSw8kU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/OTcxNTc5OS9waG90/by9waXp6YS13aXRo/LWhhbS1hbmQtY2hl/ZXNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ncFJNVmZx/eTQ0YWc0VGtyb1Q4/V0VlclJvdGxmS2hl/WlF1NmtRa2RobnhR/PQ" alt="">
      <div>
        <h4>PIZZA PROBENZAL</h4>
        <p>$120</p>
      </div>
      <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>
    </div>


    <div class="lista-items" id="elemten3-p">
      <img src="https://imgs.search.brave.com/Id8xA3NMlvy_vsuElBnRyZXy7CW5wdVFe1W6oUhlKHw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzAzLzA4LzYz/LzM2MF9GXzEwMzA4/NjM3MV9DWkZmOVMy/VDk1a2dHc2xHOTc0/MUFYZmxWU0l1akFr/bC5qcGc" alt="">
      <div>
        <h4>PAPAS FRITAS A LA CREMA</h4>
        <p>$100</p>
      </div>
      <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>
    </div>


    <div class="lista-items" id="elemten4-p">
      <img src="https://imgs.search.brave.com/9JvgTPmvbM0bw7tm1BB8QFzYhPrcLDyMFBQ1Y_8cOIQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hbWJpdG8uY29t/L3AvZmU3ZWU4YzZj/YTg0NDk2Njk4Nzhh/NjgwYjk3YjIzYmYv/YWRqdW50b3MvMjM5/L2ltYWdlbmVzLzAz/OS8yNzAvMDAzOTI3/MDI3NS9wYXBhcy1m/cml0YXNqcGcuanBn/PzAwMDAtMDAtMDAt/MDAtMDAtMDA" alt="">
      <div>
        <h4>PAPAS FRITAS A LA CREMA</h4>
        <p>$100</p>
      </div>
      <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>
    </div>


    <div class="lista-items" id="elemten5-p"> <img src="https://imgs.search.brave.com/9JvgTPmvbM0bw7tm1BB8QFzYhPrcLDyMFBQ1Y_8cOIQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hbWJpdG8uY29t/L3AvZmU3ZWU4YzZj/YTg0NDk2Njk4Nzhh/NjgwYjk3YjIzYmYv/YWRqdW50b3MvMjM5/L2ltYWdlbmVzLzAz/OS8yNzAvMDAzOTI3/MDI3NS9wYXBhcy1m/cml0YXNqcGcuanBn/PzAwMDAtMDAtMDAt/MDAtMDAtMDA" alt="">
      <div>
        <h4>PAPAS FRITAS A LA CREMA</h4>
        <p>$100</p>
      </div>
      <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>
    </div>


    <div class="lista-items" id="elemten6-p">
      <img src="https://imgs.search.brave.com/9JvgTPmvbM0bw7tm1BB8QFzYhPrcLDyMFBQ1Y_8cOIQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hbWJpdG8uY29t/L3AvZmU3ZWU4YzZj/YTg0NDk2Njk4Nzhh/NjgwYjk3YjIzYmYv/YWRqdW50b3MvMjM5/L2ltYWdlbmVzLzAz/OS8yNzAvMDAzOTI3/MDI3NS9wYXBhcy1m/cml0YXNqcGcuanBn/PzAwMDAtMDAtMDAt/MDAtMDAtMDA" alt="">
      <div>
        <h4>PAPAS FRITAS A LA CREMA</h4>
        <p>$100</p>
      </div>
      <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>
    </div>   `;
      
    } else if (event.target.classList.contains('seccion2')) {
      listaDiv.style.borderRadius = '15px 0% 0% 15px';
      listaDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
      listaDiv.innerHTML = `
      <div class="lista-items" id="papa">
        <img src="https://imgs.search.brave.com/U9blskLtj1BFuy9f5YBmfo-R9iNmMKLWMRD9g5arCAw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b19hdXRvLHFfZ2xv/c3N5LHJldF9pbWcs/d183NTAsaF83NTAv/aHR0cHM6Ly93d3cu/ZGlzZnJ1dGFyb3Nh/cmlvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wNy9P/cmlrLUZvb2QtQmVl/ci0yLmpwZw" alt="">
        <div>
          <h4>HAMBURGESAS COMPLETAS</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>
    </div>



    <div class="lista-items" id="manzana">
      <img src="https://imgs.search.brave.com/U9blskLtj1BFuy9f5YBmfo-R9iNmMKLWMRD9g5arCAw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b19hdXRvLHFfZ2xv/c3N5LHJldF9pbWcs/d183NTAsaF83NTAv/aHR0cHM6Ly93d3cu/ZGlzZnJ1dGFyb3Nh/cmlvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wNy9P/cmlrLUZvb2QtQmVl/ci0yLmpwZw" alt="">
        <div>
          <h4>HAMBURGESAS COMPLETAS</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>
    </div>


    <div class="lista-items" id="latigo">
      <img src="https://imgs.search.brave.com/U9blskLtj1BFuy9f5YBmfo-R9iNmMKLWMRD9g5arCAw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b19hdXRvLHFfZ2xv/c3N5LHJldF9pbWcs/d183NTAsaF83NTAv/aHR0cHM6Ly93d3cu/ZGlzZnJ1dGFyb3Nh/cmlvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wNy9P/cmlrLUZvb2QtQmVl/ci0yLmpwZw" alt="">
        <div>
          <h4>HAMBURGESAS COMPLETAS</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>  
    </div>


    <div class="lista-items" id="campera">
      <img src="https://imgs.search.brave.com/U9blskLtj1BFuy9f5YBmfo-R9iNmMKLWMRD9g5arCAw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b19hdXRvLHFfZ2xv/c3N5LHJldF9pbWcs/d183NTAsaF83NTAv/aHR0cHM6Ly93d3cu/ZGlzZnJ1dGFyb3Nh/cmlvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wNy9P/cmlrLUZvb2QtQmVl/ci0yLmpwZw" alt="">
        <div>
          <h4>HAMBURGESAS COMPLETAS</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>   
    </div>




    <div class="lista-items" id="pc">
      <img src="https://imgs.search.brave.com/U9blskLtj1BFuy9f5YBmfo-R9iNmMKLWMRD9g5arCAw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b19hdXRvLHFfZ2xv/c3N5LHJldF9pbWcs/d183NTAsaF83NTAv/aHR0cHM6Ly93d3cu/ZGlzZnJ1dGFyb3Nh/cmlvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wNy9P/cmlrLUZvb2QtQmVl/ci0yLmpwZw" alt="">
        <div>
          <h4>HAMBURGESAS COMPLETAS</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div> 
    </div>



    <div class="lista-items" id="ajo">
      <img src="https://imgs.search.brave.com/U9blskLtj1BFuy9f5YBmfo-R9iNmMKLWMRD9g5arCAw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b19hdXRvLHFfZ2xv/c3N5LHJldF9pbWcs/d183NTAsaF83NTAv/aHR0cHM6Ly93d3cu/ZGlzZnJ1dGFyb3Nh/cmlvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wNy9P/cmlrLUZvb2QtQmVl/ci0yLmpwZw" alt="">
        <div>
          <h4>HAMBURGESAS COMPLETAS</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>
    </div>
     
      
        
      `;
      
    } else if (event.target.classList.contains('seccion3')) {
      listaDiv.style.borderRadius = '15px 0% 0% 15px';
      listaDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
      listaDiv.innerHTML = `
    <div class="lista-items" id="papa">
      <img src="https://imgs.search.brave.com/iTsj4pH07piWB4AnZaWuArX1kv3Yl-0nQff0xLfTMsY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/Y3JvbmlzdGEuY29t/L2ZpbGVzL2ltYWdl/LzQwOS80MDk3NDcv/NjFhMGY3N2JiNzhk/N185NTBfNTM0IS5q/cGc_cz0zZmY5NTlh/OTU1NjY5NmUxMGM4/Yzc4MzZiZmM2NDJi/OCZkPTE2Mzc5NDA1/Mjk" alt="">
        <div>
          <h4>EMPANADAS DE CARNE</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>  
    </div>



    <div class="lista-items" id="manzana">
      <img src="https://imgs.search.brave.com/iTsj4pH07piWB4AnZaWuArX1kv3Yl-0nQff0xLfTMsY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/Y3JvbmlzdGEuY29t/L2ZpbGVzL2ltYWdl/LzQwOS80MDk3NDcv/NjFhMGY3N2JiNzhk/N185NTBfNTM0IS5q/cGc_cz0zZmY5NTlh/OTU1NjY5NmUxMGM4/Yzc4MzZiZmM2NDJi/OCZkPTE2Mzc5NDA1/Mjk" alt="">
        <div>
          <h4>EMPANADAS DE CARNE</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>  
    </div>



    <div class="lista-items" id="latigo">
      <img src="https://imgs.search.brave.com/iTsj4pH07piWB4AnZaWuArX1kv3Yl-0nQff0xLfTMsY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/Y3JvbmlzdGEuY29t/L2ZpbGVzL2ltYWdl/LzQwOS80MDk3NDcv/NjFhMGY3N2JiNzhk/N185NTBfNTM0IS5q/cGc_cz0zZmY5NTlh/OTU1NjY5NmUxMGM4/Yzc4MzZiZmM2NDJi/OCZkPTE2Mzc5NDA1/Mjk" alt="">
        <div>
          <h4>EMPANADAS DE CARNE</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>
    </div>



    <div class="lista-items" id="campera">
      <img src="https://imgs.search.brave.com/iTsj4pH07piWB4AnZaWuArX1kv3Yl-0nQff0xLfTMsY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/Y3JvbmlzdGEuY29t/L2ZpbGVzL2ltYWdl/LzQwOS80MDk3NDcv/NjFhMGY3N2JiNzhk/N185NTBfNTM0IS5q/cGc_cz0zZmY5NTlh/OTU1NjY5NmUxMGM4/Yzc4MzZiZmM2NDJi/OCZkPTE2Mzc5NDA1/Mjk" alt="">
        <div>
          <h4>EMPANADAS DE CARNE</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>  
    </div>




    <div class="lista-items" id="pc">
      <img src="https://imgs.search.brave.com/iTsj4pH07piWB4AnZaWuArX1kv3Yl-0nQff0xLfTMsY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/Y3JvbmlzdGEuY29t/L2ZpbGVzL2ltYWdl/LzQwOS80MDk3NDcv/NjFhMGY3N2JiNzhk/N185NTBfNTM0IS5q/cGc_cz0zZmY5NTlh/OTU1NjY5NmUxMGM4/Yzc4MzZiZmM2NDJi/OCZkPTE2Mzc5NDA1/Mjk" alt="">
        <div>
          <h4>EMPANADAS DE CARNE</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>  
    </div>




    <div class="lista-items" id="ajo">
      <img src="https://imgs.search.brave.com/iTsj4pH07piWB4AnZaWuArX1kv3Yl-0nQff0xLfTMsY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/Y3JvbmlzdGEuY29t/L2ZpbGVzL2ltYWdl/LzQwOS80MDk3NDcv/NjFhMGY3N2JiNzhk/N185NTBfNTM0IS5q/cGc_cz0zZmY5NTlh/OTU1NjY5NmUxMGM4/Yzc4MzZiZmM2NDJi/OCZkPTE2Mzc5NDA1/Mjk" alt="">
        <div>
          <h4>EMPANADAS DE CARNE</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>  
    </div>


     
      
        
      `;
    } else if (event.target.classList.contains('seccion4')) {
      listaDiv.style.borderRadius = '15px 0% 0% 15px';
      listaDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
      listaDiv.innerHTML = `
      <div class="lista-items" id="papa">
      <img src="https://imgs.search.brave.com/rHZ6sp6D7WAgtK5OycBNdwKomK4ylry4KIbtYNdJM70/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWct/Z2xvYmFsLmNwY2Ru/LmNvbS9yZWNpcGVz/LzljNWFkNzIyYjJi/OWQ2ZmIvNjgweDQ4/MmNxNzAvcGFuLXBh/cmEtc2FuZHdpY2gt/ZGUtbWlsYW5lc2Fz/LWZvdG8tcHJpbmNp/cGFsLmpwZw" alt="">
        <div>
          <h4>FAMILIARES</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>  
    </div>



    <div class="lista-items" id="manzana">
      <img src="https://imgs.search.brave.com/rHZ6sp6D7WAgtK5OycBNdwKomK4ylry4KIbtYNdJM70/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWct/Z2xvYmFsLmNwY2Ru/LmNvbS9yZWNpcGVz/LzljNWFkNzIyYjJi/OWQ2ZmIvNjgweDQ4/MmNxNzAvcGFuLXBh/cmEtc2FuZHdpY2gt/ZGUtbWlsYW5lc2Fz/LWZvdG8tcHJpbmNp/cGFsLmpwZw" alt="">
        <div>
          <h4>FAMILIARES</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>  
    </div>



    <div class="lista-items" id="latigo">
      <img src="https://imgs.search.brave.com/rHZ6sp6D7WAgtK5OycBNdwKomK4ylry4KIbtYNdJM70/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWct/Z2xvYmFsLmNwY2Ru/LmNvbS9yZWNpcGVz/LzljNWFkNzIyYjJi/OWQ2ZmIvNjgweDQ4/MmNxNzAvcGFuLXBh/cmEtc2FuZHdpY2gt/ZGUtbWlsYW5lc2Fz/LWZvdG8tcHJpbmNp/cGFsLmpwZw" alt="">
        <div>
          <h4>FAMILIARES</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>  
    </div>



    <div class="lista-items" id="campera">
      <img src="https://imgs.search.brave.com/rHZ6sp6D7WAgtK5OycBNdwKomK4ylry4KIbtYNdJM70/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWct/Z2xvYmFsLmNwY2Ru/LmNvbS9yZWNpcGVz/LzljNWFkNzIyYjJi/OWQ2ZmIvNjgweDQ4/MmNxNzAvcGFuLXBh/cmEtc2FuZHdpY2gt/ZGUtbWlsYW5lc2Fz/LWZvdG8tcHJpbmNp/cGFsLmpwZw" alt="">
        <div>
          <h4>FAMILIARES</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>  
    </div>



    <div class="lista-items" id="pc">
      <img src="https://imgs.search.brave.com/rHZ6sp6D7WAgtK5OycBNdwKomK4ylry4KIbtYNdJM70/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWct/Z2xvYmFsLmNwY2Ru/LmNvbS9yZWNpcGVz/LzljNWFkNzIyYjJi/OWQ2ZmIvNjgweDQ4/MmNxNzAvcGFuLXBh/cmEtc2FuZHdpY2gt/ZGUtbWlsYW5lc2Fz/LWZvdG8tcHJpbmNp/cGFsLmpwZw" alt="">
        <div>
          <h4>FAMILIARES</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>    
    </div>



    <div class="lista-items" id="ajo">
      <img src="https://imgs.search.brave.com/rHZ6sp6D7WAgtK5OycBNdwKomK4ylry4KIbtYNdJM70/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWct/Z2xvYmFsLmNwY2Ru/LmNvbS9yZWNpcGVz/LzljNWFkNzIyYjJi/OWQ2ZmIvNjgweDQ4/MmNxNzAvcGFuLXBh/cmEtc2FuZHdpY2gt/ZGUtbWlsYW5lc2Fz/LWZvdG8tcHJpbmNp/cGFsLmpwZw" alt="">
        <div>
          <h4>FAMILIARES</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>  
    </div>
        
      `;
    } else if (event.target.classList.contains('seccion5')) {
      listaDiv.style.borderRadius = '15px 0% 0% 0px';
      listaDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
      listaDiv.innerHTML = `
      <div class="lista-items" id="papa">
      <img src="https://imgs.search.brave.com/P0Ej8cnze5LBSC1DyM8HHeeBCIY6rapCVdcjHKnXvrw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzUwLzMxLzA3/LzM2MF9GXzM1MDMx/MDc1MV8xc2U3N1R5/Sm1wb1VQWkRkMVFG/S1dYQWZQNEF1VlIx/Ti5qcGc" alt="">
        <div>
          <h4>PANCHO</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>  
    </div>



    <div class="lista-items" id="manzana">
      <img src="https://imgs.search.brave.com/P0Ej8cnze5LBSC1DyM8HHeeBCIY6rapCVdcjHKnXvrw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzUwLzMxLzA3/LzM2MF9GXzM1MDMx/MDc1MV8xc2U3N1R5/Sm1wb1VQWkRkMVFG/S1dYQWZQNEF1VlIx/Ti5qcGc" alt="">
        <div>
          <h4>PANCHO</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>  
    </div>



    <div class="lista-items" id="latigo">
      <img src="https://imgs.search.brave.com/P0Ej8cnze5LBSC1DyM8HHeeBCIY6rapCVdcjHKnXvrw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzUwLzMxLzA3/LzM2MF9GXzM1MDMx/MDc1MV8xc2U3N1R5/Sm1wb1VQWkRkMVFG/S1dYQWZQNEF1VlIx/Ti5qcGc" alt="">
        <div>
          <h4>PANCHO</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>   
    </div>




    <div class="lista-items" id="campera">
      <img src="https://imgs.search.brave.com/P0Ej8cnze5LBSC1DyM8HHeeBCIY6rapCVdcjHKnXvrw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzUwLzMxLzA3/LzM2MF9GXzM1MDMx/MDc1MV8xc2U3N1R5/Sm1wb1VQWkRkMVFG/S1dYQWZQNEF1VlIx/Ti5qcGc" alt="">
        <div>
          <h4>PANCHO</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>  
    </div>



    <div class="lista-items" id="pc">
      <img src="https://imgs.search.brave.com/P0Ej8cnze5LBSC1DyM8HHeeBCIY6rapCVdcjHKnXvrw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzUwLzMxLzA3/LzM2MF9GXzM1MDMx/MDc1MV8xc2U3N1R5/Sm1wb1VQWkRkMVFG/S1dYQWZQNEF1VlIx/Ti5qcGc" alt="">
        <div>
          <h4>PANCHO</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>     
    </div>


    <div class="lista-items" id="ajo">
      <img src="https://imgs.search.brave.com/P0Ej8cnze5LBSC1DyM8HHeeBCIY6rapCVdcjHKnXvrw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzUwLzMxLzA3/LzM2MF9GXzM1MDMx/MDc1MV8xc2U3N1R5/Sm1wb1VQWkRkMVFG/S1dYQWZQNEF1VlIx/Ti5qcGc" alt="">
        <div>
          <h4>PANCHO</h4>
          <p>$100</p>
        </div>
        <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>  
    </div>
     `;
    } 
  }

  // Añadir evento de clic a todas las secciones
  sections.forEach(section => {
    section.addEventListener('click', handleSectionClick);
  });

  // Activar seccion1 por defecto
  document.querySelector('.seccion1').classList.add('section-active');
  document.querySelectorAll('.seccion2, .seccion3, .seccion4, .seccion5').forEach(section => {
    section.classList.add('section-inactive');
  });

  // Limpiar el contenido actual
  listaDiv.innerHTML = '';

  // Crear el contenido según la sección activa (aquí no se tiene un evento, así que no se puede usar event.target)
  listaDiv.innerHTML = `

  
      <div class="lista-items" id="elemten1-p">
       <img src="https://imgs.search.brave.com/9JvgTPmvbM0bw7tm1BB8QFzYhPrcLDyMFBQ1Y_8cOIQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hbWJpdG8uY29t/L3AvZmU3ZWU4YzZj/YTg0NDk2Njk4Nzhh/NjgwYjk3YjIzYmYv/YWRqdW50b3MvMjM5/L2ltYWdlbmVzLzAz/OS8yNzAvMDAzOTI3/MDI3NS9wYXBhcy1m/cml0YXNqcGcuanBn/PzAwMDAtMDAtMDAt/MDAtMDAtMDA" alt="">
       <div>
         <h4>PAPAS FRITAS A LA CREMA</h4>
         <p>$100</p>
       </div>
       <div class="carta-boton">
         <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
       </div>
      </div>



    <div class="lista-items" id="elemten2-p">
      <img src="https://imgs.search.brave.com/EKBfa--cJCHgc0f7gJLJfBnZk6Z095TSHSO-FzSw8kU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/OTcxNTc5OS9waG90/by9waXp6YS13aXRo/LWhhbS1hbmQtY2hl/ZXNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ncFJNVmZx/eTQ0YWc0VGtyb1Q4/V0VlclJvdGxmS2hl/WlF1NmtRa2RobnhR/PQ" alt="">
      <div>
        <h4>PIZZA PROBENZAL</h4>
        <p>$120</p>
      </div>
      <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>
    </div>


    <div class="lista-items" id="elemten3-p">
      <img src="https://imgs.search.brave.com/Id8xA3NMlvy_vsuElBnRyZXy7CW5wdVFe1W6oUhlKHw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzAzLzA4LzYz/LzM2MF9GXzEwMzA4/NjM3MV9DWkZmOVMy/VDk1a2dHc2xHOTc0/MUFYZmxWU0l1akFr/bC5qcGc" alt="">
      <div>
        <h4>PAPAS FRITAS A LA CREMA</h4>
        <p>$100</p>
      </div>
      <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>
    </div>


    <div class="lista-items" id="elemten4-p">
      <img src="https://imgs.search.brave.com/9JvgTPmvbM0bw7tm1BB8QFzYhPrcLDyMFBQ1Y_8cOIQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hbWJpdG8uY29t/L3AvZmU3ZWU4YzZj/YTg0NDk2Njk4Nzhh/NjgwYjk3YjIzYmYv/YWRqdW50b3MvMjM5/L2ltYWdlbmVzLzAz/OS8yNzAvMDAzOTI3/MDI3NS9wYXBhcy1m/cml0YXNqcGcuanBn/PzAwMDAtMDAtMDAt/MDAtMDAtMDA" alt="">
      <div>
        <h4>PAPAS FRITAS A LA CREMA</h4>
        <p>$100</p>
      </div>
      <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>
    </div>


    <div class="lista-items" id="elemten5-p"> <img src="https://imgs.search.brave.com/9JvgTPmvbM0bw7tm1BB8QFzYhPrcLDyMFBQ1Y_8cOIQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hbWJpdG8uY29t/L3AvZmU3ZWU4YzZj/YTg0NDk2Njk4Nzhh/NjgwYjk3YjIzYmYv/YWRqdW50b3MvMjM5/L2ltYWdlbmVzLzAz/OS8yNzAvMDAzOTI3/MDI3NS9wYXBhcy1m/cml0YXNqcGcuanBn/PzAwMDAtMDAtMDAt/MDAtMDAtMDA" alt="">
      <div>
        <h4>PAPAS FRITAS A LA CREMA</h4>
        <p>$100</p>
      </div>
      <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>
    </div>


    <div class="lista-items" id="elemten6-p">
      <img src="https://imgs.search.brave.com/9JvgTPmvbM0bw7tm1BB8QFzYhPrcLDyMFBQ1Y_8cOIQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hbWJpdG8uY29t/L3AvZmU3ZWU4YzZj/YTg0NDk2Njk4Nzhh/NjgwYjk3YjIzYmYv/YWRqdW50b3MvMjM5/L2ltYWdlbmVzLzAz/OS8yNzAvMDAzOTI3/MDI3NS9wYXBhcy1m/cml0YXNqcGcuanBn/PzAwMDAtMDAtMDAt/MDAtMDAtMDA" alt="">
      <div>
        <h4>PAPAS FRITAS A LA CREMA</h4>
        <p>$100</p>
      </div>
      <div class="carta-boton">
        <button><img src="https://imgs.search.brave.com/J8C2CzGGa58glOuOf0EG5Kfx35xx1fTXkI1DBXPI7MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGx1cy9zbWFs/bC9wbHVzX1BORzEw/My5wbmc" alt=""></button>
      </div>
    </div>   `;
     
  

