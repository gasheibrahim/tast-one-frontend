document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString();
        const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

        document.querySelector('[data-testid="currentTimeUTC"]').textContent = `Current Time (UTC): ${utcTime}`;
        document.querySelector('[data-testid="currentDay"]').textContent = `Current Day: ${dayOfWeek}`;
    }

    updateTime();
    setInterval(updateTime, 60000);
});