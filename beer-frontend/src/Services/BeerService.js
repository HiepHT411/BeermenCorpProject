import axios from 'axios';

const BRAND_API_BASE_URL = "http://localhost:8080/beermen/api/v1.1/brands";

class BeerService {
    getBrand(){
        return axios.get(BRAND_API_BASE_URL);
    }

    createBrand(brand){
        return axios.post(BRAND_API_BASE_URL, brand);
    }

    getBrandByID(brandID){
        return axios.get(BRAND_API_BASE_URL+'/'+brandID);
    }

    putBrand(brand, brandID){
        return axios.put(BRAND_API_BASE_URL+'/'+brandID, brand);
    }

    deleteBrand(brandID){
        return axios.delete(BRAND_API_BASE_URL+'/'+brandID);
    }
}

export default new BeerService();