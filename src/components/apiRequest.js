const apiRequest = async (url = "", optionsObj = null, errMessage = null) => {
  try {
    const response = await fetch(url, optionsObj);

    console.log(response);

    if (!response.ok) throw new Error("Please reload the app connection");
    
  } catch (err) {
    errMessage = err.message;
  } finally {
    return errMessage;
  }
};

export default apiRequest;
