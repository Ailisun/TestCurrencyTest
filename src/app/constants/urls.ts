import {environment} from "../../environments/environment";

const {API:baseURL}= environment

export const urls  = {
  rates:`${baseURL}/exchange?json`
}
