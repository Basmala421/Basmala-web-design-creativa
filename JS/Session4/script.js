const items = document.querySelectorAll("#myList .list-group-item");

  items.forEach(item => {
    item.addEventListener("mouseover", () => {
      item.classList.add("bg-info", "text-white"); 
    });

    item.addEventListener("mouseout", () => {
      item.classList.remove("bg-info", "text-white");  
      
    });
  });
