import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { PhotoData } from '../interface/PhotoData';

const API_URL = 'http://localhost:8081';

const fetchData = async (): AxiosPromise<PhotoData[]> => {
    const response = axios.get(API_URL + '/photos');
    return response;
}

export function usePhotoData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['photo-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}