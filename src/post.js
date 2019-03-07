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
    static insertPost(name, email) {
       
        return axios.post(url, {
            name,
            email 
        })
       
    }
    static newPost(name, email) {
        return new Promise( async (resolve, reject) => {
            try {
                const res = await axios.post(url,{ name, email });
                resolve(res.data);
                
            } catch(err) {
                reject(err);
            }
        })

    }
}
export default PostService;

