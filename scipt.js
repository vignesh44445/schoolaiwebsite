
        // Interactive Calendar Simulation
        document.querySelectorAll('.calendar-day:not(.empty)').forEach(day => {
            day.addEventListener('click', (e) => {
                document.querySelectorAll('.calendar-day.active').forEach(oldDay => {
                    oldDay.classList.remove('active');
                });
                e.target.classList.add('active');
            });
        });

        // FAQ Details Animation
        document.querySelectorAll('details').forEach(detail => {
            const content = detail.querySelector('.faq-content');
            detail.addEventListener('click', (e) => {
                if (e.target.tagName === 'SUMMARY' || e.target.closest('summary')) {
                    e.preventDefault();
                    if (!detail.open) {
                        detail.open = true;
                        content.style.maxHeight = '0px';
                        content.style.opacity = '0';
                        content.style.overflow = 'hidden';
                        content.style.transition = 'max-height 0.4s ease, opacity 0.4s ease';

                        requestAnimationFrame(() => {
                            content.style.maxHeight = content.scrollHeight + 'px';
                            content.style.opacity = '1';
                        });

                        setTimeout(() => {
                            content.style.maxHeight = 'none';
                            content.style.overflow = 'visible';
                        }, 400);
                    } else {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        content.style.overflow = 'hidden';

                        requestAnimationFrame(() => {
                            content.style.maxHeight = '0px';
                            content.style.opacity = '0';
                        });

                        setTimeout(() => {
                            detail.open = false;
                        }, 400);
                    }
                }
            });
        });
   