import * as zod from 'zod'
import { schema } from './signup.validation.schema'
 


export type registerFormType = zod.infer<typeof schema> ;