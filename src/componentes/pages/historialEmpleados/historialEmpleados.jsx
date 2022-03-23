import Encabezado from '../../utils/encabezado/encabezado';
import EmployeesTable from '../../utils/tablaEmpleados/tablaEmpleados';
import { db } from '../../../firebase/firebase-config';
import './historialEmpleados.scss';
import {
  collection, getDocs, orderBy, query,
} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import loader from '../../../img/extra/DoubleRing.svg';

function HistorialEmpleados() {
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    const allEmployees = [];
    const employeesRef = query(collection(db, 'usuarios'), orderBy('cargo'));
    const data = await getDocs(employeesRef);
    data.docs.forEach((doc) => {
      const values = doc.data();
      allEmployees.push({
        id: doc.id,
        name: `${values.nombres.toUpperCase()}, ${values.apellidos.toUpperCase()}`,
        codigo: values.codigo.toUpperCase(),
        dni: values.dni,
        cargo: values.cargo.toUpperCase(),
        usuario: values.usuario.toUpperCase(),
        celular: values.celular,
      });
    });
    return allEmployees;
  };

  useEffect(() => {
    getEmployees().then((allEmployees) => {
      setIsLoading(false);
      setEmployees(allEmployees);
    });
  }, [isLoading]);

  if (isLoading) {
    return (
      <div style={{position:"absolute", top:"0px", left:"0px", width:"100%", height:"100%", backgroundColor:"rgba(0, 0, 0, 0.3)"}}>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", transform:"translate(calc(11vh/2), calc(90vh/2))", color:"white"}}>
          <img src={loader} alt='loader' style={{width:"150px", heigth:"150px"}}/>
          <p style={{color:"#fff", fontSize:"18px", fontWeight:"bold"}}>Loading...</p>
        </div> 
      </div> 
    );
  }

  return (
    <section className="paddingFlex">
      <h2>HISTORIAL EMPLEADOS</h2>
      <Encabezado />
      <EmployeesTable employees={employees} estado={setEmployees} loading={setIsLoading} />
    </section>
  );
}

export default HistorialEmpleados;
