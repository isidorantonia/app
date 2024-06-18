

const abreT =document.getElementById('agrega')
const modal =document.getElementById('modal')
const cierratabla=document.getElementById('cerrar')
const registerForm=document.getElementById('registerForm')


const abretabla=()=>{
    modal.classList.toggle('is-active')
}

abreT.addEventListener('click',abretabla)
cierratabla.addEventListener('click',abretabla)


registerForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  
  const nombre=registerForm['nombre'].value
  const apellido=registerForm['Apellido'].value
  const correo=registerForm['correo'].value
  const carrera=registerForm['carrera'].value
  const jornada =registerForm['jornada'].value
  const sección =registerForm['electivo'].value

  const registerStudent= studentRef.push()

 
  registerStudent.set({
    Uid:registerStudent.path.pieces_[1],
    nombre:nombre,
    apellido:apellido,
    correo:correo,
    carrera:carrera,
    jornada:jornada,
    sección:sección,
    electivo:electivo

  })

})

window.addEventListener('DOMContentLoaded', async (e) => {
  studentRef.on('value', (snapshot) => {
      studentsTable.innerHTML = '';
      snapshot.forEach((student) => {
          let studentData = student.val()
          let nuevaFila = studentsTable.insertRow();
          nuevaFila.insertCell(0).textContent = studentData.nombre
          nuevaFila.insertCell(1).textContent = studentData.apellido
          nuevaFila.insertCell(2).textContent = studentData.correo
          nuevaFila.insertCell(3).textContent = studentData.carrera
          nuevaFila.insertCell(4).textContent = studentData.jornada
          nuevaFila.insertCell(5).textContent = studentData.seccion
          nuevaFila.insertCell(6).textContent = studentData.electivo
      })
  })
})


document.getElementById('registerForm').addEventListener('submit',function(e){
  e.preventDefault
  const formData=new formData(e.target);
  const data= Object.fromEntries(formData.fromEntries())
  studentRef.push(data)
  e.target.reset();
})