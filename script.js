        function updateCurrentTime() {
            const currentTimeElement = document.getElementById('currentTime');
            const currentTime = new Date();
            const hours = currentTime.getHours().toString().padStart(2, '0');
            const minutes = currentTime.getMinutes().toString().padStart(2, '0');
            const seconds = currentTime.getSeconds().toString().padStart(2, '0');
            currentTimeElement.textContent = `Time: ${hours}:${minutes}:${seconds}`;
        }
        function addReminder() {
            const medicineName = document.getElementById('medicineName').value;
            const reminderTime = document.getElementById('reminderTime').value;
            const reminderItem = document.createElement('li');
            reminderItem.classList.add('reminder-item');
            reminderItem.innerHTML = `
                <div>${medicineName} - ${reminderTime}</div>
                <button class="delete-btn" onclick="deleteReminder(this)">Delete</button>
            `;
            const remindersList = document.getElementById('reminders');
            remindersList.appendChild(reminderItem);
            setupAlarm(reminderTime);
            document.getElementById('medicineName').value = '';
            document.getElementById('reminderTime').value = '';
        }
        function deleteReminder(buttonElement) {
            const reminderItem = buttonElement.parentElement;
            const remindersList = document.getElementById('reminders');
            remindersList.removeChild(reminderItem);
        }
        function setupAlarm(reminderTime) {
            const currentTime = new Date();
            const [hours, minutes] = reminderTime.split(':');
            const reminderDate = new Date();
            reminderDate.setHours(hours, minutes, 0, 0);
            const timeDifference = reminderDate.getTime() - currentTime.getTime();
            if (timeDifference > 0) {
                setTimeout(() => {
                    alert('Time to take your medicine!');
                }, timeDifference);
            }
        }
        setInterval(updateCurrentTime, 1000);
        updateCurrentTime();