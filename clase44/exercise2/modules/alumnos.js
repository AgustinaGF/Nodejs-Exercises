const alumnos = [{
        id: 1,
        nombre: 'Juan',
        apellido: 'Gonzalez',
        comision: 'dwfs'
    },
    {
        id: 2,
        nombre: 'Pedro',
        apellido: 'Martinez',
        comision: 'dwfs'
    },
    {
        id: 3,
        nombre: 'Pedro',
        apellido: 'Fernandez',
        comision: 'dwfs'
    },
    {
        id: 4,
        nombre: 'Esteban',
        apellido: 'Moreno',
        comision: 'dwa'
    },
    {
        id: 5,
        nombre: 'Pedro',
        apellido: 'Estevez',
        comision: 'dwa'
    },
    {
        id: 6,
        nombre: 'Lucas',
        apellido: 'Suarez',
        comision: 'dwa'
    },
    {
        id: 7,
        nombre: 'Esteban',
        apellido: 'Andrade',
        comision: 'bigdata'
    },
    {
        id: 8,
        nombre: 'Sebastian',
        apellido: 'Hernandez',
        comision: 'bigdata'
    },
    {
        id: 9,
        nombre: 'Lucas',
        apellido: 'Manso',
        comision: 'bigdata'
    }
];

function getAlumnos() {
    return alumnos
}

function getAlumnosById(data) {
    let filter = alumnos.find((a) => a.id == data.id)
    return filter
}

function getAlumnosComisionById(data) {
    let filter = alumnos.find((a) => a.comision === data.comision && a.id == data.id)
    return filter
}

function deleteAlumno(data) {
    let alumnoDelete = alumnos.indexOf(data)
    console.log(alumnoDelete)
    alumnos.splice(alumnoDelete, 1)
    return alumnos
}
module.exports = {
    getAlumnos: getAlumnos,
    getAlumnosById: getAlumnosById,
    getAlumnosComisionById: getAlumnosComisionById,
    deleteAlumno: deleteAlumno
}