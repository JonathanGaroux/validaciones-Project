export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "el correro no es valido",
    },
    password: {
        valueMissing: "El campo correo no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, maximo 12, debe contener una letra minuscula, una letra mayuscula, un numero y no puede superar",
    },
    nacimiento: {
        valueMissing: "El campo correo no puede estar vacio",
        customError: "Debe tener al menos 18 años",
    },
    numero: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: " el formato requerido es xxxxxxxx 10 numeros",
    },

direccion: {
    valueMissing: "Este campo no opuede estar vacio",
    patternMismatch: "La direccion debe contener entre  10 y 40 caracteres",
},
city: {
    valueMissing: "Este campo no opuede estar vacio",
    patternMismatch: "La ciudad debe contener entre  10 y 40 caracteres",
},
estate: {
    valueMissing: "Este campo no opuede estar vacio",
    patternMismatch: "El estado debe contener entre  10 y 40 caracteres",
},
}

const validadores = {
    nacimiento: (input) => validarNacimientio(input),
};

function validarNacimientio(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";

    if (!mayorDeEdad(fechaCliente)) {
        mensaje = "debes tener al menos 18 años de edad puto"
    };

    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
}