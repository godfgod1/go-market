import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from "swr"



export default function useUser(){
    const {data, error, mutate} = useSWR("/api/users/me")
    // const [user, setUser] = useState();
    const router = useRouter()
    useEffect(() => {
    //     fetch("/api/users/me").then(response => response.json())
    //     .then(data=>{
    //         if(!data.ok){
    //             return router.push('/enter')
    //         }
    //         setUser(data.profile)
    //     })
    // 데이터가 있고 데이터 요청 결과가 false이면 enter로 옮긴다.
        console.log(data)
        if(data && !data.ok){
             router.replace("/enter")
        }
        
    }, [data, router]) //useEffect를 data가 바뀌면 실행
    return {user:data?.profile, isLoading:!data && !error}
}