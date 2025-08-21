
    // Live-Suche & Filter (nur Demo – keine externen Bibliotheken erforderlich)
    const search = document.getElementById('search');
    const filter = document.getElementById('filter');
    const team = document.getElementById('team');

    const apply = () => {
      const q = (search.value || '').toLowerCase().trim();
      const role = filter.value;
      for (const card of team.querySelectorAll('.card')){
        const name = card.querySelector('.name').textContent.toLowerCase();
        const roleText = card.querySelector('.role').textContent.toLowerCase();
        const matchText = name.includes(q) || roleText.includes(q);
        const matchRole = !role || card.dataset.role === role;
        card.style.display = (matchText && matchRole) ? '' : 'none';
      }
    };
    search.addEventListener('input', apply);
    filter.addEventListener('change', apply);
    document.getElementById('year').textContent = new Date().getFullYear();
