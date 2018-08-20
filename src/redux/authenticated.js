export const authenticated = {
      state: true,
      reducers: {
            set(state, payload) {
                  return payload
            }
      },
      effects: (dispatch) => ({
            async setSession(payload, rootState) {
                  await new Promise(resolve => setTimeout(resolve, 1000))
                  dispatch.authenticated.set(true)
            }
      })
}