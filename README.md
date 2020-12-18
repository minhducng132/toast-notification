# Toast Notification use HTML CSS JS

## Download
[![Download from https://github.com/minhducng132/toast-notification/releases](https://img.shields.io/static/v1?label=Download&message=v1.0&color=blue)](https://github.com/minhducng132/toast-notification/releases)

----------
## How to use

1. Add files ***toast.css*** and ***toast.js*** to your html file.
2. Create div tag with id #toast (`<div id="toast"></div>`).
3. Create a method for the toast in Javascript file.
    ```javascript
     function showSuccess() {
         toast({
             title: 'Notification!', // Title of the notification 
             message: 'Create account success.', // Content
             type: 'success', // Type of the notification. There are 4 types (success, info, warning, danger)
             duration: 4000 // Time notifying
         });
     }
    ```
4. Call the function to execute.
   

****
**

https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>
```language

```