export default function SomenteNumeros(e) {
    let event = e || window.e;
    let key = event.keyCode || event.which;
    key = String.fromCharCode(key);

    let regex = /^[0-9,]+$/;
    if (!regex.test(key)) {
        event.returnValue = false;
        if (event.preventDefault) event.preventDefault();
    }
}