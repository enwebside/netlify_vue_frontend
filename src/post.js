import axios from 'axios';




const url = 'https://enwebsideapi.herokuapp.com/items';


class PostService {

    static getPosts() {
        return new Promise( async(resolve, reject) => {
            try {
                const res = await axios.get(url);
                resolve(res.data);
            } catch (err) {
                reject(err);

            }

        })
    }
    static insertPost(name_a, email_a) {
       
        axios.post(url, {
            name: 'david',
            parts: 'daf@sa.no'
        })
        .then(response => { 
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        });
       
    }
    

    
}
export default PostService;

