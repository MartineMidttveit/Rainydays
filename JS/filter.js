function handleOpenFilter () {
    const openFilterButton = document.querySelector('.filter-mobile-button .wrapper')
    const closeFilterButton = document.querySelector('.filter .close-filter')
    const filterContainer = document.querySelector('.filter')
  
    openFilterButton.addEventListener('click', () => {
      filterContainer.classList.toggle('filter-mobile-hidden')
    })
  
    closeFilterButton.addEventListener('click', () => {
      filterContainer.classList.toggle('filter-mobile-hidden')
    })
  }
  
  handleOpenFilter()