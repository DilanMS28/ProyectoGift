import { useSelector } from "react-redux"; 
import { Gif } from "@/root/types/gifType"; 
import { GifItem } from "../gif-item/GifItem";
import { promotionPrice } from "@/root/constants/common.constants"; 
import { selectGifs } from "@/root/redux/selectors/gif-selector/gifSelector";

export const GifList = () => {
const gifFoundList = useSelector(selectGifs);

return (
<div className="grid grid-cols-3 gap-4 justify-center">
 
{gifFoundList.map((gif: Gif) => (
<GifItem key={gif.id} title={gif.title}
gifImageUrl={gif.url} price={promotionPrice}
/>
))}
</div>
);
};
