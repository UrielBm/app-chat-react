import { format } from "date-fns";
import { es } from "date-fns/locale";
const GetDate = (date) => {
  return format(new Date(date), "HH:mm aaaa | EEE, LLLL y", {
    locale: es,
  });
};
export default GetDate;
