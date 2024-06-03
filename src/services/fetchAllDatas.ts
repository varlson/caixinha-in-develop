import { AllDatasType } from "./../types/types";
import axios from "axios";

type SuccessFetch = { status: true } & any;

export const FetchAllDatas = async () => {
  return new Promise<SuccessFetch | { status: false; error: string }>(
    async (resolve, reject) => {
      try {
        const url =
          process.env.NEXT_PUBLIC_ALL_DATAS ||
          "https://script.google.com/macros/s/AKfycbx-ymT5Zz2S48r9Opd3syExsxpFf0us2GSmhVRl0YTz_EjrEyJVlWfRWTKMZE5vbrrayg/exec";

        if (!url) {
          throw new Error("Url inválido");
        }

        const resp = await axios.get(url);
        resolve({ status: true, datas: resp.data });
      } catch (error: any) {
        const errMsg: string =
          error.message ?? error ?? "Houve uma falha interna";
        reject({ status: false, error: errMsg });
      }
    }
  );
};
