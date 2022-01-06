(function(cb) {
    window.addEventListener('load', cb);
}(function() {
    const zero = document.getElementById('zero');
    const one = document.getElementById('one');
    const backspace = document.getElementById('backspace');
    const clear = document.getElementById('clear');

    const binary = document.getElementById('binary');
    const hex = document.getElementById('hex');
    const ascii = document.getElementById('ascii');

    let value = [];

    zero.addEventListener('click', function() {
        value.push(0);
        render();
    });

    one.addEventListener('click', function() {
        value.push(1);
        render();
    });

    backspace.addEventListener('click', function() {
        value.pop();
        render();
    });

    clear.addEventListener('click', function() {
        value = [];
        render();
    });

    window.addEventListener('keyup', function(event) {
        switch (event.key) {
            case '0':
            case '1':
                value.push(+event.key);
                render();
                break;

            case 'Backspace':
                value.pop();
                render();
                break;

            case 'Delete':
                value = [];
                render();
                break;
       }
    });

    function render() {
        binary.value = '';
        hex.value = '';
        ascii.value = '';

        let byte = 0;

        for (let i = 0; i < value.length; i++) {
            let bit = value[i];

            binary.value += String(bit);

            if ((i + 1) % 8 == 0) {
                binary.value += ' ';
            }

            byte |= bit << (7 - i % 8);

            if ((i + 1) % 8 == 0) {
                hex.value += byte.toString(16).padStart(2, '0') + ' ';
                ascii.value += String.fromCharCode(byte);
                byte = 0;
            }
        }
    }

    setTimeout(render);
}));