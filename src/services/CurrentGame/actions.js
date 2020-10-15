

export const loadUser = (id) => async (dispatch, _, api) => {
    try {
        dispatch({ type: "loadUser/pending" });
        const values = {
                    query: JSON.stringify([
                        {
                            _id: id
                        }
                    ])
                }
        const  data  = await api.request(values);

        if (data === null) {
            dispatch({ type: "loadUser/rejected" });
        }

        const {
            UserFindOne: user
        } = data;
        // console.log(user)

        dispatch({ type: "loadUser/resolved", payload: user })
    } catch (error) {
        console.log(error)
        dispatch({ type: "loadUser/rejected" });
    }
};
