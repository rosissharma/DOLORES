export function clipboard(val) {
    navigator.clipboard.writeText(val).then(
        () => {
            alert("copied 🎉");
        },
        () => {
            alert("failed");
        }
    );
}