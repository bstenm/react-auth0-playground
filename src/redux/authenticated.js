export const authenticated = {
      state: false,
      reducers: {
            set(state, payload) {
                  return payload
            }
      },
      effects: (dispatch) => ({
            async setSession(payload, rootState) {
                  const { expiresIn, accessToken, idToken } = payload;
                  // Set the time that the Access Token will expire at
                  // [TODO]: replaced with jwt-decode ?
                  let expiresAt = JSON.stringify((expiresIn * 1000) + new Date().getTime());
                  localStorage.setItem('id_token', idToken);
                  localStorage.setItem('access_token', accessToken);
                  localStorage.setItem('expires_at', expiresAt);
                  ////////////////////////////////
                  await new Promise(resolve => setTimeout(resolve, 1000))
                  dispatch.authenticated.set(true)
            }
      })
}