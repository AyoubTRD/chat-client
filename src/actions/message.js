import {GET_MESSAGES} from "./types"

export const getMessages = msgs => {
  return {type: GET_MESSAGES, payload: msgs}
}