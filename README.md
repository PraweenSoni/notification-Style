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
## 3 Simple Steps to ready your toasted Notification.
## Installation & How to use
1. Add Script tag to your HTML Head Tag :

```html
<!-- Include the JavaScript file -->
<script src="https://praweensoni.github.io/notification-Style/toast.min.js" defer></script>
```
---

## Usage

### HTML
2. Add buttons or triggers for the notifications:

```html
<body class="buttons">
  <button onclick="successToast()" class="btn" id="success">Show Success</button>
  <button onclick="errorToast()" class="btn" id="error">Show Error</button>
</body>
```

### JavaScript

3. Define your toast notification logic:

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
4. Customize the styles to suit your needs. For example:

```css
.toast {
  color: #fff;
  font-family: Arial, sans-serif;
}
```

---

## Images
### Example code :
![demoCode](https://github.com/user-attachments/assets/53db78e0-d9e2-41f9-9f8f-34d4e4da8a95)
### Demo Picture how your toasted notification will look like.
![Toast Notification Example](https://github.com/user-attachments/assets/3f2ee8fe-f483-45b3-a8d3-839b4e70e9e4)


---

## License
This project is open-source and available under the MIT License.
