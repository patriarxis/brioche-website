window.addEventListener('load', ()=> {

  let menu = document.getElementById("menu-container");

  let categoriesLength;
  let listLength;

  let categories;
  let list;

  fetch("menu.json")
    .then(response => {
      return response.json();
    })
    .then(menu => {
      console.log(menu);

      categoriesLength = menu.categories.length;
      listLength = new Array(categoriesLength);

      var i, j;

      for(i=0; i<categoriesLength; i++) {
        listLength[i] = menu.categories[i].list.length;
      }

      categories = new Array(categoriesLength);
      list = new Array(categoriesLength);
      
      var i, j;
      for(i=0; i<categoriesLength; i++) {
        list[i] = new Array(20);
      }

      for(i=0; i<categoriesLength; i++) {
        for(j=0; j<listLength[i]; j++) {
          list[i][j] = new Object();
          list[i][j].item = "1";
          list[i][j].price = "1";
          list[i][j].description = "1";
        }
      }

      var i, j;
      for(i=0; i<categoriesLength; i++) {
        categories[i] = menu.categories[i].name;
      }

      for(i=0; i<categoriesLength; i++) {
        for(j=0; j<listLength[i]; j++) {
          list[i][j].item = menu.categories[i].list[j].item;
          list[i][j].price = menu.categories[i].list[j].price;
          list[i][j].description = menu.categories[i].list[j].description;
        }
      }

      update();

    });

    function update() {

      var i, j;
      for(i=0; i<categoriesLength; i++) {
        var div = document.createElement("DIV");
        menu.appendChild(div);
      }

      let DIV = document.querySelectorAll("#menu-container div");
      var i = 0;

      DIV.forEach(function(element) {
        var h2 = document.createElement("H2");
        var ul = document.createElement("UL");

        h2.innerHTML = categories[i++];

        element.appendChild(h2);
        element.appendChild(ul);
      });

      let UL = document.querySelectorAll("#menu-container div ul");

      for(i=0; i<categoriesLength; i++) {
        for(j=0; j<listLength[i]; j++) {
          var li = document.createElement("LI");
          UL[i].appendChild(li);
        }
      }

      let LI = document.querySelectorAll("#menu-container div ul li");
      
      LI.forEach(function(element) {
        var item = document.createElement("SPAN");
        var price = document.createElement("SPAN");
        var description = document.createElement("SPAN");

        item.classList.add("item");
        price.classList.add("price");
        description.classList.add("description");

        element.appendChild(item);
        element.appendChild(price);
        element.appendChild(description);
      });

      let ITEM = document.querySelectorAll(".item");
      let PRICE = document.querySelectorAll(".price");
      let DESCRIPTION = document.querySelectorAll(".description");

      var k = 0;

      for(i=0; i<categoriesLength; i++) {
        for(j=0; j<listLength[i]; j++) {
          ITEM[k].innerHTML = list[i][j].item;
          PRICE[k].innerHTML = list[i][j].price;
          DESCRIPTION[k].innerHTML = list[i][j].description;
          k++;
        }
      }
    }

});