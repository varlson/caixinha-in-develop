export type Fines = {
  resident_name: string;
  status: boolean;
  date: string;
  desc: string;
};
export type MonthStatus = {
  months: (string | boolean)[];
};
export type Expenses = {
  desc: string;
  link: string;
  author: string;
  value: number;
  date: string;
};

export type AllDatasType = {
  datas: {
    fines: Fines[];
    monthStatus: MonthStatus[];
    purchase: Expenses[];
  };
};

export type AppWrapperType = {
  error: string | null;
  datas: AllDatasType;
  setDatas: (datas: AllDatasType) => void;
  setErrorMsg: (errorMsg: string) => void;
};
