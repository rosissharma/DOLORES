export function clipboard(val) {
    navigator.clipboard.writeText(val).then(
        () => {
            const copiedDiv = document.createElement('div');
            copiedDiv.innerHTML = `${val} Copied 🎉`;
            copiedDiv.style.backgroundColor = '#222222';
            copiedDiv.style.color = '#FFFFFF';
            copiedDiv.style.borderRadius = '20px';
            copiedDiv.style.padding = '10px';
            copiedDiv.style.position = 'fixed';
            copiedDiv.style.bottom = '50px';
            copiedDiv.style.left = '50%';
            copiedDiv.style.transform = 'translateX(-50%)';
            copiedDiv.style.opacity = 0;
            copiedDiv.style.transition = 'opacity 0.5s ease-in-out';
            document.body.appendChild(copiedDiv);
            setTimeout(() => {
                copiedDiv.style.opacity = 1;
            }, 10);

            setTimeout(() => {
                copiedDiv.style.opacity = 0;
                setTimeout(() => {
                    copiedDiv.style.display = 'none';
                }, 500);
            }, 1300);
        },
        () => {
            const failedDiv = document.createElement('div');
            failedDiv.innerHTML = "Failed 😖";
            failedDiv.style.backgroundColor = '#222222';
            failedDiv.style.color = '#FFFFFF';
            failedDiv.style.borderRadius = '20px';
            failedDiv.style.padding = '10px';
            failedDiv.style.position = 'fixed';
            failedDiv.style.bottom = '20px';
            failedDiv.style.left = '50%';
            failedDiv.style.transform = 'translateX(-50%)';
            failedDiv.style.opacity = 0;
            failedDiv.style.transition = 'opacity 0.5s ease-in-out';
            document.body.appendChild(failedDiv);

            setTimeout(() => {
                failedDiv.style.opacity = 1;
            }, 10);

            setTimeout(() => {
                failedDiv.style.opacity = 0;
                setTimeout(() => {
                    failedDiv.style.display = 'none';
                }, 500);
            }, 1300);
        }
    );
}