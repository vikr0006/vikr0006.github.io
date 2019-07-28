
const cars = [
  { name: "acura", description: "Acura is the American luxury vehicle marque of Japanese automaker Honda. The brand was launched in the United States and Canada on 27 March 1986, marketing luxury, performance, and high-performance ", altText: "acuraCar", modalId: "acuraModal" },
  { name: "audi", description: "Audi AG is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany. Audi-branded vehicles are produced in nine production facilities ", altText: "audiCar", modalId: "audiModal" },
  { name: "bmw", description: "BMW is a German multinational company which produces automobiles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.", altText: "bmwCar", modalId: "bmwModal" },
  { name: "ferrari", description: "Ferrari is an Italian luxury sports car manufacturer based in Maranello. Founded by Enzo Ferrari in 1939 out of Alfa Romeo's race division as Auto Avio Costruzioni, the company built its first car in 1940.", altText: "ferrariCar", modalId: "ferrariModal" },
  { name: "ford", description: "Ford Motor Company is an American multinational automaker that has its main headquarters in Dearborn, Michigan, a suburb of Detroit. It was founded by Henry Ford and incorporated on June 16, 1903. The company sells automobiles and commercial vehicles under the Ford brand and most luxury cars under the Lincoln brand", altText: "fordCar", modalId: "fordModal" },
  { name: "infinity", description: "Infiniti is the luxury vehicle division of Japanese automaker Nissan. Infiniti officially started selling vehicles on November 8, 1989, in North America. The marketing network for Infiniti-branded vehicles includes dealers in over 50 countries.", altText: "infinityCar", modalId: "infinityModal" },
  { name: "mercedes-benz", description: "Mercedes-Benz is a German global automobile marque and a division of Daimler AG. The brand is known for luxury vehicles, buses, coaches, and trucks. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz", altText: "mercedes-benzCar", modalId: "mercedes-benzModal" },
  { name: "nissan", description: "Nissan Motor Co., Ltd., usually shortened to Nissan, is a Japanese multinational automobile manufacturer headquartered in Nishi-ku, Yokohama. The company sells its cars under the Nissan, Infiniti, and Datsun brands with in-house performance tuning products labelled ", altText: "nissanCar", modalId: "nissanModal" },
  { name: "porsche", description: "Dr.-Ing. h.c. F. Porsche AG, usually shortened to Porsche AG, is a German automobile manufacturer specializing in high-performance sports cars, SUVs and sedans. Porsche AG is headquartered in Stuttgart, and is owned by Volkswagen AG, which is itself majority-owned by Porsche Automobil Holding SE", altText: "porscheCar", modalId: "porscheModal" },
  { name: "subaru", description: "Subaru is the automobile manufacturing division of Japanese transportation conglomerate Subaru Corporation, the twenty-second largest automaker by production worldwide in 2012. Subaru cars are known for their use of a boxer engine layout in most vehicles above 1500 cc.", altText: "subaruCar", modalId: "subaruModal" },
  { name: "tesla", description: "Tesla, Inc. is an American automotive and energy company based in Palo Alto, California. The company specializes in electric car manufacturing and, through its SolarCity subsidiary, solar panel manufacturing.", altText: "teslaCar", modalId: "teslaModal" },
  { name: "toyota", description: "Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota, Aichi, Japan. In 2017, Toyota's corporate structure consisted of 364,445 employees worldwide and, as of September 2018, was the sixth-largest company in the world by revenue.", altText: "toyotaCar", modalId: "toyotaModal" },
  { name: "volkswagen", description: "Volkswagen, shortened to VW, is a German automaker founded on 28 May 1937 by the German Labour Front, a Nazi labour union, and headquartered in Wolfsburg. It is the flagship marque of the Volkswagen Group, the largest automaker by worldwide sales in 2016 and 2017", altText: "volkswagenCar", modalId: "volkswagenModal" },
  { name: "volvo", description: "Volvo Cars, stylized as VOLVO, is a Swedish luxury vehicles company. It is headquartered on Torslanda in Gothenburg, and is a subsidiary of the Chinese automotive company Geely. The company manufactures and markets sport utility vehicles, station wagons, sedans and compact executive sedans.", altText: "volvoCar", modalId: "volvoModal" },

];

window.onload = function () {

  // Create HTML
  const div = document.getElementById("images");
  var img = [];
  var counter = 0;
  for (const car of cars) {
    var src = "";
    src = src.concat("images/", car.name, ".jpg");
    counter++;
    if (cars.indexOf(car) % 2 == 0) {
      img.push(` <div class="parallax parallaxRight" id="${car.name + "Div"}"><div class="pull-left text-style ${car.name}">
                  <h2>${car.name}</h2>
                  <p>${car.description}</p>
                </div>
                <img id="${car.name}" src="${src}" alt="${car.altText}" class="displayImage car pull-right ${car.name}" tabindex="${counter}" />
                </div> <br/>
                <div id="${car.modalId}" class="modal">
                  <span id="${car.name + "Close"}" class="close">&times;</span>
                  <img id="${car.name + "1"}" src="${src}" alt="${car.altText}" class="car pull-right ${car.name} modal-content" />
                </div>`);
    }
    else {
      img.push(`<div class="parallax parallaxLeft"><div class="pull-right text-style ${car.name}">
                  <h2>${car.name}</h2>
                  <p>${car.description}</p>
                </div>
                <img id="${car.name}" src="${src}" alt="${car.altText}" class="displayImage car pull-left ${car.name}" tabindex="${counter}" />
                </div> <br/>
                <div id="${car.modalId}" class="modal">
                  <span id="${car.name + "Close"}" class="close">&times;</span>
                  <img id="${car.name + "1"}" src="${src}" alt="${car.altText}" class="car pull-left modal-content ${car.name}" />
                </div>`);
    }
  }
  div.innerHTML = img.join(" ");
  // Add animation
  var text = document.querySelectorAll('p');
  var animationDelay = 6;

  for (let j = 0; j < text.length; j++) {
    var newDom = '';
    for (let i = 0; i < text[j].innerText.length; i++) {
      newDom += '<span class="char">' + (text[j].innerText[i] == ' ' ? '&nbsp;' : text[j].innerText[i]) + '</span>';
    }
    text[j].innerHTML = newDom;

    for (let i = 0; i < text[j].children.length; i++) {
      text[j].children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
  }

  // Open Modal
  const images = document.querySelectorAll('.displayImage');

  for (const image of images) {
    image.addEventListener('click', function (e) {
      var modal = document.getElementById(image.id + "Modal");
      var modalImage = document.getElementById(image.id + "1");

      modal.style.display = "block";
      modalImage.src = this.src;

      var closeButton = document.getElementById(image.id + "Close");
      closeButton.addEventListener('click', function () {
        modal.style.display = "none";
      });
    });

    // Keyboard event
    image.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        image.click();
      }
      if (event.keyCode === 27) {
        document.getElementById(image.id + "Modal").style.display = "none";
      }
    });
  }
};






