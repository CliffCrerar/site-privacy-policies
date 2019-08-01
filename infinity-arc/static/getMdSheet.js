//import mimeDb from './mimeDb';
import Request from 'request';

const getMdSheet = ()=>{
    const request = new Request('/api/mdsheet.js');
    console.log('request: ', request);
};

export default getMdSheet