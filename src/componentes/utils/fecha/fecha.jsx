import './fecha.scss';

const Fecha = () => {
  var mydate=new Date() 
  var year=mydate.getYear() 
  if (year < 1000) 
  year+=1900 
  var day=mydate.getDay() 
  var month=mydate.getMonth() 
  var daym=mydate.getDate() 
  if (daym<10) 
  daym="0"+daym 
  /*var dayarray = new Array("Domingo,", "Lunes,", "Martes,", "Miércoles,", "Jueves,", "Viernes,", "Sábado,")*/
  var dayarray = new Array("Dom,", "Lun,", "Mar,", "Mie,", "Jue,", "Vie,", "Sab,")
  /*var montharray = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre")*/
  var montharray = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre")

    return  ( 
        <div>
           <p>Fecha: {dayarray[day]} {daym} de {montharray[month]} de {year} </p>
           <p>Hora: {mydate.toLocaleTimeString()} </p>
        </div>
    )
} 

export default Fecha