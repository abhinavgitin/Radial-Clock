# Radial Clock

An elegant analog clock built with HTML, CSS, and vanilla JavaScript. The UI combines a neon-inspired palette with precision hand animation and a live 12-hour footer readout.

## Features
- Circular analog face with numbered markers from 1 to 12
- Hour, minute, and second hands rendered with smooth, real-time motion
- Responsive layout that keeps the clock centered across screen sizes
- Footer display that mirrors the current time in `hh hrs mm min ss sec` format
- Cascadia Code typography and layered gradients for a polished aesthetic

## Getting Started
1. Clone or download this repository.
2. Open `index.html` in any modern browser. No build step or server is required.

## Project Structure
```
index.html   # Markup for the header, clock face, and footer
style.css    # Visual styling, layout rules, and clock hand aesthetics
script.js    # Clock logic and DOM updates for hands and textual time
```

## Customization
- **Color theme:** Adjust gradients, borders, and highlights in `style.css` to suit different palettes.
- **Number positioning:** Modify `padding-top` and `--number-offset` within the `.number` selector (around line 56) to bring numerals closer or farther from the clock edge.
- **Typography:** Update the `font-family` in the `body` rule to switch fonts globally.
- **Tick speed:** The update cadence is controlled by the `setInterval` call at the bottom of `script.js` (currently 1000 ms).

## Roadmap
- Clock, weather, timer, location, alarm, and more experiences to be crafted next.

## Browser Support
Tested on the latest versions of Chrome, Edge, and Firefox. The project uses modern layout features such as `flex` and `aspect-ratio`, so ensure polyfills if broader support is needed.

