document.addEventListener('DOMContentLoaded', () => {
  
  const projects = [
      { title: 'Titre du Projet 1', category: 'BioPack', image: 'https://picsum.photos/300/200?random=1' },
      { title: 'Titre du Projet 2', category: 'SolarProd', image: 'https://picsum.photos/300/200?random=2' },
      { title: 'Titre du Projet 3', category: 'ReciClean', image: 'https://picsum.photos/300/200?random=3' },
      { title: 'Titre du Projet 4', category: '3D-ZeroWaste', image: 'https://picsum.photos/300/200?random=4' },
      { title: 'Titre du Projet 5', category: 'BioPack', image: 'https://picsum.photos/300/200?random=5' },
      { title: 'Titre du Projet 6', category: 'SolarProd', image: 'https://picsum.photos/300/200?random=6' },
  ];

  const portfolioGrid = document.querySelector('.grid');
  const form = document.querySelector('.form');

  
  const createProjectCard = (project) => {
      const card = document.createElement('div');
      card.className = 'grid__item';
      card.innerHTML = `
          <div class="card">
              <img src="${project.image}" alt="${project.title}" class="card__img">
              <div class="inner">
                  <h3 class="card__title">${project.title}</h3>
                  <p class="category">${project.category}</p>
              </div>
              <div class="card__overlay">
                  <a href="#" class="info">+</a>
              </div>
          </div>
      `;
      return card;
  };

  
  projects.forEach(project => {
      const projectCard = createProjectCard(project);
      portfolioGrid.appendChild(projectCard);
  });

  
  const handleProjectClick = (event) => {
      if (event.target.classList.contains('info')) {
          event.preventDefault();
          const cardTitle = event.target.closest('.card').querySelector('.card__title').innerText;
          alert(`Vous avez sélectionné: ${cardTitle}`);
      }
  };

  
  portfolioGrid.addEventListener('click', handleProjectClick);

  
  form.addEventListener('submit', (event) => {
      event.preventDefault(); 
      const firstname = document.getElementById('firstname').value;
      const lastname = document.getElementById('lastname').value;

      if (firstname && lastname) {
          alert(`Merci, ${firstname} ${lastname}, votre message a été envoyé !`);
          form.reset(); 
      } else {
          alert('Veuillez remplir tous les champs.');
      }
  });
});

