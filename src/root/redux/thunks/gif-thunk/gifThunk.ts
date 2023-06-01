import { DispatchType, setGifs } from "@/root/redux/reducers/gif-reducer/gifReducer";
import { gifProvider } from "../../providers/gif-provider/gifProvider";

export const startSetGif = (searchTerm: string): any => { return async (dispatch: DispatchType) => {
const gifList = await gifProvider(searchTerm);

dispatch(setGifs(gifList || []));
};
};
