# Toast Notification Project

This project is a simple and customizable toast notification system implemented using HTML, CSS, and JavaScript. It allows you to display different types of notifications (success, error, warning, info) with dynamic content, animation, and duration control.

---

## Features

- Supports multiple notification types (success, error, warning, info).
- Dynamic content and title.
- Adjustable animation and display duration.
- Lightweight and easy to integrate.
- Built-in CSS

---

## Installation & How to use
1. Add JavaScript files to your HTML Head Tag :

```html
<!-- Include the JavaScript file -->
<script src="https://praweensoni.github.io/notification-Style/toast.min.js" defer></script>
```

---

## Usage

### HTML
Add buttons or triggers for the notifications:

```html
<body class="buttons">
  <button onclick="successToast()" class="btn" id="success">Show Success</button>
  <button onclick="errorToast()" class="btn" id="error">Show Error</button>
</body>
```

### JavaScript

Define your toast notification logic:

```javascript
function successToast() {
  showToast({
    type: "success",
    message: "Data saved successfully!",
    duration: 3000, // Duration in milliseconds
    customTitle: "Great!",
  });
}

const errorToast = () => {
  showToast({
    type: "error",
    message: "Something went wrong!",
  });
};
    
```

### CSS (Optional)
Customize the styles to suit your needs. For example:

```css
.toast {
  color: #fff;
  font-family: Arial, sans-serif;
}
```

---

## Example

![Toast Notification Example](https://via.placeholder.com/500x300?text=Example+Toast+Notification)

---

## License
This project is open-source and available under the MIT License.
