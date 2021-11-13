import axios from "axios";


axios.
get('http://localhost:3003/labas/simona').
then(res => {
    console.log(res);
    document.querySelector('body').innerHTML = res.data;
})