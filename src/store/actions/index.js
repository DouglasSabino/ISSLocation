export const GET_POSITION = "GET_POSITION"
export const CURRENCY_POSITION = "CURRENCY_POSITION"

export const actionPosition = (payload) => ({
    type: GET_POSITION,
    payload,
});

export const getPosition = () => async (dispatch) => {
  const response = await fetch("http://api.open-notify.org/iss-now.json");
  const data = await response.json();
  return dispatch(actionPosition(data));
}