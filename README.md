# Buy Now → Delivery Truck Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-526df5?style=for-the-badge&logo=github&logoColor=white)](https://mrchandrayee.github.io/buy-now-truck/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

An interactive e-commerce microinteraction prototype: a **Buy Now** button transforms into a cart, a delivery truck travels across the scene, and a completion state appears. Built with semantic HTML, CSS animation and vanilla JavaScript.

> **Prototype notice:** this repository demonstrates a front-end animation only. It does not create an order, process payment, access a cart backend or trigger real delivery.

## Live demo

https://mrchandrayee.github.io/buy-now-truck/

## Experience

1. **Pack** — the button compresses and swaps its label for a cart icon.
2. **Dispatch** — an illustrated truck drives through the checkout scene.
3. **Complete** — a confirmation-style visual state appears, with a replay control.

## Features

- Responsive desktop and mobile layout
- Keyboard-operable native buttons and visible focus states
- Live status feedback and disabled state while the animation runs
- Replay interaction without refreshing the page
- Respects the operating system's reduced-motion preference
- SEO metadata, Open Graph metadata and WebApplication structured data
- No framework, build step or runtime dependency

## Run locally

Open `index.html` in a browser, or start a local static server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Project structure

```
buy-now-truck/
├── index.html   # Demo structure, metadata and SVG truck
├── style.css    # Layout, responsive styles and animation states
├── script.js    # Interaction state machine and replay behaviour
├── README.md
└── LICENSE
```

## Customisation

- Change button, truck and scene colours in the CSS rules.
- Adjust packing and driving timing in `script.js`.
- Replace the inline SVG truck artwork to match a product or brand identity.
- Connect a real checkout only through a trusted server-side API, and show a real order confirmation only after the backend confirms success.

## Author

**IAPFSAI Technologies Private Limited**  
Website: https://iapfsai.com/  
Contact: https://iapfsai.com/contact  
GitHub: https://github.com/mrchandrayee

## License

MIT — see [LICENSE](./LICENSE).
