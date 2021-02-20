
export const LOGIN = 'login';


export function login(credentials){

    console.log('credentials', credentials)

    const successResponse = {
      data : {
          success: true
      }
    }
  return {
    type: LOGIN,
    payload: {"data" : successResponse}
  };
}
