export default function loadHome() {
    const content = document.querySelector(".content");
    content.innerHTML = "";

    const main = document.createElement("main");
    main.classList.add("main");

    // heading
    const heading = document.createElement("h1");
    heading.textContent = "Beary's Breakfast Bar";
    main.appendChild(heading);

    // intro
    const intro = document.createElement("div");
    main.appendChild(intro);

    const introPara = document.createElement("p");
    introPara.textContent =
        "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    intro.appendChild(introPara);

    const quote = document.createElement("blockquote");
    quote.textContent = "Goldilocks";
    intro.appendChild(quote);

    // hours
    const hours = document.createElement("div");
    hours.classList.add("hours");
    hours.innerHTML = `
        <h2>Hours</h2>
        <p>Sunday: 8am - 8pm</p>
        <p>Monday: 6am - 6pm</p>
        <p>Tuesday: 6am - 6pm</p>
        <p>Wednesday: 6am - 6pm</p>
        <p>Thursday: 6am - 10pm</p>
        <p>Friday: 6am - 10pm</p>
        <p>Saturday: 8am - 10pm</p>
    `;
    main.appendChild(hours);

    // location
    const location = document.createElement("div");
    location.innerHTML = `
        <h2>Location</h2>
        <address>123 Forest Drive, Forestville, Maine</address>
    `;
    main.appendChild(location);

    content.appendChild(main);
}
