import { apiSecured, getErrorMessagesContext } from "..";
import { addErrorMessage } from "../../../context/errorMessagesContext";

export const getMessages = async () => {
    let result = await apiSecured().get("/messages").catch(error=> {
      addErrorMessage(getErrorMessagesContext(), error.message);
      return error;
    });
    return result.data;
  };