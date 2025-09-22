import * as zod from "zod";

export const  checkOutSchema = zod
    .object({
       
        details: zod
            .string()
            .nonempty("details is required "),
            
        city : zod
            .string()
            .nonempty("city is required "),

         phone: zod
                    .string()
                    .nonempty("phone is required")
                    .regex(/^01[0125][0-9]{8}$/, "phone must be an egyptian num"),    
       
    })

    export type checkOutFormType = zod.infer<typeof checkOutSchema> ;
   

     
      
      