export default function loadMenu() {
    const content = document.querySelector(".content");
    content.innerHTML = "";

    const main = document.createElement("main");
    main.classList.add("main");

    // heading
    const heading = document.createElement("h1");
    heading.textContent = "Menu";
    main.appendChild(heading);

    // first menu container
    const firstMenuContainer = document.createElement("div");
    main.appendChild(firstMenuContainer);

    const firstMenuHeading = document.createElement("h2");
    firstMenuHeading.textContent = "Honey Tea = $2";
    firstMenuContainer.appendChild(firstMenuHeading);

    const firstMenu = document.createElement("p");
    firstMenu.innerHTML =
        "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";
    firstMenuContainer.appendChild(firstMenu);

    // second menu container
    const secondMenuContainer = document.createElement("div");
    main.appendChild(secondMenuContainer);

    const secondMenuHeading = document.createElement("h2");
    secondMenuHeading.textContent = "Beary Tea = $3";
    secondMenuContainer.appendChild(secondMenuHeading);

    const secondMenu = document.createElement("p");
    secondMenu.innerHTML =
        "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.";
    secondMenuContainer.appendChild(secondMenu);

    // third menu container
    const thirdMenuContainer = document.createElement("div");
    main.appendChild(thirdMenuContainer);

    const thirdMenuHeading = document.createElement("h2");
    thirdMenuHeading.textContent = "Toast and Jam = $1";
    thirdMenuContainer.appendChild(thirdMenuHeading);

    const thirdMenu = document.createElement("p");
    thirdMenu.innerHTML =
        "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.";
    thirdMenuContainer.appendChild(thirdMenu);

    content.appendChild(main);
}
