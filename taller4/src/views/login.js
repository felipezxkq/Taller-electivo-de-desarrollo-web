Import Box from 'material-ui/core/Box.;
import LockOuttinedIcon from '@material-ui/icons/LockOutlinect'; 
import Typography from '@material-ui/core/Typographyl;
import { makeStyles } from '@material-ui/core/styles'; 
import Container from '@material-ui/core/Contatner'; 
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Registro from './componentes/registrousuario'; 
import Collapse from '@material-ui/core/Collapse';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
     ('Copyright c ')
     <Link color="inherit" href="https://material-ui.com/"> 
       Your Website
     </Link>{' '}
     (new Date().getFullYear())
     {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  export default function Signln() { 
  R 
  const { register, handleSubmit, } = useForm(); const [modoregistro,setModoregistro] = useState(false); 
  const onSubmit = data -. { consote.log(fata.email); axios .post("http://localhost:5000/api/usuario/validar", { mail:data.emaii, pass: data. password .then( (response) ==.- { consoie.log(response.data); 
  if(response.data.mensaie=='correctolf 
  localStorage.setItem('TOKEN APP TALLER',response.data.token) 
  window.location=1/menu'; 