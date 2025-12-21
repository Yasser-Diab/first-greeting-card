### Wedding Greeting Card

- Frontend learning project

- Built step-by-step with custom UI and logic

- A fully interactive wedding greeting card built with HTML, CSS, and JavaScript

Allows sending, sharing, copying link, and downloading the card as Image or PDF

Fully client-side with no backend

Optimized for desktop and mobile

Fixed-size export independent of viewport size

## Live Demo

https://yasser-diab.github.io/first-greeting-card/

## Features

- Elegant wedding greeting card design

- Fully responsive layout for desktop and mobile

- Floating modal dialogs for actions

- Dark blurred background when modal is open

- Send card via WhatsApp, Telegram, Messenger

- Share card via Facebook, Twitter (X), LinkedIn

- Copy card link to clipboard

- Download card as high-resolution image

- ownload card as PDF (A4 format)

- Fixed-size image export (1080px width)

- Clean UI messages for user actions

- Hover effects disabled during modal and capture modes

- User feedback messages after each action

## Technologies Used

- HTML5

- CSS3

- JavaScript

## Libraries Used

- html2canvas 1.4.1

- jsPDF 2.5.1 (UMD)

## How It Works

- The main card is displayed as a responsive container

- Action buttons open a floating modal dialog

- Each modal displays context-specific actions

- Background is blurred and disabled while modal is active

- Image export temporarily switches the card into capture mode

- Buttons are hidden during capture to produce a clean image

- The card is rendered off-screen at a fixed resolution for export

# Image Export Details

- Uses html2canvas to capture the card

- Export width is fixed to 1080px regardless of screen size

- Buttons are removed during capture

- Shadows and transforms are disabled for clean output

- Result is downloaded as a PNG image

## PDF Export Details

- Card enters capture-mode

- html2canvas captures the card at high scale

- Canvas image is converted to PNG

- jsPDF creates an A4 PDF

- Image is scaled to fit PDF width

- PDF file is downloaded automatically

- Card returns to normal UI state


## Project Structure

/

├── index.html

├── greeting-card-styles.css

├── greeting-card-script.js

├── background-img.png

├── icons/

│ ├── whatsapp-icon.gif

│ ├── telegram-icon.gif

│ ├── messenger-icon.gif

│ ├── facebook-icon.png

│ ├── twitter-icon.png

│ ├── linkedin-icon.gif

│ ├── image-icon.gif

│ ├── pdf-icon.gif

│ └── link-icon.gif

└── README.md


## Future Improvements

- Add language switching

- Allow user-customized messages

- Add animation presets

- Improve accessibility support

## License

- Free to use

- Free to modify

- Educational and personal projects friendly

## Author

- Yasser Diab