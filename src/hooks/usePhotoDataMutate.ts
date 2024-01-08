import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { PhotoData } from '../interface/PhotoData';

const API_URL = 'http://localhost:8081';

const postData = async (data: PhotoData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/photo', data);
    return response;
}

export function usePhotoDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(/*['photo-data']*/)
        }
    })

    return mutate;
}