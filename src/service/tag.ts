import { Request } from "@/utils";

export const tags =(params: any) => Request.get('/tags/list',{
    params
}) 

export const createTags =(data: any) => Request.post('/tags/create',{
    data
}) 