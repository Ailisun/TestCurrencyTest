import {environment} from "../../environments/environment";

const {API:baseURL}= environment

export const urls  = {
  rate:`${baseURL}/exchange?json`
}
