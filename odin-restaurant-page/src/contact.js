export default function loadContact() {
    const content = document.querySelector(".content");
    content.innerHTML = "";

    const main = document.createElement("main");
    main.classList.add("main");

    // heading container
    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";
    main.appendChild(heading);

    // first address container
    const firstAddressContainer = document.createElement("div");
    main.appendChild(firstAddressContainer);

    const firstAddressHeading = document.createElement("h2");
    firstAddressHeading.textContent = "Mama Bear";
    firstAddressContainer.appendChild(firstAddressHeading);

    const firstAddress = document.createElement("address");
    firstAddress.innerHTML = `Chef<br>555-555-5554<br>totallyRealEmail@notFake.com`;
    firstAddressContainer.appendChild(firstAddress);

    // second address container
    const secondAddressContainer = document.createElement("div");
    main.appendChild(secondAddressContainer);

    const secondAddressHeading = document.createElement("h2");
    secondAddressHeading.textContent = "Papa Bear";
    secondAddressContainer.appendChild(secondAddressHeading);

    const secondAddress = document.createElement("address");
    secondAddress.innerHTML = `Manager<br>555-555-5554<br>totallyRealEmail@notFake.com`;
    secondAddressContainer.appendChild(secondAddress);

    // third address container
    const thirdAddressContainer = document.createElement("div");
    main.appendChild(thirdAddressContainer);

    const thirdAddressHeading = document.createElement("h2");
    thirdAddressHeading.textContent = "Child Bear";
    thirdAddressContainer.appendChild(thirdAddressHeading);

    const thirdAddress = document.createElement("address");
    thirdAddress.innerHTML = `Waiter<br>555-555-5554<br>totallyRealEmail@notFake.com`;
    thirdAddressContainer.appendChild(thirdAddress);

    content.appendChild(main);
}
