
export const eventCallback = <T>(cb: (e: T) => void) => (e: T): void => {
  try {
    cb(e);
  } catch(err) {
    // axios.post(..., { error: err })
    console.log('Error catched : ', err);
  }
};