function toast({
    title = '',
    message = '',
    type = 'danger',
    duration = 1000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        // Auto remove
        const removeToastId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove when clicked Close button
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(removeToastId);
            }
        }

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
            danger: 'fas fa-exclamation-triangle'
        }
        const icon = icons[type];

        const delay = (duration / 1000).toFixed(2);
        const index = 1;

        toast.classList.add('toast', `toast--${type}`, index + 1);
        toast.style.animation = `slideToLeft ease .5s, fadeOut ease 1s ${delay}s forwards`;
        toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="far fa-times"></i>
                    </div>
                `;
        main.appendChild(toast);
    }
};

// function show success
function showSuccess() {
    toast({
        title: 'Notification!',
        message: 'Create account success.',
        type: 'success',
        duration: 4000
    });
}

// function show info
function showInfo() {
    toast({
        title: 'Info!',
        message: 'Information.',
        type: 'info',
        duration: 4000
    });
}

// function show warning
function showWarning() {
    toast({
        title: 'Warning!',
        message: 'Account creation failed.',
        type: 'warning',
        duration: 4000
    });
}

// function show danger
function showDanger() {
    toast({
        title: 'Danger!',
        message: 'Your operation is not allowed.',
        type: 'danger',
        duration: 4000
    });
}